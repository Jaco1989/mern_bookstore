import express from "express";
import {
  addBook,
  deleteBook,
  updateBook,
  viewBook,
  viewBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/create", addBook);
router.get("/fetch", viewBooks);
router.get("/fetch/:id", viewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export { router as bookRoutes };

//==================== BASE URL =======================//
// http://localhost:5555/api/books
