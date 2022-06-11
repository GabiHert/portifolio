import { Theme } from "../../theme";
import "./bounce.css";
import {
  gifDesktopPosition,
  gifMobilePosition,
  textDesktopPosition,
  textMobilePosition,
} from "./style";

interface homeProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
  size: { height: number; width: number };
}

export function Home({ mobile, setSectionName, size }: homeProps) {
  return (
    <div style={{ width: `${size.width}px`, height: `${size.height}px` }}>
      <div
        className="animated-gif"
        style={{
          backgroundColor: "white",
          borderRadius: "200px",
          width: "400px",
          height: "400px",
          ...(mobile ? gifMobilePosition : gifDesktopPosition),
        }}
      ></div>
      <h1
        style={{
          paddingLeft: "1%",

          fontSize: "200px",
          ...(mobile
            ? textMobilePosition
            : {
                ...textDesktopPosition,
                position: "absolute",
                top: "5%",
                transform: "translateY(-5%)",
              }),
        }}
      >
        Hi!
      </h1>

      <h1
        style={{
          fontSize: "100px",
          paddingLeft: "1%",

          color: Theme.colors.brand_400,
          ...(mobile
            ? textMobilePosition
            : {
                ...textDesktopPosition,
                position: "absolute",
                top: "60%",
                transform: "translateY(-60%)",
              }),
        }}
      >
        I'm Gabriel.
      </h1>
      <h1
        style={{
          fontSize: Theme.font.size.x_large,

          ...(mobile
            ? textMobilePosition
            : {
                ...textDesktopPosition,
                position: "absolute",
                top: "90%",
                transform: "translateY(-90%)",
              }),
        }}
      >
        Be welcome to my portifolio!
      </h1>

      <span
        style={{
          alignItems: "baseline",
          flexDirection: "column",
          display: "flex",
          height: "200px",
        }}
      ></span>
    </div>
  );
}
