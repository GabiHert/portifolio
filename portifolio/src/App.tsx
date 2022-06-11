import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { Home } from "./components/Home";
import "./App.css";

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

  return (
    <>
      <Header sectionName={sectionName} />

      <Home
        setSectionName={(sectionName) => {
          setSectionName(sectionName);
        }}
        mobile={useWindowWidth().width < 990}
        size={useWindowWidth()}
      />
      <Sections
        setSectionName={(sectionName) => {
          setSectionName(sectionName);
        }}
        mobile={useWindowWidth().width < 990}
        size={useWindowWidth()}
      />
    </>
  );
}

export default App;
