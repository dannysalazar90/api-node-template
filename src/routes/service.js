/**
 * Router to handle all services routes.
 *
 * @author Danny Salazar <dssm_15@hotmail.com>
 */

import express from 'express';
import validate from 'express-validation';
import serviceCtrl from '../controllers/service';

const router = express.Router();

// Route api/services/
router.route('/')
	/**
	 * @api {get} /services List services
	 * @apiName GetServices
	 * @apiDescription Lists all the available services.
	 * @apiGroup Services
	 *
	 * @apiSuccess {String} OK String to be showed.
	 */
	.get(serviceCtrl.list)

	/**
	 * @api {post} /services New service
	 * @apiName PostServices
	 * @apiDescription Creates a new service from scratch.
	 * @apiGroup Services
	 *
	 * @apiSuccess {String} OK String to be showed.
	 */
	.post(serviceCtrl.create);

// Route api/services/{serviceId}
router.route('/:serviceId')
	/**
	 * @api {get} /services/:serviceId Get service
	 * @apiName GetService
	 * @apiDescription Gets a service based on its id.
	 * @apiGroup Services
	 * 
	 * @apiParam {String} serviceId Services unique ID.
	 */
	.get(serviceCtrl.get)

	/**
	 * @api {put} /services/:serviceId Edit service
	 * @apiName PutService
	 * @apiDescription Updates a service based on its id.
	 * @apiGroup Services
	 * 
	 * @apiParam {String} serviceId Services unique ID.
	 */
	.put(serviceCtrl.update)

	/**
	 * @api {delete} /services/:serviceId Delete service
	 * @apiName DeleteService
	 * @apiDescription Deletes a service based on its id.
	 * @apiGroup Services
	 * 
	 * @apiParam {String} serviceId Services unique ID.
	 */
	.delete(serviceCtrl.remove);

// for serviceId param, call first to load its info.
router.param('serviceId', serviceCtrl.load);

export default router;