import { Theme } from "../../theme";
import { Animation } from "../../Animation";

interface aboutMeProps {
  mobile: boolean;
  setSectionName: (sectionName: string) => void;
  size: { width: number; height: number };
}

export function AboutMe({ mobile, setSectionName, size }: aboutMeProps) {
  const aboutMeAnimation = new Animation();
  aboutMeAnimation.animate(".about-me", "fade-in", ".about-me-wrapper");

  const backEndDeveloperAnimation = new Animation();
  backEndDeveloperAnimation.animate(
    ".back-end-developer",
    "slide-left",
    ".back-end-developer-wrapper"
  );

  const creativeAnimation = new Animation();
  creativeAnimation.animate(".creative", "slide-left", ".creative-wrapper");

  const proactiveAnimation = new Animation();
  proactiveAnimation.animate(".proactive", "slide-left", ".proactive-wrapper");

  return (
    <div className={"about-me-wrapper"}>
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
          <div className={"back-end-developer-wrapper"}>
            <h1
              className={"back-end-developer"}
              style={{
                letterSpacing: "10px",
                color: Theme.colors.brand_400,
                fontSize: Theme.font.size.xxx_large,
                textAlign: "center",
              }}
            >
              Back end developer
            </h1>
          </div>
          <div className={"creative-wrapper"}>
            <h1
              className={"creative"}
              style={{
                letterSpacing: "5px",
                color: "black",
                textAlign: "center",

                fontSize: Theme.font.size.xx_large,
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
                fontSize: Theme.font.size.x_large,
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
              color: Theme.colors.brand_300,
              fontSize: Theme.font.size.medium,
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: "160%",
            }}
          >
            Hi! <br />
            My name is Gabriel Guinter Herter, I live in Brazil. I'm a back end
            developer starting my career. I'm a very focused, determined and
            creative person, always seeking for inovation. Both Back end and
            front end areas call my attention. I always try to bring my interes
            areas to my daily living, analyzing applyable opportunities to
            develop new projects with good solutions, That way I keep acquiring
            knowledge and new habilities. I lead my life with determination,
            positivity and with the mentality of always being in constant
            evolution an search for knowledge. At this moment, I'm a Computer
            Engeneering studant at PUCRS ..... My name is Gabriel Guinter
            Herter, I live in Brazil. I'm a back end developer starting my
            career. I'm a very focused, determined and creative person, always
            seeking for inovation. Both Back end and front end areas call my
            attention. I always try to bring my interes areas to my daily
            living, analyzing applyable opportunities to develop new projects
            with good solutions, That way I keep acquiring knowledge and new
            habilities. I lead my life with determination, positivity and with
            the mentality of always being in constant evolution an search for
            knowledge. At this moment, I'm a Computer Engeneering studant at
            PUCRS .....
          </h1>
        </section>
      </div>
    </div>
  );
}
