const form = document.querySelector(".form");
const submit = document.querySelector(".form .form__submit");
const pinfl = document.querySelector(".form .pinfl");
const infoIcon = document.querySelector(".form .info");

const options = [
  {
    type: "text",
    name: "name",
    maxLength: 12,
  },
  {
    type: "text",
    name: "phone",
    maxLength: 7,
  },
  {
    type: "text",
    name: "AA 1324567",
    maxLength: 9,
  },
  {
    type: "text",
    name: "PINFL",
    maxLength: 14,
  },
  {
    type: "date",
    name: "birthday",
    maxLength: 12,
  },
];

options.reverse().forEach((item, index) => {
  let label = document.createElement("label");
  let input = document.createElement("input");
  label.classList.add("form__label");
  input.classList.add("form__input");
  input.type = item.type;
  input.placeholder = item.name;
  input.maxLength = item.maxLength;

  label.appendChild(input);

  if (item.name.toLowerCase() === "pinfl") {
    label.appendChild(infoIcon);
    label.appendChild(pinfl);
  }

  form.prepend(label);
});

const inputs = document.querySelectorAll(".form .form__input");
inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.value) {
      input.classList.remove("wrong");
    } else {
      input.classList.add("wrong");
    }
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((input, index) => {
    if (input.value == "" || input.value == undefined || input.value == null) {
      input.classList.add("wrong");
    } else {
      input.classList.remove("wrong");
    }
  });
});
