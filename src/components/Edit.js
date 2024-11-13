import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios';
  
function Edit() {
 
   const[id,setId] = useState(0);
   const[firstname,setfirstname] = useState('');
   const[lastname,setlastname] = useState('');
   const[email,setemail] = useState('');
   const[Department,setdepartment] = useState(''); 
   const navigate =useNavigate ();

 useEffect (() =>{

     setId(localStorage.getItem('id'));
     setfirstname(localStorage.getItem('firstname'));
     setlastname(localStorage.getItem('lastname'));
     setemail(localStorage.getItem('email'));
     setdepartment(localStorage.getItem('Department')); 

 },[]) 

 const handleUpdate = async (e)=>{

    e.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/users/1',{

      // jsonplaceholder.typicode.com /posts/1
      // user_id: id, 
      user_firstname: firstname ,
      user_lastname :lastname ,  
      user_email : email,
      user_department : Department  
    }).then(()=>{ 
         navigate('/') 
    }).catch((error) =>
         console.log(error)
    )

   // await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
   //    method :'POST'
   // }).then((res) => {
   //      if(res.status !==200){
   //         return 
   //      }

   //      else {
   //         setApiData(apiData.filter((user)=>{return user.id !== id}))
   //      }
   // })
 } 

  return (
    <>
    
    <div className='row'>

        <div className='col-md-4'></div>

        <div className='mb-2 mt-2'>
                <Link to='/'>
                <button className='btn btn-primary'> Update data</button>    
                </Link>
           
            </div>
       
        <div className='bg-primary p-4 text-center'> 
             <h1>User Management dashboard</h1>

        </div>
       <form onSubmit={handleUpdate}>  

       <div className='form-group'>

    
         <label>ID : </label>
         <input type='number' placeholder='ID' className='form-control'/> 
      </div>

      
       <div className='form-group'>

         <label>First Name : </label>
         <input type='text' placeholder='First Name' className='form-control' onChange ={(e)=> setfirstname(e.target.value)} /> 
      </div>

      <div className='form-group'>

         <label>Last Name : </label>
         <input type='text' placeholder='last Name' className='form-control' onChange ={(e)=> setlastname(e.target.value)}/> 
      </div>


      <div className='form-group'>

         <label>email : </label>
         <input type='text' placeholder='email' className='form-control' onChange ={(e)=> setemail(e.target.value)}/> 
      </div>

      <div className='form-group'>

         <label>Department : </label>
         <input type='text' placeholder='Department' className='form-control' onChange ={(e)=> setdepartment(e.target.value)}/> 
      </div>
   <br/>  
       
       <div className='d-grid'>

       <input  type ='submit' value ='update' className='btn btn-primary'/>

       </div>
       </form > 
      
    </div>
    
    </>
    
  ) 
} 

export default Edit
