import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createImageElements(galleryItems) {
    return galleryItems.map(el => {
        return  `
      <a class="gallery__item" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
        </a>`
    }).join("");
}

gallery.insertAdjacentHTML('beforeend', createImageElements(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: '250ms',
});