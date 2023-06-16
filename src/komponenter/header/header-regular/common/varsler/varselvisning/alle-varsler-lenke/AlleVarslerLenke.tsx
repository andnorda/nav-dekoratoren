import React from 'react';
import { LenkeMedSporing } from 'komponenter/common/lenke-med-sporing/LenkeMedSporing';
import { getKbId, KbNavGroup } from 'utils/keyboard-navigation/kb-navigation';
import { AnalyticsCategory } from 'utils/analytics/analytics';
import Tekst from 'tekster/finn-tekst';
import style from './AlleVarslerLenke.module.scss';
import { logAmplitudeEvent } from 'utils/analytics/amplitude';

interface Props {
    tidligereVarslerUrl: string;
    rowIndex?: number;
}

const AlleVarslerLenke = (props: Props) => {
    return (
        <div>
            <LenkeMedSporing
                className={style.visAlleLenke}
                href={props.tidligereVarslerUrl}
                id={
                    props.rowIndex !== undefined
                        ? getKbId(KbNavGroup.Varsler, {
                              col: 0,
                              row: props.rowIndex,
                              sub: 0,
                          })
                        : undefined
                }
                analyticsEventArgs={{
                    category: AnalyticsCategory.Header,
                    action: 'varsler/visalle',
                    label: props.tidligereVarslerUrl,
                }}
                onClick={() => logAmplitudeEvent('navigere', { komponent: 'tidligere-varsler-lenke', kategori: "varselbjelle", lenketekst: "Tidligere varsler" })}
            >
                <Tekst id={'varsler-visalle'} />
            </LenkeMedSporing>
        </div>
    );
};

export default AlleVarslerLenke;
