import { combineReducers, Reducer } from "redux";
import snoobleReducer, { ISnoobleWizardState } from "./SnoobleWizardStore";

export const appReducers: Reducer<IAppState> = combineReducers<IAppState>({
  snoobleWizard: snoobleReducer,
});

export interface IAppState {
  snoobleWizard: ISnoobleWizardState;
}
