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

function addTwo(numOne, numTwo) {
    let sumNum = numOne + numTwo;
    return sumNum;
}

console.log(addTwo(4, 5))