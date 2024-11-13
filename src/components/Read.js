import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {

    const [apiData,setApiData] =useState ([]);
    function getData(){

          axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>{setApiData(response.data)}).catch((error) =>
            console.log(error)
       )
    }

    useEffect (()=>{

         getData();
    },[]);


   async function handleDelete (id) {

           //axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(()=> {getData();}).catch((error) =>
           // console.log(error)
      // )
  
       await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
          method :'DELETE'
       }).then((res) => {
            if(res.status !==200){
               return 
            }

            else {
               setApiData(apiData.filter((user)=>{return user.id !== id}))
            }
       })
          
    }  

    function setDataToStorage (id,firstname,lastname,email,Department){
  
          localStorage.setItem('id',id);
          localStorage.setItem('firstname',firstname);
          localStorage.setItem('lastname',lastname);
          localStorage.setItem('email',email);
          localStorage.setItem('Department',Department);


    }

  return (
    <>
    
    <div className='row'>
        <div className='col-md-12'>
            <div className='mb-2 mt-2'>
                <Link to='/create'>
                <button className='btn btn-primary'> Create new data</button> 
                </Link>
          
            </div>

   <table className='table table-bordered table-stripe table-dark table-hover'>    
     <thead>

         <tr>

              <th> </th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>Department</th> 
              {/* <th>Edit</th>
              <th>Delete</th> */} 
         </tr>
     </thead>
     <tbody>
          {

            apiData.map((item)=> {

                  return (<>
                  
                  <tr>
         <td>ID</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.company.catchPhrase}</td>
              {/* <th>Edit</th>
              <th>Delete</th>  */}

   <td>
    <Link to= '/edit'>
    <button className='btn btn-primary'onCanPlay={()=>setDataToStorage(item.id,item.name,item.username,item.email,item.company.catchPhrase)}> Edit</button>
    </Link>
    </td>  
   <td><button className='btn btn-danger' onClick={()=>{if(window.confirm("Are you sure to delete the data ?")){handleDelete(item.id)}}}> Delete</button></td>
             
         </tr>

                  </>)
            })
          }
         
     </tbody>

   </table>

        </div>




    </div>
    </>
    
  )
}

export default Read
