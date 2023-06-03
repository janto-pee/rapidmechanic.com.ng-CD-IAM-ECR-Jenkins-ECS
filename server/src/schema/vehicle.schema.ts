import { object, string, TypeOf } from "zod";


/**
 * @openapi
 * components:
 *  schemas:
 *    CreateVehicleInput:
 *      type: object
 *      required:
 *        - photos
 *        - brand
 *        - model
 *        - problem
 *        - chasis
 *        - company
 *      properties:
 *        brand:
 *          type: string
 *          default: Toyota
 *        model:
 *          type: string
 *          default: Camry
 *        problem:
 *          type: string
 *          default: transmission problem
 *        chasis:
 *          type: string
 *          default: xxxxxxxxx
 *        company:
 *          type: string
 *          default: car owner name
 *    CreateVehicleResponse:
 *      type: object
 *      properties:
 *         photos:
 *           type: object
 *         brand:
 *           type: string
 *         model:
 *           type: number
 *         problem:
 *           type: string
 *         chasis:
 *           type: string
 *         company:
 *           type: string
 */


export const createVehicleSchema = object({
  body: object({
    brand: string({
      required_error: "Last name is required",
    }),
    model: string({
      required_error: "Last name is required",
    }),
    problem: string({
      required_error: "Last name is required",
    }),
    chasis: string({
      required_error: "role is required",
    }),
    company: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});

/**
 * @openapi
 * components:
 *   schema:
 *     GetVehiclesResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           brand:
 *             type: number
 *           model:
 *             type: string
 *           problem:
 *             type: string
 *           chasis:
 *             type: string
 */

/**
 * @openapi
 * components:
 *   schema:
 *     GetVehicleResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           brand:
 *             type: number
 *           model:
 *             type: string
 *           problem:
 *             type: string
 *           chasis:
 *             type: string
 */
export const getVehicleSchema = object({
  params: object({
    id: string({ required_error: "verification is required" }),
  }),
});


export const updateVehicleSchema = object({
  params: object({
    id: string({ required_error: "verification is required" }),
  }),
  body: object({
    brand: string({
      required_error: "Last name is required",
    }),
    model: string({
      required_error: "Last name is required",
    }),
    problem: string({
      required_error: "Last name is required",
    }),
    chasis: string({
      required_error: "role is required",
    }),
    company: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});


export const deleteVehicleSchema = object({
  params: object({
    id: string({ required_error: "id is required" }),
  }),
});



export type CreateVehicleInput = TypeOf<typeof createVehicleSchema>["body"];
export type GetVehicleInput = TypeOf<typeof getVehicleSchema>["params"];
export type UpdateVehicleInput = TypeOf<typeof updateVehicleSchema>["body"];
export type DeleteVehicleInput = TypeOf<
  typeof deleteVehicleSchema
>["params"];

