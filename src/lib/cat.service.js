// @ts-nocheck
import axios from 'axios';

// The base URL of the cat API
const BASE_URL = 'https://api.thecatapi.com/v1';

// A function that returns a promise that resolves with an array of 10 cat objects
export function getCats() {
    return axios
        .get(`${BASE_URL}/images/search?limit=10`)
        .then((response) => response.data);
}

// A function that returns a promise that resolves with a cat object by its id
export function getCatById(id) {
    return axios
        .get(`${BASE_URL}/images/${id}`)
        .then((response) => response.data);
}