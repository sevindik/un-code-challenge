import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { goToExactStepAction, goToNextStepAction, setSnoobleDeviceNameAction } from "../store/SnoobleWizardStore";
import { Button } from "../styled/Button";
import { LabeledInput } from "../styled/LabeledInput";

export const NameSnooble: React.FC<INameSnoobleProps> = ({ goToNextStep, goToExactStep, setSnoobleDeviceName }) => {
  const [miniSnoobleDiscoveryOn, setMiniSnoobleDiscovery] = useState(true);
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "checkbox") {
      setMiniSnoobleDiscovery(event.target.checked);
    } else {
      setSnoobleDeviceName(event.target.value);
    }
  };

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // input validation here make sure device name has been entered...
    if (miniSnoobleDiscoveryOn) {
      goToNextStep();
    } else {
      // skip straight to preparing page
      goToExactStep(3);
    }
  };

  return (
    <div>
      <h3>Name Your Snooble</h3>
      <div>
        Use a recognizable name like the device’s location to
        make it easy to identify when managing multiple devices.
      </div>
      <LabeledInput onChange={onInputChange} />

      <div>Adopt Mini Snoobles</div>
      <div>Determines whether snoobles are auto-optimized
        <input type="checkbox" checked={miniSnoobleDiscoveryOn} onChange={onInputChange} />
      </div>
      <div></div>
      <Button onClick={onButtonClick}>Next</Button>
    </div>
  );
};

export interface INameSnoobleProps {
  goToNextStep: (event?: any) => void;
  goToExactStep: (stepNumer: number) => void;
  setSnoobleDeviceName: (event: any) => void;
}

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToExactStep: (stepNumber: number) => dispatch(goToExactStepAction({ stepNumber })),
  goToNextStep: () => dispatch(goToNextStepAction()),
  setSnoobleDeviceName: (deviceName: string) => dispatch(setSnoobleDeviceNameAction({ deviceName })),
});

export default connect(null, mapDispatchToProps)(NameSnooble);
