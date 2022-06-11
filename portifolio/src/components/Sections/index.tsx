import { Theme } from "../../theme";
import {
  sectionNotOnHover,
  textContainerDesktop,
  textContainerMobile,
} from "./style";
import "./horizontal-scroll.css";
import { useState } from "react";

interface sectionsProps {
  mobile: boolean;
  setSectionName: (sectionName: string | null) => void;
  size: { height: number; width: number };
}

export function Sections({ mobile, setSectionName, size }: sectionsProps) {
  const [aboutMeHoverStyle, setAboutMeHoverStyle] = useState(sectionNotOnHover);
  const [projectsHoverStyle, setProjectsHoverStyle] =
    useState(sectionNotOnHover);
  const [experienceHoverStyle, setExperienceHoverStyle] =
    useState(sectionNotOnHover);
  const [myRocketJourneyHoverStyle, setMyRocketJourneyHoverStyle] =
    useState(sectionNotOnHover);

  return (
    <div style={{ width: `${size.width}px`, height: `${size.height}px` }}>
      <section
        style={{
          display: "flex",

          ...(mobile ? textContainerMobile : textContainerDesktop),
        }}
      >
        <h1
          style={{
            color: Theme.colors.brand_300,
            paddingLeft: "10px",
            fontSize: Theme.font.size.large,
          }}
        >
          Select a section
        </h1>
        <h1
          style={{
            color: Theme.colors.brand_400,
            paddingLeft: "10px",
            fontSize: Theme.font.size.large,
          }}
        >
          or
        </h1>
        <h1
          style={{
            color: Theme.colors.brand_300,
            paddingLeft: "10px",
            fontSize: Theme.font.size.large,
          }}
        >
          keep scrolling
        </h1>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="wrapper">
          <div
            className="section"
            style={{
              width: "300px",
              minWidth: "300px",
              height: "300px",
              marginRight: "120px",
            }}
          >
            About me
          </div>
          <div
            className="section"
            style={{
              width: "300px",
              minWidth: "300px",
              height: "300px",
              marginRight: "120px",
            }}
          >
            Projects
          </div>
          <div
            className="section"
            style={{
              width: "300px",
              minWidth: "300px",
              height: "300px",
              marginRight: "120px",
            }}
          >
            Experience
          </div>
          <div
            className="section"
            style={{ width: "300px", minWidth: "300px", height: "300px" }}
          >
            My Rocket Journey
          </div>
        </div>
      </div>
    </div>
  );
}
