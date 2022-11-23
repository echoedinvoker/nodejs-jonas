const express = require("express");
const {
  getUsers,
  createUser,
  getUser,
  patchUser,
  deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

// routers for resource 'users'
router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).patch(patchUser).delete(deleteUser);

module.exports = router;
