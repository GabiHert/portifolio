import React, { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

function App() {
  const [sectionName, setSectionName] = useState<string | null>(
    "My Rocket Journey"
  );
  return (
    <>
      <Header sectionName={sectionName} />
      <Home />
    </>
  );
}

export default App;
