/**
 * Main router with all the other routes.
 *
 * @author Danny Salazar <dssm_15@hotmail.com>
 */

import express from 'express';
import serviceRoutes from './service';

const router = express.Router();

/**
 * @api {get} /health-check Checks if the server is OK.
 * @apiName HealthCheck
 * @apiGroup Health
 *
 * @apiSuccess {String} OK String to be showed.
 */
router.get('/health-check', (req, res) =>
	res.send('OK')
);

// You can use more routes like this to create other namespaces.
router.use('/services', serviceRoutes);

export default router;