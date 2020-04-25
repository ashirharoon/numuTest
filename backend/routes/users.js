const router = require("express").Router();
let { getUser, addUser, getHobbies, addHobby,delHobby} = require("../controllers/userController");
router.get("/", getUser);
router.post("/add", addUser);
router.post("/addHobby", addHobby);
router.get("/hobbies/:user_id", getHobbies);
router.delete("/hobbies/:id", delHobby);

module.exports = router;
