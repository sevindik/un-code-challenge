import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../store";
import { ISnooble } from "../types/Snooble";

export const SnoobleOverview: React.FC<ISnoobleOverviewProps> = ({ deviceName, snoobles }) => {
  return (
    <React.Fragment>
      <div>{deviceName}</div>
      <div>{`${snoobles.length} Mini Snoobles`}</div>
    </React.Fragment>
  );
};

export interface ISnoobleOverviewProps {
  deviceName: string;
  snoobles: ISnooble[];
}

const mapStateToProps = (state: IAppState) => {
  const { deviceName, snoobles} = state.snoobleWizard;
  return {
    deviceName,
    snoobles,
  };
};

export default connect(mapStateToProps)(SnoobleOverview);
