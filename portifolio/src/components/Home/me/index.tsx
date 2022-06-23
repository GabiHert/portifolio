import me from "../../../assets/me.mp4";
import React from "react";

interface meProps {
  mobile: boolean;
  style?: React.CSSProperties;
}
export function Me({ mobile, style }: meProps) {
  return (
    <video
      height="300px"
      width="300px"
      className="me-video"
      controls={false}
      autoPlay={true}
      muted={true}
      loop={true}
      style={{
        alignItems: "center",
        alignSelf: "center",
        justifySelf: "center",
        borderColor: "white",
        borderStyle: "solid",
        borderRadius: "300px",
        background: "black",
        marginTop: "30px",
        ...style,
        ...(mobile ? { alignSelf: "center" } : {}),
      }}
    >
      <source src={me} type={"video/mp4"} />
    </video>
  );
}
