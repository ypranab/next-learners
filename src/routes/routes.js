export const ROUTES = {
  BASE_URL: "https://next-learners-server.vercel.app/",
  HOME: "/",
  BOOKS: "/books",
  SINGLE_BOOK: {
    STATIC: "/book/:book_id",
    DYNAMIC: (book_id) => `/book/${book_id}`,
  },
  FAQ: "/faq",
};
