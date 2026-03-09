import styled from "styled-components";

export const BioLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const BioImageWrap = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding-top: 8px;
  @media (min-width: 768px) {
    width: 40%;
    max-width: 24rem;
  }
`;

export const BioImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const BioContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const BioTitle = styled.h1`
  font-family: var(--font-display), serif;
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 0 0 1.5rem;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const BioDescription = styled.div`
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1.125rem;
  line-height: 1.625;
  text-align: justify;
  color: var(--foreground);
`;

export const BioParagraph = styled.p`
  margin: 0 0 1rem;
  color: white;
  &:last-child {
    margin-bottom: 0;
  }
`;
