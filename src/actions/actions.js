const getRequestsAC = () => {
    return {
        type: 'GET_REQUESTS'
    }
}

const chooseRequestsAC = (requests) => {
    return {
        type: 'CHOOSE_REQUEST',
        requests
    }
}


export {getRequestsAC, chooseRequestsAC}