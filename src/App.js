import Navbar from './componat/Navbar'
import Textfrom from './componat/Textfrom';
import {useState} from 'react';
import Alert from './componat/Alert';
// import About from './componat/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Github from './componat/Github';



function App() {
const [Mode,setMode] = useState("light");
// 
const [alert,setAlert] = useState(null)
const showAlert =(type,message) =>{
      setAlert({
        type:type,
        message:message,
      }) 
      
      setTimeout(function(){
        setAlert(null)
      },1500)
}




const handleMode = () => {
if(Mode === 'light'){
  setMode('dark')
 showAlert('success','Dark mode enabled')
}
else{
  setMode('light')
  showAlert('success','light mode enabled')
}
}

  return (
    <>
    
  <div>
  <Navbar Mode={Mode} handleMode={handleMode} lstitle="Pradhanji" abs="login"/>
  <Alert alert={alert} />
  
    


  <Textfrom Mode={Mode}/>
  {/* <About/> */}
  {/* <Github/> */}


  

  
  

  
  </div>
  </>
    
  );
}




export default App;
