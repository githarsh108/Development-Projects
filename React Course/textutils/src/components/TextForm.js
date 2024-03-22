import React, {useState}  from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
     // console.log("Upper case is clicked"+ text);
      let newText= text.toUpperCase();
      setText(newText);
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value);
  }
  const[text, setText]= useState('');
  const handleOnClear=()=>{
    
    setText("");

  }
    const handleReverse = (event) => {
      /* Convert string to array*/
      let strArr = text.split("");
      /* Reverse array*/
      strArr = strArr.reverse();
      /* Convert array to string*/
      let newText = strArr.join("");
      setText(newText);
    };
  



  
  return (
    <>
    <div className="container">
      <h1>{props.heading}  </h1>
          <div className="mb-3">
              <textarea className="form-control" value= {text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Text To Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert Text To Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleOnClear}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse Text</button>
          
          
      </div>
      <div className="container my-2">
        <h2> Your Text Summary</h2>
        <p> words:<b>{text.split(" ").length}</b> <br/>characters:<b> {text.length}</b></p>
        <p>Time to read  : {0.008* text.split(" ").length} minutes </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
  )
}
