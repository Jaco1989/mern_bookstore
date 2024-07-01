import { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createBook } from "../app/bookslice";
import { useDispatch } from "react-redux";

const CreateBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    publishYear: 0,
  });

  const handleSaveBook = () => {
    axios
      .post("http://localhost:5555/api/books/create", addBook)
      .then((res) => {
        dispatch(createBook(res.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            id="title"
            required
            type="text"
            name="title"
            onChange={(e) => setAddBook({ ...addBook, title: e.target.value })}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            id="author"
            required
            type="text"
            name="author"
            onChange={(e) => setAddBook({ ...addBook, author: e.target.value })}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
            Publish Year
          </label>
          <input
            id="publishYear"
            type="number"
            required
            name="publishYear"
            onChange={(e) =>
              setAddBook({ ...addBook, publishYear: e.target.value })
            }
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
