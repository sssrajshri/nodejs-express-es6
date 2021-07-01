/**
* @file It will contain all utility function, which will interact with external API endpoints
* @author Shri 
*/

import async from 'async';
import axios from 'axios';
/**
 * This function will interact with external api endpoints 
 * @param {Array} endpoints - List of URL to fetch data
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
