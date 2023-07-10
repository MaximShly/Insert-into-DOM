function addItem() {
  // Step 1: identify the value of the myInput element.
  var inputValue = document.getElementById('myInput').value;

  // Check if the user didn’t type anything in the input box
  if (!inputValue) {
    alert('Please type in a value');
    return;
  }

  // Step 2: Create a text node containing that value
  var textNode = document.createTextNode(inputValue);

  // Step 3: Create a new li element and append the text node to it
  var liElement = document.createElement('li');
  liElement.appendChild(textNode);

  // Step 4: Append the li element to the existing myTODOs element. 
  document.getElementById('myTODOs').appendChild(liElement);

  // Clear the input box
  document.getElementById('myInput').value = '';
}
