import axios from 'axios'

export const serviceApi = () => {
    return axios.create({
        baseURL: 'https://724c-2001-4453-362-1500-4f0-fd62-b7bb-8b19.ngrok-free.app/api/'
    })
}

/* 
LIVE LINK: 

LOCAL LINK: https://724c-2001-4453-362-1500-4f0-fd62-b7bb-8b19.ngrok-free.app/api/

*/