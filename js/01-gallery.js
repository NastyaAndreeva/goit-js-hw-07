import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// gallery.style.cursor = 'default';


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
    const instance = basicLightbox.create(`
    <div class="gallery__item">
    <a class="gallery__link" href="${newSrc}">
      <img
        class="gallery__image"
        src="${newSrc}"
        data-source="${newSrc}"
      />
  </a>
  </div>
`, {
    onShow: (instance) => {
      const link = instance.element().querySelector('.gallery__link');
      link.style.cursor = 'default';
      link.addEventListener('click', event => {
        event.preventDefault();
      })
      
      link.onclick = instance.close;
      window.addEventListener('keydown', function(event) {
        if (event.code === 'Escape') {
          instance.close();
          }
      });
        
    }
})

instance.show(); 
}

gallery.insertAdjacentHTML('beforeend', createImageElements(galleryItems));

gallery.addEventListener('click', onImageClick);




