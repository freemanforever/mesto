import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._button = this._popupElement.querySelector('button[type="submit"]');
        this._buttonDefaultText = this._button.textContent;
        this._handleFormSubmit = handleFormSubmit;
    }
    
}