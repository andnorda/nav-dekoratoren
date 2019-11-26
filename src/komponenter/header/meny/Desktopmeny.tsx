import React from 'react';
import BEMHelper from '../../../utils/bem';
import VarselinnboksProvider from '../../../provider/Varselinnboks-provider';
import InnloggingsstatusProvider from '../../../provider/Innloggingsstatus-provider';
import NavLogoRod from '../../ikoner/meny/NavLogoRod';
import Ekspanderbarmeny from './ekspanderbar-meny/Ekspanderbarmeny';
import Sok from './sok/Sok';
import MinsideLenke from './minside-lenke/MinsideLenke';
import Varselbjelle from './varsel/Varselbjelle';
import LoggInnKnapp from './logginn/Logg-inn-knapp';
import { Language } from '../../../reducer/language-duck';
import './Desktopmeny.less';
import VarselVisning from './varsel/varsel-visning/Varselvisning';
import MediaQuery from 'react-responsive';
import { tabletview } from '../../../api/api';

const desktopmeny = BEMHelper('desktopmeny');

interface Props {
    language: Language;
}

const Desktopmeny = ({ language }: Props) => {
    return (
        <nav className={desktopmeny.className}>
            <div className={desktopmeny.element('content')}>
                <div className={desktopmeny.element('elementer')}>
                    <NavLogoRod
                        width="88"
                        height="88"
                        classname={desktopmeny.element('nav-brand')}
                    />
                    {language === Language.NORSK ||
                    language === Language.ENGELSK ? (
                        <Ekspanderbarmeny />
                    ) : null}
                    <Sok />
                    <InnloggingsstatusProvider>
                        <>
                            <MediaQuery minWidth={tabletview - 1}>
                                <MinsideLenke tabindex={true} />
                                <VarselinnboksProvider>
                                    <Varselbjelle tabindex={true}>
                                        {clicked =>
                                            clicked && <VarselVisning />
                                        }
                                    </Varselbjelle>
                                </VarselinnboksProvider>
                            </MediaQuery>
                            <LoggInnKnapp />
                        </>
                    </InnloggingsstatusProvider>
                </div>
            </div>
        </nav>
    );
};

export default Desktopmeny;
