import Lenke from 'nav-frontend-lenker';
import Tekst from '../../../../../../../tekster/finn-tekst';
import React from 'react';
import BEMHelper from '../../../../../../../utils/bem';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';

interface Props {
    url: string;
    lenkeTekstId: string;
    stikkordIds: Array<string>;
    className: string;
    id: string;
}

const BunnseksjonLenke = ({ url, lenkeTekstId, stikkordIds, className , id}: Props) => {
    const cls = BEMHelper(className);

    return (
        <div className={cls.element('bunn-seksjon-col')}>
            <Undertittel>
                <Lenke href={url} className={cls.element('bunn-lenke')} id={id}>
                    <Tekst id={lenkeTekstId}/>
                </Lenke>
            </Undertittel>
            <ul className={cls.element('bunn-lenke-stikkord')}>
                <Undertekst>
                    {stikkordIds.map((id, index) => (
                        <li key={id}>{index !== 0 && <span className={'bullet'}>{'•'}</span>}{id}</li>   // TODO: bruke <Tekst..> etc
                    ))}
                </Undertekst>
            </ul>
        </div>
    );
};

export default BunnseksjonLenke
