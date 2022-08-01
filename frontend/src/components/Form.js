import React , {useEffect , useState} from 'react'
import './Form.css';

const Form = (props) => {
  
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



   
    const backHome = async(e)=>{
        e.preventDefault();
        
        const {name, email , id} = table;
       const res = await fetch("http://localhost:3000/" , {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
    
          name,
          email, id
        })
       
       });

       const data =await res.json();
      
       props.setData(table);
       props.setClick(1);
       
    }
   
  return (
    <div className='input-form'>
     <form  method="POST" >
      <label htmlFor="name">Name </label>
      <input type="text" id="name" name="name"
      value = {table.name}
      onChange={handleInput} />
      <label htmlFor="email">Email</label>
       <input type="text" id="email" name="email" 
       value = {table.email}
       onChange={handleInput}
       />
       <label htmlFor="id">Id</label>
       <input type="number" id="id" name="id"
       value = {table.id}
       onChange={handleInput}
        />
       <input type="submit" value="Submit" id="submit" onClick={backHome} />
     </form>
    </div>
  )
}

export default Form 
