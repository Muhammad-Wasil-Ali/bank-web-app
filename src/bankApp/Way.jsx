import React, { useState } from 'react'
import "./styles/way.css"
import { waylist } from './json/waylist'
const Way = () => {
  const [wayli,setWayList]=useState(waylist);
  return (
    <>
        <div className="way">
      <section>
            <div className="way-heading">
                <h2>Ways To Bank With Us</h2>
            </div>
            <div className="main-way">
              {wayli.map((El)=>{
                return  <div className="way-content">
                <div className="way-img">
                    <img src={El.image} alt="load" />
                </div>
                <div className="way-title">
                    <h3>{El.title}</h3>
                    <p>{El.description}</p>
                </div>
            </div>
              })}
           
            
            </div>
      </section>
        </div>
    </>
  )
}

export default Way
