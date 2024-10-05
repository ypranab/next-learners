import { useState } from "react";
import { useEffect } from "react";
import Banner from "../components/Banner";
import { getAllCourses } from "../utils/courses";
import Courses from "../components/Courses";

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const data = await getAllCourses();
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Banner></Banner>
      <h1 className="px-3 text-4xl font-extrabold text-center text-red-400 mt-10">
        Lets Explore the Unexplored with Books!!
      </h1>
      <div className="px-14">
        <div className="my-12 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Courses key={course._id} course={course}></Courses>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
