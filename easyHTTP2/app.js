const http = new EasyHTTP();

const data = {
  name: "Three",
  username: "lorem34",
  email: "nehagirja9",
};

//GET users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err = console.log(err)));

//POST users
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//PUT users / UPDATE
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//DELETE users
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
