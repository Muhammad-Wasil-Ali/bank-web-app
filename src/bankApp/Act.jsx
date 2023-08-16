import React, { useState } from 'react'
import {List} from "./json/List"
import "./styles/accoount.css"

const Act = () => {

  const [list,setList]=useState(List)
  return (
    <>
      <section>
        <div className="main">
        {list.map((El)=>{
                return  <div className="box">
             
                <div className="box-img">
                    <img src={El.image} alt="" />
                </div>
                <div className="box-content">
                    <h1 className="heading">{El.title}</h1>
                    <p>{El.description}</p>
                </div>
            </div>
              })}
           
           
            </div>
        
        
      </section>
    </>
  )
}

export default Act;
