import { sectionNotOnHover, sectionOnHover, sectionStyle } from "../style";
import "./horizontal-scroll.css";
import { useState } from "react";

interface sectionsProps {
  onAboutMePressed: () => void;
  onProjectsPressed: () => void;
  onExperiencePressed: () => void;
  onMyRocketJourneyPressed: () => void;
}

export function SectionsScroll({
  onMyRocketJourneyPressed,
  onAboutMePressed,
  onExperiencePressed,
  onProjectsPressed,
}: sectionsProps) {
  const [aboutMeHoverStyle, setAboutMeHoverStyle] = useState(sectionNotOnHover);
  const [projectsHoverStyle, setProjectsHoverStyle] =
    useState(sectionNotOnHover);
  const [experienceHoverStyle, setExperienceHoverStyle] =
    useState(sectionNotOnHover);
  const [myRocketJourneyHoverStyle, setMyRocketJourneyHoverStyle] =
    useState(sectionNotOnHover);

  const marginRight = "50px";

  return (
    <div className="wrapper" style={{ paddingRight: 10, paddingLeft: 10 }}>
      <a
        className="section"
        style={{
          marginRight,
          ...aboutMeHoverStyle,
          ...sectionStyle,
        }}
        onMouseEnter={() => {
          setAboutMeHoverStyle(sectionOnHover);
        }}
        onMouseLeave={() => {
          setAboutMeHoverStyle(sectionNotOnHover);
        }}
        href={"#about-me"}
      >
        About me
      </a>
      <a
        className="section"
        style={{
          ...sectionStyle,
          ...projectsHoverStyle,
          marginRight,
        }}
        onMouseEnter={() => {
          setProjectsHoverStyle(sectionOnHover);
        }}
        onMouseLeave={() => {
          setProjectsHoverStyle(sectionNotOnHover);
        }}
        href={"#projects"}
      >
        Projects
      </a>
      <a
        className="section"
        style={{
          ...sectionStyle,
          ...experienceHoverStyle,
          marginRight,
        }}
        onMouseEnter={() => {
          setExperienceHoverStyle(sectionOnHover);
        }}
        onMouseLeave={() => {
          setExperienceHoverStyle(sectionNotOnHover);
        }}
        href={"#experience"}
      >
        Experience
      </a>
      <a
        className="section"
        style={{
          ...sectionStyle,
          ...myRocketJourneyHoverStyle,
        }}
        onMouseEnter={() => {
          setMyRocketJourneyHoverStyle(sectionOnHover);
        }}
        onMouseLeave={() => {
          setMyRocketJourneyHoverStyle(sectionNotOnHover);
        }}
        href={"#my-rocket-journey"}
      >
        My Rocket Journey
      </a>
    </div>
  );
}
