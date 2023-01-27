import { Menu } from "@headlessui/react";
import React, { useState } from "react";

import { EnvelopeSimple, GithubLogo, LinkedinLogo, List } from "phosphor-react";
import { CONFIG } from "../../config/config";
import { Theme } from "././../../theme";
import {
  notHoverListStyle,
  notHoverSocialStyle,
  notOnHoverListSectionStyle,
  notOnHoverSocialIconStyle,
  onHoverListSectionStyle,
  onHoverListStyle,
  onHoverSocialIconStyle,
  onHoverSocialStyle
} from "./style";

interface HeaderProps {
  sectionName: string | null;
  size: { height: number; width: number };
}

export function Header({ sectionName, size }: HeaderProps) {
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

  const [isListHomeOnHover, setIsListHomeOnHover] = useState(false);
  const [isListSectionsOnHover, setIsListSectionsOnHover] = useState(false);
  const [isListAboutMeOnHover, setIsListAboutMeOnHover] = useState(false);
  const [isListProjectsOnHover, setIsListProjectsOnHover] = useState(false);
  const [isListExperienceOnHover, setIsListExperienceOnHover] = useState(false);
  const [isListMyRocketJourneyOnHover, setIsListMyRocketJourneyOnHover] =
    useState(false);

    function onLinkInClick(){
      window.open(CONFIG.URL.LINKEDIN, '_blank', 'noreferrer');
    }

    function onEmailClick(){
      window.alert("Email copied to your clipboard!")
      navigator.clipboard.writeText(CONFIG.URL.EMAIL)
    }

    function onGithubClick(){
      window.open(CONFIG.URL.GITHUB, '_blank', 'noreferrer');
    }

  return (
    <header
      style={{
        width: size.width,
        background: Theme.colors.brand_800,
        height: "75px",
        borderBottomRightRadius: 11,
        borderBottomLeftRadius: 11,
        flexDirection: "row",
        display: "flex",
        position: "sticky",
        opacity:0.98,
        top: 0,
        zIndex: 9,
      }}
    >
      <Menu as={"div"}>
        <Menu.Button as={"section"}>
          <List
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
        </Menu.Button>

        <Menu.Items
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "100px",
            flexDirection: "column",
            marginTop: "50px",
            marginLeft: "15px",
            padding: "10px",
            borderRadius: "9px",
            outline: "none",
            backgroundColor: "white",
            width: "200px",
          }}
        >
          <Menu.Item
            as={"a"}
            href={"#home"}
            style={{
              ...(isListHomeOnHover
                ? onHoverListSectionStyle
                : notOnHoverListSectionStyle),
            }}
            onMouseEnter={() => {
              setIsListHomeOnHover(true);
            }}
            onMouseLeave={() => {
              setIsListHomeOnHover(false);
            }}
          >
            • Home
          </Menu.Item>
          <Menu.Item
            as={"a"}
            href={"#sections"}
            style={{
              ...(isListSectionsOnHover
                ? onHoverListSectionStyle
                : notOnHoverListSectionStyle),
            }}
            onMouseEnter={() => {
              setIsListSectionsOnHover(true);
            }}
            onMouseLeave={() => {
              setIsListSectionsOnHover(false);
            }}
          >
            • Sections
          </Menu.Item>
          <Menu.Item
            as={"a"}
            href={"#about-me"}
            style={{
              ...(isListAboutMeOnHover
                ? onHoverListSectionStyle
                : notOnHoverListSectionStyle),
            }}
            onMouseEnter={() => {
              setIsListAboutMeOnHover(true);
            }}
            onMouseLeave={() => {
              setIsListAboutMeOnHover(false);
            }}
          >
            • About me
          </Menu.Item>
          <Menu.Item
            as={"a"}
            href="#experience"
            style={{
              ...(isListExperienceOnHover
                ? onHoverListSectionStyle
                : notOnHoverListSectionStyle),
            }}
            onMouseEnter={() => {
              setIsListExperienceOnHover(true);
            }}
            onMouseLeave={() => {
              setIsListExperienceOnHover(false);
            }}
          >
            • Experience
          </Menu.Item>
          <Menu.Item
            as={"a"}
            href={"#projects"}
            style={{
              ...(isListProjectsOnHover
                ? onHoverListSectionStyle
                : notOnHoverListSectionStyle),
            }}
            onMouseEnter={() => {
              setIsListProjectsOnHover(true);
            }}
            onMouseLeave={() => {
              setIsListProjectsOnHover(false);
            }}
          >
            • Projects
          </Menu.Item>

 
        </Menu.Items>
      </Menu>

      {sectionName ? (
        <span
          className={"section-name"}
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
          border: "none",
          transform: "translateX(-99%)",
          flexDirection: "row",
          userSelect: "none",
          display: "flex",
          transitionProperty: "all",
          maxWidth: "20%",
          transitionDuration: "700ms",
          alignItems: "center",
          justifyContent: "center",
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
                maxWidth: "45px",

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
              onClick={() => {onEmailClick()}}

            />
            <LinkedinLogo
              style={{
                borderRadius: "20px",
                marginRight: "10%",
                height: "100%",
                maxWidth: "45px",
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

              onClick={() => {onLinkInClick()}}
            
            />
            <GithubLogo
              style={{
                borderRadius: "20px",
                height: "100%",
                maxWidth: "45px",

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
              onClick={() => {onGithubClick()}}

            />
          </>
        ) : (
          <>Social</>
        )}
      </span>
    </header>
  );
}
