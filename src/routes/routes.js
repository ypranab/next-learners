export const ROUTES = {
  HOME: "/",
  BOOKS: "/books",
  SINGLE_BOOK: {
    STATIC: "/book/:book_id",
    DYNAMIC: (book_id) => `/book/${book_id}`,
  },
  FAQ: "/faq",
};
