import React, { useState } from "react";
import { Menu } from "@headlessui/react";

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
  const [isListPressed, setIsListPressed] = useState(false);

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
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <Menu.Item
            as={"div"}
            style={{ width: "100%", background: "black", borderRadius: "10px" }}
          >
            {({ active }) => (
              <a
                style={{
                  padding: "5px",
                }}
                href="/account-settings"
              >
                Sections
              </a>
            )}
          </Menu.Item>{" "}
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
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
