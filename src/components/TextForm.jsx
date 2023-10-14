import React, {useState} from 'react'

const TextForm = (props) => {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert('Coverted to Upper Case', 'success');
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert('Coverted to Lower Case', 'success');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText); 
        props.showAlert('Clear Text', 'success');
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert('Removed Extra Spaces in the Text', 'success');
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='light' ? 'black': 'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className ="mb-3">
            <textarea className="form-control" value={text} style={{background: props.mode==='light' ? 'white': '#13466e', color: props.mode==='light' ? 'black': 'white'}} id="myBox" rows="6" onChange={handleTextChange}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Converted to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Converted to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light' ? 'black': 'white'}}> 
        <h2>Your text Summary</h2>
        {typeof text === 'string' ? (
        <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>) : 
        (
        <p>Text is undefined or not a string.</p>
    )}
    </div>
    <div style={{color: props.mode==='light' ? 'black': 'white'}}>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text: "Nothing to Preview!"}</p>
    </div>
    </>
  )
}

export default TextForm;