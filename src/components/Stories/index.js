import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react";

const Stories= () => {

  const [url]=useState("http://gateway.marvel.com/v1/public/stories?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a")
  const [item,setItem]=useState();

  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
return (
    <>
        <h1 className="heading">Stories</h1>
       <div className="content">       
          <Card data={item}/>
       </div>
    </>
  )
}
export default Stories;