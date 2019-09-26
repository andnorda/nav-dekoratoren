const isLocal = window.location.origin.toLowerCase().includes('localhost');

const Environments = () => {
    if (process.env.NODE_ENV === 'development') {
        return {
            miljo: 'LOCAL',
            baseUrl: 'http://localhost:3000',
            loginUrl: '#',
            logoutUrl: '#',
            menypunkter:
                'http://localhost:8088/person/nav-dekoratoren/api/get/menyvalg',
            minsideArbeidsgiverUrl: 'https://arbeidsgiver-q.nav.no',
            sokeresultat:
                'http://localhost:8088/person/nav-dekoratoren/api/get/sokeresultat',
        };
    }
    if (window.location.hostname.indexOf('www-q0') > -1) {
        return {
            miljo: 'DEV',
            baseUrl: 'https://www-q0.nav.no',
            loginUrl: 'https://loginservice-q.nav.no',
            logoutUrl: 'https://loginservice-q.nav.no/slo',
            menypunkter: !isLocal
                ? 'https://www-q0.nav.no/person/nav-dekoratoren/api/get/menyvalg'
                : '/person/nav-dekoratoren/api/get/menyvalg',
            minsideArbeidsgiverUrl: 'https://arbeidsgiver-q.nav.no',
            sokeresultat:
                'https://www-q0.nav.no/person/nav-dekoratoren/api/get/sokeresultat',
        };
    }
    if (window.location.hostname.indexOf('www-q1') > -1) {
        return {
            miljo: 'DEV',
            baseUrl: 'https://www-q1.nav.no',
            loginUrl: 'https://loginservice-q.nav.no',
            logoutUrl: 'https://loginservice-q.nav.no/slo',
            menypunkter: !isLocal
                ? 'https://www-q1.nav.no/person/nav-dekoratoren/api/get/menyvalg'
                : '/person/nav-dekoratoren/api/get/menyvalg',
            minsideArbeidsgiverUrl: 'https://arbeidsgiver-q.nav.no',
            sokeresultat:
                'https://www-q0.nav.no/person/nav-dekoratoren/api/get/sokeresultat',
        };
    }

    return {
        miljo: 'PROD',
        baseUrl: 'https://www.nav.no',
        loginUrl: 'https://loginservice.nav.no',
        logoutUrl: 'https://loginservice.nav.no/slo',
        menypunkter: !isLocal
            ? 'https://www.nav.no/person/nav-dekoratoren/api/get/menyvalg'
            : '/person/nav-dekoratoren/api/get/menyvalg',
        minsideArbeidsgiverUrl: 'https://arbeidsgiver.nav.no',
        sokeresultat:
            'https://www.nav.no/person/nav-dekoratoren/api/get/sokeresultat',
    };
};

export default Environments;