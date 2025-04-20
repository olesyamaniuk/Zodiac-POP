document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".q-d-navigation-list");
  const headerRef = document.querySelector(".q-d-header");
  const navigationRef = document.querySelector(".q-d-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".navigation__link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    })
  );
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".q-d-toggle-button img");

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    buttonImg.src = "/img/Add.png";
  } else {
    answer.style.display = "none";
    buttonImg.src = "/img/Add.png";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    popup.style.display = "block";
  }

  acceptButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    popup.style.display = "none";
  };

  declineButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    popup.style.display = "none";
  };
});
