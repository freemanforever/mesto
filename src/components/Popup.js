export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }
    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.classList.add('popup_opened');
        this._popupElement.addEventListener('mousedown', this._handleOverlayClick);
    };
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.removeEventListener('mousedown', this._handleOverlayClick);
    }
    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', this.close);
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.addEventListener('click', this._handleOverlayClick);
    }
    _handleOverlayClick = (event) => {
        if (event.target !== event.currentTarget) { return };
        this.close();
    }
    _handleEscClose = (event) => {
        if (event.key === 'Escape') { this.close() };
    }
}