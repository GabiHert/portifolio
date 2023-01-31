import React, { useEffect } from "react";
import me from "../../../assets/me.mp4";
import { Theme } from "../../../theme";
import "./style.css";

interface meProps {
  mobile: boolean;
  style?: React.CSSProperties;
}
export function Me({ mobile, style }: meProps) {
  useEffect(() => {
  document.getElementsByClassName("me-video")[0].style.borderColor = Theme.colors.brand_400
  },[])
  return (
    <div  style={{alignItems: "center",
    ...style,
    ...(mobile ? { alignSelf: "center" } : {}),}} dangerouslySetInnerHTML={{ __html: `
    <video
      loop
      muted
      autoplay
      playsinline
      src="${me}"
      class="me-video"
    />,
  ` }}></div>
  );
}
