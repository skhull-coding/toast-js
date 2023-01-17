let buttons = document.querySelectorAll("#buttons button");
let notifications = document.querySelector("#notifications");

let toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    message: "Success: This is a success message.",
  },
  error: {
    icon: "fa-circle-exclamation",
    message: "Error: This is a error message.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    message: "Warning: This is a warning message.",
  },
  info: {
    icon: "fa-circle-info",
    message: "Info: This is a info message.",
  },
};

const deleteToast = (toast) => {
  toast.classList.add("hide");
  setTimeout(() => {
    try{notifications.removeChild(toast);} catch{}
  }, 500);
};

const makeToast = (type) => {
  let newLi = document.createElement("li");
  newLi.className = `toast ${type}`;
  let innerHTML = `<div class="column">
                        <i class="fa-solid ${toastDetails[type]["icon"]}"></i>
                        <span>${toastDetails[type]["message"]}</span>
                        <button onclick='deleteToast(this.parentElement.parentElement)'><i class="fa-solid fa-xmark"></i></button>
                    </div>`;
  newLi.innerHTML = innerHTML;
  notifications.appendChild(newLi);
  toastTimer = setTimeout(() => {
    try{deleteToast(newLi)} catch{}
    }, toastDetails.timer);
};

buttons.forEach((elem) => {
  elem.addEventListener("click", (e) => makeToast(e.target.id));
});
