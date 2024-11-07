import { galleryItems } from "./gallery-items.js";

const listEl = document.querySelector(".gallery");

listEl.insertAdjacentHTML("beforebegin", galleryMarkup(galleryItems));

listEl.addEventListener("click", getBasicLightbox);

function galleryMarkup(items) {
  const markup = items
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
    )
    .join("");

  return markup;
}

function getBasicLightbox(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    basicLightbox.create(`<img src=${event.target.dataset.source}>`).show();
  }
  return;
}
