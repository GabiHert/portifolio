import { Theme } from "../../theme";
import {
  sectionNotOnHover,
  textContainerDesktop,
  textContainerMobile,
} from "./style";
import "./SectionsScroll/horizontal-scroll.css";
import { useEffect, useState } from "react";
import { SectionsScroll } from "./SectionsScroll";
import { Animation } from "../../Animation";

interface sectionsProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
  size: { height: number; width: number };
}

export function Sections({ mobile, setSectionName, size }: sectionsProps) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionName("Sections");
          return;
        }
      });
    });
    observer.observe(document.querySelector(".section-start"));
  });

  const [aboutMeHoverStyle, setAboutMeHoverStyle] = useState(sectionNotOnHover);
  const [projectsHoverStyle, setProjectsHoverStyle] =
    useState(sectionNotOnHover);
  const [experienceHoverStyle, setExperienceHoverStyle] =
    useState(sectionNotOnHover);
  const [myRocketJourneyHoverStyle, setMyRocketJourneyHoverStyle] =
    useState(sectionNotOnHover);

  const sectionsAnimation = new Animation();
  sectionsAnimation.animateOnScroll(
    ".sections",
    "fade-in",
    ".sections-wrapper"
  );
  const selectASectionAnimation = new Animation();
  selectASectionAnimation.animateOnScroll(
    ".select-a-section",
    "slide-left",
    ".select-a-section-wrapper"
  );
  const orAnimation = new Animation();
  orAnimation.animateOnScroll(".or", "slide-left", ".or-wrapper");
  const keepScrollingAnimation = new Animation();
  keepScrollingAnimation.animateOnScroll(
    ".keep-scrolling",
    "slide-left",
    ".keep-scrolling-wrapper"
  );

  return (
    <>
      <div className={"sections-wrapper"}>
        <section className={"section-start"} id={"sections"}></section>
        <div
          className={"sections"}
          style={{
            width: `${size.width}px`,
            minHeight: `${size.height}px`,
          }}
        >
          <section
            style={{
              display: "flex",

              ...(mobile ? textContainerMobile : textContainerDesktop),
            }}
          >
            <div className={"select-a-section-wrapper"}>
              <h1
                className={"select-a-section"}
                style={{
                  color: Theme.colors.brand_300,
                  paddingLeft: "10px",
                  fontSize: Theme.font.size.large,
                }}
              >
                Select a section
              </h1>
            </div>
            <div className={"or-wrapper"}>
              <h1
                className={"or"}
                style={{
                  color: Theme.colors.brand_400,
                  paddingLeft: "10px",
                  fontSize: Theme.font.size.large,
                }}
              >
                or
              </h1>
            </div>
            <div className={"keep-scrolling-wrapper"}>
              <h1
                className={"keep-scrolling"}
                style={{
                  color: Theme.colors.brand_300,
                  paddingLeft: "10px",
                  fontSize: Theme.font.size.large,
                }}
              >
                keep scrolling
              </h1>
            </div>
          </section>

          <div
            style={{

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SectionsScroll
              onAboutMePressed={() => {
                console.log("FOOIII");
              }}
              onProjectsPressed={() => {
                console.log("FOOIII2");
              }}
              onExperiencePressed={() => {
                console.log("FOOIII3");
              }}
              onMyRocketJourneyPressed={() => {
                console.log("FOOIII4");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
