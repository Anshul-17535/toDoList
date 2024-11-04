import React, { useContext } from 'react'
import { listContext } from '../App'
import '../Styles/list.css'

export default function List() {
    const {list,setList} = useContext(listContext);
    const deleteListItem=(recInd)=>{
        let newList = list.filter((val,ind)=>ind!==recInd)
        setList(newList);
    }
    const changeStatus=(e,recInd)=>{
        const tempList = [...list];
        tempList[recInd].status = e.target.checked;
        setList(tempList);
    }

  return (
    <div>
        {list.map((value,index)=>(
            <div key={index}>{value.display?<div key = {index} className='todo_list'>
                <div className={value.status?"completed":"incomplete"}>
                    <input id='listCheck' type='checkbox' checked={value.status} onChange={(e)=>changeStatus(e,index)}></input>
                    <p id='listText'>{value.text}</p>
                    <button id='listButton'onClick={()=>deleteListItem(index)}>X</button>
                </div>
            </div>:<></>}
            </div>
        ))}
    </div>
  )
}