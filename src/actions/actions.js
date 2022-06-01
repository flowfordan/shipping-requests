const getRequestsAC = () => {
    return {
        type: 'GET_REQUESTS'
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

export {getRequestsAC, chooseRequestsAC, toggleLoadingAC}