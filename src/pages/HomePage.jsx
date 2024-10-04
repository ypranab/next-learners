import { useState } from "react";
import { getAllBooks } from "../utils/book";
import { useEffect } from "react";
import Books from "../components/Books";
import Banner from "../components/Banner";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const getAllBookList = async () => {
    const data = await getAllBooks();
    setBooks(data);
  };
  useEffect(() => {
    getAllBookList();
  }, []);

  return (
    <>
      <Banner></Banner>
      <h1 className="px-3 text-4xl font-extrabold text-center text-red-400 mt-10">
        Lets Explore the Unexplored with Books!!
      </h1>
      <div className="px-14">
        <div className="my-12 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Books key={book.bookId} book={book}></Books>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
