import { Link } from "react-router-dom";
import classes from '../style/MainNavigation.module.css'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';

function MainNavigation()
{
    return <header className={classes.header}> 
    <div className={classes.logo}><img src={process.env.PUBLIC_URL+"assets/logo.png"} height={100} /></div>

    
    <nav>
        <ul>
            <li ><Link to='/'><HomeIcon sx={{ fontSize: 40, color: "white" }}/>Home</Link></li>
            <li ><Link to='/article'><ArticleIcon sx={{ fontSize: 40, color: "white" }}/>Article</Link></li>
            <li ><Link to='/members'><ContactsIcon sx={{ fontSize: 40, color: "white" }}/>Members</Link></li>
        </ul>
    </nav>
    </header>
} 
export default MainNavigation;