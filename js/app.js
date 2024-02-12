const cl = console.log.bind(console);

const links = document.querySelector(".links");
const navBtn = document.querySelector(".nav-btn");

function action(e) {
  let check = links.classList.contains("show");
  if (check) {
    links.classList.remove("show");
  } else {
    links.classList.add("show");
  }
}

navBtn.addEventListener("click", action);
