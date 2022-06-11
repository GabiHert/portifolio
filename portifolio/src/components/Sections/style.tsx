import React from "react";
import { Theme } from "../../theme";

export const textContainerMobile: React.CSSProperties = {
  flexDirection: "column",
};
export const textContainerDesktop: React.CSSProperties = {
  flexDirection: "row",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "100px",
};
export const sectionDesktopStyle: React.CSSProperties = {
  height: "300px",
  width: "300px",
  backgroundColor: Theme.colors.brand_800,
  borderRadius: "20px",
};

export const sectionContainerDesktopStyle: React.CSSProperties = {
  color: Theme.colors.brand_300,
  fontSize: Theme.font.size.medium,
};

export const sectionOnHover: React.CSSProperties = {
  background: Theme.colors.brand_600,
};
export const sectionNotOnHover: React.CSSProperties = {
  background: Theme.colors.brand_800,
};
