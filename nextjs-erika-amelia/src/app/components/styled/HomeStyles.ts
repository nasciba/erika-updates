import styled from "styled-components";

export const BackgroundImage = styled.div`
  background-image: url("/images/background.jpg");
  background-position: center;
  background-size: stretch;
  background-repeat: stretch;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:first-of-type {
    text-align: center;
  }
`;

export const SectionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
