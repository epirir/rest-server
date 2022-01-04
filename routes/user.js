const { Router } = require("express");
const {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/userController");

const router = Router();

router.get("/", getUsers);

router.post("/", createUsers);

router.put("/:id", updateUsers);

router.delete("/", deleteUsers);

module.exports = router;
