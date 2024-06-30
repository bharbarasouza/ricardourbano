// Custom form submit handling
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
  .then(response => {
    if (response.ok) {
      alert("Obrigado pelo contato! Retornaremos o mais breve possível.");
    } else {
      throw new Error("Network response was not ok.");
    }
  })
  .catch((error) => alert(error));
};

// Add submit event listener to the form
document.querySelector("#contact-form").addEventListener("submit", handleSubmit);