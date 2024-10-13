import {  useState } from 'react'
import Close from '../assets/close.svg'
import ExpandMore from '../assets/expand_more.svg'
import ExpandLess from '../assets/expand_less.svg'
import PropTypes from 'prop-types'



const Filter = ({setIsOpen}) => {

    const transactionTypes = ["Store transaction", "Get tipped", "Withdrawals", " Chargebacks", "Cashbacks", "Refer & Earn"]
   
    const  [checkers, setCheckers ] = useState(false)

    const handleCheckers = () => {
        setCheckers(!checkers)
       openRadio && setOpenRadio(false)
    }

    const formCont = (e) =>{
        e.preventDefault()
    }

    const [openRadio, setOpenRadio] = useState(false)

    const handleRadio = () => {
        setOpenRadio(!openRadio)
        checkers && setCheckers(false)
    }

    const [openDate, setOpenDate] = useState(false)
    const [openDate1, setOpenDate1] = useState(false)

    const handleDate = () => {
        setOpenDate(!openDate)
    }
    const handleDate1 = () => {
        setOpenDate1(!openDate1)
    }

    const [checkedItems, setCheckedItems] = useState({})

    const [status, setStatus] = useState('')

    const tStatus = ['Successful', 'Pending', 'Failed']
    const handleStatus  = (e)=> {
        setStatus(e.target.value)
    }

    const handleChange = (e) => {
        setCheckedItems({
            ...checkedItems,
            [e.target.name]: e.target.checked,
        })
    }

    const checkboxes =[
        {
            name: 'Store Transaction',
        },
         {
            name: 'Get Tipped',
        },
         {
            name: 'Withdrawals',
        },
         {
            name: 'Chargebacks',
        },
         {
            name: 'Cashbacks',
        },
         {
            name: 'Refer & Earn',
        }
        
    ]
    


  return (
    <>
    <div className="ligtBg" onClick={() => setIsOpen(false)} />
    <dialog className="filterCont">
        
        <div className="top">
            <h3>Filter </h3>
            <button className="closeFilter" onClick={()  => setIsOpen(false)}>
                <img src={Close} alt="close" />
            </button>
        </div>
        <div className="timeInt">
            
                <button>Today</button>
                <button>Yesterday</button>
                <button>Last 7 days</button>
                <button>Last 30 days</button>
            
        </div>
        <form  onSubmit={formCont}>
            <div className="customDate fbox">
                <h4>Date Range</h4>
                <div className="dateFm">
                    
                    <div className="start dateBox" onClick={handleDate}>

                    <label htmlFor="startDate" className='hideLabel'>start date</label>
                    <input type="date" id='starDate' style={{padding:'0.5rem'}}/>
                    {openDate ? <img src={ExpandLess} alt='expand'/> 
                    : 
                    <img src={ExpandMore} alt='expand'/> 
                    }     
                    
                    

                    </div>
                    <div className="finish dateBox" >
                     <label   htmlFor="finishDate" className='hideLabel'>finishDate</label>
                     <input  onClick={handleDate1} type="date" id='finishDate' style={{padding:'0.5rem'}}/>
                     {openDate1 ? <img src={ExpandLess} alt='expand'/> 
                    : 
                    <img src={ExpandMore} alt='expand'/> 
                    }     
                    </div>
                </div>
            </div>

                    


            <div className="tType fbox">
  <h4>Transaction Type</h4>
                
               
  <button className="btnTTl" onClick={handleCheckers} type="button">
  <span className='btnLft'>
    {transactionTypes.map((item, index) => (
      <span key={index}>{item}</span>
    ))}
  </span>
  
  {checkers ? <img src={ExpandLess} alt='expand'/> : <img src={ExpandMore} alt='expand'/>}
</button>


               
                {checkers && (
                    <div className="checkCont">
                    {checkboxes.map((item) => (
                        <div className="checkItem" key={item.name}>
                        <input
                            type="checkbox"
                            id={item.name} 
                            name={item.name}
                            checked={checkedItems[item.name] || false}  
                            onChange={handleChange}  
                        />
                        <label htmlFor={item.name} className="checkLabel">
                            {item.name}
                        </label>
                        </div>
                    ))}
                    </div>
                )}
                </div>

                <div className="tType fbox">

                <h4>Transaction Status</h4>
                              
                    <button className="btnTTl" onClick={handleRadio} type="button">
                    <span className='btnLft'>
                        {tStatus.map((item, index) => (
                        <span key={index}>{item}</span>
                        ))}
                    </span>
                    
                    {openRadio ? <img src={ExpandLess} alt='expand'/> : <img src={ExpandMore} alt='expand'/>}
                    </button>
                    {openRadio &&
                    <div className="checkCont">


                    <div>
                        
                            <input
                                type="radio"
                                value="Success"
                                checked={status === 'Success'}
                                onChange={handleStatus}
                                id='success'
                            />
                         <label htmlFor='success'  className="checkLabel">
                            Success
                        </label>
                    </div>
                    <div>
                       
                            <input
                                type="radio"
                                value="Pending"
                                checked={status === 'Pending'}
                                onChange={handleStatus}
                                id='pending'
                            />
                             <label htmlFor='pending' className="checkLabel">
                            Pending
                        </label>
                    </div>
                    <div>
                       
                            <input
                                type="radio"
                                value="Failure"
                                checked={status === 'Failure'}
                                onChange={handleStatus}
                                id='failure'
                            />
                             <label htmlFor='failure'  className="checkLabel">
                            Failure
                        </label>
                    </div>
                    </div>
                    }
                </div>
            

        </form>
        <footer className="modelFooter">
            <button className='modelBtn' onClick={() => setIsOpen(false)}>Clear</button>
            <button className='modelBtn darkBg' onClick={() => setIsOpen(false)}>Apply</button>
        </footer>
        
    </dialog>
    </>
  )
}

Filter.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
}

export default Filter 