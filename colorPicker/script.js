// Get references to the color picker and body elements
const colorPicker = document.getElementById('colorPicker');
const body = document.body;

// Add an event listener to the color picker
colorPicker.addEventListener('input', () => {
    // Get the selected color from the color picker
    const selectedColor = colorPicker.value;

    // Update the background color of the body
    body.style.backgroundColor = selectedColor;
});
