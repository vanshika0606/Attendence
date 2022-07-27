import React , {useState} from 'react';
import Card from './Card.js';
import Form from "./Form.js";
import Table from './Table.js';



const Total = () => {


  const [iid , setIid] = useState('');
  const [click, setClick] = useState(0)

  const [edit , setEdit] = useState(0)

  const [tablee, setTablee] = useState({
    
   
})

 
  
  return (
    <div >
      
      <div className='form-table'>
         <Form setData={setTablee} setClick={setClick}/>
         {click===1? window.location.reload(false): console.log('a')}
         
         <Table data={tablee} setEdit={setEdit} setIid={setIid}/>
         {console.log(edit)}

         <Card edit={edit} setEdit={setEdit}
         iid={iid} />

      </div>
    </div>
  )
}

export default Total
