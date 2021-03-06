const express = require("express");
const router = express.Router();
const cors = require("cors");
const Project = require("../models/projects.model");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

router.use(express.static(path.join(__dirname, "../public"))); // <-- location of public dir
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/projects/uploads"),
  filename: (req, file, cb) => {
    const { fieldname, originalname } = file;
    const date = Date.now();
    // filename will be: image-1345923023436343-filename.png
    const filename = `${fieldname}-${date}-${originalname}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  Project.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.delete("/delete/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", upload.single("image"), (req, res) => {
  const Projects = new Project({
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename,
    button: req.body.button,
  });

  Projects.save()
    .then(() => res.json("Project Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/update/:id", upload.single("image"), (req, res) => {
  Project.findById(req.params.id)
    .then((projects) => {
      projects.title = req.body.title;
      projects.description = req.body.description;
      projects.image = req.file.filename;
      projects.button = req.body.button;
      projects
        .save()
        .then(() => res.json("Project updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
