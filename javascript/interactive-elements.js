/* CAPTION ACCORDIONS */
const acc = document.getElementsByClassName("accordion-button");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.innerHTML = "View image description";
    } else {
      panel.style.display = "block";
      this.innerHTML = "Hide image description";
    }
  });
}
/* CAPTION ACCORDIONS ends */
