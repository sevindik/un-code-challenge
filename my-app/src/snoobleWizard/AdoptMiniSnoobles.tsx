import axios, { AxiosResponse } from "axios";
import React, { Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { IAppState } from "../store";
import { goToNextStepAction, goToPreviousStepAction, setSnooblesAction } from "../store/SnoobleWizardStore";
import { Button } from "../styled/Button";
import { ISnooble } from "../types/Snooble";

export const AdoptMiniSnoobles: React.FC<IAdoptMiniSnooblesProps> =
  ({ updateSnoobles, goToNextStep, goToPreviousStep, snoobles }) => {
    // tslint:disable-next-line: max-line-length
    const snooblesUrl: string = `https://gist.githubusercontent.com/ChiefKleef/5859028d0922a7a0e2f9bff3211e2080/raw/f2ebbbd6bd9237c9c2f3dcaf482a1852c4fe96cd/mini-snoobles.json`;
    useEffect(() => {
      axios.get(snooblesUrl)
        .then((resp: AxiosResponse<ISnooble[]>) => {
          updateSnoobles(resp.data);
        });
    }, [snooblesUrl, updateSnoobles]);

    return (
      <React.Fragment>
          <h3>Adopt Mini Snoobles</h3>
          <span>{`We recognized ${snoobles.length} Mini Snoobles`}</span>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>MODEL</th>
                <th>MAC ADDRESS</th>
                <th>VERSION</th>
              </tr>
            </thead>
            <tbody>
            {
              snoobles.map((snooble: ISnooble, idx: number) => {
                return (
                <tr key={idx}>
                  <td><input type="checkbox" defaultChecked/></td>
                  <td>{snooble.model}</td>
                  <td>{snooble.mac}</td>
                  <td>{snooble.version}</td>
                </tr>);
              })
            }
            </tbody>
          </table>
          <Button onClick={goToPreviousStep}>Back</Button>
          <Button onClick={goToNextStep}>Next</Button>
      </React.Fragment>
    );
  };

interface IAdoptMiniSnooblesProps {
  updateSnoobles: (snoobles: ISnooble[]) => void;
  goToNextStep: (event?: any) => void;
  goToPreviousStep: (event?: any) => void;
  snoobles: ISnooble[];
}

const mapStateToProps = (state: IAppState) => {
  const { snoobles } = state.snoobleWizard;
  return {
    snoobles,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  goToNextStep: () => dispatch(goToNextStepAction()),
  goToPreviousStep: () => dispatch(goToPreviousStepAction()),
  updateSnoobles: (snoobles: ISnooble[]) => dispatch(setSnooblesAction({ snoobles })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdoptMiniSnoobles);
