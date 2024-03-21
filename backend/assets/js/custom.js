/* ====== Mobile Left Side Bar ======= */
const sideBar = document.querySelector(".layout-left");
const leftSideBar = document.querySelector(".mobile-nav-toggler");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");

leftSideBar?.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});
sidebarBackdrop?.addEventListener("click", () => {
  sideBar.classList.remove("show");
});

/* ====== Mobile Left Side Bar ======= */

/* ======  search ======= */
const appSearch = document.querySelector(".app-search-box");
const searchBtnMobile = document.querySelector(".search-icon");
const searchBackdrop = document.querySelector(".search-backdrop");
const hide_searchbar = document.querySelector(".hide-searchbar");

searchBtnMobile.addEventListener("click", () => {
  appSearch.classList.add("show");
});
searchBackdrop.addEventListener("click", () => {
  appSearch.classList.remove("show");
});
hide_searchbar.addEventListener("click", () => {
  appSearch.classList.remove("show");
});
/* ======  search ======= */
