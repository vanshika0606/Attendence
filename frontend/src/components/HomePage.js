import React, { useEffect, useState } from "react";

import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomePage = (props) => {

  const [student, setStudent]= useState(false)

  


  const checkInHandler = () => {
    props.setCheckIn(true);
  };

  const checkOutHandler = () => {
    props.setCheckOut(true);
  };

  var msg;
  
  const fetchFunc = async () => {
    await fetch("http://localhost:3000/students-in-school")
      .then((res) => {
        return res.json();
      })
      .then(async (data) => {
        msg = data.message;

      })
      toast.success(msg)

      
  };

  const GetStudents=()=>{
    
    fetchFunc()
    setStudent(!student)
  }


  // useEffect(()=>{ 

  // },[student])



  return (
    <div className="home-page-outer-div">
      <div className="home-page-form">
        <h1>Welcome to school</h1>
        <button onClick={checkInHandler}>Go For Check In</button>
        <button onClick={checkOutHandler}>Go For Check Out</button>
        <button onClick={GetStudents}>Check Number Of Students Present In School Right Now</button>
      </div>
    </div>
  );
};

export default HomePage;
