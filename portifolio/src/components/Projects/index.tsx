import { Theme } from "../../theme";
import "./projectsStyle.css";
import HTMLReactParser from "html-react-parser";

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
  return (
    <div style={{ width: `${size.width}px`, minHeight: `${size.height}px` }}>
      <section style={{ paddingLeft: "2%", marginBottom: "100px" }}>
        <h1
          style={{
            color: Theme.colors.brand_400,
            fontSize: Theme.font.size.xx_large,
          }}
        >
          Take a look!
        </h1>
        <h1
          style={{
            color: "black",
            fontSize: Theme.font.size.large,
          }}
        >
          Let me show you some of my projects
        </h1>
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
              className={"projects"}
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
  );
}
