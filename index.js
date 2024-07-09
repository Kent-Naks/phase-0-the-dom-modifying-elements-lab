// Create a new div element
const newDiv = document.createElement("div");

// Set text content for the div
newDiv.textContent = "Hello, I'm a new div!";

// Append the new div to an existing element with id 'main'
const mainElement = document.getElementById("main");
if (mainElement) {
  mainElement.appendChild(newDiv);
}

// Remove the element with id 'main'
const mainToRemove = document.getElementById('main');
if (mainToRemove) {
  mainToRemove.parentNode.removeChild(mainToRemove);
}

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id attribute
newHeader.id = 'victory';

// Set the text content dynamically
const yourName = 'Kent'; // Replace with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the new h1 element to the document body
document.body.appendChild(newHeader);
