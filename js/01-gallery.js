import { galleryItems } from './gallery-items.js';
// // // Change code below this line



const galleryItemsEl = document.querySelector('.gallery');
const cardsGallery = createImageCards(galleryItems);

galleryItemsEl.insertAdjacentHTML('beforeend', cardsGallery);
galleryItemsEl.addEventListener('click', onPaletteContainer);
function createImageCards(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
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
  
  if (!evt.target.classList.contains('gallery__image') ) {
    return;
  }
  console.log(evt.target);
  const instance = basicLightbox.create(`  	
    <img src= "${evt.target.dataset.source}" /> 
`);
  instance.show();
  
};




      



