import axios from 'axios';

const BASE_URL = 'https://polls.apiblueprint.org';

class ApiService {
  constructor() {
    const service = axios.create({
      baseURL: BASE_URL,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
    this.entryPoint = '';
  }

  handleSuccess = (response) => {
    return response;
  }

  handleError = (error) => {
    console.log(JSON.stringify({ error: { status: error.response.status, message: error.response.statusText } }))
    return Promise.reject(error)
  }

  async get(path, params, callback) {
    return await this.service.get(path, {
      params: params
    }).then(
      (response) => callback(response.status, response.data)
    );
  }

  async post(path, payload, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => callback(response.status, response.data));
  }
};


// create an instance for the Api Service
const apiService = new ApiService();

export default apiService;

