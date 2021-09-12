export default class Card {
    constructor({
                    data, currentUserId, handleCardDelSubmit, handleCardClick, handleAddLike, handleDelLike
                }, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._isLiked = false;
        this._handleCardDelSubmit = handleCardDelSubmit;
        this._handleAddLike = handleAddLike;
        this._handleDelLike = handleDelLike;
        this._likes = data.likes;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._currentUserId = currentUserId;
        this.delCard = this.delCard.bind(this);
    }

    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.place-card')
            .cloneNode(true);
    }

    getElement() {
        this._element = this._getTemplate();
        this._titleElement = this._element.querySelector('.place-card__header');
        this._titleElement.textContent = this._name;
        this._imageElement = this._element.querySelector('.place-card__image');
        this._likeButton = this._element.querySelector('.place-card__like-button');
        this._likeCounter = this._element.querySelector('.place-card__like-count')
        this._likeCounter.textContent = this._likes.length;
        const placeCardImage = this._imageElement;
        placeCardImage.src = this._link;
        placeCardImage.alt = this._name;
        this._likes.forEach(element => {
            if (element._id === this._currentUserId) {
                this._likeButton.classList.add('place-card__liked');
                this._isLiked = true
            }
        });
        this._setListeners();
        return this._element;
    }

    delCard() {
        this._element.remove();
        this._element = null;
    }

    _setListeners() {
        this._deleteButton = this._element.querySelector('.place-card__recycleButton');
        this._deleteButton.addEventListener('click', (evt) => {
            this._handleCardDelSubmit(this._cardId, evt.target);
        });
        if (this._currentUserId !== this._ownerId) {
            this._deleteButton.remove()
        }
        this._imageElement.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
        this._likeButton.addEventListener('click', () => {
            if (this._isLiked) {
                this._handleDelLike(this._cardId)
            } else {
                this._handleAddLike(this._cardId)
            }
        });
    }
}