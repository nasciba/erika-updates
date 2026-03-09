import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav`
  margin-left: auto;
  background-color: transparent;
  margin-right: auto;
  max-width: 72rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const LogoLink = styled(Link)<{ $isHome?: boolean }>`
  font-family: var(--font-display), serif;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: ${(props) =>
    props.$isHome ? "var(--background)" : "var(--foreground)"};
  text-decoration: none;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)<{
  $isHome?: boolean;
  $isActive?: boolean;
}>`
  position: relative;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) =>
    props.$isHome
      ? "var(--background)"
      : "color-mix(in srgb, var(--foreground) 80%, transparent)"};
  text-decoration: none;
  transition: color 0.15s ease;
  padding-bottom: 8px;
  &:hover {
    color: ${(props) =>
      props.$isHome ? "var(--background)" : "var(--foreground)"};
  }
  ${(props) =>
    props.$isActive &&
    `
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: red;
    }
  `}
`;
