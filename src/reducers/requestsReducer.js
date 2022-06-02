const SET_REQUESTS = 'SET_REQUESTS';
const CHOOSE_REQUESTS = 'CHOOSE_REQUESTS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

let initialState = {
    requestsData: [],
    requestsChosen: [],
    isLoading: false
};

const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REQUESTS:
            return {
                ...state, 
                requestsData: action.requests.requestsData};
        case CHOOSE_REQUESTS:
            return {
                ...state, 
                requestsChosen: action.requests};
        case TOGGLE_LOADING:{
            return {
                ...state, 
                isLoading: action.status}
        }
        default:
            return state;
    }

}

export { requestsReducer }
