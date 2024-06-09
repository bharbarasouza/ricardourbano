const handleSubmit = (event) => {
    event.preventDefault();
    
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document
    .querySelector("form[name='contact']")
    .addEventListener("submit", handleSubmit);

    // Place this code in your external JavaScript file

// Define the function to handle form submission
const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the form element
    const myForm = event.target;
  
    // Create FormData object to collect form data
    const formData = new FormData(myForm);
    
    // Send form data to the server using fetch API
    fetch("/", {
      method: "POST", // HTTP POST method
      headers: { "Content-Type": "application/x-www-form-urlencoded" }, // Set headers
      body: new URLSearchParams(formData).toString(), // Convert form data to URL-encoded format
    })
      .then(() => alert("Thank you for your submission")) // Display success message
      .catch((error) => alert(error)); // Display error message if any
  };
  
  // Add event listener to the form submission event
  document
    .querySelector("form[name='contact']") // Select the form by its name
    .addEventListener("submit", handleSubmit); // Attach the handleSubmit function to the form's submit event
  