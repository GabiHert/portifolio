import React from "react";
import { Theme } from "../../theme";

export const notHoverListStyle: React.CSSProperties = {
  color: Theme.colors.brand_300,
};
export const onHoverListStyle: React.CSSProperties = {
  color: Theme.colors.brand_500,
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
