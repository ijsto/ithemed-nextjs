import { useState } from "react";
import styled from "styled-components";

import Socials from "../Socials";
import Button from "../common/Button";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.secondaryCol};
  bottom: 0;
  left: 0;
  padding: 1.5em;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 1;
  div,
  a {
    color: white;
    &:hover {
      color: orange;
    }
  }
  .whatisthis {
    margin-top: 3em;
  }
`;

const StyledFooterButton = styled.div`
  bottom: 0;
  padding: 1.5em;
  position: fixed;
  right: 0;
  text-align: center;
  z-index: 2;
  button {
    background: ${({ theme }) => theme.secondaryCol};
    * {
      color: white;
    }
  }
`;

export const Footer = () => {
  const [showFooter, setShow] = useState(false);
  return (
    <>
      {showFooter ? (
        <>
          <StyledFooter>
            <Socials />

            <div className="whatisthis">
              <a href="https://ijs.to" target="_blank">
                iJS.to
              </a>
            </div>
          </StyledFooter>
          <StyledFooterButton>
            <Button onClick={() => setShow(!showFooter)}>Hide Footer</Button>
          </StyledFooterButton>
        </>
      ) : (
        <StyledFooterButton>
          <Button onClick={() => setShow(!showFooter)}>Show Footer</Button>
        </StyledFooterButton>
      )}
    </>
  );
};

export default Footer;
