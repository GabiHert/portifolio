import me from "../../../assets/me.mp4";

interface meProps {
  mobile: boolean;
}
export function Me({ mobile }: meProps) {
  return (
    <video
      className="me-video"
      controls={false}
      autoPlay={true}
      muted={true}
      src={me}
      loop={true}
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "300px",
        background: "black",
        marginTop: "30px",
        ...(mobile ? { alignSelf: "center" } : { marginLeft: "25%" }),
      }}
    />
  );
}
