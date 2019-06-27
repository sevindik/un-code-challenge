import React from "react";
import styled from "styled-components";

const Label = styled.label`
  width: 65px;
  height: 11px;
  font-family: Lato;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.09;
  letter-spacing: normal;
  color: #a4a7b5;`
;

export const LabeledInput = (inputProps: any) => (
  <React.Fragment>
    <Label>Label</Label>
    <input {...inputProps} />
  </React.Fragment>
);
