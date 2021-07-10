import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._openedImg = this._popupElement.querySelector('.popup-img__opened-image');
        this._openedImgName = this._popupElement.querySelector('.popup-img__header');
    }
    open(name, link) {
        this._openedImg.setAttribute('src', link);
        this._openedImg.setAttribute('alt', name);
        this._openedImgName.textContent = name;
        super.open();
    }
    setEventListeners() {
        this._popupElement.querySelector('.popup-img__close-button').addEventListener('click', this._close);
    }
}