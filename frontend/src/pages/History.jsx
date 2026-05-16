import { useEffect, useState } from "react"
import axios from "axios"
import {serverUrl} from "../App"

function History() {
  const [topics,setTopics]=useState([])
  useEffect(()=>{
  const myNotes = async()=>{
    try {
      const res=await axios.get(serverUrl+"/api/notes/getnotes",{withCredentials:true})
      console.log(res.data)
      setTopics(Array.isArray(res.data)? res.data:[])
    } catch (error) {
      error
    }
  }
  myNotes()
  },[])

  return (
    <div>
      
    </div>
  )
}

export default History