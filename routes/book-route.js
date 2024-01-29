const express = require("express");
const router = express.Router();

const {
  getAllData,
  getDataById,
  getDataByJenis,
  updateDataById,
  postData,
  deleteDataById,
} = require("../controllers/BookController");

router.get("/", getAllData);
router.get("/:id", getDataById);
router.get("/jenis/:jenis", getDataByJenis);
router.put("/:id", updateDataById);
router.post("/", postData);
router.delete("/:id", deleteDataById);

module.exports = router;
