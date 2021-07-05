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
    return Promise.reject(error);
  }
}

async function getAnimalListByOrg(org) {
  try {
    const animalsList = await api.get('/animals/', org);
    return animalsList;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function registerAnimal(data) {
  try {
    const response = await api.post('path', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function registerOrg(data) {
  try {
    const response = await api.post('path', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function registerPerson(data) {
  try {
    const response = await api.post('path', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function sendApplicationForm(data) {
  try {
    const response = await api.post('path', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loginPerson(data) {
  try {
    const response = await api.post('path', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loginOrg(data) {
  try {
    const response = await api.post('path', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default {
  getAnimalList,
  registerAnimal,
  registerOrg,
  registerPerson,
  sendApplicationForm,
  loginPerson,
  loginOrg,
  getAnimalListByOrg,
};
