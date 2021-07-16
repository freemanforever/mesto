export default class Card {
    constructor({
        name,
        link,
        handleCardClick
    }, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.place-card')
            .cloneNode(true);
        return cardElement;
    }
    getElement() {
        this._element = this._getTemplate();
        this._titleElement = this._element.querySelector('.place-card__header');
        this._imageElement = this._element.querySelector('.place-card__image');
        this._likeButton = this._element.querySelector('.place-card__like-button');
        this._deleteButton = this._element.querySelector('.place-card__recycleButton');
        const placeCardImage = this._imageElement;
        this._titleElement.textContent = this._name;
        placeCardImage.src = this._link;
        placeCardImage.alt = this._name;
        this._setListeners();
        return this._element;
    }
    _likeCard() {
        this._likeButton.classList.toggle('place-card__liked');
    }
    _delCard() {
        this._element.remove();
        this._element = null;
    }
    _setListeners() {
        this._likeButton.addEventListener('click', () => this._likeCard());
        this._deleteButton.addEventListener('click', () => this._delCard());
        this._imageElement.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }
}