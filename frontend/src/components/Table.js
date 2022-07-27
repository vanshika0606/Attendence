import React, { useEffect, useState } from 'react';
import './Table.css';



const Table = (props) => {
  
  

  const [users, setUsers] = useState([])

const fetchData = async () => {
    const response=await fetch("http://localhost:3000/data")
      
      const data = await response.json()
      console.log(data.table);
      setUsers(data.table);

      
     
  }

  useEffect(()=>{
  fetchData(); 
  
  
  }, [])
  
  

   

  return (
   
    <div className='table'>
      <h2>Table :-</h2>
      <table>
        <thead>
        
           <tr>
            <th>Id</th>
            <th>Name</th>
            <th>E-mail</th>
           </tr>
        </thead>
         
         <tbody>
             {users.map(user =>(
          <tr key={user._id}>
             <td>
              {user.id}
             </td>
             <td>
              {user.name}
             </td>
             <td>
               {user.email}
               <div>
               <span id="delete" onClick={() =>{
    fetch('http://localhost:3000/' +user. _id, {
      method: 'DELETE',
    })
    window.location.reload(false);

}}>delete</span>
               <span id="edit" onClick={  ()=> {props.setEdit(1)
                props.setIid(user._id)
                }}    >edit</span>
               </div>
             </td>
            </tr>
             ))}
          </tbody>
      </table>
      
    </div>
   
  )
}

export default Table
