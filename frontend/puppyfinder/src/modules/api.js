import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0.0.0.0:8080/',
  withCredentials: false,
  headers: {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

async function getAnimalList() {
  try {
    const animalsList = await api.get('animals/');
    return animalsList;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getAnimalInfoById(animalId) {
  try {
    const animalInfo = await api.get(`animals/animal-info/${animalId}/`);
    return animalInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getAnimalInfoByQuery(animal) {
  try {
    const animalInfo = await api.get('animals/animal-info/', animal);
    return animalInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loginUser(data) {
  try {
    const response = await api.post('auth/signin-user/', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loginAdmin(data) {
  try {
    const response = await api.post('auth/signin-admin/', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loginOrg(data) {
  try {
    const response = await api.post('auth/signin-org/', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function registerUser(data) {
  try {
    const response = await api.post('auth/signup-user/', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function registerAdmin(data) {
  try {
    const response = await api.post('auth/signup-admin/', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function registerOrg(data) {
  try {
    const response = await api.post('auth/signup-org/', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function listOrgs() {
  try {
    const orgList = await api.post('org/');
    return orgList;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getOrgInfoById(orgId) {
  try {
    const orgInfo = await api.post(`org/org-info/${orgId}/`);
    return orgInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getOrgInfoByQuery(org) {
  try {
    const orgInfo = await api.post('org/org-info/', org);
    return orgInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getAnimalListByOrg(orgId) {
  try {
    const animalsList = await api.get(`org/${orgId}/list-animals/`);
    return animalsList;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getOrgAnimalInfoById(orgId, animalId) {
  try {
    const animalInfo = await api.get(`org/${orgId}/animal-info/${animalId}/`);
    return animalInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getOrgAnimalInfoByQuery(orgId, animal) {
  try {
    const animalInfo = await api.get(`org/${orgId}/animal-info/`, animal);
    return animalInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function registerAnimal(orgId, data) {
  try {
    const response = await api.post(`org/${orgId}/add-animal/`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateAnimalById(orgId, animalId, animal) {
  try {
    const animalInfo = await api.get(`org/${orgId}/update-animal/${animalId}/`, animal);
    return animalInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function deleteAnimalById(orgId, animalId) {
  try {
    const response = await api.get(`org/${orgId}/delete-animal/${animalId}/`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateOrgById(orgId, org) {
  try {
    const orgInfo = await api.get(`org/update-org/${orgId}/`, org);
    return orgInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getUserInfoById(userId) {
  try {
    const userInfo = await api.post(`user/user-info/${userId}/`);
    return userInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getUserInfoByQuery(user) {
  try {
    const userInfo = await api.post('user/user-info/', user);
    return userInfo;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateUserById(userId, user) {
  try {
    const userInfo = await api.get(`user/update-user/${userId}/`, user);
    return userInfo;
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

export default {
  getAnimalList,
  getAnimalInfoById,
  getAnimalInfoByQuery,
  loginUser,
  loginAdmin,
  loginOrg,
  registerUser,
  registerAdmin,
  registerOrg,
  listOrgs,
  getOrgInfoById,
  getOrgInfoByQuery,
  getAnimalListByOrg,
  getOrgAnimalInfoById,
  getOrgAnimalInfoByQuery,
  registerAnimal,
  updateAnimalById,
  deleteAnimalById,
  updateOrgById,
  getUserInfoById,
  getUserInfoByQuery,
  updateUserById,
  sendApplicationForm,
};
