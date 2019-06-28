import React from "react";
import styled from "styled-components";

const BackgroundBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: #006fff;
  text-align: center;`;

const LogoText = styled.span`
  width: 17px;
  height: 36px;
  font-family: Lato;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

export const SnoobleLogo: React.FC = () => (
  <BackgroundBox><LogoText>S</LogoText></BackgroundBox>
);
