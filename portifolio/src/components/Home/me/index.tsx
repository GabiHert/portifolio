import React from "react";
import me from "../../../assets/me.mp4";
import "./style.css";

interface meProps {
  mobile: boolean;
  style?: React.CSSProperties;
}
export function Me({ mobile, style }: meProps) {
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
