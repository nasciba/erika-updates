import styled from "styled-components";
import Link from "next/link";

export const ObrasPageTitle = styled.h1`
  font-family: var(--font-display), serif;
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 0 0 2rem;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

export const ObrasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin: 0;
  margin-top: 1.5rem;
  padding: 0;
  list-style: none;
`;

export const ObraCardImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  background: var(--background);
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.4);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }
`;

export const ObraCardLink = styled(Link)`
  grid-column: span 12;
  @media (min-width: 640px) {
    grid-column: span 6;
  }
  @media (min-width: 1024px) {
    grid-column: span 4;
  }
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 0;
  overflow: hidden;
  background: var(--background);
  &:hover ${ObraCardImageWrap}::after {
    opacity: 1;
  }
`;

export const ObraCardTitle = styled.span`
  display: block;
  text-align: center;
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  line-height: 1.3;
`;

export const ObraDetailWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const ObraBreadcrumb = styled.nav`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: var(--foreground);
  opacity: 0.9;
`;

export const ObraBreadcrumbLink = styled(Link)`
  color: var(--foreground);
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export const ObraBreadcrumbSep = styled.span`
  margin: 0 0.5rem;
  opacity: 0.7;
`;

export const ObraDetailTitle = styled.h1`
  font-family: var(--font-display), serif;
  font-size: 1.875rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 0 0 1rem;
  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const ObraDetailDescription = styled.div`
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1.125rem;
  line-height: 1.625;
  color: var(--foreground);
  margin-bottom: 2rem;
  max-width: 42rem;
`;


export const ImageDetailWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const ImageDetailViewer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 50vh;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageDetailArrowSlot = styled.div<{ $position: "left" | "right" }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(p) => (p.$position === "left" ? "left: 0.5rem;" : "right: 0.5rem;")}
  @media (min-width: 640px) {
    ${(p) => (p.$position === "left" ? "left: 1.5rem;" : "right: 1.5rem;")}
  }
`;

export const ImageDetailImageWrap = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
`;


export const ImageDetailNavLink = styled(Link)`
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--foreground) 12%, transparent);
  color: var(--foreground);
  text-decoration: none;
  transition: background 0.15s ease, opacity 0.15s ease;
  &:hover {
    background: color-mix(in srgb, var(--foreground) 20%, transparent);
  }
  @media (min-width: 640px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const ImageDetailNavPlaceholder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--foreground) 8%, transparent);
  color: var(--foreground);
  opacity: 0.4;
  pointer-events: none;
  @media (min-width: 640px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const ImageDetailTitle = styled.h1`
  font-family: var(--font-display), serif;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 1.5rem 0 0.5rem;
`;

export const ImageDetailMeta = styled.p`
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 0.9375rem;
  color: color-mix(in srgb, var(--foreground) 75%, transparent);
  margin: 0;
  line-height: 1.5;
`;
