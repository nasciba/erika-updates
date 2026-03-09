import React from "react";
import type { Metadata } from "next";
import { Crimson_Pro, Work_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { MainContainer } from "./components/styled/LayoutStyles";
import  Nav  from "./components/Nav";

const display = Crimson_Pro({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Érika Amélia",
  description: "Érika Amélia's personal website showcasing projects and portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Nav />
          <MainContainer>{children}</MainContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
