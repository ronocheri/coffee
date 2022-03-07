import React from "react";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import axios from 'axios';

// var DUMMY_DATA=["ron","mor","moshe","nir","olga"];


function SearchInput(props)
{
  console.log(props)
  const {data}=props
  const[searchWorker,setSearchWorker]=useState("");
      return(
          <div>
        <div className={"centered"}>
         <input type="text" 
        placeholder="Search..."
        onChange={(event)=>
        {
            setSearchWorker(event.target.value)
        }
      }
        /></div>
        {
                // DUMMY_DATA.filter((val)=>
                // {
                //         if(searchWorker==="")
                //             return val;
                //         else if(val.toLocaleLowerCase().includes(searchWorker.toLocaleLowerCase()))
                //             return val;
                // }).map((val,key)=>
                // {
                //     return(
                //         <div key={key} className={"centered"}>
                //             <p>{val}</p>
                //         </div>
                //     )
                // })

                data.filter((val)=>
                {
                        if(searchWorker==="")
                            return val;
                        else if(val.toLocaleLowerCase().includes(searchWorker.toLocaleLowerCase()))
                            return val;
                }).map((val,key)=>
                {
                    return(
                        <div key={key} className={"centered"}>
                            <p>{val}</p>
                        </div>
                    )
                })
        }  
      </div>
        );
  }
export default SearchInput;