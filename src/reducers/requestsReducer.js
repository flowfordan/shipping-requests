const GET_REQUESTS = 'GET_REQUESTS';
const CHOOSE_REQUESTS = 'CHOOSE_REQUESTS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

let testData = [
    {
        requestId: 0,
        fromPoints: [
            {fromId: 56, fromCoords: "55.7828, 38.4494"},
            {fromId: 434, fromCoords: "55.9169, 37.9742"},
            {fromId: 32, fromCoords: "55.5411, 37.0898"}
        ],
        toPoints: [
            {toId: 21, toCoords: "55.4275, 37.554"},
            {toId: 65, toCoords: "55.4134, 38.2379"}
        ]
    },
    {
        requestId: 1,
        fromPoints: [
            {fromId: 6, fromCoords: "55.9953, 37.1667"},
            {fromId: 45, fromCoords: "55.7287, 36.9031"}
        ],
        toPoints: [
            {toId: 54, toCoords: "55.3198, 38.6856"},
            {toId: 25, toCoords: "55.8028, 38.6554"},
            {toId: 37, toCoords: "56.1333, 37.9221"}
        ]
    }
]

let initialState = {
    requestsData: [],
    requestsChosen: [],
    isLoading: false
};

const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUESTS:{
            let newRequests = testData;
            return {
                ...state, 
                requestsData: newRequests}
        };
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