import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = ()=>{
      //console.log("Uppercase Clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert(" Converted to Upper case!","success");
    }

    const handleLowClick = ()=>{
      //console.log("Uppercase Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert(" Converted to Lower case!","success")
    }

    const clear = ()=>{
      //console.log("Uppercase Clicked" + text);
      let newText = "";
      setText(newText);
      props.showAlert(" All text Cleared !","success");
    }

    const handlespace = ()=>{
    
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert(" Extra spaces remove!","success");
    }


    const handleOnChange=(event)=>{
      //console.log("On change Clicked");
      setText(event.target.value);
    }

    const [text, setText] = useState('');
    
  return (
      <>
    <div className ='container' style ={{color:props.mode ==='dark'?'white':'rgb(32 88 133)'}}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'rgb(32 88 133)'}}id="mybox" rows="8">
        </textarea>
    </div>
        <button className="btn btn-primary" onClick={handleUpClick} style = {{backgroundColor:'#042743'}}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} style = {{backgroundColor:'#042743'}}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clear} style = {{backgroundColor:'#042743'}}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlespace} style = {{backgroundColor:'#042743'}} >Remove Extra space</button>
    
        <div className='container my-3'>
          <h1 className='my-4'>Your Text Summary</h1>
          <h6>{text.split(/[ ]+/).join("").length} characters with out space</h6>
          <h6>{text.split(/[ ]+/).join(" ").length} characters including space</h6>
          <h6>{text.length>0?text.split(" ").length:0} words</h6>
          <h6>{text.length>0?text.split(".").length:0} sentences</h6>
          <h6>It takes average {text.length>0?0.008 * text.split(" ").length:0} Minutes to Read</h6>
          <h1 className='my-4'>Preview</h1>
          <p>{text.length>0?text:"Enter Text In Textbox To Preview It Here"}</p>
        </div>
        </div>  
    </>
  )
}
