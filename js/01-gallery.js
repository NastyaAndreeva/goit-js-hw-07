import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
let instance = null;

function createImageElements(galleryItems) {
    return galleryItems.map(el => {
        return  `<div class="gallery__item">
        <a class="gallery__link" href="${el.original}">
          <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            alt="${el.description}"
          />
      </a>
      </div>`
    }).join("");
}

function onImageClick(event) {
    event.preventDefault();
    const newSrc = galleryItems.find(el => el.preview === event.target.src).original;
    instance = basicLightbox.create(`
      <img
        class="gallery__image"
        src="${newSrc}"
        data-source="${newSrc}"
      />
`, {
    onShow: (instance) => {
        window.addEventListener('keydown', onModalKeydown);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onModalKeydown);
    }
})

instance.show(); 
}

gallery.insertAdjacentHTML('beforeend', createImageElements(galleryItems));

gallery.addEventListener('click', onImageClick);

function onModalKeydown (event) {
  console.log(event);
  if (event.code === 'Escape') {
    instance.close();
    }
}





