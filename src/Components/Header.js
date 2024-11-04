import React, { useContext, useEffect, useState } from 'react'
import { listContext } from '../App'
import useDebounce from '../CustomHooks/useDebounce'
import '../Styles/header.css'

export default function Header() {
  const {list,setList} = useContext(listContext)
  const [input,setInput]= useState('')
  const debValue = useDebounce(input,1000);

  const listFilter=(value)=>{
    list.forEach((list)=>{
      if(list.text.indexOf(value) === -1){
        list.display = false
      }else list.display = true
    })
    setList([...list]);
  }

  useEffect(()=>{
    listFilter(debValue)
  },[debValue])

  const changeList=(e)=>{
    setInput(e.target.value)
  }

  const changeListByButton=(task)=>{
    switch(task){
      case 'All':
         list.forEach(element => {
            element.display = true;
         });
         break;
      case 'Completed':
        list.forEach(element => {
          if(!!element.status) element.display = true;
          else element.display = false;
        });
        break;
      case 'Incomplete':
        list.forEach(element => {
          if(!element.status) element.display = true;
          else element.display = false; 
        });
        break;
    }
    setList([...list])
  }

  return (
    <div className='Header_Div'>
      <h1>Today</h1>
      <input id='Search_Bar' type='text' value={input} onChange={(e)=>changeList(e)}></input>
      <div className='button_grp'>
        <button id = 'buttonAll' onClick={()=>changeListByButton('All')}>All</button>
        <button id = 'buttonAll' onClick={()=>changeListByButton('Completed')}>Completed</button>
        <button id = 'buttonAll' onClick={()=>changeListByButton('Incomplete')}>Incomplete</button>
      </div>
    </div>
  )
}
