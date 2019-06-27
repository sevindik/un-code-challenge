import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../store";
import AdoptMiniSnoobles from "./AdoptMiniSnoobles";
import NameSnooble from "./NameSnooble";
import PreparingSnooble from "./PreparingSnooble";
import SnoobleOverview from "./SnoobleOverview";

export const SnoobleWizardContainer: React.FC<ISnoobleWizardContainerProps> = ({ currentStep }) => {
  return (
    <React.Fragment>
      {
        currentStep === 1 && <NameSnooble />
      }
      {
        currentStep === 2 && <AdoptMiniSnoobles />
      }
      {
        currentStep === 3 && <PreparingSnooble />
      }
      {
        currentStep === 4 && <SnoobleOverview />
      }
      {
        (currentStep < 1) || (currentStep > 4) && <div>in the twilight zone</div>
      }
    </React.Fragment>

  );
};

interface ISnoobleWizardContainerProps {
  currentStep: number;
}

const mapStateToProps = (state: IAppState) => {
  const { currentStep } = state.snoobleWizard;
  return {
    currentStep,
  };
};

export default connect(mapStateToProps)(SnoobleWizardContainer);
