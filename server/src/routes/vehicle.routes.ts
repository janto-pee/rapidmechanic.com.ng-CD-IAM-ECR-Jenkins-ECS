import express from "express";
import {
  createVehicleHandler,
  getVehiclesHandler,
  updateVehicleHandler,
  deleteVehicleHandler,
  getVehicleHandler,
} from "../controller/vehicle.controller";

const router = express.Router();

router.get("/get", (req, res) => res.json({ data: "vehicle route check" }));

/**
 * @openapi
 * '/api/vehicle':
 *  post:
 *     tags:
 *     - Vehicle
 *     summary: Create a vehicle
 *     requestBody:
 *      required: true
 *      contents:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateVehicleInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateVehicleResponse'
 *      500:
 *        description: Server Error
 */

router.post("/api/vehicle", createVehicleHandler);

/**
   * @openapi
   * '/api/vehicle':
   *  get:
   *     tags:
   *     - Vehicle
   *     summary: Get vehicles for specific user
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetVehiclesResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/vehicle", getVehiclesHandler);

  /**
   * @openapi
   * '/api/vehicle/{id}':
   *  get:
   *     tags:
   *     - Vehicle
   *     summary: Get a vehicle
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the vehicle
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetVehicleResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/vehicle/:id", getVehicleHandler);

  /**
   * @openapi
   * '/api/vehicle/{id}':
   *  put:
   *     tags:
   *     - Vehicle
   *     summary: Update a vehicle by the vehicleId
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the vehicle
   *        required: true
   *     requestBody:
   *      required: true
   *      contents:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateVehicleInput'
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/CreateVehicleResponse'
   *       500:
   *         description: Server Error
   */
router.put("/api/vehicle/:id", updateVehicleHandler);

 /**
   * @openapi
   * '/api/vehicle/{id}':
   *  delete:
   *     tags:
   *     - Vehicle
   *     summary: Delete a vehicle by the vehicleId
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the vehicle
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Vehicle Not Found
   *       500:
   *         description: Server Error
 */

router.delete("/api/vehicle/:id", deleteVehicleHandler);

export default router;
