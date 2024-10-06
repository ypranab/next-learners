import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const SingleCourse = () => {
  const course = useLoaderData();
  const navigate = useNavigate();

  const {
    author,
    title,
    details,
    img_url,
    author_img_url,
    ratings,
    lession,
    level,
    duration,
    price,
    student,
  } = course;

  const handleToastCart = () => {
    toast.success(`${title} is added to cart succesfully!!`);
  };

  if (course === "") {
    navigate("/error");
  }

  return (
    <div className="card lg:card-side bg-teal-50 shadow-xl w-3/4 mx-auto mb-16 py-4">
      <figure className="w-svw">
        <img src={`${img_url}`} alt="Album" />
      </figure>
      <div className="card-body font-semibold">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-squircle w-16">
              <img src={author_img_url} />
            </div>
          </div>
          <span>Author: {author}</span>
        </div>

        <p>Details: {details}</p>
        <p>Ratings: {ratings}</p>
        <p>Duration: {duration}</p>
        <p>Students Enrolled: {student}</p>
        <p>Level: {level}</p>
        <p>Lessions: {lession}</p>
        <p>Price: {price}</p>

        <div className="card-actions justify-end">
          <button onClick={handleToastCart} className="btn btn-primary mr-20">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
