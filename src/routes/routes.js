export const ROUTES = {
  BASE_URL: "https://next-learners-server.vercel.app",
  HOME: "/",
  COURSES: "/api/products",
  SINGLE_COURSE: {
    STATIC: "/api/products/:id",
    DYNAMIC: (course_id) => `/api/products/${course_id}`,
  },
  LOGIN: "/login",
  REGISTER: "/signup",
  FAQ: "/faq",
};
