// const string = "developer";
// let newString = string[0].toUpperCase() + string.slice(1);

// console.log(newString);
// const x = Math.floor(Math.random() * 101);
// const y = Math.floor(Math.random() * 51);

// console.log(x, y);
// console.log(x + y);
// console.log(Math.max(x, y) - Math.min(x, y));
// console.log(x * y);
// console.log(Math.max(x, y) % Math.min(x, y));

// const arr = [1, 2, 3, 4, 5];

// arr.unshift(0);
// arr.push(6);
// arr.reverse();
// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// const final = arr1.concat(arr2);
// final.splice(4, 1);
// console.log(final);

// const library = [
//   {
//     title: "one",
//     author: "me",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: "two",
//     author: "you",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: "three",
//     author: "her",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
// ];

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// for (let i = 0; i < library.length; i++) {
//   library[i].status.read = true;
// }
// // console.log(library);

// const { title: firstBook } = library[0];

// const libraryJSON = JSON.stringify(library);
// console.log(libraryJSON);
// function getCelsis(value) {
//   return ((value - 32) * 5) / 9;
// }

// const cel = (value) => ((value - 32) * 5) / 9;

// console.log(`the temp is ${cel(32)}`);

// const minMax = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   return {
//     max,
//     min,
//   };
// };

// console.log(minMax([1, 2, 3, 4]));

// ((length, width) => {
//   console.log(
//     `The area of the rectangle with the length ${length} and width ${width} is ${
//       length * width
//     }`
//   );
// })(2, 5);

// function calculator(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break;
//     case "*":
//       return num1 * num2;
//       break;
//     case "/":
//       return num1 / num2;
//       break;
//     default:
//       return "This is not a valid operator";
//   }
// }

// console.log(calculator(100, 5, "/"));

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let i = 1;

// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = arr.filter((num) => num % 2 === 0);

// console.log(values);

// const nums = [];
// arr.forEach((num) => {
//   if (num % 2 === 0) {
//     nums.push(num);
//   }
// });

// console.log(nums);
// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

// const years = companies.filter(
//   (company) => company.start >= 1980 && company.end <= 2005
// );
// console.log(years);

// const lasted = companies.filter((company) => company.end - company.start >= 10);

// console.log(lasted);

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.map((num) => num * 2);
// console.log(newArr);

// const companyNames = companies.map((company) => {
//   return {
//     name: company.name,
//     category: company.category,
//   };
// });

// console.log(companyNames);

// const companyYear = companies.map((company) => {
//   return {
//     name: company.name,
//     years: company.end - company.start + " years",
//   };
// });
// console.log(companyYear);

// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@gmail.com",
//     phone: "111-111-1111",
//     age: 30,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Poe",
//     email: "jane@gmail.com",
//     phone: "222-222-2222",
//     age: 25,
//   },
//   {
//     firstName: "Bob",
//     lastName: "Foe",
//     email: "bob@gmail.com",
//     phone: "333-333-3333",
//     age: 45,
//   },
//   {
//     firstName: "Sara",
//     lastName: "Soe",
//     email: "Sara@gmail.com",
//     phone: "444-444-4444",
//     age: 19,
//   },
//   {
//     firstName: "Jose",
//     lastName: "Koe",
//     email: "jose@gmail.com",
//     phone: "555-555-5555",
//     age: 23,
//   },
// ];

// const youngPeople = people
//   .filter((person) => person.age <= 25)
//   .map((person) => ({
//     name: person.firstName + " " + person.lastName,
//     email: person.email,
//   }));

// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const positiveSum = numbers
//   .filter((num) => num > 0)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(positiveSum); // 79

// const words = ["coder", "programmer", "developer"];

// const capitalizedWords = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1, word.length);
// });

// console.log(capitalizedWords);

// function insertAfter(newEl, existEl) {}
// const h1 = document.querySelector("h1");

// const li = document.createElement("li");
// li.textContent = "Insert me after!";

// insertAfter(li, h1);

// function removeItem(itemNumber) {
//   const ul = document.querySelector("ul");
//   const li = document.querySelectorAll("li")[itemNumber - 1];

//   parent.removeChild(li);
// }

// removeItem(2);

// const xhr = new XMLHttpRequest();
// xhr.open(GET, "file.json");
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   }
// };
// xhr.send();

// const posts = [
//   {
//     post: "One",
//     body: "This is post one",
//   },
//   {
//     post: "two",
//     body: "this is post two",
//   },
// ];

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     let error = true;
//     if (error === false) {
//       setTimeout(() => {
//         posts.push(post);
//         resolve();
//       }, 2000);
//     } else {
//       reject();
//     }
//   });
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((element) => {
//       console.log(element.post) + console.log(element.body);
//     });
//   }, 1000);
// }

// createPost({ post: "three", body: "this is post three" })
//   .then(getPosts)
//   .catch(error);

// fetch(endpoint)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// const button = document.getElementById("generate");
// // button.addEventListener("click", fetchUserInfo);

// function fetchUserInfo() {
//   fetch("https://randomuser.me/api/")
//     .then((res) => res.json())
//     .then((data) => displayUser(data.results[0]));
// }

// function displayUser(user) {
//   const userInsert = document.getElementById("user");
//   if (user.gender === "female") {
//     document.body.style.backgroundColor = "purple";
//   } else {
//     document.body.style.backgroundColor = "steelblue";
//   }
// }

// button.addEventListener("click", fetchUserInfo);
