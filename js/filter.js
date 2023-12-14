const filterButton = document.querySelectorAll(".button-row__filter");
const filterableCard = document.querySelectorAll(".card");

const filterCard = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCard.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }
  });
};

filterButton.forEach((button) => button.addEventListener("click", filterCard));
