import { useEffect,useState } from "react";
import classes from '../style/MainNavigation.module.css'
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {makeStyles} from '@material-ui/core/styles';

import {BiArrowFromBottom} from 'react-icons/bi';


const useStyles=makeStyles((theme)=>
({
        toTop:
        {
            zIndex:2,
            position:'fixed',
            bottom: '2vh',
            background: '#5c8ce6',
            color: "black",
            right: "5%"          
        } }
))

function ScrollToTop()
{


const classes = useStyles();
const [isVisible, setIsVisible]=useState(false)

const toggleVisibility=()=>{
    if(window.scrollY>300)
        setIsVisible(true) 
    else
        setIsVisible(false) 
}

const scrollToTop=()=>{
window.scrollTo({
    top:0,
    behavior:'smooth'
})
}

useEffect(()=>
{
 window.addEventListener('scroll',toggleVisibility) 
 
 return()=>{
     window.removeEventListener('scroll',toggleVisibility)
 }
},[])

    return (
    <div className="">
        {isVisible &&
        <IconButton  onClick={scrollToTop} className={classes.toTop}>
            <ExpandLessIcon/>
        </IconButton>
        }
    </div>
    )
} 
export default ScrollToTop;