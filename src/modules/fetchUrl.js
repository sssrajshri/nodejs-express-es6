/**
* @file It will contain module method which is exposed through Express route
* @author Shri 
*/

import { arrayOfURLs } from '../config/constant';
import fetchAllUrl from '../service/utils';

/**
 * This function will interact with service function and return JSON response 
 * @param {Object} request 
 * @param {Object} response
 * @returns {JSON}
 */

const fetchUrl = (req, res) => {
  fetchAllUrl(arrayOfURLs).then((data) => res.status(200).send({ status: 'success', data })).catch((err) => res.status(403).send({ status: 'failed', message: err.message }));
};

export default fetchUrl;
