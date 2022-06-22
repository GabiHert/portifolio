import React from "react";
import { Theme } from "../../theme";

export const textContainerMobile: React.CSSProperties = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "50px",
};
export const textContainerDesktop: React.CSSProperties = {
  flexDirection: "row",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "100px",
};
export const sectionStyle: React.CSSProperties = {
  textDecoration: "none",
  minWidth: "300px",
  height: "300px",
  color: Theme.colors.brand_300,
  fontSize: Theme.font.size.medium,
};

export const sectionOnHover: React.CSSProperties = {
  background: Theme.colors.brand_600,
};
export const sectionNotOnHover: React.CSSProperties = {
  background: Theme.colors.brand_800,
};

export {};
