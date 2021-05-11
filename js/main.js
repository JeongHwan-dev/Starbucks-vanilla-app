const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// search 아이콘 클릭 시 input 포커스
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", function () {
  console.log("scroll!");
});
