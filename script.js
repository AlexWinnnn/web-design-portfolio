// Select elements //
const button = document.querySelector("#readMoreBtn");
const extraText = document.querySelector("#extraText");

// Add event Listener //
button.addEventListener("click", () => {
  extraText.style.display = "block";
  button.textContent = "Thanks for visiting!";
});
