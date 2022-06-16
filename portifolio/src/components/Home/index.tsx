import "./bounce.css";
import { Theme } from "../../theme";
import {
  homeOnDesktop,
  homeOnMobile,
  orientationOnDesktop,
  orientationOnMobile,
  textOnDesktop,
  textOnMobile,
} from "./style";
import { Me } from "./me";

interface homeProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
  size: { height: number; width: number };
}

export function Home({ mobile, setSectionName, size }: homeProps) {
  return (
    <div
      className="home"
      style={{
        width: `${size.width}px`,
        minHeight: `${size.height}px`,
        overflow: "hidden",

        ...(mobile ? homeOnMobile : homeOnDesktop),
      }}
    >
      <div
        style={{
          display: "flex",
          ...(mobile ? orientationOnMobile : orientationOnDesktop),
        }}
      >
        {mobile ? <Me mobile={mobile} /> : null}
        <span>
          <h1
            className="hi"
            style={{
              color: "black",
              fontSize: "200px",
              ...(mobile ? textOnMobile : textOnDesktop),
            }}
          >
            Hi!
          </h1>
          <h1
            className="im-gabriel"
            style={{
              color: Theme.colors.brand_400,
              fontSize: Theme.font.size.xxx_large,
              ...(mobile ? textOnMobile : textOnDesktop),
            }}
          >
            I'm Gabriel.
          </h1>
        </span>
        {!mobile ? <Me mobile={mobile} /> : null}
      </div>
      <h1
        className="welcome"
        style={{
          ...(mobile ? textOnMobile : textOnDesktop),
          fontSize: Theme.font.size.x_large,
        }}
      >
        Be welcome to my portifolio!
      </h1>
    </div>
  );
}
