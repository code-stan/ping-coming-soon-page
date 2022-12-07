//EMAIL VALIDATION
const emailRegex = /^[\w-\.]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
const emailInput = document.querySelector(".email-input");
const formBtn = document.querySelector(".form-btn");
const errorMsg = document.createElement("p");
const form = document.querySelector(".email-form");
const inputSection = document.querySelector(".input-section");
const condition = function (e) {
  e.preventDefault();
  inputSection.append(errorMsg);
  if (emailInput.value === "") {
    inputSection.append(errorMsg);
    emailInput.classList.add("error-input");
    errorMsg.innerText = "Whoops! It looks like you forgot to add your email";
    console.log("Opps didnt work");
    errorM.style.display = "block";
  } else if (!emailInput.value.match(emailRegex)) {
    inputSection.append(errorMsg);
    emailInput.classList.add("error-input");
    errorMsg.innerText = "Please provide a vaild email address";
  } else {
    alert("Sent: Thanks for subscribing");
  }
};
emailInput.addEventListener("focus", () => {
  errorMsg.innerText = "";
  emailInput.classList.remove("error-input");
});
form.addEventListener("submit", condition);

//TOGGLE THEME
const toggleLightTheme = document.querySelector(".l-theme");
const toggleDarkTheme = document.querySelector(".d-theme");
const toggleTheme = document.querySelector(".theme");
const bodyTag = document.body;
const currentTheme = localStorage.getItem("currentTheme");

// THEME CONDITIONAL
if (currentTheme) {
  bodyTag.classList.add("dark-theme");
  toggleLightTheme.style.display = "block";
  toggleDarkTheme.style.display = "none";
}

//LOCAL STORAGE ACTIVE CONDITIONAL

const toggledCondition = function () {
  if (bodyTag.classList.contains("dark-theme")) {
    bodyTag.classList.remove("dark-theme");
    localStorage.removeItem("currentTheme", "active");
  } else {
    bodyTag.classList.add("dark-theme");
    localStorage.setItem("currentTheme", "active");
  }
};
//ADD EVENT LISTENTERS

toggleLightTheme.addEventListener("click", () => {
  toggleLightTheme.style.display = "none";
  toggleDarkTheme.style.display = "block";
  toggledCondition();
});
toggleDarkTheme.addEventListener("click", () => {
  toggleLightTheme.style.display = "block";
  toggleDarkTheme.style.display = "none";
  toggledCondition();
});
