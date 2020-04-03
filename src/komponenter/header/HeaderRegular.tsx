import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducer/reducers';
import MobilMenylinje from './meny/MobilMenylinje';
import { Language } from '../../reducer/language-duck';
import Arbeidsflatemeny from './arbeidsflatemeny/Arbeidsflatemeny';
import DesktopMenylinje from './meny/DesktopMenylinje';

export const RegularHeader = () => {
    const language = useSelector((state: AppState) => state.language.language);
    return (
        <Fragment>
            <div className="media-sm-mobil mobil-meny">
                <MobilMenylinje language={language} />
            </div>
            <div className="media-tablet-desktop tablet-desktop-meny">
                <div className="header-z-wrapper">
                    {language === Language.NORSK && <Arbeidsflatemeny />}
                    <DesktopMenylinje />
                </div>
            </div>
        </Fragment>
    );
};