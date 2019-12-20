import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../../reducer/reducer';
import KnappBase from 'nav-frontend-knapper';
import AlertStripe from 'nav-frontend-alertstriper';
import Lukknapp from 'nav-frontend-lukknapp';
import Environment, { erNavDekoratoren } from '../../../../utils/Environment';
import { verifyWindowObj } from '../../../../utils/Environment';
import LogginnIkon from '../../../../ikoner/mobilmeny/LogginnIkon';
import Tekst from '../../../../tekster/finn-tekst';
import Undertittel from 'nav-frontend-typografi/lib/undertittel';
import './Logg-inn-knapp.less';

const getPath = () => {
    if (verifyWindowObj()) {
        return window.location.pathname.split('/')[3] !== undefined
            ? '/person/nav-dekoratoren/' +
                  window.location.pathname.split('/')[3]
            : '/person/nav-dekoratoren/';
    }
    return '/person/nav-dekoratoren/';
};

interface StateProps {
    erInnlogget: boolean;
}

interface State {
    informasjonboks: Object;
}

class LoggInnKnapp extends React.Component<StateProps, State> {
    constructor(props: StateProps) {
        super(props);
        this.state = {
            informasjonboks: <div />,
        };
    }

    lukkdialogBoks = () => {
        this.setState({
            informasjonboks: <div />,
        });
    };

    informasjon = () => {
        return (
            <div>
                <AlertStripe type={'advarsel'}>
                    I localhost fungerer ikke innloggingslinjen. Og har blitt
                    erstattet med mock-api{' '}
                    <Lukknapp onClick={this.lukkdialogBoks} />
                </AlertStripe>
            </div>
        );
    };

    handleButtonClick = () => {
        const path = erNavDekoratoren() ? getPath() : '/person/dittnav';
        const login = `${Environment.loginUrl}/login?redirect=${Environment.baseUrl}${path}`;
        if (process.env.NODE_ENV === 'production') {
            return this.props.erInnlogget
                ? (window.location.href = Environment.logoutUrl)
                : (window.location.href = login);
        } else {
            this.setState({
                informasjonboks: this.informasjon,
            });
        }
    };

    render() {
        const { erInnlogget } = this.props;
        const knappetekst = erInnlogget ? 'logg-ut-knapp' : 'logg-inn-knapp';

        return (
            <div className="login-container">
                <div className="media-sm-mobil login-mobil">
                    <button
                        className="mobil-login-knapp"
                        onClick={this.handleButtonClick}
                    >
                        <LogginnIkon />
                        <Undertittel>
                            <Tekst id={knappetekst} />
                        </Undertittel>
                    </button>
                </div>
                <div className="media-md-tablet login-tablet-desktop">
                    <KnappBase
                        className="login-knapp"
                        type="standard"
                        onClick={this.handleButtonClick}
                    >
                        <Tekst id={knappetekst} />
                    </KnappBase>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: AppState): StateProps => ({
    erInnlogget: state.innloggingsstatus.data.authenticated,
});

export default connect(mapStateToProps)(LoggInnKnapp);