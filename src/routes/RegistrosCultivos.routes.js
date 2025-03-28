import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getRegistros,
  getRegistro,
  createRegistro,
  deleteRegistro,
  updateRegistro,
} from "../controllers/RegistrosCultivos.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createRegistroSchema } from "../schemas/RegistroCultivos.schema.js";

const router = Router();

router.get("/registros", authRequired, getRegistros);

router.get("/registros/:id", authRequired, getRegistro);

router.post(
  "/registros",
  authRequired,
  validateSchema(createRegistroSchema),
  createRegistro
);

router.delete("/registros/:id", authRequired, deleteRegistro);

router.put("/registros/:id", authRequired, updateRegistro);

export default router;
