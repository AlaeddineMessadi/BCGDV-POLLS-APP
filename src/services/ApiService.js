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

  // todo implement a relevant solution for first call for  the endpoint
  getEntryPoint = () => {
    console.log('getting entry point')
    if (this.entryPoint)
      return this.entryPoint
    else
      return this.get('', (status, data) => {
        this.entryPoint = data.questions_url;
        console.info('Entry Point is defined');
      }, true)
  }

  entryPointChecker = () => {
    if (!this.entryPoint) {
      console.error('Entry Point is Undefined');
      return;
    }
  }

  get = (path, params, callback) => {
    return this.service.get(path, {
      params: params
    }).then(
      (response) => callback(response.status, response.data)
    );
  }

  post = (path, payload, callback) => {
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

// set The entry point
// apiService.getEntryPoint();

export default apiService;

