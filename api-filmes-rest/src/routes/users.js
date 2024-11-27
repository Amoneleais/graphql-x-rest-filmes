const router = require("express").Router();

const usersController = require("../controllers/usersController");

router.route("/").post((req, res) => usersController.create(req, res));
router.route("/").get((req, res) => usersController.getAll(req, res));
router.route("/:id").get((req, res) => usersController.getOnly(req, res));
router.route("/:id").post((req, res) => usersController.update(req, res));
router.route("/:id").delete((req, res) => usersController.delete(req, res));

module.exports = router;
