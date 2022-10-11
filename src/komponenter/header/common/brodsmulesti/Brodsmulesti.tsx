import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'store/reducers';
import { LenkeMedSporing } from '../../../common/lenke-med-sporing/LenkeMedSporing';
import { Bilde } from '../../../common/bilde/Bilde';
import HomeIcon from 'ikoner/home.svg';
import { Next } from '@navikt/ds-icons';
import { postMessageToApp } from 'utils/messages';
import { Locale } from 'store/reducers/language-duck';
import Tekst, { finnTekst } from 'tekster/finn-tekst';

import { getArbeidsflateContext } from '../../../common/arbeidsflate-lenker/arbeidsflate-lenker';
import { AnalyticsCategory } from '../../../../utils/analytics/analytics';
import { MenuValue } from '../../../../utils/meny-storage-utils';
import { getHomeUrl } from '../../../../utils/home-url';
import style from 'komponenter/header/common/brodsmulesti/Brodsmulesti.module.scss';

export interface Breadcrumb {
    url: string;
    title: string;
    handleInApp?: boolean;
}

interface Props {
    breadcrumbs: Breadcrumb[];
}

const analyticsEventArgs = {
    category: AnalyticsCategory.Header,
    komponent: 'brødsmule',
};

const maxNumInitiallyShown = 3;

export const Brodsmulesti = (props: Props) => {
    const { environment } = useSelector((state: AppState) => state);
    const { XP_BASE_URL } = environment;
    const [showAll, setShowAll] = useState(false);
    const { status } = useSelector((state: AppState) => state.arbeidsflate);
    const { language } = useSelector((state: AppState) => state.language);
    const context = getArbeidsflateContext(XP_BASE_URL, status);
    const { breadcrumbs } = props;

    const homeUrl = getHomeUrl(XP_BASE_URL, language);

    const isLanguageNorwegian =
        language === Locale.NYNORSK || language === Locale.BOKMAL || language === Locale.IKKEBESTEMT;
    const shouldShowContext = isLanguageNorwegian && context.key !== MenuValue.PRIVATPERSON;
    const numCustomItemsShown = shouldShowContext ? maxNumInitiallyShown - 1 : maxNumInitiallyShown;

    const breadcrumbsSliced = showAll ? breadcrumbs : breadcrumbs.slice(-numCustomItemsShown);

    return (
        <nav className={style.brodsmulesti} aria-label={finnTekst('brodsmulesti', language)}>
            <ol>
                <li>
                    <LenkeMedSporing
                        href={homeUrl}
                        className={style.link}
                        analyticsEventArgs={{
                            ...analyticsEventArgs,
                            label: homeUrl,
                            action: 'nav.no',
                        }}
                    >
                        <Bilde asset={HomeIcon} className={style.icon} />
                        <span>nav.no</span>
                        <Next className={style.iconNext} />
                    </LenkeMedSporing>
                </li>
                {shouldShowContext && (
                    <li>
                        <LenkeMedSporing
                            href={context.url}
                            className={style.link}
                            analyticsEventArgs={{
                                ...analyticsEventArgs,
                                label: context.url,
                                action: finnTekst(context.lenkeTekstId, language),
                            }}
                        >
                            <span>
                                <Tekst id={context.lenkeTekstId} />
                            </span>
                            <Next className={style.iconNext} />
                        </LenkeMedSporing>
                    </li>
                )}
                {!showAll && breadcrumbs.length > numCustomItemsShown && (
                    <li>
                        <button
                            aria-label={finnTekst('brodsmulesti-se-alle', language)}
                            className={`${style.iconViewAll} lenke`}
                            onClick={(e) => {
                                e.preventDefault();
                                setShowAll(true);
                            }}
                        >
                            <span className={style.iconEllipsis}>...</span>
                            <Next className={style.iconNext} />
                        </button>
                    </li>
                )}
                {breadcrumbsSliced.map((breadcrumb, index, array) => (
                    <li key={index} aria-current={index + 1 === array.length && 'page'}>
                        {index + 1 !== array.length ? (
                            <LenkeMedSporing
                                href={breadcrumb.url}
                                className={style.link}
                                analyticsEventArgs={{
                                    ...analyticsEventArgs,
                                    // TODO: implement selective redaction of url/title
                                    // Temp fix to prevent potential logging of sensitive info
                                    label: '[redacted]',
                                    action: '[redacted]',
                                    // label: breadcrumb.url,
                                    // action: breadcrumb.title,
                                }}
                                onClick={(e) => {
                                    if (breadcrumb.handleInApp) {
                                        e.preventDefault();
                                        postMessageToApp('breadcrumbClick', breadcrumb);
                                    }
                                }}
                            >
                                <span className={style.linkText}>{breadcrumb.title}</span>
                                <Next className={style.iconNext} />
                            </LenkeMedSporing>
                        ) : (
                            <span className={style.linkText}>{breadcrumb.title}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Brodsmulesti;
