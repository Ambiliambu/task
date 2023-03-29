import React from 'react'
import { Button } from 'primereact/button';
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate=useNavigate()
  const screenOne=()=>{
    navigate('/screenone')
  }
  const screenTwo=()=>{
    navigate('/screentwo')

  }

  return (
    <div className="page flex flex-wrap justify-content-center gap-5 ">
            
            <Button label="Screen One" severity="primary" onClick={screenOne}/>
            <Button label="Sceen Two" severity="primary" onClick={screenTwo}/>
         
        </div>
  )
}
