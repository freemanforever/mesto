export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._close = this.close.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.classList.add('popup_opened');
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', this._close);
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.addEventListener('mousedown', this._handleOverlayClick);
    }

    _handleOverlayClick = (event) => {
        if (event.target !== event.currentTarget) {
            return
        }
        this.close();
    }
    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
            this.close()
        }
    }
}