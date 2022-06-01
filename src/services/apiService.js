import requests from './mockServer.json'

export default class RequestsService {
    getRequests(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.9){
                //    reject(new Error('Something wrong')) 
                // }
                resolve(requests)
            }, 700);
        })
    }
}