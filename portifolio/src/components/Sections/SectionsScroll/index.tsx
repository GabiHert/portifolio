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

  return (
    <div className="wrapper">
      <a
        className="section"
        style={{
          marginRight: "120px",
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
          marginRight: "120px",
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
          marginRight: "120px",
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
