import { textAlign, width } from "@mui/system";
import React from "react";
import classes from '../style/Article.module.css'
function ArticlePage()
{
    return(
        <div>
          <h1 className={"centered"}>How to become a boss</h1>
          <div className={classes.centeredCard}>
            <img src={process.env.PUBLIC_URL+"assets/haim.JPG"} alt="Avatar" className={"centerImg"} style={{width:'50%'}} />
            <div className={classes.container}>
              <h4 className={"centered"}><b>Haim Amiray</b></h4> 
              <p  className={"centered"}>ENOVIA SmarTeam is a legacy product data management (PDM) application for engineering departments and small to medium sized companies. SmarTeam is for those with a need for design data management and have less-complex products and product lines that require single-discipline or single-site collaboration. These companies typically have little need for enterprise-wide product or process standardization and do not anticipate expansion to multiple sites either through organic growth or acquisitions. 

Small to mid-sized manufacturers and existing SmarTeam customers with a need for product lifecycle management (PLM), multi-discipline or multi-site collaboration, sustainable innovation, business applications leveraging PLM data, enterprise-wide quality management, integrated project management, requirements management or advanced change and configuration management should consider 3DEXPERIENCE ENOVIA.</p> 
            </div>
          </div>
         
        </div>
    );
}
export default ArticlePage;