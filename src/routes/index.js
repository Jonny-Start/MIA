const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { marked } = require("marked"); // Alternativa si `marked` no está exportado como default

//Controllers
const homeController = require("../controllers/home.controller");
const goalController = require("../controllers/goal.controller");
const generateController = require("../controllers/generate.controller");
const themesController = require("../controllers/themes.controller");
const courseController = require("../controllers/course.controller");
const challengesController = require("../controllers/challenges.controller");
const doubtController = require("../controllers/doubt.controller");
const loadingController = require("../controllers/loading.controller");

//End Points
router.get("/", (req, res) => res.redirect("/home"));

router.route("/home").get(homeController.get).post(homeController.post);

router.route("/goal").get(goalController.get).post(goalController.post);

router
  .route("/generate")
  .get(generateController.get)
  .post(generateController.post);

router.route("/course").get(courseController.get).post(courseController.post);

router.route("/themes").get(themesController.get).post(themesController.post);

router
  .route("/challenges")
  .get(challengesController.get)
  .post(challengesController.post);

router.route("/doubt").get(doubtController.get).post(doubtController.post);

router
  .route("/loading")
  .get(loadingController.get)
  .post(loadingController.post);

// HTML
router
  .route("/loading/:html")
  .get((req, res) => {
    if (req.params.html === "render") res.render("loading");
  })
  .post((req, res) => {
    if (req.params.html === "render") res.render("loading");
  });

// Markdown
router.get("/markdown/:markdown", async (req, res) => {
  const markdown = req.params.markdown;

  // Ruta al archivo Markdown
  const markdownFilePath = path.join(
    __dirname,
    `../../public/files/${markdown}.md`
  );

  await fs.readFile(markdownFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error al leer el archivo Markdown");
    }

    // Convierte el contenido Markdown a HTML
    const htmlContent = marked(data);

    // Devuelve el contenido HTML directamente
    res.render("markdown", { content: htmlContent });
  });
});

//Export
module.exports = router;
