import KnappBase from 'nav-frontend-knapper';
import React from 'react';
import { LoggInnKnappProps } from 'komponenter/header/header-regular/common/logg-inn/LoggInn';
import LoggInn from 'komponenter/header/header-regular/common/logg-inn/LoggInn';
import Undertittel from 'nav-frontend-typografi/lib/undertittel';
import './LoggInnKnappMobil.less';

const Knapp = ({ handleButtonClick, tekst }: LoggInnKnappProps) => (
    <KnappBase
        type="flat"
        className="mobil-login-knapp login-knapp"
        onClick={handleButtonClick}
    >
        <Undertittel className="knappetekst">{tekst}</Undertittel>
    </KnappBase>
);

export const LoggInnKnappMobil = () => <LoggInn Knapp={Knapp} />;
