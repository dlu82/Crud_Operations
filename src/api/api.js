import axios from 'axios';

const BASE_URL = 'http://192.168.1.152:8000/';

export const getAxiosInstance = async () => {
  console.log('CALL API FUCTION=====');
  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    // instance.interceptors.request.use(
    //   function (config) {
    //     return config;
    //   },
    //   function (error) {
    //     return Promise.reject(error);
    //   },
    // );

    instance.interceptors.response.use(
      response =>
        new Promise((resolve, reject) => {
          console.log(response, 'response');
          resolve(response);
        }),
      error => {
        if (!error.response) {
          console.log(error, 'error');
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      },
    );
    return instance;
  }
};
