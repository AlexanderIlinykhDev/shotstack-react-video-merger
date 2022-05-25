import axios, { AxiosResponse } from 'axios';

//Очень плохо, токены так не хранят
const token = 'AQAAAABXo1nYAAfi9NW9crs7YE-biO-y3vpjHOg';

export interface API {
  getUploadLink: (fileName: string) => any;
  uploadFile: (link: string, file: any) => any;
  getDownloadLink: (fileName: string) => any;
}

const config = {
  headers: {
    Authorization: `OAuth ${token}`,
    'Content-Type': 'video/mp4; charset=UTF-8',
  },
};

const api: API = {
  getUploadLink: (fileName: string) =>
    axios.get(
      `https://cloud-api.yandex.net/v1/disk/resources/upload?path=videosamples%2F${fileName}&overwrite=true`,
      {
        headers: {
          Authorization: `OAuth ${token}`,
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    ),
  uploadFile: (link: string, file: any) => {
    axios.put(`${link}`, file, {
      headers: {
        //Authorization: `OAuth ${token}`,
        'Content-Type': 'application/binary; charset=UTF-8',
      },
    });
  },
  getDownloadLink: (fileName: string) =>
    axios.get(
      `https://cloud-api.yandex.net/v1/disk/resources/download?path=videosamples%2F${fileName}`,
      {
        headers: {
          Authorization: `OAuth ${token}`,
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    ),
};

export default api;
