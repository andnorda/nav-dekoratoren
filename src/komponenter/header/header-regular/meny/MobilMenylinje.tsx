import React from 'react';
import BEMHelper from 'utils/bem';
import InnloggingsstatusProvider from 'store/providers/Innloggingsstatus';
import NavLogoRod from 'ikoner/meny/NavLogoRod';
import LoggInnKnapp from './logginn/Logg-inn-knapp';
import { Language } from 'store/reducers/language-duck';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/reducers';
import VarselinnboksProvider from 'store/providers/Varselinnboks';
import Varselbjelle from './varsel/Varselbjelle';
import { toggleVarselVisning } from 'store/reducers/dropdown-toggle-duck';
import HovedmenyMobil from './ekspanderende-menyer/hovedmeny-mobil/HovedmenyMobil';
import './MobilMenylinje.less';

const mobilClass = BEMHelper('mobilmeny');

interface Props {
    language: Language;
}
const stateSelector = (state: AppState) => ({
    innloggingsstatus: state.innloggingsstatus,
    visVarsel: state.dropdownToggles.varsel,
});

const MobilMenylinje = ({ language }: Props) => {
    const dispatch = useDispatch();
    const { innloggingsstatus, visVarsel } = useSelector(stateSelector);

    const LukkVarsel = ({ clicked }: { clicked: boolean }) => {
        return <>{!clicked && visVarsel && dispatch(toggleVarselVisning())}</>;
    };

    return (
        <nav className={mobilClass.className} aria-label="Hovedmeny">
            <div className={mobilClass.element('content')}>
                <div className={mobilClass.element('elementer')}>
                    <div className={mobilClass.element('venstre-kolonne')}>
                        <NavLogoRod
                            width="66"
                            height="66"
                            classname={mobilClass.element('logo')}
                        />
                    </div>
                    <div className={mobilClass.element('hoyre-kolonne')}>
                        {!innloggingsstatus.data.authenticated ? (
                            <InnloggingsstatusProvider>
                                <LoggInnKnapp />
                            </InnloggingsstatusProvider>
                        ) : (
                            <>
                                <VarselinnboksProvider>
                                    <Varselbjelle tabindex={true}>
                                        {clicked =>
                                            clicked && (
                                                <LukkVarsel clicked={clicked} />
                                            )
                                        }
                                    </Varselbjelle>
                                </VarselinnboksProvider>
                            </>
                        )}
                        {language === Language.NORSK ||
                        language === Language.ENGELSK ? (
                            <HovedmenyMobil />
                        ) : null}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobilMenylinje;
