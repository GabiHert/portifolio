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
import { Animation } from "../../Animation";
import { useEffect } from "react";

interface homeProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
  size: { height: number; width: number };
}

export function Home({ mobile, setSectionName, size }: homeProps) {
  const hiAnimation = new Animation();
  const imGabrielAnimation = new Animation();
  const welcomeAnimation = new Animation();
  const homeAnimation = new Animation();
  homeAnimation.animateOnScroll(".home", "fade-in", ".home-wrapper");
  hiAnimation.animateOnScroll(".hi", "slide-left", ".hi-wrapper");
  imGabrielAnimation.animateOnScroll(
    ".im-gabriel",
    "slide-left",
    ".im-gabriel-wrapper"
  );
  welcomeAnimation.animateOnScroll(
    ".welcome",
    "slide-left",
    ".welcome-wrapper"
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionName(null);
          return;
        }
      });
    });
    observer.observe(document.querySelector(".home-start"));
  }, []);

  return (
    <>
      <section className={"home-start"}></section>
      <div className={"home-wrapper"}>
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
              <div className="hi-wrapper">
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
              </div>
              <div className="im-gabriel-wrapper">
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
              </div>
            </span>
            {!mobile ? (
              <Me
                mobile={mobile}
                style={{ marginLeft: `${size.width - 1000}px` }}
              />
            ) : null}
          </div>
          <div className="welcome-wrapper">
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
        </div>
      </div>
    </>
  );
}
