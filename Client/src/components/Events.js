
import React from "react";
import classes from '../style/Article.module.css'
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
let events = [];

// function calculateNumberOfEvents()
// {
//     const fs = require('fs');
//     const dir = './directory';

//     fs.readdir(dir, (err, files) => 
//     {
//         console.log(files.length);
//         for(var i=0;i<files.length;i++)
//         {
//             events.push(files[i])
//             console.log(files[i]);
//         }
        
//     });
// }

function Events()
{
    // const handleMouseEnter = e => {
    //     e.target.style.background = "grey"
    //   }
    //   const handleMouseLeave = e => {
    //     e.target.style.background = "maroon"
    //   }

    return(
        <div>
          <h1 className={"centered"}>Events</h1>
          <div  >

              <div className={classes.centeredCard}>
                  <b>2021</b>
                  <Link to={{pathname:'/eventYear',state:{ year: "2021" }}}>
                  <img src={process.env.PUBLIC_URL+"assets/Events/2021/1636952966445.jpg"}  className={"centerImg eventImg"} style={{width:'75%'}} />
                  </Link>
              </div>

              <div className={classes.centeredCard}>
              <b>2019</b>
              <Link to={{pathname:'/eventYear',state:{ year: "2019" }}}>
                  <img src={process.env.PUBLIC_URL+"assets/Events/2019/IMG_20191127_145144.JPG"} className={"centerImg eventImg"} style={{width:'75%'}}/> 
                </Link>
              </div>
            {/* <img src={process.env.PUBLIC_URL+"assets/haim.JPG"} alt="Avatar" className={"centerImg"} style={{width:'50%'}} /> */}
          </div>
        </div>
    );
}

export default Events;