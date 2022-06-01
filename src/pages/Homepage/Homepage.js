import styles from './Homepage.module.css';
import { RequestsTable, TrackingMap } from '../../components';
import Split from 'react-split'

const Homepage = () => {

    //load set loading, loaded - sent data
   
   return(
    <div className={styles.block}>
    <Split className={styles.split}
    sizes={[35, 65]} expandToMin={true} minSize={300}
    >
        <RequestsTable requests={[]}/>
        <TrackingMap chosenRequests={[]}/>
    </Split>  
    </div>  
    )
}


export {Homepage}