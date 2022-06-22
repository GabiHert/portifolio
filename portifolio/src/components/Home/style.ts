import React from "react";

export const orientationOnDesktop: React.CSSProperties = {
  flexDirection: "row",
};
export const orientationOnMobile: React.CSSProperties = {
  flexDirection: "column",
};
export const homeOnMobile: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const homeOnDesktop: React.CSSProperties = {};

export const textOnMobile: React.CSSProperties = {
  textAlign: "center",
  margin: 30,
};
export const textOnDesktop: React.CSSProperties = {
  textAlign: "left",
  margin: 30,
};

export {};
