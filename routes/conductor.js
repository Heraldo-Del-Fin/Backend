const express = require("express");
const {
  getConductores,
  createConductor,
} = require("../controllers/conductorController");
const { body } = require("express-validator");

const router = express.Router();

// Ruta para obtener todos los conductores
router.get("/", getConductores);

// Ruta para crear un nuevo conductor
router.post(
  "/",
  [
    body("ID_conductor").isInt().withMessage("El ID debe ser un número entero"),
    body("nombre_apellido")
      .isString()
      .notEmpty()
      .withMessage("El nombre es obligatorio"),
    body("licencia")
      .isString()
      .notEmpty()
      .withMessage("La licencia es obligatoria"),
  ],
  createConductor
);

module.exports = router;
