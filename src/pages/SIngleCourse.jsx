import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const SingleCourse = () => {
  const course = useLoaderData();
  const navigate = useNavigate();

  const { author, title, details, img_url } = course;

  const handleToastCart = () => {
    toast.success(`${title} is added to cart succesfully!!`);
  };

  if (course === "") {
    navigate("/error");
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto m-10 py-16">
      <figure className="max-w-screen-xl">
        <img src={`${img_url}`} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Author: {author}</p>
        <p>Review: {details}</p>

        <div className="card-actions justify-end">
          <button onClick={handleToastCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
