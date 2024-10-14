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
  const [filterState, setFilterState] = useState(false)

   const handleFilterState =(data) =>{
    data && setFilterState()
   }  

  const [show, setShow] = useState(false)
  const getMenu = (data) => { 
    console.log(data)
    return data
   }
  const handleShow = ( ) =>{
    setShow(!show)
    show && handleFilterState()
  }

  return (
    <>  
      <Navigation modalToggle={setShow} filterState={filterState} handleFilterState={handleFilterState}/>
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
      <div className="relative">
      {show &&  <Filter setIsOpen={setShow} isOpen={show} getMenu={getMenu} /> }
      </div>
      <Transactions/>

    </>
  )
}

export default App
