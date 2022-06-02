import requests from './mockServer.json'

export default class RequestsService {
    getRequests(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(requests)
            }, 700);
        })
    }
}