import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.105:8080',
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
