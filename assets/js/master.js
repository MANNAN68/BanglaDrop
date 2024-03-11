//------Custom select box
//------Custom select box
var customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach(function (customSelect) {
  var inputField = customSelect.querySelector("input");
  var optionsList = customSelect.querySelector(".options-list");
  inputField?.addEventListener("click", function () {
    optionsList.classList.toggle("show");
    inputField.classList.toggle("rotate");
  });

  optionsList?.addEventListener("click", function (event) {
    var selectedOption = event.target.innerText;
    inputField.value = selectedOption;
    optionsList.classList.remove("show");
    inputField.classList.remove("rotate");
  });

  window.addEventListener("click", function (event) {
    if (!customSelect.contains(event.target)) {
      optionsList?.classList.remove("show");
      inputField?.classList.remove("rotate");
    }
  });
});

//------End custom select box
//------End custom select box

//------Custom Ajax Search box
//------Custom Ajax Search box

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("focus", function () {
    searchResults.style.display = "block";
  });

  searchInput.addEventListener("blur", function () {
    searchResults.style.display = "none";
  });
});
//------End custom Ajax Search box
//------End custom Ajax Search box
$("#normalize").selectize({ normalize: true });
