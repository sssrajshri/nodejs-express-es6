/**
* @file contains express route
* @author Shri 
*/

import express from 'express';
import fetchUrl from '../modules/fetchUrl';

const router = express.Router();

/**
 * APIend point routes
 */
router.get('/', (req, res) => res.status(200).send({ status: 200, msg: 'ok' }));
router.get('/list', fetchUrl);

module.exports = router;
