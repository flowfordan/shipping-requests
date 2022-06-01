import styles from './Homepage.module.css';
import { RequestsTable, TrackingMap } from '../../components';
import Split from 'react-split'

const Homepage = () => {

   
   return(

    <Split className={styles.split}
    sizes={[35, 65]} expandToMin={true} minSize={300}
    >
        <RequestsTable />
        <TrackingMap />
    </Split>    
    )
}


export {Homepage}