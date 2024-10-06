import { useState, useEffect } from "react";
import { getAllCourses } from "../utils/courses";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    const data = await getAllCourses();
    setCourses(data);
  };
  useEffect(() => {
    getCourses();
  }, []);
  console.log(courses);

  return (
    <div className="my-12 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Courses;
