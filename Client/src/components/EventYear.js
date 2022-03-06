
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from '../style/Article.module.css'
import SearchInput from "./SearchInput";
import axios from 'axios';

let events = [];
var DUMMY_DATA=[];
function EventYear(props)
{
    const location= useLocation()
    const {year}= location.state
    const[waiting,setWaiting]=useState(true);

    let url="http://cts02.iscar.com:83/coffeeServer/getPicturesOfEvent/"+{year}.year;

    const fetchPicturesData= async(url)=>{
        console.log({year});
        console.log(url);
        const response= await axios(url).catch((err) => console.log(err));
      
      if(response) //success
      {
          const data = response.data;
          console.log(data);
          if(data.length>0)
          {
            DUMMY_DATA=data;
              setWaiting(false);
          }
          else{
              console.log("error! data.length=0");
          }
      }
      else
      {
          console.log("error! no response");
      }
    } 

    fetchPicturesData(url)

    function fetchData()
    {
        fetchPicturesData(url)
    }

//     {DUMMY_DATA.map((pic)=>{

//         return (
//         <div>
//           <h1 className={"centered"}> {year}</h1>
//           <div  >

//               <div className={classes.centeredCard}>
             
//                   <img key={pic.key} src={pic.val} alt="Avatar" className={"centerImg eventImg"} style={{width:'75%'}} />

//                   {/* <img key={pic.key} src={process.env.PUBLIC_URL+ picture.team} alt="Avatar" className={"centerImg eventImg"} style={{width:'75%'}} /> */}
//               </div>

            
//           </div>
//         </div>
//     );
//  })
// }

return <div>
    {DUMMY_DATA.map((pic)=>{
        // console.log("process.env.PUBLIC_URL: "+process.env.PUBLIC_URL)
        console.log("picPath: "+pic.val)

        if(pic.val.includes("mp4"))
            return (
                <video key={pic.key} width="750" height="500" controls className={"centerImg"}>
                    <source  src={pic.val} type="video/mp4"/>
                </video>
            )
        else
        return (
        // <p key={pic.key}>{pic.val}</p>
        <img key={pic.key} src={pic.val} alt="Avatar" className={"centerImg eventImg"} style={{width:'33%'}} />
        )
    })}

     {/* <button onClick={fetchData()}>click</button> */}
</div>

 }

export default EventYear;