import React, { useState }  from 'react'
import './App.css';
import CheckInOut from './components/CheckInOut';
import Home from './components/HomePage';
import { ToastContainer} from 'react-toastify';



function App() {

  const[checkIn, setCheckIn]= useState(false)
  const[checkOut, setCheckOut]=useState(false)
  
  
 
  return (
    <div className="App">
      
         {(checkIn==false && checkOut==false) &&<Home setCheckIn={setCheckIn} setCheckOut={setCheckOut}/>}
         {console.log(checkIn)}
         { checkIn && <CheckInOut submit="Check In" close={setCheckIn} link="/"/>}
         { checkOut && <CheckInOut submit="Check Out" close={setCheckOut} link="/check-out" />}
     
         <ToastContainer theme='colored'/>
    </div>
  );
}

export default App;
