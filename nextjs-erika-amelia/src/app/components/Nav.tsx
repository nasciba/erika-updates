"use client";

import { usePathname } from "next/navigation";
import {
  StyledNav,
  LogoLink,
  NavList,
  NavItem,
  NavLink,
} from "./styled/NavStyles";

const links = [
  { href: "/obras", label: "Obras" },
  { href: "/bio", label: "Sobre" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contato", label: "Contato" },
];

const LOGO_TEXT = "Érika Amélia";

const Nav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <StyledNav>
      <LogoLink href="/" $isHome={isHome}>
        {LOGO_TEXT}
      </LogoLink>
      <NavList>
        {links.map(({ href, label }) => (
          <NavItem key={href}>
            <NavLink
              href={href}
              $isHome={isHome}
              $isActive={pathname.includes(href)}
            >
              {label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </StyledNav>
  );
}

export default Nav;