import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // remplacer par l'URL de votre backend Node.js
});

export default instance;