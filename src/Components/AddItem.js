import React, { useState,useContext } from 'react'
import { listContext } from '../App'
import '../Styles/additem.css'

export default function AddItem() {
  const {list,setList} = useContext(listContext)
  const [value,setValue] = useState('')

  const handleAddClick=()=>{
    let newItem = {status:false,display:true,text:value}
    setList([...list,newItem])
  }

  return (
    <div className='Add_Item'>
      <input id='AddInput' value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
      <button id='AddItem' onClick={()=>handleAddClick()}>ADD ITEM</button>
    </div>
  )
}
