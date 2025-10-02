const express = require("express");
const router = express.Router();
//const Thing = require("../models/thing");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const upload = multer(); // aucun `.storage()` ici si tu ne gères pas de fichiers

// list
router.get("/", upload.none(), [], (req, res) => {
  res.status(200).json({
    message: "Hello world !",
  });
});

module.exports = router;
