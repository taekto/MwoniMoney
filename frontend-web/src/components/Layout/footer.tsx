import React from "react";
import styled from "styled-components";
import FooterChild from "./footerChild";

export const FooterBody = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;

interface FooterBoxProps {
  backgroundimage: string;
}

export const FooterBox = styled.div`
  // border: 1px solid black;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FooterimgBox = styled.div<FooterBoxProps>`
  // border: 1px solid black;
  width: 75%;
  height: 75%;
  background-image: url(${(props) => props.backgroundimage});
  background-size: 100% 100%;
`;

function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return <FooterChild />;
}

export default Footer;
