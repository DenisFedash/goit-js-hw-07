import { galleryItems } from './gallery-items.js';
// // // Change code below this line

const instance = basicLightbox.create(`
  <div class="modal">	
    <img src= ' ' />      
  </div>
`);

const galleryItemsEl = document.querySelector('.gallery');
const cardsGallery = createImageCards(galleryItems);
const image = instance.element().querySelector('img');

galleryItemsEl.insertAdjacentHTML('beforeend', cardsGallery);
galleryItemsEl.addEventListener('click', onPaletteContainer);
function createImageCards(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}" data-lightBox = "image-group">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join(' ');
};
function onPaletteContainer(evt) {
  evt.preventDefault();
  image.src = `original`;
  instance.show();
  if (!evt.target.classList.contains('gallery__image') ) {
    return;
  }
  console.log(evt.target);
};




      



