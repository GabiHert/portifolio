import HTMLReactParser from "html-react-parser";
import { useEffect } from "react";
import { Animation } from "../../Animation";
import { Theme } from "../../theme";
import { ExperienceScroll } from "./ExperienceScroll";
import "./experiencesStyle.css";

interface experienceProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
  size: { height: number; width: number };
  experience: any;
}

export function Experience({
  mobile,
  setSectionName,
  size,
  experience,
}: experienceProps) {
  const experienceAnimation = new Animation();
  experienceAnimation.animateOnScroll(
    ".experience",
    "fade-in",
    ".experience-wrapper"
  );

  const previousExperienceAnimation = new Animation();
  previousExperienceAnimation.animateOnScroll(
    ".previous-experience",
    "slide-left",
    ".previous-experience-wrapper"
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionName("Experience");
          return;
        }
      });
    });
    observer.observe(document.querySelector(".experience-start"));
  }, []);

  return (
    <>
      <div className={"experience-wrapper"}>
        <section className={"experience-start"} id={"experience"}></section>
        <div
          className="experience"
          style={{
            width: `${size.width}px`,
            minHeight: `${size.height}px`,
          }}
        >
          <div className="previous-experience-wrapper">
            <h1
              className={"previous-experience"}
              style={{
                textAlign: "center",
                marginBottom: "100px",
                fontSize: Theme.font.size.x_large,
                color: Theme.colors.brand_400,
              }}
            >
              I had previous experience with...
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "100px",
            }}
          >
            <ExperienceScroll mobile={mobile} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {Object.entries(experience).map(([key, value]) => {
              return (
                <div
                  className={"experience-container"}
                  style={{
                    width: "80%",
                    minHeight: "200px",
                    background: Theme.colors.brand_800,
                    wordWrap: "break-word",
                    padding: "10px",
                    borderRadius: "20px",
                    marginBottom: "100px",
                    color: "white",
                  }}
                >
                  {HTMLReactParser(value as string)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
