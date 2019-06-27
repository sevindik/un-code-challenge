import { Action, createAction, handleActions } from "redux-actions";
import { ISnooble } from "../types/Snooble";

export interface ISnoobleWizardState {
  snoobles: ISnooble[];
  currentStep: number;
  deviceName: string;
}

const initialState = {
  currentStep: 1,
  deviceName: "",
  snoobles: [],
};

// Actions
export enum SnoobleWizardActions {
  SET_SNOOBLES = "SET_SNOOBLES",
  GO_TO_NEXT_STEP = "GO_TO_NEXT_STEP",
  GO_TO_PREVIOUS_STEP = "GO_TO_PREVIOUS_STEP",
  GO_TO_EXACT_STEP = "GO_TO_EXACT_STEP",
  SET_SNOOBLE_DEVICE_NAME = "SET_SNOOBLE_DEVICE_NAME",
}

// Action Creators
export const setSnooblesAction =
  createAction(SnoobleWizardActions.SET_SNOOBLES, (payload: IAddSnoobleActionPayload) => payload);

export const setSnoobleDeviceNameAction =
  createAction(SnoobleWizardActions.SET_SNOOBLE_DEVICE_NAME, (payload: ISetSnoobleDeviceNameActionPayload) => payload);

export const goToNextStepAction = createAction(SnoobleWizardActions.GO_TO_NEXT_STEP);

export const goToExactStepAction =
  createAction(SnoobleWizardActions.GO_TO_EXACT_STEP, (payload: IGoToExactStepActionPayload) => payload);

export const goToPreviousStepAction = createAction(SnoobleWizardActions.GO_TO_PREVIOUS_STEP);

// Reducer
const snoobleReducer = handleActions({
  [SnoobleWizardActions.SET_SNOOBLES]:
    (state: ISnoobleWizardState, action: Action<IAddSnoobleActionPayload>): ISnoobleWizardState => {
      return {
        ...state,
        snoobles: action.payload.snoobles,
      };
    },
  [SnoobleWizardActions.SET_SNOOBLE_DEVICE_NAME]:
    (state: ISnoobleWizardState, action: Action<ISetSnoobleDeviceNameActionPayload>): ISnoobleWizardState => {
      return {
        ...state,
        deviceName: action.payload.deviceName,
      };
    },
  [SnoobleWizardActions.GO_TO_NEXT_STEP]:
    (state: ISnoobleWizardState): ISnoobleWizardState => {
      let { currentStep } = state;
      // wizard has 4 pages, can't go further than last page
      if (currentStep !== 4) {
        currentStep++;
      }
      return {
        ...state,
        currentStep,
      };
    },
  [SnoobleWizardActions.GO_TO_PREVIOUS_STEP]:
    (state: ISnoobleWizardState): ISnoobleWizardState => {
      let { currentStep } = state;
      // can go back as far as first page
      if (currentStep !== 1) {
        currentStep--;
      }
      return {
        ...state,
        currentStep,
      };
    },
  [SnoobleWizardActions.GO_TO_EXACT_STEP]:
    (state: ISnoobleWizardState, action: any): ISnoobleWizardState => {
      return {
        ...state,
        currentStep: action.payload.stepNumber,
      };
    },
}, initialState,
);

export interface IAddSnoobleActionPayload {
  snoobles: ISnooble[];
}

export interface ISetSnoobleDeviceNameActionPayload {
  deviceName: string;
}

export interface IGoToExactStepActionPayload {
  stepNumber: number;
}

export default snoobleReducer;
