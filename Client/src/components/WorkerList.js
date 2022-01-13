import Worker from './Worker';
import classes from '../style/WorkerList.module.css';

function WorkerList(props)
{
    return (<ul className={classes.list}>
        {props.workers.map((worker)=>(  
        <Worker
        key={worker.id}
        id={worker.id}
        image={worker.image}
        firstName={worker.firstName}
        lastName={worker.lastName}
        team={worker.team}
        description={worker.description}
        />))}
    </ul>
    )
}
export default WorkerList;