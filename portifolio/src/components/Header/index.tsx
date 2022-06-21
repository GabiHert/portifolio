import React, { useState } from "react";
import { Menu } from "@headlessui/react";

import { Theme } from "././../../theme";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, List } from "phosphor-react";
import {
  notHoverListStyle,
  notHoverSocialStyle,
  notOnHoverListSectionStyle,
  notOnHoverSocialIconStyle,
  onHoverListSectionStyle,
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

  const [isListSectionsOnHover, setIsListSectionsOnHover] = useState(false);
  const [isListAboutMeOnHover, setIsListAboutMeOnHover] = useState(false);
  const [isListProjectsOnHover, setIsListProjectsOnHover] = useState(false);
  const [isListExperienceOnHover, setIsListExperienceOnHover] = useState(false);
  const [isListMyRocketJourneyOnHover, setIsListMyRocketJourneyOnHover] =
    useState(false);

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
      <Menu as={"div"}>
        <Menu.Button as={"div"}>
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
            borderRadius: "10px",
            outline: "none",
            backgroundColor: "white",
            width: "200px",
          }}
        >
          <Menu.Item
            as={"div"}
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
            <a
              style={{
                padding: "5px",
                color: "black",
                textDecoration: "none",
              }}
              href="/account-settings"
            >
              • Sections
            </a>
          </Menu.Item>
          <Menu.Item
            as={"div"}
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
            <a
              style={{
                padding: "5px",
                color: "black",
                textDecoration: "none",
              }}
              href="/account-settings"
            >
              • About me
            </a>
          </Menu.Item>
          <Menu.Item
            as={"div"}
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
            <a
              style={{
                padding: "5px",
                color: "black",
                textDecoration: "none",
              }}
              href="/account-settings"
            >
              • Projects
            </a>
          </Menu.Item>
          <Menu.Item
            as={"div"}
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
            <a
              style={{
                padding: "5px",
                color: "black",
                textDecoration: "none",
              }}
              href="/account-settings"
            >
              • Experience
            </a>
          </Menu.Item>{" "}
          <Menu.Item
            as={"div"}
            style={{
              ...(isListMyRocketJourneyOnHover
                ? onHoverListSectionStyle
                : notOnHoverListSectionStyle),
            }}
            onMouseEnter={() => {
              setIsListMyRocketJourneyOnHover(true);
            }}
            onMouseLeave={() => {
              setIsListMyRocketJourneyOnHover(false);
            }}
          >
            <a
              style={{
                padding: "5px",
                color: "black",
                textDecoration: "none",
              }}
              href="/account-settings"
            >
              • My Rocket Journey
            </a>
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
          transform: "translateX(-99%)",
          flexDirection: "row",
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
            />
          </>
        ) : (
          <>Social</>
        )}
      </span>
    </header>
  );
}
