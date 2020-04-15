import { combineReducers } from 'redux';
import arbeidsflateReducer, { Arbeidsflate } from './arbeidsflate-duck';
import innloggingsstatusReducer from './innloggingsstatus-duck';
import { InnloggingsstatusState } from './innloggingsstatus-duck';
import menypunktReducer, { MenyPunkter } from './menu-duck';
import varselinnboksReducer, { VarselinnboksState } from './varselinnboks-duck';
import { DataElement } from 'api/api';
import varselLestReducer from './varsel-lest-duck';
import { languageDuck, LanguageState } from './language-duck';
import dropdownTogglesReducer, { DropdownState } from './dropdown-toggle-duck';
import environmentReducer, { EnvironmentState } from './environment-duck';

export interface AppState {
    environment: EnvironmentState;
    innloggingsstatus: InnloggingsstatusState;
    menypunkt: MenyPunkter;
    varsler: VarselinnboksState;
    varslerLest: DataElement;
    language: LanguageState;
    arbeidsflate: Arbeidsflate;
    dropdownToggles: DropdownState;
}

export const reducers = combineReducers<AppState>({
    environment: environmentReducer,
    innloggingsstatus: innloggingsstatusReducer,
    menypunkt: menypunktReducer,
    varsler: varselinnboksReducer,
    varslerLest: varselLestReducer,
    language: languageDuck.reducer,
    arbeidsflate: arbeidsflateReducer,
    dropdownToggles: dropdownTogglesReducer,
});

export default reducers;