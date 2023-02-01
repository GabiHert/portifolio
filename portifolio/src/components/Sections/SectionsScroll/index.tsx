import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import "../../../theme/awsome-button-style.scss";
import { sectionStyle } from "../style";
import "./horizontal-scroll.css";
interface sectionsProps {
  onAboutMePressed: () => void;
  onProjectsPressed: () => void;
  onExperiencePressed: () => void;
  onMyRocketJourneyPressed: () => void;
}

export function SectionsScroll() {

  const marginRight = "50px";

  return (
    <div className="wrapper" style={{ paddingRight: 10, paddingLeft: 10 }}>
      <AwesomeButton
        className="section"
        type="primary"
        style={{
          marginRight,
          ...sectionStyle,  
        }}
        href={"#about-me"}
      >
        About me
      </AwesomeButton>
      <AwesomeButton
        className="section"
        type="primary"
        style={{
          marginRight,
          ...sectionStyle,  
        }}
        href={"#experience"}
      >
        Experience
      </AwesomeButton>
      
      <AwesomeButton
        className="section"
        type="primary"
        style={{
          marginRight,
          ...sectionStyle,  
        }}
        href={"#projects"}
      >
        Projects
      </AwesomeButton>

    </div>
  );
}
/**<a
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
      </a> */