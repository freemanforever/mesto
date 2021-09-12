import PopupWithForm from './PopupWithForm.js'

export default class PopupWithSubmit extends PopupWithForm {
    constructor({popupSelector, handleFormSubmit}) {
        super({popupSelector, handleFormSubmit});
    }

    submitConfirm(evt) {
        this._handleFormSubmit = evt;
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', this._close);
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        })
    }
}