const notificationBtn = document.querySelector("#notification-btn");
const notificationSubMenu = document.querySelector(
  "#notification-btn .sub-menu"
);

notificationBtn.addEventListener("click", (e) => {
  notificationSubMenu.classList.toggle("notification-menu-toggle");
});
