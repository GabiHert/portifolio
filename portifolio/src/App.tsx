import React, { useState } from "react";
import { Theme } from "./theme";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, List } from "phosphor-react";
import { notHoverListStyle, ontHoverListStyle } from "./AppStyle";

function App() {
  //todo: header
  const [hoverStyle, setHoverStyle] =
    useState<React.CSSProperties>(notHoverListStyle);
  const [sectionName, setSectionName] = useState<string | null>(
    "My Rocket Journey"
  );
  const [isSocialOnHover, setIsSocialOnHover] = useState<boolean>(true);

  return (
    <header
      style={{
        background: Theme.colors.brand_800,
        height: "70px",
        borderBottomRightRadius: 11,
        borderBottomLeftRadius: 11,
        flexDirection: "row",
        display: "flex",
        position: "relative",
      }}
    >
      <List
        onClick={() => {}}
        style={{
          ...hoverStyle,
          alignSelf: "start",
          marginTop: "1%",
        }}
        className="list"
        size={30}
        onMouseEnter={() => {
          setHoverStyle(ontHoverListStyle);
        }}
        onMouseLeave={() => {
          setHoverStyle(notHoverListStyle);
        }}
      />

      {sectionName ? (
        <span
          style={{
            backgroundColor: Theme.colors.brand_400,
            borderRadius: 30,
            marginTop: "10px",
            height: "35px",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "10px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {sectionName}
        </span>
      ) : null}

      <span
        style={{
          backgroundColor: Theme.colors.brand_500,
          borderRadius: 30,
          marginTop: "10px",
          height: "35px",
          paddingLeft: "12px",
          paddingRight: "12px",
          paddingTop: "2px",
          paddingBottom: "5px",
          position: "absolute",
          left: "100%",
          transform: "translateX(-100%)",
          flexDirection: "row",
          display: "flex",
          transitionProperty: "all",
          transitionDuration: "500ms",
        }}
        onMouseEnter={() => {
          setIsSocialOnHover(true);
        }}
        onMouseLeave={() => {
          setIsSocialOnHover(false);
        }}
      >
        {isSocialOnHover ? (
          <>
            <EnvelopeSimple
              style={{
                borderRadius: "20px",
                backgroundColor: Theme.colors.brand_800,
                marginRight: "30px",
                padding: "4px",
                color: Theme.colors.brand_300,
              }}
              size={30}
            />
            <LinkedinLogo
              style={{
                borderRadius: "20px",
                backgroundColor: Theme.colors.brand_800,
                marginRight: "30px",
                padding: "4px",
                color: Theme.colors.brand_300,
              }}
              size={30}
            />{" "}
            <GithubLogo
              style={{
                borderRadius: "20px",
                backgroundColor: Theme.colors.brand_800,
                padding: "4px",
                color: Theme.colors.brand_300,
              }}
              size={30}
            />
          </>
        ) : (
          <text style={{ paddingTop: "7px" }}>Social</text>
        )}
      </span>
    </header>
  );
}

export default App;
