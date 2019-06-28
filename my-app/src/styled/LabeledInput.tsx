import React from "react";
import styled from "styled-components";

const Label = styled.label`
  width: 65%;
  height: 11px;
  font-family: Lato;
  font-size: .8rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #a4a7b5;`;

export const LabeledInput = (props: any) => (
  <div className="field">
    <Label className="label">{props.label}</Label>
    <div className="control">
      <input className="input" {...props} />
    </div>
  </div>
);
