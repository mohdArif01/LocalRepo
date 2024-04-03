import React, {useState} from "react";



export default function TextForms(props) {
    const [text, setText] = useState("Enter text here")
    // text = "This is the nre enter text" // WRONG
    // setText("This is the new enter text") 
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handlelowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleclearClick = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Cleared", "success")
    }
    const handlecopyClick = ()=>{
        let newText = document.getElementById("exampleFormControlTextarea1")
        newText.select()
        newText.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(newText.value)
    }
    
  return (
    <>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'#e8e8e8'}}>
      <h3 >{props.heading} </h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7" value={text} onChange={handleOnChange}
          style={{backgroundColor : props.mode==='light'?'white':'#1f1f1f', color : props.mode==='light'?'black':'#e8e8e8'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={handlecopyClick}>Copy</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'#e8e8e8'}}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'<Enter something in the text area>'}</p>
    </div>
    </>
  );
}
