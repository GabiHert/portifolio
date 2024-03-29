import "./bounce.css";

import { useEffect } from "react";
import { Animation } from "../../Animation";
import { CONFIG } from "../../config/config";
import { Theme } from "../../theme";
import { Me } from "./me";
import {
    homeOnDesktop,
    homeOnMobile,
    orientationOnDesktop,
    orientationOnMobile,
    textOnDesktop,
    textOnMobile
} from "./style";

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
      <div className={"home-wrapper"} style={{ maxWidth: size.width }}>
        <section className={"home-start"} id={"home"}></section>

        <div
          className="home"
          style={{
            maxWidth: `${size.width}px`,
            minHeight: `${size.height}px`,

            ...(mobile ? homeOnMobile : homeOnDesktop),
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: size.width,
              ...(mobile ? orientationOnMobile : orientationOnDesktop),
            }}
          >
            {mobile ? (
              <Me mobile={mobile} style={{ maxWidth: size.width }} />
            ) : null}
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
                    ...(size.width < CONFIG.FONT_SIZE.LIMIT
                      ? { fontSize: Theme.font.size.xx_large }
                      : {
                          fontSize: Theme.font.size.xxx_large,
                        }),
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
                style={{
                  marginLeft: `${size.width - 1000}px`,
                  maxWidth: size.width,
                }}
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
              Be welcome to my portfolio!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
