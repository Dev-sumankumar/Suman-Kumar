import React,{useState} from 'react'

export default function Textfrom(props) {
  
  const [text,setText] = useState("")
  const handleOnChange = (event)=>{
    setText(event.target.value);

  }
  const handleUppercase=()=>{
    let NewText = text.toUpperCase()
    setText(NewText)
  }
  const handleLowerCase=()=>{
    let NewText = text.toLowerCase()
    setText(NewText)
  }
  const handleClearText=()=>{
    setText("")
  }
  const handleTrimSpace = () =>{
    let NewText = text.trim()
    setText(NewText);

    
    

  }
  return (
    <div className='p-5'  style={{backgroundColor:props.Mode === 'light'?'white':'black',color:props.Mode === 'light'?'black':'white'}} >
      <div className='mb-5'>
        <h1>lower To UPPERCASE </h1>
  <textarea value={text} onChange={handleOnChange} className="form-control" placeholder="Write to chnage" id="floatingTextarea"></textarea>
  
</div>
<button type="button" onClick={handleUppercase}  className="btn btn-primary mx-2">Click To Upercase</button>
<button type="button" onClick={handleLowerCase}  className="btn btn-primary mx-2">Click To LowerCase</button>
<button type="button" onClick={handleClearText}  className="btn btn-primary mx-2">Click to Clear</button>
<button type="button" onClick={handleTrimSpace}  className="btn btn-primary mx-2">Click to trim </button>

  <div className='p-2'>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length- 1} word and {text.length} Charactars</p>
    

  </div>
  <h2>Preview</h2>
  <p>{text}</p>
  
    </div>
    
  )
}
