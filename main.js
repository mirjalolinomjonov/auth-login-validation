const form = document.querySelector(".form");
const submit = document.querySelector(".form .form__submit");
const pinfl = document.querySelector(".form .pinfl");
const infoIcon = document.querySelector(".form .info");

function validPassportSeries(val) {
  const letters = /^[A-Za-z]+$/;

  if (
    val.split("").slice(0, 2).join("").match(letters) &&
    !isNaN(val.split("").slice(2).join(""))
  ) {
    console.log("it's ok");
    return true;
  } else {
    console.log("failer");
    return false;
  }
}

validPassportSeries("sa1316515615");

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

// create options
options.reverse().forEach((item, index) => {
  let label = document.createElement("label");
  let input = document.createElement("input");

  label.classList.add("form__label");
  input.classList.add("form__input");

  input.type = item.type;
  input.name = item.name;
  input.placeholder = item?.placeholder;
  input.maxLength = item.maxLength;
  input.autocomplete = "off";

  label.appendChild(input);

  if (item.name.toLowerCase() === "pinfl") {
    label.appendChild(infoIcon);
    label.appendChild(pinfl);
  }

  form.prepend(label);
});

// set events
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

// SUBMIT
submit.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((input, index, arr) => {
    // validation
    if (input.name === "name") {
      !input.value
        ? input.classList.add("wrong")
        : input.classList.remove("wrong");
    } else if (input.name === "phone") {
      !input.value || input.value.split(" ").join("").length < 11
        ? input.classList.add("wrong")
        : input.classList.remove("wrong");
    } else if (input.name === "passport") {
      !input.value ||
      input.value.length < 9 ||
      !validPassportSeries(input.value)
        ? input.classList.add("wrong")
        : input.classList.remove("wrong");
    } else if (input.name === "pinfl") {
      !input.value || input.value.split(" ").join("").length < 14
        ? input.classList.add("wrong")
        : input.classList.remove("wrong");
    } else if (input.name === "birthday") {
      !input.value
        ? input.classList.add("wrong")
        : input.classList.remove("wrong");
    }
  });
});

let pas = "qa1234567";

function valTxt(val) {
  const letters = /^[A-Za-z]+$/;

  if (val.split("").slice(0, 2).join("").match(letters)) {
    console.log("it's ok");
    return true;
  } else {
    console.log("failer");
    return false;
  }
}

// console.log(isNaN(pas.split("").slice(2).join("")));
