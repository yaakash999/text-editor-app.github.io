import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handelUceflClick = () => {
    let newText = text.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
    setText(newText);
  };

const handelCopy = () => {
  var text = document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
}
  
  const handelClearTextClick = () => {
    let newText = '';
    setText(newText);
  };

  const handelRESClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}} >
      <h2>{props.heading}</h2>
      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode=== 'dark'?'#042743':'white', color: props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-outline-primary mx-1 my-1"  onClick={handelUpClick}>Convert to upper case</button>
      <button type="button" className="btn btn-outline-secondary mx-1 my-1"  onClick={handelLoClick}>Convert to lower case</button>
      <button type="button" className="btn btn-outline-danger mx-1 my-1"  onClick={handelUceflClick}>Upper case every first letter</button>
      <button type="button" className="btn btn-outline-warning mx-1 my-1" onClick={handelRESClick}>Remove extra spaces</button>
      <button type="button" className="btn btn-outline-info mx-1 my-1" onClick={handelCopy}>Copy to clipboard</button>
      <button type="button" className="btn btn-outline-success mx-1 my-1"  onClick={handelClearTextClick}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.08 * text.split(" ").length} minutes to read</p>
    </div>
    </>
  );
}
