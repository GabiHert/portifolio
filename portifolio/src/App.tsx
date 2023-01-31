import { useEffect, useRef, useState } from "react";
import { experience } from "../experience";
import { projects } from "../projects";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Loading } from "./components/Loading";
import { Projects } from "./components/Projects";
import { Sections } from "./components/Sections";
import { Theme } from "./theme";
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

  const dataFetchedRef = useRef(false);
  const [sectionName, setSectionName] = useState<string | null>(null);
const [alertOnce,setAlertOnce]= useState<boolean>(false);
  const isMobile = useWindowWidth().width < 990;
  const [isLoading, setIsLoading] = useState(false);

  function handleSectionNameChanged(sectionName: string) {
    setSectionName(sectionName);
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
window.alert("Just to remind you, this project is still in development. I hope you enjoy it!")
},[]);
 
  return isLoading ? (
    <Loading size={useWindowWidth()} />
  ) : (
    <div style={{background:Theme.colors.brand_300}}>
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
        <Experience
          mobile={isMobile}
          setSectionName={(sectionName) => {
            handleSectionNameChanged(sectionName);
          }}
          size={useWindowWidth()}
          experience={experience}
        />
        <Projects
          projects={projects}
          mobile={isMobile}
          setSectionName={(sectionName) => {
            handleSectionNameChanged(sectionName);
          }}
          size={useWindowWidth()}
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
        Made with ❤️ by Gabriel Guinter Herter
      </h3>

    </div>
  );
}

export default App;
