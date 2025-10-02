const express = require("express");
const router = express.Router();
//const Thing = require("../models/thing");
const multer = require("multer");
const { body, validationResult } = require("express-validator");
const upload = multer(); // aucun `.storage()` ici si tu ne gères pas de fichiers
const fs = require("fs");
const path = require("path");

// list
router.get("/", upload.none(), [], (req, res) => {
  const messagePath = path.join(__dirname, "../entryDatas/message.txt");

  fs.readFile(messagePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading message.txt" });
    }
    res.status(200).json({ message: data });
  });
});

module.exports = router;
