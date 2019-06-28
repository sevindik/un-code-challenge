import React, { Dispatch, useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { connect } from "react-redux";
import { Action } from "redux";
import { goToNextStepAction } from "../store/SnoobleWizardStore";
import { SnoobleLogo } from "../styled/SnoobleLogo";

export const PreparingSnooble: React.FC<IPreparingSnoobleProps> = ({ goToNextStep }) => {
  const [progress, setProgress] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useInterval(() => {
    if (progress >= 100) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        goToNextStep();
      }, 2000);
    }
    setProgress(progress + 20);
  }, 1000);

  return (
    <div className="columns">
      <div className="column is-1">
        <SnoobleLogo />
      </div>
      <div className="column is-11">
        <div className="row">
          <figure className="image is-128x128">
            <CircularProgressbar value={progress} />
          </figure>
        </div>
        <div className="row">
          {!showSuccessMessage && <span>Preparing Snooble</span>}
          {showSuccessMessage && <span>Snooble has been set-up successfully!</span>}
        </div>
      </div>
    </div>
  );
};

export interface IPreparingSnoobleProps {
  goToNextStep: (event?: any) => void;
}

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToNextStep: () => dispatch(goToNextStepAction()),
});

export default connect(null, mapDispatchToProps)(PreparingSnooble);

/**
 * setInterval with hooks... https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @param callback
 * @param delay
 */
export function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
