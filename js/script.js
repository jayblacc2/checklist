// localStorage
   //how to navigate to localStorage
   //How to set & update data (setItem) -save
   // to get data (getItem)             - retrive
   // How to delete data / item 
     // (removeItem) - single item       - delete
     // (clear) - clear or remove all items
// Convert data to  json-string - JSON.stringify()  //before using data 



const todos = [
{text: 'play mariokart', author: 'mario'},
{text: 'go to store', author: 'playstore'},
{text: 'make a video', author: 'joevideo'},

];


// console.log(JSON.stringify(todos));

// localStorage.setItem('todos', JSON.stringify(todos))

// const itemsStored = localStorage.getItem('todos');  


// console.log(JSON.parse(itemsStored));




// const lists = ['go on date', 'eat lunch', 'hunt for jobs'];


// console.log(lists)

// localStorage.setItem('lists', JSON.stringify(lists));


// const listItems = localStorage.getItem('lists');


// console.log(listItems)


// console.log(JSON.parse(listItems))




// class Customer  {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   logIn() {
//     console.log(`${this.name} just login in`);
//     return this;
//   }
//   logOut() {
//     console.log(`${this.name} just log out two minutes ago`);
//     return this;
//   }
// }
// const cust = new Customer('Jane', 22);
// const cust1 = new Customer('Nora', 23);
// // console.log(cust.logIn());
// // console.log(cust.logIn().logOut());

// class Admin extends Customer {
//   constructor(name, age, title) {
//     super(name, age)
//     this.title = title;
//   }
// }

// const cust2 = new Admin('Admin', 23, 'AdminCus');

// console.log(cust2.logIn());



// function User(name, age) {
//   this.name= name;
//   this.age=  age;
// }

// const user1 = new User('Tim', 24);
//  const {name, age} = user1;




// User.prototype.greet = function() {
//   console.log(`Hello ${this.name}`);
//   return this;
// }

// User.prototype.userClick = function() {
//   console.log(`${this.name} clicked here`);
//   return this;
// }

// function Client(name, age, purpose) {
//   User.call(this, name, age)
//   this.purpose = purpose;
// }

// Client.prototype = Object.create(User.prototype)
// alert(user1.greet().userClick());

// Document Object

const cl = document.getElementsByTagName('p')
const cls = Array.from(cl)
cls.forEach(p=>{
  p.innerHTML+= "<p> text </p>"
  console.log(p)

})

const tasks = ['go home', 'work cat', 'call someone'];


const items = document.querySelector('.lists');
content.innerHTML = "<h2>Adding new html tag with content </h2>"


tasks.forEach(task=>{
 items.innerHTML += `<li>${task}<a href="#"><i class="fas fa-plus"></i></a>`
})


const input = document.querySelector('input');

console.log(input.getAttribute('class'))


const h1 = document.querySelector('h1')
h1.setAttribute('style', 'color: red;')

const p = document.querySelector('p');
console.log(p.classList)

p.classList.add('error')
p.classList.remove('error')

