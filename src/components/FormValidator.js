export default class FormValidator {
    constructor(formConfig, formElement) {
        this._inputSelector = formConfig.inputSelector;
        this._submitButtonSelector = formConfig.submitButtonSelector;
        this._inactiveButtonClass = formConfig.inactiveButtonClass;
        this._inputErrorClass = formConfig.inputErrorClass;
        this._errorClass = formConfig.errorClass;
        this._formElement = document.querySelector(`.${formElement}`);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    };
    //вывод сообщения об ошибке ввода 
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    //скрытие сообщения об ошибке ввода  
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
    //проверка валидности введенного в input, для вывода(скрытия) ошибки
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };
    //проверяем, есть ли из списка инпутов не валидные  
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };
    //сбрасываем ошибки с инпутов формы  
    resetInputError() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    };
    //переключатель состояния кнопки отправки
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    };
    //навешиваем слушатели событий
    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };
    //disable button  
    disableButton() {
        const submitButton = this._formElement.querySelector(this._submitButtonSelector);
        submitButton.classList.add(this._inactiveButtonClass);
    };
    //запуск валидации 
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
        this._setEventListeners();
    }
};