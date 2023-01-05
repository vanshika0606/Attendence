import React, { useState } from 'react'
import './style.css'
import {GiCrossMark} from 'react-icons/gi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckInOut = ({submit,close, link}) => {

    const [student,setStudent] = useState({
        name:"",
        rollNo:0
    })

    let value , name;
    const handleInput=(e)=>{
      
      name= e.target.name;
      value=  e.target.value;

      setStudent({...student,[name]:value})
     
    }



    const submitButton=async(e)=>{

        e.preventDefault();

        const {name, rollNo}= student;

        const res = await fetch(`http://localhost:3000${link}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
          
                name,
                rollNo
              })
             
          })
           const result = await res.json();
           console.log(result.message)

           toast.success(result.message)
           close(false)

    }


    const Close= ()=>{
         close(false)
    }
  return (
    <div className='checkIn-outer-div'>
      <form className='checkIn-form'>
        <div>

        <GiCrossMark className='cross' onClick={Close}/>
        </div>
        <input placeholder='Enter your full name' type="text" value={value} name="name"
        onChange={handleInput}
        />

        <input placeholder='Enter your Roll no.' type="number" name="rollNo" value={value}
        onChange={handleInput}
        />
        <input value={submit} readOnly type="submit" onClick={submitButton}/>

      </form>
      
    </div>
  )
}

export default CheckInOut
