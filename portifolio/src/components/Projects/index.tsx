import { Theme } from "../../theme";
import "./projectsStyle.css";
import HTMLReactParser from "html-react-parser";
import { Animation } from "../../Animation";

interface projectsProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
  size: { height: number; width: number };
  projects: any;
}

export function Projects({
  mobile,
  projects,
  setSectionName,
  size,
}: projectsProps) {
  const projectsAnimation = new Animation();
  projectsAnimation.animate(".projects", "fade-in", ".projects-wrapper");
  const takeALookAnimation = new Animation();
  takeALookAnimation.animate(
    ".take-a-look",
    "slide-left",
    ".take-a-look-wrapper"
  );

  const letMeShowYouAnimation = new Animation();
  letMeShowYouAnimation.animate(
    ".let-me-show-you",
    "slide-left",
    ".let-me-show-you-wrapper"
  );

  return (
    <div className={"projects-wrapper"}>
      <div
        className="projects"
        style={{ width: `${size.width}px`, minHeight: `${size.height}px` }}
      >
        <section style={{ paddingLeft: "2%", marginBottom: "100px" }}>
          <div className={"take-a-look-wrapper"}>
            <h1
              className={"take-a-look"}
              style={{
                color: Theme.colors.brand_400,
                fontSize: Theme.font.size.xx_large,
              }}
            >
              Take a look!
            </h1>
          </div>
          <div className={"let-me-show-you-wrapper"}>
            <h1
              className={"let-me-show-you"}
              style={{
                color: "black",
                fontSize: Theme.font.size.large,
              }}
            >
              Let me show you some of my projects
            </h1>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {Object.entries(projects).map(([key, value]) => {
            return (
              <div
                className={"projects-container"}
                style={{
                  width: "60%",
                  minHeight: "200px",
                  background: Theme.colors.brand_800,
                  wordWrap: "break-word",
                  padding: "10px",
                  borderRadius: "20px",
                  marginBottom: "100px",
                  color: "white",
                }}
              >
                {HTMLReactParser(value as string)}{" "}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
