// for (let i = 1; i <= 20; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log("Frontend Simplified")
//     }
//     else if (i % 3 == 0) {
//         console.log(`${i} -> Frontend`)
//     }
//     else if (i % 5 == 0) {
//         console.log("Simplified")
        
//     }
//     else {
//         console.log(i)
//     }
// }


// const str = "Frontend Simplified"


// for (let i = 0; i < str.length; i++) {
//     console.log((str).charAt(i))
// }


// function welcomePerson(userName, userLastName) {

//     console.log(`Welcome to FES, ${userName} ${userLastName}`)
// }

// welcomePerson('David', 'Bragg')


// function sumOfTwoNumbers(numberOne, numberTwo) {
//     return numberOne + numberTwo
// }

// console.log(sumOfTwoNumbers(10,10))

// function convertToF(currentTemp) {
//     let C = (currentTemp * 1.8 + 32);
//     return (`${C} in Celsius`);
// }

// console.log(convertToF(0));

// console.log(convertToF(10));

// console.log(convertToF(30));

// const convertCelsius = (Celsius) => {
//     return Celsius * 1.8 + 32
// }

// console.log(convertCelsius(10))

// let arr = [20, 30 , 40 ]

// console.log(arr[0], arr[arr.length - 1])

// arr.push(200)

// console.log(arr[arr.length - 1]);

// let newArr = arr.filter((element) => {
//     console.log(element);
//     return true;
// });

// console.log(newArr);

// arr = [20, 30, 40]

// let newArr = arr.filter(element => element < 50)

// console.log(newArr);

// grades = ['A+', 'B+', 'FAIL', 'FAIL']

// let filterGrades = grades.filter(element => element !== "FAIL")

// let filterLongGrades = grades.filter((element) => {
//     if (element!== "FAIL") {
//         return true;
//     }
// })

// console.log(filterGrades);

// console.log(filterLongGrades);

// let grades = ['A+', 'B+', 'FAIL', 'FAIL']
// let filterGrades = [];

// for (i = 0; i < grades.length; i++) {
//     if (grades[i] !== 'FAIL') {
//         filterGrades.push(grades[i]);
//     }
// }

// console.log(filterGrades);

// let arr = [1, 4, 9, 16];

// let newArray = arr.map((element) => {
//     console.log(element);
//     return undefined;
// })

// console.log(newArray);

// let dollars = [1, 5, 10, 300]

// let dollarsToCents = dollars.map(element => element * 100)

// let longDollarsToCents = dollars.map((element) => {
//     return element * 100;
// })

// console.log(dollarsToCents);

// console.log(longDollarsToCents);

// let dollars = [1, 5, 10, 300];
// let cents = [];

// for (i = 0; i < dollars.length; i++) {
//     cents.push(dollars[i] * 100);
// }

// console.log(cents)

// let user = [
//     {
//     username: 'David',
//     email: 'david@frontendsimpified.com',
//     subscriptionStatus: 'VIP',
//     discordID: 'David Bragg#0001',
//     password: '1234'
//     },
//     {
//     username: 'David',
//     email: 'david@frontendsimplified.com',
//     subscriptionStatus: 'VIP',
//     discordID: 'David Bragg#0001',
//     password: '1234'
//     }
// ]

