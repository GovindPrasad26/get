import Component from "./component/react";
import Update from "./component/updatec";
import {Route,Routes} from "react-router-dom"
function App(){
  return(<div>
   
    <Routes>
     
    <Route path="/" element={<Component/>}/>

      <Route path="/update/:id" element={<Update/>}/>
    </Routes>
 
    {/* <Update/> */}
  </div>)
}
export default App