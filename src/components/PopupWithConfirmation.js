import PopupWithForm from './PopupWithForm.js'

export default class PopupWithSubmit extends PopupWithForm {
    submitConfirm(newHandler) {
        this._handleFormSubmit = newHandler;
    }
}