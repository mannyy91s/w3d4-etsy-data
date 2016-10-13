// Standard way of making lists
var invites = ['Matt','Susan','Jessica','John']

// Another way you can make a list
var tasks = new Array(3)
tasks[0] = 'Buy Food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'
// 3rd way to make a list
var inbox= new Array('water bill','Pay check','Greeting Card')
//we used 0-2 in the upper array and can go on to make a 3rd one below
inbox[3] = 'You have rich uncle that wants to give you money.'

//end
tasks.push('Do homework') //push method to push somthing into the array at the end.
tasks.pop()  // gets rid of item at the end of array

//beginning
tasks.unshift('Watch netflix') // unshift pushes the item to the beginning of the list.
// tasks.shift()       // gets rid of first item and replaces it
var thingIGotRidof = tasks.shift()
// tasks[0]='watch hulu'
// console.log(tasks)


// middle
// var inbox= new Array('water bill','Pay check','Greeting Card')
// var payCheck = inbox.slice(1,2) // takes somthing out of a list ex starting at position 1 and up to 2 so it will remove Pay Check. It is mutation. It lets you see what you sliced from the middle and you wont see what u removed unless u run payCheck in log.
// console.log(payCheck) // will return Pay check
// var payCheck = []
// payCheck[0] = inbox[1]
// payCheck[1] = inbox[2]  //this is the long way of doing the slice method.

inbox.splice(1, 0, 'You Are Hired', 'Job Offer') // puts item in the middle of string using the numbers 1 for the position and 2nd 0 for not removing anything. It will actually modify array unlike slice that leaves it alone. This is  immutable


// delete inbox[0] // lets you delete a varaible or item from an array but it does not get rid of the space of array and leaves a comma in a plave and leaves it undefined.
// delete inbox // it is supposed to delete inbox but wasnt working in node. delete is a keyword that deletes the variable.
// console.log(inbox)


// finding total

// console.log(inbox.length) // counts how many things we have in the list. Length will always be 1 more then the index number we have because we have 0-5 but it will output 6 since it starts counting from 1-6.

// inbox[inbox.length] = 'invite to spotify' // same thing as push as you are putting another thing at the end of list.
// console.log(inbox.length)
// console.log(inbox)


var hasJobOffer = inbox.includes('Job Offer') // includes in array looks for the exact match so needs to be a exact match case sensitive.
// console.log(hasJobOffer)

// var jobOfferIndex = inbox.indexOf('Job Offer') // shows at what number job offer is located. It will return 2 as its in the 2 spot of array.
// console.log(jobOfferIndex)

// var jobOfferIndex = inbox.indexOf('Job Salary') // since this isnt in the array it will return -1 if it cant find a match.
// console.log(jobOfferIndex)

inbox.push('Job Salary') // pushing job salary into the array.

// another way to check if that is in the array.
// if (inbox.indexOf('Job Salary') === -1) { // since it wasnt there before we wrote the code at top it would show -1
//     console.log('No salary yet.')
// }
// else {
//     console.log('It is finally here!')
// }
// console.log(inbox)

// function with no name is called annoymous function it will loop through to find the word Job and stops after it finds the first 1. so it will show only job offer and stops it wont try to find another 1.
var matches = inbox.find(function(item){
    return item.includes('Job')
})
// console.log(matches)


// filter is used to find all the matches it finds with job so it will show 2 job offer and job salary.
// var matches = inbox.filter(function(item){
//     return item.includes('Job')
// })
// console.log(matches)


// another way to do it with actually naming the function and then. This is splitting the function and it is reusable since the above code is stuck int he function and we cant get to it.
function checkForJob(item){
    return item.includes('Job')
}
var matches = inbox.filter(checkForJob)
// console.log(matches)

// // this is called imperative code, its not specifically tied to the inbox
// for (var i =0; i < inbox.length; i++) { //i is number so start from 0, since length is always 1 more it will stop at 6 which is correct value, i++ it will keep going till it matches the number.
//     console.log(i + '. ' + inbox[i]) // i is showign the number and we are concatenating . after the number and inbox[i] is triggering the index of inbox
// }


//imperative way of writing the same code as filter
var matches = []
for (var i = 0; i < inbox.length; i++) {
    var hasJob = checkForJob(inbox[i])
    if (hasJob) [
        matches.push(inbox[i])
    ]
}
// console.log(matches)

//reverse list
var reverseInbox = inbox.reverse() // this assigns reverse to a var that can be used later on.
// console.log(reverseInbox)
// console.log(inbox.reverse()) // this reverses the order of the list in console.

//map and reduce
var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']

//same thing as loop it will for each item in fruit list.
fruit.forEach(function(item) {
    // console.log(item.toUpperCase()) // it will return the whole list in uppercase
})

// map transforms an array of items, one item at a time
// var upperCaseFruit = fruit.map(function(item){
//     return item.toUpperCase()
// })
// console.log(upperCaseFruit)
// another way of doing it without using a different var
// fruit = fruit.map(function(item){
//     return item.toUpperCase()
// })
// console.log(fruit)

// this assigns div tag around the list of the array
// fruit = fruit.map(function(item){
//     return `<div>${item}</div>`
// })
// console.log(fruit)

//this assigns the index aswell
// fruit = fruit.map(function(item, i){
//     return `<div>${i} - ${item}</div>`
// })
// console.log(fruit)

// fruit = fruit.map(function(item, i){
//     if (i ===2){
//         return `<section>${item.toUpperCase()}</section>`
//     }
//     else{
//         return `<div>${item}</div>`
//     }
// })
// console.log(fruit)

//reduce
//map and reduce is use alot in data
// var prices = [7.98, 14.99, 2.30, 12.80]
// var total = prices.reduce(function(previous, current){
//     return previous + current
// }, 0) // this will start out the previous value at 0. It will add 7.98 to 0 and give u current value then it will replace previous with 7.98 and add 14.99 to give you another total that will replace previous and then add 2.30 to it and keep going.
// console.log(total)

// var prices = [7.98, 14.99, 2.30, 12.80]
// var total = prices.reduce(function(previous, current){
//     return previous + current
// }, 0)
// // console.log(total/prices.length) // use this or make a variable like below to log that.
// var avgPrice = total / prices.length // or u can use this method to get average
// console.log(avgPrice)


//this will return out objects with price property
var prices = [
    {price:7.98},
    {price:14.99},
    {price:2.30},
    {price:12.80}
]
var total = prices.reduce(function(previous, current){
    return {price: previous.price + current.price} // since the after adding 0 + 7.98 it will return price: 7.98 we need to add {price:}
}, {price: 0})

console.log(total)

var avgPrice = total.price / prices.length
console.log(avgPrice)
