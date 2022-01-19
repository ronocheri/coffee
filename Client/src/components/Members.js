import React from "react";
import {useState} from 'react'
import WorkerList from "./WorkerList";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import axios from 'axios';



const url="http://localhost:3000/workers";
var DUMMY_DATA=[];



function Members()
{
  const[waiting,setWaiting]=useState(true);

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
          // setQuestions(data);
          // setLoading(false);
          setWaiting(false);
          // setError(false);
      }
      else{
          //setWaiting(false);
          // setError(true);
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
    if(document.getElementById('mesToSend').value = '')
    {
      alert("Message can't be empty!")
      return ;
    }
    e.preventDefault();

    emailjs.sendForm('service_jwauyzq', 'template_ieqdkdk', e.target, 'user_nllkLZFaKkVGnxhq3sSru')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
// if(!waiting)
      return(
        <div >
        {/* <h1 className={"centered"}>All Workers</h1> */}
        <table className={"table table-hover"}>
          <tbody>
          
          {DUMMY_DATA.map((worker)=>{

            return (
              <tr key={worker.id}>
              <td  style={{width:"100%", textAlign:"center"}}>
              <h3>{worker.firstName+" "+worker.lastName}</h3>
              <img src={process.env.PUBLIC_URL +worker.imagePath} alt={worker.firstName}  />
              <p><b>Team:</b> {worker.team}</p>
              <p>{worker.description}</p>
              <form onSubmit={senEmail}>
                <label hidden>name</label>
                <input type="text" name="name" defaultValue={worker.firstName} hidden/>

                <label hidden>Email</label>
                <input type="email" name="user_email" defaultValue={worker.email} hidden/>

                <div className="centered moveLeft">
                  <textarea  id='mesToSend' type="text" name="message" placeholder='Write a message...' style={{minHeight:"50px"}}/>
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