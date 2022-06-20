import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { Home } from "./components/Home";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { projects } from "../projects";
import { Experience } from "./components/Experience";
import { experience } from "../experience";

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

  return size;
}

function App() {
  const [sectionName, setSectionName] = useState<string | null>(null);

  const isMobile = useWindowWidth().width < 990;
  return (
    <>
      <Header sectionName={sectionName} />
      <div className={"container"}>
        <Home
          setSectionName={(sectionName) => {
            setSectionName(sectionName);
          }}
          mobile={isMobile}
          size={useWindowWidth()}
        />
        <Sections
          setSectionName={(sectionName) => {
            setSectionName(sectionName);
          }}
          mobile={isMobile}
          size={useWindowWidth()}
        />
        <AboutMe
          mobile={isMobile}
          setSectionName={() => {}}
          size={useWindowWidth()}
        />
        <Projects
          projects={projects}
          mobile={isMobile}
          setSectionName={() => {}}
          size={useWindowWidth()}
        />

        <Experience
          mobile={isMobile}
          setSectionName={() => {}}
          size={useWindowWidth()}
          experience={experience}
        />
      </div>
    </>
  );
}

export default App;
