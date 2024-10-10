import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import './App.css'
import Transactions from './Components/Trasactions'
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import Filter from './Components/Filter'

import { useState } from 'react'


function App() {


  

  const [show, setShow] = useState(false)

  const handleShow = ( ) =>{
    setShow(!show)
  }

  return (
    <>  
      <Navigation/>
      <Hero/>
      <main className="midSec">
        <div className="midLft">
          <h2>24 Transactions</h2>
          <p>Your transactions for the last 7 days</p>
        </div>
        <div className="midRht">
          <button onClick={handleShow}>filter {show ? <IoChevronUp />  :<IoChevronDown />} </button>
          <button>Export List <FiDownload /></button>
        </div>
      </main>
      {show &&  <Filter/> }
      <Transactions/>

    </>
  )
}

export default App
