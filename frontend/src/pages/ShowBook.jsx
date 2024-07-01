import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import BackButton from "../components/BackButton";

const ShowBook = () => {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/api/books/fetch/${id}`)
      .then((res) => {
        res;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Book Details</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Id</span>
          <span>{""}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title</span>
          <span>{""}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Author</span>
          <span>{""}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year</span>
          <span>{""}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Create Time</span>
          <span>{new Date().toString()}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
          <span>{new Date().toString().slice(0, 25)}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
