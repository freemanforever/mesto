import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit.bind(this);
        this._saveButtonText = this._popupElement.querySelector('.popup__save-button').textContent;
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._inputValues = {};
        this._inputList.forEach(item => this._inputValues[item.name] = item.value);
        return this._inputValues;
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    }

    open() {
        super.open();
    }

    close() {
        super.close();
        this._popupForm.reset();
        this.isLoading(false);
    }

    isLoading(loading) {
        const saveButton = this._popupForm.querySelector('.popup__save-button')
        if (loading) {
            saveButton.textContent = 'Сохранение...'
        } else {
            saveButton.textContent = this._saveButtonText
        }
    }
}