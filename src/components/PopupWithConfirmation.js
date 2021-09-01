import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor({
                    popupSelector
                }) {
        super(popupSelector);
    }
    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

        });
        super.setEventListeners();
    }
    open() {
        super.open();
    }
    close() {
        super.close();
    }
}