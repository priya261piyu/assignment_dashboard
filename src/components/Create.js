import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Create = () => {

    const [id,setId] = useState('');  
    const [firstname,setfirstname] = useState('');
    const [ lastName , setlastname] = useState ('');
    const [ email , setemail] =useState ('');
    const [ Department,setdepartment] = useState('');
  
     const navigate = useNavigate();

     const handleSubmit =(e)=>{
 
         e.preventDefault(); 
         axios.post('https://jsonplaceholder.typicode.com/users',

            {

                user_id: id,
             user_firstname: firstname ,
             user_lastname :lastName ,
             user_email : email,
             user_department : e.Department

            }).then(()=>{

              navigate('/');
         }).catch((error) =>
            console.log(error)
       )
          
     }
   
    return (
    <>
    
    <div className='row'>

        <div className='col-md-4'></div>

        <div className='mb-2 mt-2'>
                <Link to='/'>
                <button className='btn btn-primary'> Read data</button>   
                </Link>
           
            </div>
       
        <div className='bg-primary p-4 text-center'> 
             <h1>User Management dashboard</h1>

        </div>
       <form onSubmit={handleSubmit}>  

       <div className='form-group'>

    
         <label>ID : </label>
         <input type='number' placeholder='ID' className='form-control' onChange={(e)=>setId(e.target.value)}/> 
      </div>

      
       <div className='form-group'>

         <label>First Name : </label>
         <input type='text' placeholder='First Name' className='form-control' onChange={(e)=>setfirstname(e.target.value)}/> 
      </div>

      <div className='form-group'>

         <label>Last Name : </label>
         <input type='text' placeholder='last Name' className='form-control' onChange={(e)=>setlastname(e.target.value)}/> 
      </div>


      <div className='form-group'>

         <label>email : </label>
         <input type='text' placeholder='email' className='form-control' onChange={(e)=>setemail(e.target.value)}/> 
      </div>

      <div className='form-group'>

         <label>Department : </label>
         <input type='text' placeholder='Department' className='form-control' onChange={(e)=>setdepartment(e.target.value)}/> 
      </div>
   <br/>  
       
       <div className='d-grid'>

       <input  type ='submit' value ='submit' className='btn btn-primary'/>

       </div>
       </form> 
       {id|| firstname || lastName || email || Department? <h3>data added successfully</h3> :""}  
       {/* {id}
       <br/>
       {firstname}
       <br/>
       {lastName}
       <br/> */}
    </div>
    
    </>
    
  )
}

export default Create
