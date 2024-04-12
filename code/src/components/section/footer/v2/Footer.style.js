import styled from "styled-components";
import footerBG from "../../../../assets/images/bg/the-simpsons-bart-simpson-homer-simpson-lisa-simpson-wallpaper-thumb.jpg";

const FooterStyleWrapper = styled.footer`
 
  background-size: cover;
  background-position: center center;
  padding-top: 105px;
  position: relative;

  &::before {
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    content: "";
    height: 100%;
    width: 100%;
    bottom: 0px;
  }
`;

export default FooterStyleWrapper;
