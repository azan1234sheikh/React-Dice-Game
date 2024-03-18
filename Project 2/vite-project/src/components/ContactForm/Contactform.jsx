import React from 'react';
import Button from '../Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiMail } from "react-icons/hi"
import './Contactform.css';
import { useState } from 'react';

const Contactform = () => {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [text ,setText] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
   
  const onSubmit = (event) =>{
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setText(event.target.text.value);
    console.log(name, email, text);
    
    if (name === "" || email === "" || text === "") {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      // Do something with the form data, like sending it to a server
    }
    
  }
   


  return (
    <section className="container"> 
      <div className="Contact_form"> 
      <div className="top_button">
        <Button  text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize='14px' />} />
        <Button  text="VIA CALL" icon={<FiPhone fontSize='14px'/>} />
      </div>
      <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize='14px'  />} />
      
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type='text' name="name"/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type='email' name="email"/>
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <textarea type='text' name="text" rows='8'/>
        </div>
        <div style={{
          display :"flex",
         justifyContent : "end",
         
        }}>
          <Button   text="SUBMIT BUTTON"/>
        </div>
       
      </form>
      
       {showErrorMessage && (
      <div>
        <p className="error-message">Please fill in all fields.</p>
      </div>
       )}
      
      

      </div>
         <div className="  Contact-image">
            <img  src="/images/image.png" alt="contact image" />
         </div>
      
    </section>
  );
}

export default Contactform;
