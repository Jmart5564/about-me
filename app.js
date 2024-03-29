// grab DOM elements for part 1
const termsCheckbox = document.getElementById('terms-checkbox');
const enterButton = document.getElementById('enter-button');
const creatureSection = document.getElementById('creature-section');

// grab DOM elements for part 2
const nameInput = document.getElementById('name-input');
const creatureName = document.getElementById('creature-name');
const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('image-display');

// grab DOM elements for Font Change
const englishButton = document.getElementById('english-button');
const elvishFont = document.getElementById('elvish-font');

// set event listeners
termsCheckbox.addEventListener('change', () => {
    enterButton.disabled = !termsCheckbox.checked;
});

enterButton.addEventListener('click', () => {
    creatureSection.classList.remove('hidden');
});

imageSelect.addEventListener('change', () => {
    const src = '' + imageSelect.value;
    imageDisplay.src = src;
});

nameInput.addEventListener('input', () => {
    creatureName.textContent = nameInput.value;
});

englishButton.addEventListener('click', () => {
    elvishFont.classList.remove('elvish');
});
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
