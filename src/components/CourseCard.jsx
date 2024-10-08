/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const CourseCard = ({ course }) => {
  const { _id, title, author, img_url, details } = course;

  return (
    <Link to={`${ROUTES.SINGLE_COURSE.DYNAMIC(_id)}`}>
      <div className="card bg-base-100 shadow-xl px-2">
        <figure className="w-fit h-36">
          <img src={`${img_url}`} alt="" />
        </figure>
        <div className="card-body h-80">
          <h2 className="card-title font-bold">{title}</h2>
          <p>Author : {author}</p>
          <p>{details.slice(0, 120) + "..."}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
