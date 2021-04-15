import axios from 'axios';

const apiURL = 'https://openlibrary.org';
export const coverURL = 'https://covers.openlibrary.org/b/isbn/'; // isbn - id

const instance = axios.create({
  baseUrl: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const appAPI = {

    getBooks() {
        return instance.get(apiURL).then(response => response.data)
    },
    searchBooks(title) {
        return instance.get(apiURL + `/search.json?title=${title}`).then(response => response.data)
    },
    getCovers(id, size) {
        return instance.get(coverURL + `${id}-${size}.jpg`).then(response => response.data)
    }
}