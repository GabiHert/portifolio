import { useState } from 'react';
import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Form } from "react-bootstrap";
import { Animation } from '../../Animation';
import { Theme } from '../../theme';


export function EmailForm(props:{  size: { height: number; width: number }}) {

    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");


    const formAnimation = new Animation();
    formAnimation.animateOnScroll(
      ".email-form",
      "slide-left",
      ".email-container"
    );
  
  return (
    <div className="email-container" style={{width:props.size.width,height:props.size.height,display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
    
        <h1 style={{fontSize:Theme.font.size.xxx_large}}>Hey!</h1>
        <h3 style={{fontSize:Theme.font.size.x_large}}>Why don't you email me?</h3>
     

        <Form className="email-form"  style={{width:"90%",paddingBottom:"10px"}}>
        <Form.Group>
            <Form.Control onChange={e=>{setEmail(e.target.value)}} style={{borderRadius:3,borderColor:"white",marginBottom:10, height:"30px",width:"100%"}} type="email" placeholder="Enter you e-mail" />
            <Form.Control
            onChange={e=>{setMessage(e.target.value)}}
             as="textarea"
             placeholder=" Write your message here..."
             style={{ minHeight: '100px',maxHeight:"150px",width:"100%",borderRadius:3,borderColor:"white"}}
           />
        </Form.Group>
      
    </Form>
    
    <AwesomeButtonProgress  resultLabel='sent!' loadingLabel="wait..." type="primary" onPress={async(element,next)=>{next()}}> send </AwesomeButtonProgress>

  </div>
  );
}
