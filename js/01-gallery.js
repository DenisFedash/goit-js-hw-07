import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleyEl = document.querySelector('.gallery');
const cardMrakup = createImageCards(galleryItems);

galleyEl.insertAdjacentHTML('beforeend', cardMrakup);
galleyEl.addEventListener('click', onGalleryClick);
function createImageCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
  </a>
</div>`
    }).join(' ');
};

const imgEl = e.target;
const bigImgEl = imgEl.closest('[data-source="${original}"]');
console.log(bigImgEl);

