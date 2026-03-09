import styled from "styled-components";

export const MainContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
  padding: 3rem 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
