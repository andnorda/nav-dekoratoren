import React from 'react';
import { GACategory } from 'utils/google-analytics';
import { LenkeMedGA } from 'komponenter/LenkeMedGA';
import { getArbeidsflateContext } from 'komponenter/header/header-regular/arbeidsflatemeny/arbeidsflate-lenker';
import { MenuValue } from 'utils/meny-storage-utils';
import { useDispatch, useSelector } from 'react-redux';
import { settArbeidsflate } from 'store/reducers/arbeidsflate-duck';
import { erNavDekoratoren } from 'utils/Environment';
import { AppState } from 'store/reducers';

const Navlogo = ({
    width,
    height,
    color,
    className,
    viewIndex,
}: {
    width?: string;
    height?: string;
    color?: string;
    className?: string;
    viewIndex?: boolean;
}) => {
    const dispatch = useDispatch();
    const { XP_BASE_URL } = useSelector((state: AppState) => state.environment);
    const context = getArbeidsflateContext(XP_BASE_URL, MenuValue.PRIVATPERSON);
    const arbeidsflate = useSelector(
        (state: AppState) => state.arbeidsflate.status
    );

    return (
        <LenkeMedGA
            href={context.url}
            classNameOverride={`nav-brand-lenke ${className ? className : ``}`}
            tabIndex={viewIndex ? 0 : -1}
            onClick={event => {
                event.preventDefault();
                dispatch(settArbeidsflate(context.key));
                if (!erNavDekoratoren()) {
                    window.location.href = context.url;
                }
            }}
            gaEventArgs={{
                context: arbeidsflate,
                category: GACategory.Meny,
                action: 'navlogo-mobilmeny',
            }}
        >
            <svg
                className="modal-logo-svg"
                width={width}
                height={height}
                viewBox="0 0 73 46"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <title>NAV Brand/NAV logo / hvit </title>
                <desc>Created with Sketch.</desc>
                <defs>
                    <polygon
                        id="path-1"
                        points="6.08071004 11.8175905 6.08071004 0.187211834 0.152920074 0.187211834 0.152920074 11.8175905 6.08071004 11.8175905"
                    />
                </defs>
                <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <g
                        id="layout-v3-annen-header-1-tjenste-copy-2"
                        transform="translate(-24.000000, -8.000000)"
                    >
                        <g
                            id="NAV-Brand/NAV-logo-/-hvit-"
                            transform="translate(24.000000, 8.000000)"
                        >
                            <g id="Page-1-Copy">
                                <polygon
                                    id="Fill-3"
                                    fill={color ? color : 'black'}
                                    points="0 33.0325728 4.6852974 21.4021941 9.18714498 21.4021941 4.50781784 33.0325728"
                                />
                                <polygon
                                    id="Fill-5"
                                    fill={color ? color : 'black'}
                                    points="57.8149145 33.0325728 62.4402379 21.4021941 64.8945576 21.4021941 60.2695056 33.0325728"
                                />
                                <g
                                    id="Group-9"
                                    transform="translate(66.758364, 21.214982)"
                                >
                                    <mask id="mask-2" fill="white">
                                        <use xlinkHref="#path-1" />
                                    </mask>
                                    <g id="Clip-8" />
                                    <polygon
                                        id="Fill-7"
                                        fill={color ? color : 'black'}
                                        mask="url(#mask-2)"
                                        points="0.152920074 11.8175905 4.77742937 0.187211834 6.08084572 0.187211834 1.45579368 11.8175905"
                                    />
                                </g>
                                <path
                                    d="M34.0058152,45.984213 C21.3485922,45.984213 11.0854435,35.6908284 11.0854435,22.9937396
                                C11.0854435,10.2952899 21.3485922,0 34.0058152,0 C46.6676517,0 56.9318859,10.2952899 56.9318859,22.9937396
                                C56.9318859,35.6908284 46.6676517,45.984213 34.0058152,45.984213 Z M53.5587703,21.4021941 L49.4837963,21.4021941
                                C49.4837963,21.4021941 49.2029227,21.4021941 49.1035993,21.6509751 L46.8484691,28.5752 L44.5952387,21.6509751
                                C44.4959152,21.4021941 44.2134134,21.4021941 44.2134134,21.4021941 L36.378261,21.4021941 C36.2086513,21.4021941
                                36.0664506,21.5442769 36.0664506,21.7133065 L36.0664506,24.0647503 C36.0664506,22.1994367 34.0875807,21.4021941
                                32.9288074,21.4021941 C30.3339152,21.4021941 28.5968409,23.1164426 28.0559896,25.7226556 C28.026681,23.9937089
                                27.8833948,23.3742059 27.4190714,22.7397325 C27.2057703,22.4288923 26.8974877,22.1675905 26.5617963,21.9514722
                                C25.870603,21.5453657 25.2499673,21.4021941 23.9161569,21.4021941 L22.3500491,21.4021941 C22.3500491,21.4021941
                                22.0670045,21.4021941 21.9671383,21.6509751 L20.5421457,25.1929751 L20.5421457,21.7133065 C20.5421457,21.5442769
                                20.4010305,21.4021941 20.2316922,21.4021941 L16.6077442,21.4021941 C16.6077442,21.4021941 16.3279561,21.4021941
                                16.2261903,21.6509751 L14.7447517,25.3339692 C14.7447517,25.3339692 14.596852,25.7022414 14.9349859,25.7022414
                                L16.3279561,25.7022414 L16.3279561,32.7203716 C16.3279561,32.8945728 16.4647294,33.0325728 16.6392238,33.0325728
                                L20.2316922,33.0325728 C20.4010305,33.0325728 20.5421457,32.8945728 20.5421457,32.7203716 L20.5421457,25.7022414
                                L21.9424431,25.7022414 C22.7459859,25.7022414 22.9161383,25.7242888 23.2287628,25.8704544 C23.4170974,25.941768
                                23.5867071,26.0860284 23.6792461,26.2523361 C23.8686662,26.6099929 23.9161569,27.0395077 23.9161569,28.3060047
                                L23.9161569,32.7203716 C23.9161569,32.8945728 24.0556439,33.0325728 24.2279673,33.0325728 L27.6711792,33.0325728
                                C27.6711792,33.0325728 28.0603316,33.0325728 28.2142015,32.6471527 L28.9773093,30.7554367 C29.9919822,32.1808923
                                31.6620268,33.0325728 33.7375063,33.0325728 L34.1909747,33.0325728 C34.1909747,33.0325728 34.5825695,33.0325728
                                34.7375249,32.6471527 L36.0664506,29.3460402 L36.0664506,32.7203716 C36.0664506,32.8945728 36.2086513,33.0325728
                                36.378261,33.0325728 L39.893116,33.0325728 C39.893116,33.0325728 40.2809115,33.0325728 40.436681,32.6471527
                                C40.436681,32.6471527 41.8424059,29.1465254 41.8478335,29.1201231 L41.8500045,29.1201231 C41.9040082,28.8288805
                                41.5371086,28.8288805 41.5371086,28.8288805 L40.2825398,28.8288805 L40.2825398,22.8222059 L44.2296959,32.6471527
                                C44.3838372,33.0325728 44.7724468,33.0325728 44.7724468,33.0325728 L48.9247628,33.0325728 C48.9247628,33.0325728
                                49.3155435,33.0325728 49.4696848,32.6471527 L53.8456141,21.7789041 C53.9970416,21.4021941 53.5587703,21.4021941
                                53.5587703,21.4021941 Z M36.0664506,28.8288805 L33.705484,28.8288805 C32.7657108,28.8288805 32.0012461,28.0656615
                                32.0012461,27.1219811 C32.0012461,26.1799337 32.7657108,25.4118154 33.705484,25.4118154 L34.3657405,25.4118154
                                C35.3030714,25.4118154 36.0664506,26.1799337 36.0664506,27.1219811 L36.0664506,28.8288805 Z"
                                    id="Combined-Shape"
                                    fill={color ? color : 'black'}
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </LenkeMedGA>
    );
};

export default Navlogo;
