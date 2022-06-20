import { Spinner } from "phosphor-react";
import { Theme } from "../../theme";

interface loadingProps {
  size: { height: number; width: number };
}

export function Loading({ size }: loadingProps) {
  return (
    <div
      className="about-me"
      style={{
        width: `${size.width}px`,
        minHeight: `${size.height}px`,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: Theme.font.size.medium }}>
        wait for it...
      </h1>
      <Spinner className={"spin"} size={100} color="white" />
    </div>
  );
}
