import { ROUTES } from "../routes/routes";

export const getAllCourses = async () => {
  const res = await fetch(`${ROUTES.BASE_URL}/api/products`, { method: "GET" });
  const result = await res.json();
  console.log(result);
  return result;
};
