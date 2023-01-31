import React from "react";
import { Theme } from "../../theme";

export const notHoverListStyle: React.CSSProperties = {
  color: Theme.colors.brand_200,
};
export const onHoverListStyle: React.CSSProperties = {
  color: Theme.colors.brand_400,
};

export const onHoverSocialStyle: React.CSSProperties = {
  minWidth: "200px",
};
export const notHoverSocialStyle: React.CSSProperties = {
  minWidth: "1%",
};

export const onHoverSocialIconStyle: React.CSSProperties = {
  backgroundColor: Theme.colors.brand_700,
};
export const notOnHoverSocialIconStyle: React.CSSProperties = {
  backgroundColor: Theme.colors.brand_800,
};

export const notOnHoverListSectionStyle: React.CSSProperties = {
  width: "100%",
  background: "white",
  borderRadius: "0px",
  borderBottomStyle: "solid",
  borderWidth: "1px",
  borderColor: "#EDEDED",
  height: "30px",
  marginBottom: "10px",
  textDecoration: "none",
  color: "black",
};
export const onHoverListSectionStyle: React.CSSProperties = {
  width: "100%",
  background: "#EDEDED",
  borderBottomStyle: "solid",
  borderColor: "#EDEDED",
  borderWidth: "1px",
  borderRadius: "5px",
  height: "30px",
  marginBottom: "10px",
  textDecoration: "none",
  color: "black",
};
export { };

