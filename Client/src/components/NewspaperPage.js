import { textAlign, width } from "@mui/system";
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import classes from '../style/NewspaperPage.module.css'
import { Worker } from '@react-pdf-viewer/core';
import axios from 'axios';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer } from '@react-pdf-viewer/core';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



const serviceUrl="http://localhost:3000/issues";
const serverUrl="http://localhost:3000";
let issuesData=[]

function NewspaperPage()
{
  
  let options=[]
  
  const defaultLayoutPluginInstance = defaultLayoutPlugin(); // Create new plugin instance
  const [selectedOption, set_selectedOption] = React.useState('1')
  const [pdfUrl, setPdfUrl] = React.useState(serverUrl+"/assets/PDF_files/1.pdf")


  function handleChange(_selectedOption) {
    //console.log(_selectedOption.value);
      set_selectedOption(_selectedOption.value)
      var index=_selectedOption.value-1;
      //console.log(issuesData[index].pdfPath)
      setPdfUrl(serverUrl+issuesData[index].pdfPath)
      //console.log(pdfUrl);
      
  };

  const fetchData= async(serviceUrl)=>{
  
    const response= await axios(serviceUrl).catch((err) => console.log(err));
  
    if(response) //success
    {
        const data = response.data;
        //console.log(data);
        if(data.length>0)
        {
          issuesData=data;
         
          options.push({ value: issuesData[0].id, label: issuesData[0].id }) //in aim to show issue number 1
          for (let i = 0; i < issuesData.length; i++) 
          {
            options.push({ value: issuesData[i].id, label: issuesData[i].id })
          }

        }
        else{
            console.log("error! couldn't retrieve any issues");
        }
    }
    else
    {
        console.log("error! couldn't retrieve any issues");
    }
  } 

fetchData(serviceUrl);

    return(
        <div>
          <h1 className={"centered"}>Newspaper Issues</h1>
          <h5 className={"centered"}>Please choose your issue number</h5>
          <div className={classes.centeredCard}>
          <Select  value="1" options={options} onChange={handleChange}/>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
          <div
              style={{
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  height: '750px',
              }}>
               
              <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
          </div>
        </Worker>
          </div>

        </div>
    );
}
export default NewspaperPage;