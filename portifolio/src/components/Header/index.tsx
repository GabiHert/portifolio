import { Menu } from "@headlessui/react";
import { GithubLogo, LinkedinLogo, List } from "phosphor-react";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import { CONFIG } from "../../config/config";
import { Theme } from "././../../theme";
import {
  notHoverListStyle,
  notHoverSocialStyle,
  notOnHoverListSectionStyle, onHoverListSectionStyle,
  onHoverListStyle, onHoverSocialStyle
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
  const [isListHomeOnHover, setIsListHomeOnHover] = useState(false);
  const [isListSectionsOnHover, setIsListSectionsOnHover] = useState(false);
  const [isListAboutMeOnHover, setIsListAboutMeOnHover] = useState(false);
  const [isListProjectsOnHover, setIsListProjectsOnHover] = useState(false);
  const [isListExperienceOnHover, setIsListExperienceOnHover] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [emailPopOverTarget,setEmailPopOverTarget] = useState(null);




    function onLinkInClick(){
      window.open(CONFIG.URL.LINKEDIN, '_blank', 'noreferrer');
    }

    function onEmailClick(){
      //window.alert("Email copied to your clipboard!")
      //navigator.clipboard.writeText(CONFIG.URL.EMAIL)
      setIsEmailOpen(!isEmailOpen)
      
    }

    function onGithubClick(){
      window.open(CONFIG.URL.GITHUB, '_blank', 'noreferrer');
    }

  return (<>
    <header
      style={{
        width: size.width,
        background: Theme.colors.brand_800,
        height: "65px",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
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
          backgroundColor: Theme.colors.brand_400,
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
              <AwesomeButton
              style={{
                borderRadius: "20px",
                marginRight: "10%",
                height: "100%",
                maxWidth: "45px",
              }}
              type="secondary"
              onPress={()=>onEmailClick()}
              className="email-btn"
          ><h3 style={{fontSize:"10%"}}>Email</h3></AwesomeButton> 

          <AwesomeButton
              style={{
                borderRadius: "20px",
                marginRight: "10%",
                height: "100%",
                maxWidth: "45px",
              }}
              size="icon"
              type="linkedin"
              onPress={() =>onLinkInClick()}><LinkedinLogo /></AwesomeButton>

          <AwesomeButton
              style={{
                borderRadius: "20px",
                marginRight: "10%",
                height: "100%",
                maxWidth: "45px",
              }}
              type="github"
              size="100%"
              onPress={() =>onGithubClick()}
          ><GithubLogo/></AwesomeButton>
          </>
        ) : (
          <>Social</>
        )}

      </span>
      
      
    </header>
    </>
  );
}
