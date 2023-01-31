import { useEffect } from "react";
import { Animation } from "../../Animation";
import { CONFIG } from "../../config/config";
import { Theme } from "../../theme";

interface aboutMeProps {
  mobile: boolean;
  setSectionName: (sectionName: string) => void;
  size: { width: number; height: number };
}

export function AboutMe({ mobile, setSectionName, size }: aboutMeProps) {
  const aboutMeAnimation = new Animation();
  aboutMeAnimation.animateOnScroll(".about-me", "fade-in", ".about-me-wrapper");

  const backEndDeveloperAnimation = new Animation();
  backEndDeveloperAnimation.animateOnScroll(
    ".back-end-developer",
    "slide-left",
    ".back-end-developer-wrapper"
  );

  const creativeAnimation = new Animation();
  creativeAnimation.animateOnScroll(
    ".creative",
    "slide-left",
    ".creative-wrapper"
  );

  const proactiveAnimation = new Animation();
  proactiveAnimation.animateOnScroll(
    ".proactive",
    "slide-left",
    ".proactive-wrapper"
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionName("About me");
          return;
        }
      });
    });
    observer.observe(document.querySelector(".about-me-start"));
  }, []);

  return (
    <>
      <div className={"about-me-wrapper"}>
        <section className={"about-me-start"} id={"about-me"}></section>
        <div
          className="about-me"
          style={{ width: `${size.width}px`, minHeight: `${size.height}px` }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className={"back-end-developer-wrapper"}
              style={{ maxWidth: size.width }}
            >
              <h1
                className={"back-end-developer"}
                style={{
                  letterSpacing: "10px",
                  color: Theme.colors.brand_400,
                  ...(size.width < CONFIG.FONT_SIZE.LIMIT
                    ? { fontSize: Theme.font.size.x_large }
                    : {
                        fontSize: Theme.font.size.xxx_large,
                      }),
                  textAlign: "center",
                }}
              >
                Back-end developer
              </h1>
            </div>
            <div className={"creative-wrapper"}>
              <h1
                className={"creative"}
                style={{
                  letterSpacing: "5px",
                  color: "black",
                  textAlign: "center",
                  ...(size.width < CONFIG.FONT_SIZE.LIMIT
                    ? { fontSize: Theme.font.size.x_large }
                    : {
                        fontSize: Theme.font.size.xx_large,
                      }),
                }}
              >
                Creative
              </h1>
            </div>
            <div className={"proactive-wrapper"}>
              <h1
                className={"proactive"}
                style={{
                  color: Theme.colors.brand_400,
                  textAlign: "center",
                  letterSpacing: "3px",
                  ...(size.width < CONFIG.FONT_SIZE.LIMIT
                    ? { fontSize: Theme.font.size.large }
                    : {
                        fontSize: Theme.font.size.x_large,
                      }),
                }}
              >
                Proactive
              </h1>
            </div>
          </section>

          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: Theme.colors.brand_800,
                fontSize: Theme.font.size.medium,
                textAlign: "center",
                maxWidth: size.width - 100,
                lineHeight: "160%",
              }}
            >
                    Hi! <br />
               My name is Gabriel Guinter Herter, I live in Brazil. I'm a back-end developer, a very focused, determined and creative person, always seeking innovation. I usually try to bring my
 interest areas to my daily living, analyzing applicable
 opportunities to develop new projects with good solutions. That
 way I can keep acquiring knowledge and new abilities.<br/> I lead my life
 with determination, positivity, and the mentality of always
 being in constant evolution and search for knowledge. At this
 moment, I'm a Computer Engineer student at <a href="https://www.pucrs.br/en/" style={{textDecorationLine:"none",color:Theme.colors.brand_400}} target="_blank">PUCRS </a>
 and I work at a company called <a href="https://www.dock.tech" style={{textDecorationLine:"none",color:Theme.colors.brand_400}} target="_blank">Dock</a> as a Software Engineer.
 My Hobbies are mainly: basketball, surfing, programming and D.I.Y. I like video games (but I barely play them), reading (that is something I'm working on to make more usual and I'm reaching great results), coffee, technology and a clean, minimalistic computer setup. 
 I have the dream of some day creating my own tech startup, building something new and innovative.
  
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}
