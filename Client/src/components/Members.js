import React from "react";
import Table from '@mui/material/Table';
import {useState} from 'react'
import Paper from "@material-ui/core/Paper";
import WorkerList from "./WorkerList";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { VerticalAlignCenter } from "@material-ui/icons";
import { minWidth } from "@mui/system";




const DUMMY_DATA = [
  {
    id: '1',
    firstName: 'Olga',
    lastName: 'Perlman',
    image:'assets/olga.jpg',
    team: 'Development',
    description:
      'A development team leader.',
    email:'OlgaM@iscar.co.il',
  },
  {
    id: '2',
    firstName: 'Merav',
    lastName: 'Shlomovich',
    image:'assets/merav.jpg',
    team: 'Development',
    description:
      'A development team member. Has a twin sister.',
      email:'meravs@iscar.co.il',
  },

  {
    id: '3',
    firstName: 'Moshe',
    lastName: 'Saban',
    image:'assets/moshe.jpg',
    team: 'Development',
    description:
      'A development team member.',
    email:'moshesa@iscar.co.il',
  },

  {
    id: '4',
    firstName: 'Tal',
    lastName: 'Abergel',
    image:'assets/talab.jpg',
    team: 'PDM',
    description:
      'A PDM team member.',
      email:'tala@iscar.co.il',
  },
  {
    id: '5',
    firstName: 'Nir',
    lastName: 'Tal',
    image:'assets/nir.jpg',
    team: 'PDM',
    description:
      'A PDM team leader.',
      email:'nirt@iscar.co.il',
  },
  {
    id: '6',
    firstName: 'Inbal',
    lastName: 'Katz Eshet',
    image:'assets/inbal.jpg',
    team: 'PDM',
    description:
      'A PDM team member.',
      email:'InbalK@iscar.co.il',
  },
  {
    id: '7',
    firstName: 'Haim',
    lastName: 'Amiray',
    image:'assets/haimA.jpg',
    team: 'PDM',
    description:
      'A PDM team member.',
      email:'haim_a@iscar.co.il',
  },
  {
    id: '8',
    firstName: 'Tamar',
    lastName: 'Gilson',
    image:'assets/tamar.jpg',
    team: 'PDM',
    description:
      'A PDM team member.',
      email:'TamarG@iscar.co.il',
  },
  {
    id: '9',
    firstName: 'Haim',
    lastName: 'Amiray',
    image:'assets/haimA.jpg',
    team: 'PDM',
    description:
      'A PDM team member.',
      email:'haim_a@iscar.co.il',
  },
  {
    id: '10',
    firstName: 'Natalia',
    lastName: 'Kozlitin',
    image:'assets/natali.jpg',
    team: 'PDM',
    description:
      'A PDM team member.',
      email:'nataliak@iscar.co.il',
  },
  {
    id: '11',
    firstName: 'Igal',
    lastName: 'Nave',
    image:'assets/igal.jpg',
    team: 'CAD',
    description:
      'A CAD team Leader.',
      email:'igaln@iscar.co.il',
  },
  {
    id: '12',
    firstName: 'Ofri',
    lastName: 'Sheffer',
    image:'assets/ofri.jpg',
    team: 'CAD',
    description:
    'A CAD team member.',
    email:'ofris@iscar.co.il',
  },
  ,
  {
    id: '13',
    firstName: 'Rami',
    lastName: 'Caspi',
    image:'assets/rami.jpg',
    team: 'CAD',
    description:
      'A CAD team Leader.',
      email:'ramik@iscar.co.il',
  },
  {
    id: '14',
    firstName: 'Hanan',
    lastName: 'Hino',
    image:'assets/hanan.jpg',
    team: 'CAD',
    description:
    'A CAD team member.',
    email:'Hananh@iscar.co.il',
  },
  {
    id: '15',
    firstName: 'Tal',
    lastName: 'Shalmoni',
    image:'assets/talSh.jpg',
    team: 'CAD',
    description:
    'A CAD team member.',
    email:'tal@iscar.co.il',
  },
  {
    id: '16',
    firstName: 'Oshra',
    lastName: 'Pint Levy',
    image:'assets/oshra.jpg',
    team: 'CAD',
    description:
    'A CAD team member.',
    email:'OshraP@iscar.co.il',
  },
  {
    id: '17',
    firstName: 'Rudi',
    lastName: 'Gruteke',
    image:'assets/rudi.jpg',
    team: 'Smarteam',
    description:
      'A Smarteam team Leader.',
      email:'gruteke@iscar.co.il',
  },
  {
    id: '18',
    firstName: 'Shalev',
    lastName: 'Ericson',
    image:'assets/shalev.jpg',
    team: 'Smarteam',
    description:
    'A Smarteam team member.',
    email:'shaleve@iscar.co.il',
  },
  {
    id: '19',
    firstName: 'Diana',
    lastName: 'Babkin',
    image:'assets/diana.jpg',
    team: 'Smarteam',
    description:
    'A Smarteam team member.',
    email:'dianab@iscar.co.il',
  },
  {
    id: '20',
    firstName: 'Elena',
    lastName: 'Stolirov',
    image:'assets/elena.jpg',
    team: 'Smarteam',
    description:
    'A Smarteam team member.',
    email:'elenast@iscar.co.il',
  },
  {
    id: '21',
    firstName: 'Erez',
    lastName: 'Shusan',
    image:'assets/erez.jpg',
    team: '-',
    description:
    'A Department manager.',
    email:'erezs@iscar.co.il',
  },
  {
    id: '22',
    firstName: 'Avital',
    lastName: 'Dahan',
    image:'assets/avital.jpg',
    team: '-',
    description:
    'A Development team leader.',
    email:'OlgaM@iscar.co.il',
  }, 
  {
    id: '23',
    firstName: 'Tair',
    lastName: 'Halfa',
    image:'assets/tair.jpg',
    team: 'ERP Applications',
    description:
    'ERP Programmer.',
    email:'tairh@iscar.co.il',
  },
];


function Members()
{
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
            <img src={process.env.PUBLIC_URL +worker.image} alt={worker.firstName}  />
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