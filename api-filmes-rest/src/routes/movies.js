const router = require("express").Router();

const moviesController = require("../controllers/moviesController");

router.route("/").post((req, res) => moviesController.create(req, res));
router.route("/").get((req, res) => moviesController.getAll(req, res));
router.route("/:id").get((req, res) => moviesController.getOnly(req, res));
router.route("/:id").post((req, res) => moviesController.update(req, res));
router.route("/:id").delete((req, res) => moviesController.delete(req, res));

module.exports = router;
