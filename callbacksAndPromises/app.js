const posts = [
  { title: "Post 1", body: "This is post one" },
  { title: "Post 2", body: "This is post two" },
];

//syncronous way
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li> ${post.title} </li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post 3", body: "This is post three" });
// getPost();

//Aynchronous way
// function createPost(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li> ${post.title} </li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post 3", body: "This is post three" }, getPost);

//using promises

function createPost(post) {
  return new Promise(function (resolve, reject) {
    posts.push(post);
    const error = false;
    if (!error) {
      resolve();
    } else {
      reject("Error: something went wrong");
    }
  });
}

function getPost() {
  let output = "";
  posts.forEach(function (post) {
    output += `<li> ${post.title} </li>`;
  });
  document.body.innerHTML = output;
}

createPost({ title: "Post 3", body: "This is post three" })
  .then(getPost)
  .catch(function (err) {
    console.log(err);
  });
