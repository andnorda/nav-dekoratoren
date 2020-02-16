import React from 'react';
import BEMHelper from '../../../../utils/bem';

const MenyBakgrunn = ({
    toggleWindow,
    backgroundIsActive,
    className
}: {
    toggleWindow: () => void;
    backgroundIsActive: boolean;
    className: string;
}) => {
    const cls = BEMHelper(className);
    return (
            <div
                className={cls.element(
                    'bakgrunn',
                    backgroundIsActive ? 'active' : ''
                )}
                onClick={() => toggleWindow()}
            />
    );
};

export default MenyBakgrunn;
