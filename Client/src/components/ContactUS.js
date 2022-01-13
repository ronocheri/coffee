import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Button from '@mui/material/Button';

function ContactUS()
{
    function SendUsMail()
    {
        window.open('mailto:rono@iscar.co.il');
    }

    return (
        <div className="centered">
          <label >Contact Us </label>
          <Button aria-label="email" type="submit" onClick={SendUsMail}>
                    <EmailIcon sx={{ fontSize: 35 }}/>
          </Button>
        </div>
      );
}
export default ContactUS;