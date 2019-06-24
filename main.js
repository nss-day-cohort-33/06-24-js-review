console.log('hello, Monday. You suck');

// let div = document.createElement("div")
// Instead of making an unnecessary div, make a fragment!
let fragment = document.createDocumentFragment()
let paragraph = document.createElement("p")
let h1 = document.createElement("h1")
h1.innerText = "This is weird"
paragraph.innerHTML = `hello, world`
fragment.appendChild(paragraph)
fragment.appendChild(paragraph)
document.querySelector("body").appendChild(fragment)

// How to handle a <form> button click
document.querySelector("#myBtn").addEventListener("click", (event) => {
  event.preventDefault()
  // whatever you want
})

let bar = {name: "Fred"}
let nums = [1,2,3,4,5,6]

smallNums = []
// allows you to break out of it at some point
for(let i=0; i<nums.length; i++) {
  if(nums[i]<5) {
    smallNums.push(nums[i])
  } else {
    break
  }
}

let smallerNums = nums.filter( num => num < 5)

let newArr = []
nums.forEach(num => {
  // can't break out of this!
  newArr.push()
})

for (let foo in bar) {
  console.log(bar[foo])
}

let person = {
  name: "Fred",
  age: "24",
  address: "123 Sesame St"
}

for( let foo of Object.entries(person)) {
  console.log(foo)
}

let newerArr = nums.map( num => {
  return `<h2>I love the number ${num * 2}</h2>`
})
