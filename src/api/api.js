import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://603e38c548171b0017b2ecf7.mockapi.io'
})

// api
export const cardsAPI = {
    getCards() {
       return  instance.get('homes');
    }}
