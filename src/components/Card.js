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
        const placeCardImage = this._element.querySelector('.place-card__image');
        this._element.querySelector('.place-card__header').textContent = this._name;
        placeCardImage.src = this._link;
        placeCardImage.alt = this._name;
        this._setListeners();
        return this._element;
    }
    _likeCard() {
        this._element.querySelector('.place-card__like-button').classList.toggle('place-card__liked');
    }
    _delCard() {
        this._element.closest('.place-card').remove();
    }
    _setListeners() {
        this._element.querySelector('.place-card__like-button').addEventListener('click', () => this._likeCard());
        this._element.querySelector('.place-card__recycleButton').addEventListener('click', () => this._delCard());
        this._element.querySelector('.place-card__image').addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }
}