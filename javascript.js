const accessbutton = document.getElementById("filterbutton");
const access = document.getElementById("accessibility");

accessbutton.addEventListener("click", function () {
  access.classList.toggle("access");
  localStorage.setItem(
    "clicked",
    localStorage.getItem("clicked") === "yes" ? "no" : "yes"
  );
});

if (localStorage.getItem("clicked") === "yes") {
  access.classList.add("access");
} else {
  access.classList.remove("access");
}
