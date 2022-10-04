import axios from 'axios'

const API_URL = "https://pokeapi.co/api/v2";

export function get(actionUrl: string) {
    const url = API_URL + actionUrl;

    return axios.get(url,
    {
        headers: { Pragma: 'no-cache' },
        responseType: 'json'
    });
}

export function post(actionUrl: string, model: any) {
    const url = API_URL + actionUrl;

    return axios.post(url, model,
    {
        headers: { Pragma: 'no-cache' },
        responseType: 'json'
    });
}
