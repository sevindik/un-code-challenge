import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import snoobelImage from "../images/snooble-medium.jpg";
import { goToExactStepAction, goToNextStepAction, setSnoobleDeviceNameAction } from "../store/SnoobleWizardStore";
import { Button } from "../styled/Button";
import { LabeledInput } from "../styled/LabeledInput";
import { SnoobleLogo } from "../styled/SnoobleLogo";

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
    <div className="columns">
      <div className="column is-1">
        <SnoobleLogo />
      </div>
      <div className="column is-one-fifth">
        <figure className="image">
          <img src={snoobelImage} alt="snooble" />
        </figure>
      </div>
      <div className="column">
        <h3 className="title is-3">Name Your Snooble</h3>
        <h4 className="is-4" style={{ marginBottom: "15px" }}>
          Use a recognizable name like the device’s location to
          make it easy to identify when managing multiple devices.
          </h4>

        <LabeledInput label={"Device Name"} onChange={onInputChange} />

        <div className="columns">
          <div className="column">
            <p>Adopt Mini Snoobles</p>
            <p>Determines whether snoobles are auto-optimized</p>
          </div>
          <div className="column">
            <input type="checkbox" checked={miniSnoobleDiscoveryOn} onChange={onInputChange} />
          </div>
        </div>
      </div>
      <div className="column is-one-fifth" style={{ marginTop: "auto" }}>
        <Button onClick={onButtonClick}>Next</Button>
      </div>
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
