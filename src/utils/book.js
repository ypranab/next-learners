export const getAllBooks = async () => {
  const response = await fetch("fakeDB.json", { method: "GET" });
  const result = await response.json();
  //console.log(result);
  return result;
};
