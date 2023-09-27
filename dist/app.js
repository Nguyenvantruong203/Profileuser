const menuOptionPairs = [
  { menuId: "dashboard", optionId: "option-dashboard" },
  { menuId: "layout", optionId: "option-layout" },
  { menuId: "front", optionId: "option-front" },
  { menuId: "ecommerce", optionId: "option-ecommerce" },
  { menuId: "product", optionId: "option-product" },
  { menuId: "order", optionId: "option-order" },
  { menuId: "customer", optionId: "option-customer" },
  { menuId: "setting", optionId: "option-setting" },
  { menuId: "academy", optionId: "option-academy" },
  { menuId: "logistic", optionId: "option-logistic" },
  { menuId: "invoice", optionId: "option-invoice" },
  { menuId: "user", optionId: "option-user" },
  { menuId: "list", optionId: "option-list" },
  { menuId: "role", optionId: "option-role" },
  { menuId: "page", optionId: "option-page" },
  { menuId: "userprofile", optionId: "option-userprofile" },
  { menuId: "account", optionId: "option-account" },
  { menuId: "misc", optionId: "option-misc" },
  { menuId: "auth", optionId: "option-auth" },
  { menuId: "login", optionId: "option-login" },
  { menuId: "register", optionId: "option-register" },
  { menuId: "email", optionId: "option-email" },
  { menuId: "password", optionId: "option-password" },
  { menuId: "forgot-password", optionId: "option-forgotPassword" },
  { menuId: "forgot-steps", optionId: "option-steps" },
  { menuId: "forgot-wizard", optionId: "option-wizard" },
  { menuId: "card", optionId: "option-card" },
  { menuId: "userInterface", optionId: "option-userInterface" },
  { menuId: "extended", optionId: "option-extended" },
  { menuId: "timeline", optionId: "option-timeline" },
  { menuId: "icon", optionId: "option-icon" },
  { menuId: "form", optionId: "option-form" },
  { menuId: "formLayout", optionId: "option-formLayout" },
  { menuId: "formWizard", optionId: "option-formWizard" },
  { menuId: "dataTable", optionId: "option-dataTable" },
  { menuId: "chart", optionId: "option-chart" },
];

menuOptionPairs.forEach(({ menuId, optionId }) => {
  const menu = document.getElementById(menuId);
  const option = document.getElementById(optionId);

  if (menu && option) {
    menu.addEventListener("click", function () {
      option.classList.toggle("hidden");
      menu.ariaPressed = false;
    });
  }
});

function toggleModal() {
  var modal = document.querySelector(".modal_language");
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}

// spilt tab
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
