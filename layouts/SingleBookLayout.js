import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import styled from "styled-components";

const StyledSingleBookWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 300px;
`;
const StyledSingleBook = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 680px;
`;
const StyledSingleBookHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  background: ${({ theme }) => theme.accentCol};
  h1 {
    color: white;
    text-shadow: none;
  }
`;

const SingleBookLayout = ({ children }) => (
  <>
    <Header />

    <StyledSingleBookHeader>
      <h1>Single Book View</h1>
    </StyledSingleBookHeader>

    <StyledSingleBookWrapper>
      <StyledSingleBook>{children}</StyledSingleBook>
    </StyledSingleBookWrapper>
    <Footer></Footer>
  </>
);

export default SingleBookLayout;
