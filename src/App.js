import Header from "./Components/Header"
import List from "./Components/List";
import AddItem from "./Components/AddItem";
import { createContext, useState } from "react";
import './Styles/app.css'

export const listContext = createContext();

function App() {
  const [list,setList] = useState([{status:true,display:true,text:"brush Teeeth"},{status:false,display:false,text:"Clean bed"}])
  return (
    <div className="App">
      <listContext.Provider value={{list,setList}}>
          <Header/>
          <List/>
          <AddItem/>
      </listContext.Provider>
    </div>
  );
}

export default App;