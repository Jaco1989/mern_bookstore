import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/api/books/fetch")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        <Link to={"/books/create"}>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      <table className="w-full border-seperate border-spacing-2">
        <thead>
          <tr className="text-left">
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Id Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>C-{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td className="flex gap-2">
                <span>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle />
                  </Link>
                </span>
                <span>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit />
                  </Link>
                </span>
                <span>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete />
                  </Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
