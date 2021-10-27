import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');
// console.log(markup);

gallery.insertAdjacentHTML('afterbegin', markup);
gallery.addEventListener('click', onSelectImage);

function onSelectImage(event) {
  event.preventDefault();
  const image = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${image}" width="800" height="600">`
  );
  instance.show();
  //   instance.show(() => console.log('lightbox now visible'));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
}

// console.log(galleryItems);
