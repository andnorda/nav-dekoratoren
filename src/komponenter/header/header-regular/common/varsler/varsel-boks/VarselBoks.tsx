import React, { useState } from 'react';
import { Next } from '@navikt/ds-icons';
import Tekst from 'tekster/finn-tekst';
import { fjernLestVarsel } from 'store/reducers/varselinnboks-duck';
import { useDispatch } from 'react-redux';
import { postDone } from 'api/api';
import { logAmplitudeEvent } from 'utils/analytics/amplitude';
import ArkiverKnapp from './arkiver-knapp/ArkiverKnapp';
import classNames from 'classnames';

import style from './VarselBoks.module.scss';

type Props = {
    eventId: string;
    apiVarselinnboksUrl: string;
    tekst: string;
    dato: string;
    href: string;
    isMasked: boolean;
    id?: string;
    type: string;
    setActivateScreenReaderText: (setActivateScreenReaderText: boolean) => void;
};

const Beskjed = ({
    eventId,
    apiVarselinnboksUrl,
    tekst,
    dato,
    href,
    isMasked,
    id,
    type,
    setActivateScreenReaderText,
}: Props) => {
    //TODO: Legge inn stepup-tekst i alle språk.
    const [isHover, setIsHover] = useState(false);

    const dispatch = useDispatch();

    const isOppgave = type === 'OPPGAVE';
    const isArkiverbar = !href && !isOppgave;

    const handleOnClick = () => {
        if (type === 'BESKJED' && !isMasked) {
            postDone(apiVarselinnboksUrl, { eventId: eventId });
            dispatch(fjernLestVarsel(eventId));
        }
        logAmplitudeEvent('navigere', { komponent: type, destinasjon: href });
    };

    return isArkiverbar ? (
        <div className={classNames(style.beskjed, style.arkiverbar, isHover && style.hover)}>
            <div className={style.ikon} />
            <div className={style.contentWrapper}>
                <div className={style.tittel}>{isMasked ? <Tekst id="beskjed.maskert.tekst" /> : tekst}</div>
                <div className={style.datoOgKnapp}>
                    <div className={style.dato}>{dato}</div>
                    <ArkiverKnapp
                        eventId={eventId}
                        apiVarselinnboksUrl={apiVarselinnboksUrl}
                        setIsHover={setIsHover}
                        setActivateScreenReaderText={setActivateScreenReaderText}
                        id={id}
                    />
                </div>
            </div>
        </div>
    ) : (
        <a
            className={classNames(style.beskjed, style.ikkeArkiverbar, isOppgave ? style.oppgave : null)}
            href={href}
            id={id}
            onClick={handleOnClick}
        >
            <div className={style.ikon} />
            <div className={classNames(style.contentWrapper, style.ikkeArkiverbarContentWrapper)}>
                <div>
                    <div className={style.tittel}>{isMasked ? <Tekst id="beskjed.maskert.tekst" /> : tekst}</div>
                    <div className={style.dato}>{dato}</div>
                </div>
                <Next className={style.chevron} />
            </div>
        </a>
    );
};

export default Beskjed;
