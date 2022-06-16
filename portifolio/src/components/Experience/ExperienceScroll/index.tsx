import "./horizontal-scroll.css";
import { Theme } from "../../../theme";

export function ExperienceScroll() {
  return (
    <div className="topics" style={{ color: "white" }}>
      <div
        className="topic"
        style={{
          marginRight: "120px",
          backgroundColor: Theme.colors.brand_800,
          minWidth: "300px",
          height: "600px",
        }}
      >
        <h1 style={{ textAlign: "center", color: Theme.colors.brand_400 }}>
          Front End
        </h1>
        <h3>Front end is a new world for me, i have already</h3>
      </div>
      <div
        className="topic"
        style={{
          marginRight: "120px",
          backgroundColor: Theme.colors.brand_800,
          minWidth: "300px",
          height: "600px",
        }}
      >
        <h1 style={{ textAlign: "center", color: Theme.colors.brand_400 }}>
          Back End
        </h1>
        <h3>Front end is a new world for me, i have already</h3>
      </div>
      <div
        className="topic"
        style={{
          backgroundColor: Theme.colors.brand_800,
          minWidth: "300px",
          height: "600px",
        }}
      >
        <h1 style={{ textAlign: "center", color: Theme.colors.brand_400 }}>
          Cloud
        </h1>
        <h3>Front end is a new world for me, i have already</h3>
      </div>
    </div>
  );
}
