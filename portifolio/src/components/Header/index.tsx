import React, { useState } from "react";
import { Theme } from "././../../theme";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, List } from "phosphor-react";
import {
  notHoverListStyle,
  notHoverSocialStyle,
  notOnHoverSocialIconStyle,
  onHoverListStyle,
  onHoverSocialIconStyle,
  onHoverSocialStyle,
} from "./style";

interface HeaderProps {
  sectionName: string | null;
}

export function Header({ sectionName }: HeaderProps) {
  const [hoverStyle, setHoverStyle] =
    useState<React.CSSProperties>(notHoverListStyle);
  const [isSocialOnHover, setIsSocialOnHover] = useState<boolean>(false);

  const [socialHoverStyle, setSocialHoverStyle] =
    useState<React.CSSProperties>(notHoverSocialStyle);

  const [linkedInHoverStyle, setLinkedInHoverStyle] =
    useState<React.CSSProperties>(notOnHoverSocialIconStyle);

  const [gitHoverStyle, setGitHoverStyle] = useState<React.CSSProperties>(
    notOnHoverSocialIconStyle
  );

  const [mailHoverStyle, setMailHoverStyle] = useState<React.CSSProperties>(
    notOnHoverSocialIconStyle
  );

  return (
    <header
      style={{
        background: Theme.colors.brand_800,
        height: "70px",
        borderBottomRightRadius: 11,
        borderBottomLeftRadius: 11,
        flexDirection: "row",
        display: "flex",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <List
        onClick={() => {}}
        style={{
          ...hoverStyle,
          alignSelf: "start",
          marginTop: "1%",
          position: "absolute",
          left: "1%",
          transform: "translateX(-1%)",
        }}
        className="list"
        size={30}
        onMouseEnter={() => {
          setHoverStyle(onHoverListStyle);
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
          paddingBottom: "2px",
          position: "absolute",
          left: "99%",
          transform: "translateX(-99%)",
          flexDirection: "row",
          display: "flex",
          transitionProperty: "all",
          maxWidth: "20%",
          transitionDuration: "700ms",
          ...socialHoverStyle,
        }}
        onMouseEnter={() => {
          setIsSocialOnHover(true);
          setSocialHoverStyle(onHoverSocialStyle);
        }}
        onMouseLeave={() => {
          setIsSocialOnHover(false);
          setSocialHoverStyle(notHoverSocialStyle);
        }}
      >
        {isSocialOnHover ? (
          <>
            <EnvelopeSimple
              style={{
                borderRadius: "20px",
                marginRight: "10%",
                color: Theme.colors.brand_300,
                height: "100%",
                ...mailHoverStyle,
              }}
              size="100%"
              height="90%"
              onMouseEnter={() => {
                setMailHoverStyle(onHoverSocialIconStyle);
              }}
              onMouseLeave={() => {
                setMailHoverStyle(notOnHoverSocialIconStyle);
              }}
            />
            <LinkedinLogo
              style={{
                borderRadius: "20px",
                marginRight: "10%",
                height: "100%",
                color: Theme.colors.brand_300,
                ...linkedInHoverStyle,
              }}
              size="100%"
              height="90%"
              onMouseEnter={() => {
                setLinkedInHoverStyle(onHoverSocialIconStyle);
              }}
              onMouseLeave={() => {
                setLinkedInHoverStyle(notOnHoverSocialIconStyle);
              }}
            />
            <GithubLogo
              style={{
                borderRadius: "20px",
                height: "100%",
                color: Theme.colors.brand_300,
                ...gitHoverStyle,
              }}
              size="100%"
              height="90%"
              onMouseEnter={() => {
                setGitHoverStyle(onHoverSocialIconStyle);
              }}
              onMouseLeave={() => {
                setGitHoverStyle(notOnHoverSocialIconStyle);
              }}
            />
          </>
        ) : (
          <text style={{ paddingTop: "7px" }}>Social</text>
        )}
      </span>
    </header>
  );
}
