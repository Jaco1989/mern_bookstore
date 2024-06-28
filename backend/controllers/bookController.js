import { Book } from "../models/bookModel.js";

export const addBook = async (req, res) => {
  const { title, author, publishYear } = req.body;

  if (!title || !author || !publishYear) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const book = await Book.findOne({ title, author });

  if (book) {
    return res.status(400).json({ error: "Book already exists" });
  }

  try {
    const newBook = await Book.create({ title, author, publishYear });
    res.status(201).json({ message: "Book created successfully", newBook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const viewBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const viewBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Book.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Book updated Successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
