import { Theme } from "../../theme";
import { CaretDown } from "phosphor-react";
import "./bounce.css";
import {
  gifDesktopPosition,
  gifMobilePosition,
  textDesktopPosition,
  textMobilePosition,
} from "./style";
import {
  batch,
  Fade,
  FadeIn,
  Move,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

interface homeProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
}

export function Home({ mobile, setSectionName }: homeProps) {
  setSectionName(null);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <>
      <div
        className="animated-gif"
        style={{
          marginTop: "20px",
          backgroundColor: "white",
          borderRadius: "200px",
          width: "400px",
          height: "400px",
          ...(mobile ? gifMobilePosition : gifDesktopPosition),
        }}
      ></div>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          paddingTop: "10px",
        }}
      >
        <span
          style={{
            ...(mobile
              ? {
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }
              : null),
          }}
        >
          <h1
            style={{
              fontSize: "200px",
              marginTop: "0",
              ...(mobile ? textMobilePosition : textDesktopPosition),
            }}
          >
            Hi!
          </h1>

          <h1
            style={{
              fontSize: "100px",
              marginTop: "0",
              color: Theme.colors.brand_400,
              ...(mobile ? textMobilePosition : textDesktopPosition),
            }}
          >
            I'm Gabriel.
          </h1>
          <h1
            style={{
              fontSize: "50px",
              marginTop: "0",
              width: "100%",
              ...(mobile ? textMobilePosition : textDesktopPosition),
            }}
          >
            Be welcome to my portifolio!
          </h1>
        </span>
      </div>

      <span
        style={{
          alignItems: "baseline",
          flexDirection: "column",
          display: "flex",
          height: "200px",
        }}
      >
        <section
          className={"CaretDown"}
          style={{
            left: "46%",
            position: "absolute",
            transform: "translateX(-46%)",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            scroll-me
          </h3>

          <CaretDown
            size={100}
            style={{
              color: Theme.colors.brand_400,
            }}
            weight={"thin"}
          />
        </section>
      </span>
    </>
  );
}
