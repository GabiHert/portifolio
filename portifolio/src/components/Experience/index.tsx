import { ExperienceScroll } from "./ExperienceScroll";
import { Theme } from "../../theme";
import HTMLReactParser from "html-react-parser";
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
  return (
    <div
      style={{
        width: `${size.width}px`,
        minHeight: `${size.height}px`,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "100px",
          fontSize: Theme.font.size.x_large,
          color: Theme.colors.brand_400,
        }}
      >
        I had previous experience with...
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <ExperienceScroll />
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
              className={"projects"}
              style={{
                width: "82%",
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
  );
}
