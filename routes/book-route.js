const express = require("express");
const router = express.Router();

const {
  booksIndex,
  bookById,
  bookByJenis,
  bookUpdate,
  bookStore,
  bookDestroy,
} = require("../controllers/BookController");

router.get("/", booksIndex);
router.get("/:id", bookById);
router.get("/jenis/:jenis", bookByJenis);
router.put("/:id", bookUpdate);
router.post("/", bookStore);
router.delete("/:id", bookDestroy);

module.exports = router;
