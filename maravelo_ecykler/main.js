//Kontakt form
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

//Hvis email ikke er lig med denne string, skal den give fejl meddelelse ("re" stringen er ikke udtænkt selv men fundet på google)
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//Hvis telefon nr ikke er lig med denn string, skal den give fejl meddelselse (nummer stringen er ikke udtænkt selv men fudnet på google)
const isValidPhone = (phone) => {
  const re = /^(\s*\d\s*){8}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

//Hvis den ikke "sand" return
const validateInputs = () => {
  console.log("vi er her");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

//Hvis alt er sandt, giv en alert og fjerne alt tekst i input felterne
form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    alert("Vi kontakter dig tilbage hurtigst muligt")
    document.getElementById("nameinput").value=""
    document.getElementById("nameinput1").value=""
    document.getElementById("nameinput2").value=""
    document.getElementById("nameinput3").value=""
  }
});




