const fetch = require("node-fetch");

/* map */
/*
const myArray = [1, 2, 3, 4];
console.log(myArray);
myArray.map((el) => {
  el = el + 1;
  console.log(el);
});
console.log();
myArray.map((el) => {
  el = "b";
  console.log(el);
});
console.log(myArray);
*/

// ----------------------------------------------

/* Promise */

/*
const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((catchError) => console.log(catchError));
*/
/*
const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      console.log("I have succeeded");
    }, 1000);
  } else {
    console.log("I have failed!");
  }
});

myPromise
  .then((value) => value + "!!!!")
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
*/

// ----------------------------------------------

/* Asyn / Await */
/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);

    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));
*/
const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    const secondUser = users[1];

    console.log(secondUser);

    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
    );

    const posts = await postsResponse.json();
    console.log(posts);
  } catch (err) {
    console.log("there was an error!");
  }
};

myAsyncFunction();

// ----------------------------------------------

/* filter */
/*
const myArray = [1, 3, 5, 7, 9];
myArray.filter((el) => {
  if (el > 4) {
    console.log(el);
  }
});
console.log(myArray);
*/

// ----------------------------------------------

/* includes */
/*
const myArray = [1, 2, 3, 4, 5];
console.log(myArray.includes(3));
console.log(myArray.includes(9));

console.log(myArray.includes(2, 3)); // 3 ( tham so thu 2 cua includes argument) is the index, se kiem tra tai vi tri index 3 tro di co ton tai so 2 hay khong
console.log(myArray.includes(2, 1));

const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(newArray.includes({ id: 2 })); // false, JavaScript references objects versus primitive types.

var b = 3;
var c = b;
console.log("b = ", b);
console.log("c = ", c);
b = 5;
console.log("b = ", b);
console.log("c = ", c);

const obj1 = { id: 1 };
const obj2 = { id: 1 };
console.log(obj1 == obj2); // false, javascript is comparing if the reference in memory is the same. It's not comparing whether or not this value of this object is equal to each other. It's comparing if they're both pointing to the same place in memory
const obj3 = obj2;
console.log(obj2 == obj3); // true
// obj2 = 17; // obj3 = 17

const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };
const newArr = [o1, o2, o3];
console.log(newArr.includes(o2)); // true
*/

// ----------------------------------------------

/* find */
/*
const myArray = [1, 3, 5, 7, 9];
console.log(myArray.find((el) => el === 5));
console.log(myArray.find((el) => el >= 4));

const peopleArray = [{ id: 1 }, { id: 4 }, { id: 7 }];
console.log(peopleArray.find((person) => person.id === 7));
*/

// ----------------------------------------------

/* reduce */
/*
const myArray = [1, 2, 3, 4, 5];
console.log(
  myArray.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    0
  )
);

console.log(
  myArray.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    10
  )
);
*/

// ----------------------------------------------

/* Memoization - Caching */

/*
- Memoization is a specific form of caching that involves caching the return value of a function that is the return value of this function based on its parameters.
- Memoization is simply a way to remember a solution to a cell problem. So you don't have to calculate it again.
*/
/*
function addTo80(n) {
  console.log("long time");
  return n + 80;
}

//console.log(addTo80(5));
//console.log(addTo80(5));
//console.log(addTo80(5));


let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log(`1`, memoizedAddTo80(5));
console.log(`2`, memoizedAddTo80(5));
//console.log(memoizedAddTo80(5));
*/

// ----------------------------------------------

/* Currying 
- Currying is the technique of translating the evaluation of a function that takes multiple arguments.
- You take a function that can take multiple parameters and instead use incurring modify it to a function that takes one parameter at a time
*/

/*
const multiply = (a, b) => a * b;
//console.log(multiply(3, 4));
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(5)(3));

const curriedMultiplyBy7 = curriedMultiply(7);
console.log(curriedMultiplyBy7(3));
*/
