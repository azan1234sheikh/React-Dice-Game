import React from 'react';

import './Button.css'; // Assuming this file contains styling for your button

const Button = (props) => {

  return (
    <button className={props.isOutline ? 'outline-btn' : 'btn'}> {/* Use quotes around class names */}
      {props.icon}
      {props.text} {/* Render the text from props */}
     
    </button>
  );
}

export default Button;