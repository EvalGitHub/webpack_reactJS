import axios from 'axios';

axios.defaults.withCredentials = true;
axios.interceptors.request.use((config: any) => {
  return config;
}, (err:any) => {
  return Promise.reject(err);
});

axios.interceptors.response.use((response:any) => {
  return response;
}, (err:any) => {
  console.log(err);
  return Promise.reject(err);
});

export default axios;