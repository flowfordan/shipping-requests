import styles from './Homepage.module.css';
import { RequestsTable, TrackingMap } from '../../components';
import { Spin } from 'antd';
import Split from 'react-split';
import { connect } from "react-redux";
import { getRequestsAC, chooseRequestsAC, toggleLoadingAC } from '../../actions/actions';
import { useEffect } from 'react';


const Homepage = ({
    requestsData, isLoading, 
    requestsChosen, onGetRequests, 
    onToggleLoading, onChooseRequests
}) => {

   useEffect(() => {
        onToggleLoading(true);
        onGetRequests();
        setTimeout(() => onToggleLoading(false), 900)    
   }
   , [])

   const dataView = (
   <Split className={styles.split}
    sizes={[45, 55]} expandToMin={true} minSize={300}
    >
        <RequestsTable 
        requests={requestsData} 
        onChooseRequests={onChooseRequests}/>
        <TrackingMap requestsChosen={requestsChosen}/>
    </Split> ) 

   return(
    <div className={styles.block}>
    {isLoading? <Spin size="large" tip="Загрузка..."/> : dataView}  
    </div>  
    )
}

const mapStateToProps = ({requestsData, isLoading, requestsChosen}) => {
    return {
        requestsData,
        isLoading,
        requestsChosen,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
         onGetRequests: () => dispatch(getRequestsAC()),
         onChooseRequests: (requests) => dispatch(chooseRequestsAC(requests)),
         onToggleLoading: (status) => dispatch(toggleLoadingAC(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
