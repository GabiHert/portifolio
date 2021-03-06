import React, { useEffect, useState } from "react";
import { Sections } from "./components/Sections";
import { Home } from "./components/Home";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { projects } from "../projects";
import { Experience } from "./components/Experience";
import { experience } from "../experience";
import { Loading } from "./components/Loading";
import { Header } from "./components/Header";

function useWindowWidth() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  size.height = size.height + 10;
  return size;
}

function App() {
  const [sectionName, setSectionName] = useState<string | null>(null);

  const isMobile = useWindowWidth().width < 990;
  const [isLoading, setIsLoading] = useState(false);

  function handleSectionNameChanged(sectionName: string) {
    setSectionName(sectionName);
  }

  return isLoading ? (
    <Loading size={useWindowWidth()} />
  ) : (
    <>
      <Header sectionName={sectionName} size={useWindowWidth()} />
      <div className={"container"} style={{ maxWidth: useWindowWidth().width }}>
        <Home
          setSectionName={(sectionName) => {
            handleSectionNameChanged(sectionName);
          }}
          mobile={isMobile}
          size={useWindowWidth()}
        />
        <Sections
          setSectionName={(sectionName) => {
            handleSectionNameChanged(sectionName);
          }}
          mobile={isMobile}
          size={useWindowWidth()}
        />
        <AboutMe
          mobile={isMobile}
          setSectionName={(sectionName) => {
            handleSectionNameChanged(sectionName);
          }}
          size={useWindowWidth()}
        />
        <Projects
          projects={projects}
          mobile={isMobile}
          setSectionName={(sectionName) => {
            handleSectionNameChanged(sectionName);
          }}
          size={useWindowWidth()}
        />

        <Experience
          mobile={isMobile}
          setSectionName={(sectionName) => {
            handleSectionNameChanged(sectionName);
          }}
          size={useWindowWidth()}
          experience={experience}
        />
      </div>
      <h3
        style={{
          fontSize: "10px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Made with ?????? by Gabriel Guinter Herter
      </h3>
    </>
  );
}

export default App;
