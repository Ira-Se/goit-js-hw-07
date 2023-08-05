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

  const originalImage = galleryItems.find(
    ({ original }) => original === createImage
  );
  const instance = basicLightbox.create(
    `<img src="${originalImage.original}" alt="${originalImage.description}">
`
  );
  instance.show();

  document.addEventListener("keydown", closeModal);

  function closeModal(evt) {
    if (evt.key === "Escape") instance.close();
  }
}
