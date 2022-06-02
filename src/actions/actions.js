import RequestsService from "../services/apiService"

const apiService = new RequestsService();

const setRequestsAC = (requests) => {
    return {
        type: 'SET_REQUESTS',
        requests
    }
}

const chooseRequestsAC = (requests) => {
    return {
        type: 'CHOOSE_REQUESTS',
        requests
    }
}

const toggleLoadingAC = (status) => {
    return {
        type: 'TOGGLE_LOADING',
        status
    }
    
}

const getRequestsAC = () => {
    return (dispatch) => {
      apiService.getRequests()
      .then((data) => {
        dispatch(setRequestsAC(data));
      });
    
    }
  };



export {setRequestsAC, chooseRequestsAC, toggleLoadingAC, getRequestsAC}