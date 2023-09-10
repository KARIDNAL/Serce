const HopenModalBtn = document.getElementById("helps_btn");
const HcloseModalBtn = document.getElementById("helps_modal-close");
const Hmodal = document.getElementById("helps_modal");

HopenModalBtn.addEventListener("click", () => {
  Hmodal.style.display = "block";
  setTimeout(() => {
    Hmodal.classList.add("show");
  }, 0);
});

HcloseModalBtn.addEventListener("click", () => {
  Hmodal.classList.remove("show");
  setTimeout(() => {
    Hmodal.style.display = "none";
  }, 200);
});

Hmodal.addEventListener("click", (event) => {
  if (event.target === Hmodal) {
    HcloseModalBtn.click();
  }
});

window.onclick = function (event) {
  if (event.target == Hmodal) {
    Hmodal.classList.remove("show");
  }
};

const changeHandler = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, "");
};

const inputs = document.querySelectorAll(".cards_number");

inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    if (event.target.value.length === 4) {
      inputs[index + 1].focus();
    }
  });
});

var prevCard = null;

function toggle(card) {
  if (prevCard) {
    prevCard.style.backgroundColor = "#c5d5e6";
  }
  if (prevCard != card) {
    card.style.backgroundColor = "#9c5d9a";
    prevCard = card;
  } else {
    prevCard = null;
  }
}

var individual_button1 = document.querySelector(".individual_button1");
var legal_entity_button2 = document.querySelector(".legal_entity_button2");

individual_button1.addEventListener("click", function () {
  setTimeout(function () {
    if (individual_button1.classList.contains("individual_button1")) {
      individual_button1.classList.remove("individual_button1");
      individual_button1.classList.add("legal_entity_button2");
      legal_entity_button2.classList.remove("legal_entity_button2");
      legal_entity_button2.classList.add("individual_button1");
    } else {
      individual_button1.classList.add("individual_button1");
      individual_button1.classList.remove("legal_entity_button2");
      legal_entity_button2.classList.add("legal_entity_button2");
      legal_entity_button2.classList.remove("individual_button1");
    }
  }, 100);
});

legal_entity_button2.addEventListener("click", function () {
  setTimeout(function () {
    if (legal_entity_button2.classList.contains("legal_entity_button2")) {
      legal_entity_button2.classList.remove("legal_entity_button2");
      legal_entity_button2.classList.add("individual_button1");
      individual_button1.classList.remove("individual_button1");
      individual_button1.classList.add("legal_entity_button2");
    } else {
      legal_entity_button2.classList.add("legal_entity_button2");
      legal_entity_button2.classList.remove("individual_button1");
      individual_button1.classList.add("individual_button1");
      individual_button1.classList.remove("legal_entity_button2");
    }
  }, 100);
});

const headerHelpsFooter = document.querySelector(".header_helps-footer");

legal_entity_button2.addEventListener("click", function () {
  headerHelpsFooter.style.display = "flex";
});

individual_button1.addEventListener("click", function () {
  headerHelpsFooter.style.display = "none";
});

const helpsFurnitureImgs = document.querySelectorAll(".helps-furniture-img");
const furnitureTextDescriptions = document.querySelectorAll(
  ".furniture-text-description"
);
const paymentWrapper = document.querySelector(".payment_wrapper");
const headerHelpsModal = document.querySelector(".header_helps_modal");

helpsFurnitureImgs.forEach((helpsFurnitureImg, index) => {
  helpsFurnitureImg.addEventListener("click", () => {
    furnitureTextDescriptions.forEach((furnitureTextDescription) => {
      furnitureTextDescription.style.display = "none";
      furnitureTextDescription.style.transition = "opacity 0.5s ease-in-out";
    });
    paymentWrapper.style.display = "block";
    headerHelpsModal.style.display = "block";
  });
});
