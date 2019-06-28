import React from "react";
import { connect } from "react-redux";
import snoobelImage from "../images/snooble-medium.jpg";
import { IAppState } from "../store";
import { SnoobleLogo } from "../styled/SnoobleLogo";
import { ISnooble } from "../types/Snooble";

export const SnoobleOverview: React.FC<ISnoobleOverviewProps> = ({ deviceName, snoobles }) => {
  return (
    <div className="columns">
      <div className="column is-1">
        <SnoobleLogo />
      </div>
      <div className="column is-3"></div>
      <div className="column is-4 is-centered">
        <figure className="image">
          <img src={snoobelImage}  alt="snooble" />
        </figure>
        <p className="has-text-centered">{deviceName}</p>
        <p className="has-text-centered">{`${snoobles.length} Mini Snoobles`}</p>
      </div>
      <div className="column is-4"></div>
    </div>
  );
};

export interface ISnoobleOverviewProps {
  deviceName: string;
  snoobles: ISnooble[];
}

const mapStateToProps = (state: IAppState) => {
  const { deviceName, snoobles } = state.snoobleWizard;
  return {
    deviceName,
    snoobles,
  };
};

export default connect(mapStateToProps)(SnoobleOverview);
