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
      <div
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
        onClick={() => onAboutMePressed()}
      >
        About me
      </div>
      <div
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
        onClick={() => onProjectsPressed()}
      >
        Projects
      </div>
      <div
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
        onClick={() => onExperiencePressed()}
      >
        Experience
      </div>
      <div
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
        onClick={() => onMyRocketJourneyPressed()}
      >
        My Rocket Journey
      </div>
    </div>
  );
}
