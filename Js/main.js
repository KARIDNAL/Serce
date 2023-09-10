/*nav-list*/
const linguage_Item = document.querySelectorAll(".linguage-items");

for (let i = 0; i < linguage_Item.length; i++) {
  linguage_Item[i].addEventListener("click", function (event) {
    for (let j = 0; j < linguage_Item.length; j++) {
      linguage_Item[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

/*search*/
const btn = document.getElementById("open-modal");
const modalwin = document.getElementById("myModal");

btn.addEventListener("click", function () {
  modalwin.classList.add("open");
});

const close = document.getElementById("clouse-my-module");

close.addEventListener("click", function () {
  modalwin.classList.remove("open");
});

document
  .querySelector("#myModal .modal_box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });

document.getElementById("myModal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myModal").hidden = false;
});

/*drop-down-shearch*/

const input = document.getElementById("modal_input_shearch");
const dropdown = document.getElementById("myDropdown");

input.addEventListener("input", function () {
  if (input.value.trim() !== "") {
    dropdown.classList.remove("fade-out");
    dropdown.style.display = "block";
  } else {
    dropdown.classList.add("fade-out");
    setTimeout(function () {
      dropdown.style.display = "none";
    }, 500);
  }
});

const buttons = document.querySelectorAll(".button-container button");
const container = document.querySelector(".button-container");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    container.insertBefore(button, container.children[0]);
    buttons.forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove("active");
        btn.style.color = btn.getAttribute("data-color");
      }
    });
    button.classList.add("active");
    button.style.color = "#fff";
  });
});

const buttonList = document.querySelectorAll(".button-nav-archiv");

buttonList.forEach((button) => {
  button.addEventListener("click", () => {
    buttonList.forEach((otherButton) => {
      otherButton.classList.remove("active", "center");
      otherButton.classList.add("gray");
      otherButton.style.transform = "";
    });

    button.classList.remove("gray");
    button.classList.add("active", "center");

    const screenWidth = window.innerWidth;
    const buttonWidth = button.offsetWidth;
    const buttonPosition = button.offsetLeft + buttonWidth / 2;
    const shift = screenWidth / 2 - buttonPosition;

    buttonList.forEach((otherButton) => {
      otherButton.style.transform = `translateX(${shift}px)`;
    });
  });
});
