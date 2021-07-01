import { arrayOfURLs } from '../config/constant';
import fetchAllUrl from '../service/utils';
/**
 * 
 * @param {Object} request 
 * @param {Object} response 
 */
const fetchUrl = (req, res) => {
  fetchAllUrl(arrayOfURLs).then((data) => res.status(200).send({ status: 'success', data })).catch((err) => res.status(403).send({ status: 'failed', message: err.message }));
};

export default fetchUrl;
