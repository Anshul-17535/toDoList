import {useEffect, useState} from 'react'

export default function useDebounce(value,delay) {
    const [debValue,setDebValue] = useState('')
  
    useEffect(()=>{

        const timer = setTimeout(()=>{
            setDebValue(value);
        },delay)

        return ()=>{
            clearTimeout(timer)
        }


    },[value,delay])

    return debValue;

}
