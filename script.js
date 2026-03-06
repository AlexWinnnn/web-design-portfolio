  // Select elements //
const button = document.querySelector("#readMoreBtn");
const extraText = document.querySelector("#extraText");

// Add event Listener //
button.addEventListener("click", () => {
  if (extraText.style.display === "none" || extraText.style.display === "") {
    // Show text
  extraText.style.display = "block";
  button.textContent = "Read Less";
  } else {
    // Hide text
    extraText.style.display = "none";
    button.textContent = "Read More";
  }
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    backToTopBtn.style.display = "block";
} else {
    backToTopBtn.style.display = "none";
  }
};

function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

