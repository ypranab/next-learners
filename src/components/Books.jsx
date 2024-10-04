/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  const bookState = book;
  const { image, bookId, bookName, tags, author, category, rating } = book;

  return (
    <Link to={`/book/${bookId}`} state={bookState}>
      <div className="card bg-base-100 shadow-xl">
        <figure className="w-fit h-36">
          <img src={`${image}`} alt="Books" />
        </figure>
        <div className="card-body h-80">
          <h2 className="card-title font-bold">{bookName}</h2>
          <p>Author : {author}</p>
          <p>Category: {category}</p>
          <p>Rating: {rating}</p>
          <p className="text-sm">
            Tags:{" "}
            {tags.map((tag, idx) => (
              <span key={idx} tag={tag}>
                {"#" + tag + " "}
              </span>
            ))}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
