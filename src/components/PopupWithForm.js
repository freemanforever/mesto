import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._inputValues = {};
        this._inputList.forEach(item => this._formValues[item.name] = item.value);
        return this._inputValues;
    }
    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }
    close() {
        this._popupForm.reset();
        super.close();
    }
}