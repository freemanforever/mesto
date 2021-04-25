import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._openedImg = this._popupElement.querySelector('popup-img__opened-image');
        this._headerImg = this._popupElement.querySelector('.popup-img__header');
    }

    open({link, name}) {
        this._openedImg.setAttribute('src', link);
        this._openedImg.setAttribute('alt', name);
        this._headerImg.textContent = name;
        super.open();
        super.setEventListeners();
    };
}