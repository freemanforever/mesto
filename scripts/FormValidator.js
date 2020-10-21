export default class FormValidator {
    constructor(formSelector, config) {
        this._formSelector = config.formSelector;
        this._formElement = document.querySelector(formSelector);
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }
    //выводим сообщение о неправильном вводе в input 
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    //скрываем сообщение о неправильном вводе в input 
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
    //проводим проверку валидности input'а, 
    //если не валиден, выводим сообщение об ошибке
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(this._formElement, inputElement, inputElement.validationMessage, this._config);
        } else {
            this._hideInputError(this._formElement, inputElement, this._config);
        }
    }
    //проверяем, есть ли из списка инпутов не валидный 
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
    //сбрасываем ошибки с инпутов 
    // resetErrorInput() {
    //     this._inputList = this._formElement.querySelectorAll(inputSelector);
    //     this._inputs = Array.from(this._inputList);
    //     inputs.forEach((inputElement) => {
    //         hideInputError(this._formElement, inputElement);
    //     });
    // }
    //изменяем состояние кнопки отправки 
    _toggleButtonState(inputList, submitButton) {
        if (this._hasInvalidInput(inputList)) {
            submitButton.classList.add(this._inactiveButtonClass);
        } else {
            submitButton.classList.remove(this._inactiveButtonClass);
        };
    }
    //навешиваем на инпуты формы проверку валидности, меняем состояние кнопки отправки данных 
    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const submitButton = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, submitButton);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, submitButton);
            });
        });
    }
    //disable button 
    // _disableButton (formElement, { inactiveButtonClass, submitButtonSelector }) {
    //     const submitButton = formElement.querySelector(submitButtonSelector);
    //     submitButton.classList.add(inactiveButtonClass);
    // }
    //запускаем процесс валидации
    enableValidation = () => {
        const submitFormHandler = (event) => {
            event.preventDefault();
        };
        this._formElement.addEventListener("submit", submitFormHandler);
        this._setEventListeners(this._formElement);
    }
}