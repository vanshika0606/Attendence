import React ,{useState} from 'react'
import './Card.css'
const Card = (props) => {



    const [table, setTable] = useState({
        name:"",
        email: "",
        id:""
    })

    let name , value;

    const handleInput = (e) =>{
        name = e.target.name;
        value = e.target.value;
 
        setTable({...table , [name]:value})
       
   }

   console.log(props.iid)
  let  mystyle={
        display: props.edit===1?'block':'none'
    }
    const editt = async( )=>{
        props.setEdit(0)
        const {name, email , id} = table;
       console.log(table)
        const res = await fetch("/" + props.iid, {
            method:"PUT",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
        
              name,
              email, id
            })

    })
    window.location.reload(false)
}


    

  return (
   
    <div id="middle"
     style={mystyle}
    >
    <div className='input-form back'>
     <form  method="POST" >
      <label htmlFor="name">Name </label>
      <input type="text" id="name" name="name" className="small-size" 
      value = {table.name}
      onChange={handleInput} 
      />
      <label htmlFor="email">Email</label>
       <input type="text" id="email" name="email" 
       className="small-size"
       value = {table.email}
       onChange={handleInput}
       />
       <label htmlFor="id">Id</label>
       <input type="number" id="id" name="id"
       className="small-size"
       value = {table.id}
       onChange={handleInput}
        />
       <input  value="Edit"  id="submit" 
        readOnly
        className='button-small' onClick={editt}
       />
     </form>
    </div>
    </div>
   
  )
}


export default Card
