// Get the form and the result display element from the HTML
const form = document.getElementById('priceForm');
const resultDiv = document.getElementById('result');

// Add an event listener to the form that waits for it to be submitted
form.addEventListener('submit', function(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Get the values from the input fields
    const companyName = document.getElementById('companyName').value;
    const lastPrice = parseFloat(document.getElementById('lastPrice').value);

    // Check if the price is a valid number
    if (isNaN(lastPrice) || lastPrice <= 0) {
        resultDiv.textContent = 'Please enter a valid price.';
        return; // Stop the function here
    }

    // Calculate the 10% increase by multiplying the price by 1.10
    const targetPrice = lastPrice * 1.10;

    // Display the result on the webpage, formatted nicely
    resultDiv.innerHTML = `
        <p>Company: <strong>${companyName}</strong></p>
        <p>Target Price (10% increase): <strong>$${targetPrice.toFixed(2)}</strong></p>
    `;
});