import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL,
  withCredentials: false,
  headers: { 'Cache-Control': 'no-cache' },
});

async function getAnimalList() {
  try {
    const animalsList = await api.get('/animals/');
    return animalsList;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export default {
  getAnimalList,
};
