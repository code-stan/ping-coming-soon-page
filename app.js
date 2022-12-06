//EMAIL VALIDATION
const emailRegex = /^[\w-\.]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
const emailInput = document.querySelector(".email-input");
const formBtn = document.querySelector(".form-btn");
const errorMsg = document.createElement("p");
const form = document.querySelector(".email-form")
const inputSection = document.querySelector(".input-section")
const condition = function(e){
    e.preventDefault()
    inputSection.append(errorMsg)
    if(emailInput.value === ""){
        inputSection.append(errorMsg)
        emailInput.classList.add("error-input")
        errorMsg.innerText = "Whoops! It looks like you forgot to add your email";
        console.log("Opps didnt work")
        errorM.style.display = "block";

    }
    else if(!emailInput.value.match(emailRegex)){
        inputSection.append(errorMsg)
        emailInput.classList.add("error-input")
        errorMsg.innerText = "Please provide a vaild email address"
    }
    else{
        alert("Sent: Thanks for subscribing");
    }
}
emailInput.addEventListener("focus", () =>{
    errorMsg.innerText = "";
    emailInput.classList.remove("error-input")

})
form.addEventListener("submit", condition)







//TOGGLE THEME
const toggleTheme = document.querySelector(".toggle-theme");
const bodyTag = document.body;
const currentTheme = localStorage.getItem("currentTheme");

// THEME CONDITIONAL
if(currentTheme){
    bodyTag.classList.add("dark-theme");
}

//BUTTON TEXT CONTENT CONDITIONAL
const toggleText = function(){
    if(toggleTheme.innerText == "D"){
        toggleTheme.innerText = "L";
    }
    else{
        toggleTheme.innerText = "D"
    }
}

//TOGGLE BUTTON ON CLICK
toggleTheme.addEventListener("click", ()=>{
    if(bodyTag.classList.contains("dark-theme")){
     bodyTag.classList.remove("dark-theme");
     localStorage.removeItem("currentTheme", "active")
    }
    else{
        bodyTag.classList.add("dark-theme");
        localStorage.setItem("currentTheme", "active");
    }
    toggleText();
})