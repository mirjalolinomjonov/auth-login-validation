const form = document.querySelector(".form");
const submit = document.querySelector(".form .form__submit");
const pinfl = document.querySelector(".form .pinfl");
const infoIcon = document.querySelector(".form .info");

function isNumberKey(evt) {
  let charCode = evt.which ? evt.which : event.keyCode;
  if ((charCode > 31 && charCode < 48) || charCode > 57) {
    evt.preventDefault();
    return false;
  }
  return true;
}

const maska = (value, format) => {
  return jSuites.mask.run(`${value}`, `${format}`);
};

const options = [
  {
    type: "text",
    name: "name",
    placeholder: "Enter your name",
    maxLength: 12,
  },
  {
    type: "text",
    name: "phone",
    placeholder: "(+998) 000 00 00",
    maxLength: 15,
  },
  {
    type: "text",
    name: "passport",
    placeholder: "AA 1324567",
    maxLength: 9,
  },
  {
    type: "text",
    name: "pinfl",
    placeholder: "PINFL",
    maxLength: 17,
  },
  {
    type: "date",
    name: "birthday",
    maxLength: 8,
  },
];

options.reverse().forEach((item, index) => {
  let label = document.createElement("label");
  let input = document.createElement("input");

  label.classList.add("form__label");
  input.classList.add("form__input");

  input.type = item.type;
  input.name = item.name;
  input.placeholder = item?.placeholder;
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
    // maska
    if (input.name === "phone") {
      input.value = maska(input.value, "+998 000 00 00");
    }

    if (input.name.toLowerCase() === "passport") {
      input.value = input.value.toUpperCase();
    }

    if (input.name === "pinfl") {
      input.value = maska(input.value, "0 000000 000 000 0");
    }

    // validation

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

    if (input.value.split(" ").join("").length < 14 && input.name === "pinfl") {
      input.classList.add("wrong");
    } else {
      input.classList.remove("wrong");
    }
  });
});


