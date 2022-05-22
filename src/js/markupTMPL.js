import refs from './refs';
import template from '../template/photo-card.hbs';

const markupPhoto = images => {
    let markup = template(images);
    refs.galleryList.insertAdjacentHTML('beforeend', markup)

}
export default markupPhoto;

