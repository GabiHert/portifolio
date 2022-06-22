import me from "../../../assets/me.mp4";
import React from "react";

interface meProps {
  mobile: boolean;
  style?: React.CSSProperties;
}
export function Me({ mobile, style }: meProps) {
  return (
    <video
      className="me-video"
      controls={false}
      autoPlay={true}
      muted={true}
      src={me}
      loop={true}
      style={{
        alignItems: "center",
        borderColor: "white",
        borderStyle: "solid",
        width: "300px",
        height: "300px",
        borderRadius: "300px",
        background: "black",
        marginTop: "30px",
        ...style,
        ...(mobile ? { alignSelf: "center" } : {}),
      }}
    />
  );
}
