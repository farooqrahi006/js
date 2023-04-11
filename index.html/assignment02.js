//Assignment 01


function addNumber(num) {
    return function(x) {
      return x + num;
    }
  }
  
  // Example usage:
  const addFive = addNumber(5);
  console.log(addFive(10)); // Output: 15
  console.log(addFive(100)); // Output: 105
  
  
  //Assignment 02 
  
  function recursiveSearch(array, value) {
    if (array.length === 0) {
      return false; // base case: value not found
    } else if (array[0] === value) {
      return true; // base case: value found
    } else {
      return recursiveSearch(array.slice(1), value); // recursive case: search the rest of the array
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  console.log(recursiveSearch(myArray, 3)); // Output: true
  console.log(recursiveSearch(myArray, 6)); // Output: false
  
  
  
  //Assignment 03
  
  function addParagraph(text) {
    const newParagraph = document.createElement("p"); // create a new paragraph element
    newParagraph.textContent = text; // set the text content of the new paragraph
    document.body.appendChild(newParagraph); // append the new paragraph to the end of the document body
  }
  
  addParagraph("This is a new paragraph!");
  
  
  
  //Assignment 04
  
  function addListItem(text) {
    // get the unordered list element
    const ul = document.querySelector('ul');
  
    // create a new list item element
    const li = document.createElement('li');
  
    // set the text content of the list item
    li.textContent = text;
  
    // add the list item to the unordered list
    ul.appendChild(li);
  }
  
  addListItem('new item');
  
  
  
  //Assignment 05
  
   function changeBackgroundColor(element, newColor) {
    element.style.backgroundColor = newColor;
  }
  
  
  const myElement = document.querySelector("#my-element");
  changeBackgroundColor(myElement, "blue");
  
  
  
  //Assignment 06
  
  function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  
  const myObj = { name: 'John', age: 30 };
  saveObjectToLocalStorage('myKey', myObj);
  
  
  
  //Assignment 07
  
  function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }
  
  
  
  //Assignment 08
  
  
  function saveObjectToLocalStorage(obj) {
    // Save each property to localStorage
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        localStorage.setItem(prop, JSON.stringify(obj[prop]));
      }
    }
  
    // Retrieve the object from localStorage
    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const prop = localStorage.key(i);
      newObj[prop] = JSON.parse(localStorage.getItem(prop));
    }
  
    return newObj;
  }
  
  const myObj = { foo: 'bar', baz: 42 };
  const newObj = saveObjectToLocalStorage(myObj);
  console.log(newObj); // { foo: 'bar', baz: 42 }