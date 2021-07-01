import async from 'async';
import axios from 'axios';
/**
 * 
 * @param {Array} endpoints 
 * @returns Promise
 */
const fetchAllUrl = (endpoints) => {
  const apiResponse = [];
  return new Promise((resolve, reject) => {
    async.forEachOf(
      endpoints,
      (value, key, callback) => {
        if(!value) {
          apiResponse[key] = `Invalid URL - ${key}`;
          return callback();
        }
        axios.get(value).then((response) => {
          try {
            apiResponse[key] = response.data;
          } catch (e) {
            return callback(e);
          }
          return callback();
        }).catch((err) => callback(err));
      }, (err) => {
        if (err) {
          reject(err);
        }
        // configs is now a map of JSON data
        resolve(apiResponse);
      },
    );
  });
};

export default fetchAllUrl;
