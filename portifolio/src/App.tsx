import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
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
        mobile={useWindowWidth() < 990}
      />
    </>
  );
}

export default App;
