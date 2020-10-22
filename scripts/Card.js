import { togglePopup, popupImg } from './index.js';
export default class Card {
    constructor({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }
    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.place-card').cloneNode(true);
        return cardElement;
    }
    getElement() {
        this._element = this._getTemplate();
        this._element.querySelector('.place-card__header').textContent = this._name;
        this._element.querySelector('.place-card__image').src = this._link;
        this._element.querySelector('.place-card__image').alt = this._name;
        this._setListeners();
        return this._element;
    }
    _likeCard() {
        this._element.querySelector('.place-card__like-button').classList.toggle('place-card__liked');
    }
    _delCard() {
        this._element.closest('.place-card').remove();
    }
    _openImg() {
        const openPopupHeader = document.querySelector('.popup-img__header');
        const openPopupImg = document.querySelector('.popup-img__opened-image');
        const img = this._element.querySelector('.place-card__image');
        openPopupImg.src = img.src;
        openPopupHeader.textContent = img.name;
        togglePopup(popupImg);
    }
    _setListeners() {
        this._element.querySelector('.place-card__like-button').addEventListener('click', () => this._likeCard());
        this._element.querySelector('.place-card__recycleButton').addEventListener('click', () => this._delCard());
        this._element.querySelector('.place-card__image').addEventListener('click', () => this._openImg());
    }
} 