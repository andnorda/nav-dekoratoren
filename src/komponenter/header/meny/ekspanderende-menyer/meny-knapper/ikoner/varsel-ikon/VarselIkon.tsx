import React from 'react';
import './VarselIkon.less';
import BEMHelper from '../../../../../../../utils/bem';

const ikon = require('../../../../../../../ikoner/varsler/alarm.svg');

type Props = {
    isOpen: boolean;
};

export const VarselIkon = ({ isOpen }: Props) => {
    const cls = BEMHelper('varsel-meny-ikon');

    return (
        <div className={cls.element('container')}>
            <img
                alt={''}
                src={ikon}
                className={cls.element('bjelle', isOpen ? 'open' : '')}
            />
        </div>
    );
};

export default VarselIkon;
