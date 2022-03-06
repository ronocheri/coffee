import React from "react";
import {useState} from 'react'
import WorkerList from "./WorkerList";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import axios from 'axios';
import SearchInput from "./SearchInput";


//const url="http://localhost:3000/workers";
const url="http://cts02.iscar.com:83/coffeeServer/workers";
var DUMMY_DATA=[];



function Members()
{
  const[waiting,setWaiting]=useState(true);
 // const[searchWorker,setSearchWorker]=useState(true);

  const fetchData= async(url)=>{
    //setLoading(true);
  
    console.log(url);
    const response= await axios(url).catch((err) => console.log(err));
  
  if(response) //success
  {
      const data = response.data;
      console.log(data);
      if(data.length>0)
      {
        DUMMY_DATA=data;
          // setLoading(false);
          //sliceTR();
          setWaiting(false);
          // setError(false);
      }
      else{
          //setWaiting(false);
          console.log("error! couldn't retrieve any question");
      }
  }
  else
  {
      //setWaiting(true);
      console.log("error! couldn't retrieve any question");
  }
  } 

fetchData(url);

  function senEmail(e)
  {
    console.log(e.target.querySelector('input'))
    var emailInput=e.target.querySelector('input');
    var userEmail=emailInput.value;
    console.log(userEmail)
    e.preventDefault();
    window.open('mailto:'+userEmail);
  }

  // function sliceTR()
  // {
  //   var tbl = document.getElementById("workers"); // This have to be the ID of your table, not the tag
  //   var tr = tbl.getElementsByTagName("tr")[0];
  //   var td = tr.getElementsByTagName("td");

  //   for (let i = 0; i < td.length; i++){
  //   if (i % 3 == 0) {

  //     tbl.insertRow(i/3);
  //     }
  //   }
  // }

// if(!waiting)
      return(
        <div >
        <table id="workers" className={"table table-hover"}>
          <tbody>
         
          {DUMMY_DATA.map((worker)=>{

            return (

              // if(worker.id%3==0)
              // {
                
              // }
              <tr key={worker.id}>
              <td   style={{width:"100%", textAlign:"center"}}>
              <h3>{worker.firstName+" "+worker.lastName}</h3>
              <img src={process.env.PUBLIC_URL +worker.imagePath} alt={worker.firstName}  />
              <p><b>Team:</b> {worker.team}<br/>
              {worker.descripton}
              </p>
              <form onSubmit={senEmail}>    
                <input type="email" name="user_email" defaultValue={worker.email} hidden/>
                <div className="centered">
                  <Button aria-label="email" type="submit">
                      <EmailIcon sx={{ fontSize: 35 }}/>
                    </Button>
                  </div>  
              </form>
              </td>
              </tr>
              )
        })}
      
      
        </tbody>
        </table>
      </div>
        );
  }
export default Members;