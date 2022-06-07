import { Theme } from "../../theme";
import { CaretDown } from "phosphor-react";

export function Home() {
  return (
    <>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          position: "relative",
          paddingTop: "10px",
        }}
      >
        <span>
          <h1
            style={{
              paddingLeft: "10%",
              fontSize: "200px",
              marginTop: "0",
            }}
          >
            Hi!
          </h1>
          <h2
            style={{
              paddingLeft: "10%",
              fontSize: "100px",
              marginTop: "0",
              color: Theme.colors.brand_400,
            }}
          >
            I'm Gabriel.
          </h2>
          <h3
            style={{
              paddingLeft: "10%",
              fontSize: "50px",
              marginTop: "0",
              width: "100%",
            }}
          >
            Be welcome to my portifolio!
          </h3>
        </span>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "200px",
            width: "400px",
            height: "400px",
            position: "absolute",
            left: "99%",
            transform: "translateX(-99%)",
          }}
        ></div>
      </div>

      <span
        style={{
          alignItems: "baseline",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            marginBottom: "0",
            color: "white",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Scroll-me
        </h3>
        <CaretDown
          size={150}
          style={{
            color: Theme.colors.brand_400,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          weight={"thin"}
        />
      </span>
    </>
  );
}
