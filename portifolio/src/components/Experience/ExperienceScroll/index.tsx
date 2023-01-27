import { Theme } from "../../../theme";
import "./horizontal-scroll.css";

export function ExperienceScroll(props:{mobile: boolean}) {
  return (
    <div
      className="topics"
      style={{color:"white",...(props.mobile?{}:{justifyContent:"center"})}}>
        
      <div
        className="topic"
        style={{
          marginRight: "50px",
          backgroundColor: Theme.colors.brand_800,
          minWidth: "300px",
          maxWidth: "25%",
          height: "620px",

        }}
      >
        <h1 style={{ textAlign: "center", color: Theme.colors.brand_400 }}>
          Front-End
        </h1>
        <h3>Front-end is not where my professional knowledge is focused, but I really enjoy building my projects design.<br/><br/> Those are some of technologies I've worked with so far:</h3>
        <h3>· <a href="https://reactjs.org" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>React</a></h3>
        <h3>· <a href="https://reactnative.dev" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>React Native</a></h3>
        <h3>· <a href="https://tailwindcss.com" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Tailwind CSS</a></h3>
        <h3>· <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>CSS</a></h3>
        <h3>· <a href="https://www.javascript.com" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Javascript</a></h3>
        <h3>· <a href="https://html5.org" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Html5</a></h3>

      </div>
      <div
        className="topic"
        style={{
          marginRight: "50px",
          backgroundColor: Theme.colors.brand_800,
          minWidth: "300px", maxWidth: "25%",
          height: "620px",

        }}
      >
        <h1 style={{ textAlign: "center", color: Theme.colors.brand_400 }}>
          Back-End
        </h1>
        <h3>I consider my self a back-end developer because I like designing and building systems.
        <br/><br/>Those are some of the main technologies I've worked with so far:</h3>
        <h3>· <a href="https://nodejs.org/en/about/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Node.js</a> (<a href="https://www.typescriptlang.org" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Typescript</a>)</h3>
        <h3>· <a href="https://go.dev" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Go</a></h3><br/>
        <h3>As secondary stacks I would go with:</h3>
        <h3>· <a href="https://www.python.org" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Python</a></h3>
        <h3>· <a href="https://isocpp.org" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>C++</a></h3>
        <h3>· <a href="https://www.java.com/en/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Java</a></h3>
      </div>
      <div
        className="topic"
        style={{
          backgroundColor: Theme.colors.brand_800,
          minWidth: "300px", maxWidth: "25%",
          height: "620px",
        }}
      >
        
        <h1 style={{ textAlign: "center", color: Theme.colors.brand_400 }}>
          Cloud
        </h1>
        <h3>The cloud world would open for me in 2021, together with my first contact with high availability software development and web projects.
        <br/><br/>Those are some of the main technologies I've worked with so far:</h3>
        
        <div style={{flex:1,flexDirection:"row",display:"flex"}}>

        <div style={{marginRight:"15%"}}>
        <h3>· <a href="https://aws.amazon.com" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>AWS</a></h3>
        <p>&nbsp;&nbsp;&nbsp;· <a href="https://aws.amazon.com/en/step-functions/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Step Functions</a></p>
        <p>&nbsp;&nbsp;&nbsp;· <a href="https://aws.amazon.com/en/lambda/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Lambda</a></p>
        <p>&nbsp;&nbsp;&nbsp;· <a href="https://aws.amazon.com/en/api-gateway/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Api Gateway</a></p>
        <p>&nbsp;&nbsp;&nbsp;· <a href="https://aws.amazon.com/en/cloud-watch/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Cloud Watch</a></p>
        <p>&nbsp;&nbsp;&nbsp;· <a href="https://aws.amazon.com/en/dynamodb/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>DynamoDb</a></p>
        <p>&nbsp;&nbsp;&nbsp;· <a href="https://aws.amazon.com/en/sns/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>SNS</a></p>
        <p>&nbsp;&nbsp;&nbsp;· <a href="https://aws.amazon.com/en/sqs/" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>SQS</a></p>
        </div>

        <div>
        <h3>· <a href="https://www.jenkins.io" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Jenkins</a></h3>
        <h3>· <a href="https://railway.app" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Railway App</a></h3>
        <h3>· <a href="https://vercel.com" target="_blank" style={{color:Theme.colors.brand_400, textDecoration:"none"}}>Vercel</a></h3>
        </div>

     
        </div>

      </div>
    </div>
  );
}
