import './sass/main.scss';
import refs from './js/refs';
import apiService from './js/apiService';
import markupPhoto from './js/markupTMPL';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';




let page = 1;
let inputValue = '';
refs.loadMore.style.display = 'none';

const searchInput = e => {
    e.preventDefault();
    refs.galleryList.innerHTML = '';
    const inputValue = e.target.elements.query.value;

    if (inputValue.length) {
        apiService(inputValue, page)
            .then(images => {
                images.length
                    ?(refs.loadMore.style.display = 'block')
                    : (refs.loadMore.style.display = 'none')
                markupPhoto(images);
            })
    }   
};
const moreImages = () => {
   page+=1 
    apiService(inputValue, page)
        .then(images => {
            markupPhoto(images);
refs.loadMore.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
        })
}

const onOpenModal = e => {
    console.log(e);

  if (e.target.nodeName !== 'IMG') {
      return;
  }
    const imageInstance = basicLightbox.create(`<img src="${e.target.currentSrc}" alt="" width="1400" height="900"/>`);
  imageInstance.show();
}
refs.galleryList.addEventListener('click', onOpenModal);
refs.form.addEventListener('submit', searchInput);
refs.loadMore.addEventListener('click', moreImages);