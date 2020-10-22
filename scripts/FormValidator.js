export default class FormValidator {
    constructor(config, formElement) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formElement = formElement;
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
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }
    //проверяем, есть ли из списка инпутов не валидный  
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }
    //сбрасываем ошибки с инпутов  
    resetInputError() {
        this._inputList = this._formElement.querySelectorAll(this._inputSelector);
        this._inputs = Array.from(this._inputList);
        this._inputs.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }
    //изменяем состояние кнопки отправки  
    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
        };
    }
    //навешиваем на инпуты формы проверку валидности, меняем состояние кнопки отправки данных  
    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(this._inputList, this._submitButton);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }
    //disable button  
    disableButton() {
        const submitButton = this._formElement.querySelector(this._submitButtonSelector);
        submitButton.classList.add(this._inactiveButtonClass);
    }
    //запускаем процесс валидации для всех форм  
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
        this._setEventListeners();
    }
}