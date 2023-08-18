import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

container.addEventListener("click", handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) return;

  const createImage = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${createImage}" alt="${evt.target.description}">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
    },
    {
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(evt) {
    if (evt.key === "Escape") instance.close();
  }
}
