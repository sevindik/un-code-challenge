import axios, { AxiosResponse } from "axios";
import React, { Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import snoobelImage from "../images/snooble-medium.jpg";
import { IAppState } from "../store";
import { goToNextStepAction, goToPreviousStepAction, setSnooblesAction } from "../store/SnoobleWizardStore";
import { Button } from "../styled/Button";
import { SnoobleLogo } from "../styled/SnoobleLogo";
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
          <h3 className="title is-3">Adopt Mini Snoobles</h3>
          <span style={{ marginBottom: "15px" }}>{`We recognized ${snoobles.length} Mini Snoobles`}</span>
          <table className="table">
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
                      <td><input type="checkbox" defaultChecked /></td>
                      <td>{snooble.model}</td>
                      <td>{snooble.mac}</td>
                      <td>{snooble.version}</td>
                    </tr>);
                })
              }
            </tbody>
          </table>
        </div>
        <div className="column is-one-fifth" style={{ marginTop: "auto" }}>
          <div className="columns">
            <div className="column">
              <Button onClick={goToPreviousStep}>Back</Button>
            </div>
            <div className="column">
              <Button onClick={goToNextStep}>Next</Button>
            </div>
          </div>
        </div>
      </div>
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
