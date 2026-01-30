const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/page.controller");

router.post("/", auth, controller.createPage);
router.get("/", auth, controller.getPages);
router.put("/:id", auth, controller.updatePage);
router.delete("/:id", auth, controller.deletePage);

module.exports = router;
