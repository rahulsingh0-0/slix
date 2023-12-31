const productCards = document.querySelectorAll(".grid-item");
const popupContainer = document.querySelector(".load-popup");

productCards.forEach((value, index) => {
  value.addEventListener("click", (e) => {
    popupContainer.innerHTML = `
      <section class="grid-popup-container d-none">
      <i class="ri-close-line pop-up-close-button"></i>
      <section class="container popup-main-container">
        <section class="row justify-content-center align-items-center">
          <ul class="col-6 pop-card bg-white">
            <li class="pop-card-image">
              <img src="${
                value.querySelector(".gallery-grid-item > img").src
              }" alt="" />
            </li>
            <li class="bg-white pop-card-content">
              <div class="h2 text-center">${
                value.querySelector(".h4").textContent
              }</div>
              <div class="title-underline center text-center">
                <span></span>
              </div>
              <p class="simple-article">
                ${value.querySelector(".simple-article").textContent}
              </p>
            </li>
          </ul>
        </section>
      </section>
    </section>`;

    togglePopup(
      document.querySelector(".grid-popup-container"),
      document.querySelector(".pop-up-close-button")
    );
  });
});

function togglePopup(gridContainer, closeButton) {
  gridContainer.classList.toggle("active");
  gridContainer.addEventListener("click", () => {
    gridContainer.classList.toggle("active");
    document.querySelector("html").classList.remove("overflow-hidden");
  });
  closeButton.addEventListener("click", () => {
    gridContainer.style.display = "none";
    document.querySelector("html").classList.remove("overflow-hidden");
  });

  document.querySelector(".pop-card").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
