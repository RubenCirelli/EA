const rightArrow = document.querySelector(
  ".ultime-novità-tabs-container .right-arrow svg"
);
const leftArrow = document.querySelector(
  ".ultime-novità-tabs-container .left-arrow svg"
);
const rightArrowContainer = document.querySelector(
  ".ultime-novità-tabs-container .right-arrow "
);
const leftArrowContainer = document.querySelector(
  ".ultime-novità-tabs-container .left-arrow "
);
const tabsList = document.querySelector(".ultime-novità-tabs-container ul");

const manageArrows = () => {
  if (tabsList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 500;
  manageArrows();
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 500;
  manageArrows();
});

tabsList.addEventListener("scroll", manageArrows());
