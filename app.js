// grab DOM elements for part 1
const termsCheckbox = document.getElementById('terms-checkbox');
const enterButton = document.getElementById('enter-button');
const creatureSelection = document.getElementById('creature-selection');

// grab DOM elements for part 2
const nameInput = document.getElementById('name-input');
const creatureName = document.getElementById('creature-name');
const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');

// set event listeners
termsCheckbox.addEventListener('change', () => {
    enterButton.disabled = !termsCheckbox.checked;
    console.log("enter button enabled");
});
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