// function login(email, password) {
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].email === email) {
//             console.log("ran");
//             console.log(user[i]);
//             if (user[i].password === password) {
//                 console.log("Correct Password")
//             }
//             else {
//                 console.log("Incorrect Password")
//             }
//             return;
//         }
//     }
//     console.log(email, password)
// }

// login('david@frontendsimplified.com', '123')


// let users = [
//     {
//     name: "Sherry",
//     email: 'sherry@.com',
//     password: '12',
//     discordid: '2',
//     subscrtionStatus: 'VIP',
//     lessonsCompleted: [0, 2, 4],
//     }
// ]

// function register(user) {
//     users.push(user);
// }



// register(
//     {
//     username: 'Gerald', 
//     email: "G@.com", 
//     password: "123",
//     discordid: '2',
//     subscriptionStatus: 'VIP',
//     lessonsCompleted: [],
//     }); 

// console.log(users)


// First way of accessing an element

// console.log(document.querySelector('.name'));

// // Second way of accessing an element

// console.log(document.getElementById('title'));


// document.querySelector('.name').innerHTML = 'Frontend Simplified';

// // CHANGE CSS

// document.querySelector('.name').style.color = 'blue';

// function changeTitleToRed() {
//     document.querySelector('.name').style.color = 'red';
// }

// function toggleDarkMode() {
//     document.querySelector('body').classList.toggle("dark-theme")
// }
// function getVideo(status) {
//     return new Promise((resolve, reject) => {
//         if (status === "VIP") {
//             resolve("show video")
//         }
//         else if (status === "FREE") {
//             resolve("show trailer")
//         }
//         else {
//             reject("no video")
//         }
//     })
// }

// async function main() {
//     const status = await getSubscriptionStatus()
//     console.log(await getVideo("REE"))
//     try {

//     }
//     catch (e) {
//         console.log(e)
        
//     }
// }

// main();

// function addTwo(numOne, numTwo) {
//     let sumNum = numOne + numTwo;
//     return sumNum;
// }

// console.log(addTwo(4, 5));


// function boolOne(num) {
//     return num % 2 === 0 ? 1 : -1; 
// }

// function checkUser(isLogged, isSubscribed) {
//     return isLogged && isSubscribed ? true : false;
// }

// console.log(checkUser(false, true));

// function getMax(arr) {
//     let currMax = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if (currMax < arr[i]) {
//             currMax = arr[i];
//         }
//     }
//     return currMax;
// }


// console.log(getMax([-199, -200, -201]))

// function reverseStr(string) {
//     let newWord = ""
//     for(let i = 1; i < string.length + 1; i++) {
//         newWord += string[string.length - i];
//     }
//     return newWord;
// }

// console.log(reverseStr("badrats"));

// function reverseWithArry(string) {
//     let newWord = string.split('').reverse().join('');
//     return newWord;
// }

// console.log(reverseWithArry("garbage day"))

// function arrTo0(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = 0
//     }
//     return arr;
// }

// console.log(arrTo0([1, 2, "hello", NaN, 10, undefined]))

// function arrTo0Fill(arr) {
//     return new Array(arr.length).fill(0)
// }

// console.log(arrTo0Fill([0, 4, "hello", NaN]))

// function arr0Map(arr) {
//     let newArr = arr.map(elem => 0)
//     return newArr;
// }

// console.log(arr0Map([0, 5, 4, "hello"]))


// function removeApp(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Apple" || arr[i] === "apple") {
//             delete arr[i];
//         }
//     }
//     return arr;
// }

// console.log(removeApp(["Apple", "Banana", "apple", "oragne"]))

// function removeAppPush(arr) {
//     let noApples = []
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] !== "Apple") {
//             if (arr[i] !== "apple") {
//                 noApples.push(arr[i]);
//             }
//         }
//     }
//     return noApples;
// }

// console.log(removeAppPush(["hello", "apple", "Apple"]))

// function removeAppFilter(arr) {
//     return arr.filter(elem => elem !== "Apple")
// }

// console.log(removeAppFilter(["Apple", "apple", "orange"]));


// function removeFalsy(arr) {
//     let newArr = [];
//     for(i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeFalsy([NaN, "hello", 5, 7, undefined, false, ]))

// function removeFilterFalsy(arr) {
//     return arr.filter(elem => elem)
// }

// console.log(removeFilterFalsy([NaN, 5, "hello", undefined, "rawr", 7, null]))

// function trueBooly(arr) {
//     let newArr = [];
//     for(i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             newArr.push(true);
//         }
//         else {
//             newArr.push(false);
//         }
//     }
//     return newArr;
// }

// console.log(flipBooly([true, false, NaN, 5, 7, "undefined", undefined]))

// function trueToTrue(arr) {
//     return arr.map(elem => !!elem)
// }

// console.log(trueToTrue([true, false, NaN, 5, 7, "undefined", undefined]));

// function numToStars(num) {
//     let wholeNum = Math.floor(num);
//     let newStr = ""
//     for (let i = 0; i < wholeNum ; i++) {
//         if (i === 0){
//             newStr += "*"
//         }
//         else {
//             newStr += " *"
//         }
//     }
//     if (num % 1 !== 0) {
//         if (num > 0.5 ) {
//             newStr += " .";
//         }
//         else {
//             newStr += "."
//         }
//     }
//     return newStr;
// }
// // !Number.isInteger(rating)

// console.log(numToStars(4.5))


// function sortLowToHigh(arr) {
//     return arr.sort((a, b) => a.price-b.price);
// }

// console.log(sortLowToHigh([
//     {id: 1, price: 50},
//     {id: 2, price: 40},
//     {id: 3, price: 1000},
//     {id: 4, price: -30},
// ]))

// function sortHighToLowObject(arr) {
//     return arr.sort((a, b) => a.price-b.price);
// }

// console.log(sortHighToLowObject({id: 1, price: 50},
//     {id: 2, price: 40},
//     ));

// async function findUserPosts(uid) {
//     const result = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const promise = await result.json();
//     const userPosts = promise.filter(element => element.userId === uid);
//     console.log(userPosts)
// }

// findUserPosts(4);

// async function userFilter(uid) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const result = await promise.json();
//     const userPosts = result.filter(elem => elem.userId === uid);
//     console.log(userPosts);
// }

// userFilter(4);


// async function sixToDos() {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const result = await promise.json();
//     let response = []
//     let i = 0;
//     let j = 0;
//     while (i < 5) {
//         if (result[j].completed === false) {
//             response.push(result[j])
//             i++;
//             j++;
//         }
//         else {
//             j++;
//         }
//     }
//     console.log(response);
// }

// sixToDos();


// async function sixToDos() {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const result = await promise.json();
//     let i = 0;
//     const response = result.filter(elem => {
//         while (i < 6) {
//             if (elem.completed === false) {
//                 i++;
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }
//     })
//     console.log(response);
// }

// async function sixToDos() {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const result = await promise.json();
//     let i = 0;
//     const response = result.filter(elem => !elem.completed).slice(0, 6)
//     console.log(response);
// }


// sixToDos()
