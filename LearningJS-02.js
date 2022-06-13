//Pag. 61 - Array Desestructuring -----------------------------------
let [x, y] = ['a', 'b']
//same as:
// let x = 'a'
// let y = 'b'

//Swap - Util para algoritmos de ordenação
// [x, y] = [y, x]
//Property shorthands
let obj = { x , y}
console.log(obj)

//Shorthand Method Names - declarar functions dentro de objetos como se
//fossem propriedades.
const hello = {
    name : 'abcdef',
    printHello(){
        console.log('Hello')
    }
}
hello.printHello()

//Pag. 62 - CLASS CONSTRUCTOR ---------------------------------------
//OOP with classes
//Use class and pass a class with a contructor function
let lotrBook = ["LOTR", "420p", "old"]
class Book {
    constructor(title, pages, isbn){
    this.title = title
    this.pages = pages
    this.isbn = isbn
    }
    
}
let book = new Book(...lotrBook);
console.log(book)


//Class Inheritance Extends
class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
      super(title, pages, isbn);
      this.technology = technology;
    }
  
    printTechnology() {
      console.log(this.technology);
    }
  
  }
  
  let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');
  console.log(jsBook.title);
  console.log(jsBook.pages)
  console.log(jsBook.printTechnology())

  //Getters & Setters

class Person {
    constructor (name){
        this._name = name
    }
    get name() {
        return this._name
    }
    set name(value){
        this._name = value
    }
}
let lotrChar = new Person ('Frodo')
console.log(lotrChar)
//Can be reatribuited
lotrChar.name = "Gandalf"
console.log(lotrChar.name)

//Pag. 65 Exponentiation -----------------------------------
//const area = 3.14 * r * r;
//const area = 3.14 * (r**2)


//map 
const map1 = new Map(); //Note its a Object

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1.get('a'));

//Setting new value to a
map1.set('a', 97);
console.log(map1.get('a'));
console.log(map1.size);
console.log(map1);

//Map.entries.next() - shows the entries (key, values) in Map

//Map.forEach() --------------------------------------------------- 
// function logMapElements(value, key, map) {
//     console.log(`m[${key}] = ${value}`);
//   }
  
//   new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
//     .forEach(logMapElements);
  
// expected output: "m[foo] = 3"
// expected output: "m[bar] = [object Object]"
// expected output: "m[baz] = undefined"
//-----------------------------------------------------------------
