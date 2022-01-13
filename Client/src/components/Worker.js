import { useContext } from 'react';
import classes from '../style/Worker.module.css';
import Card from './Card';

function Worker(props)
{

    return (<li className={classes.item}>
        <Card>
            <div className={classes.image}> 
                <img src={props.image} alt={props.firstName}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.firstName+" "+props.lastName}</h3>
                <p><b>Team: </b>{props.team}</p>
                <p>{props.description}</p>
            </div>
        </Card>
        </li>)
}
export default Worker;