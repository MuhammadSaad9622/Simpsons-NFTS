import styled from "styled-components";
import footerBG from "../../../../assets/images/bg/7C8EB70C-581E-45BD-BA44-76B86C28ACC1.jpeg";

const FooterStyleWrapper = styled.footer`
  
  background:url(${footerBG});
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
