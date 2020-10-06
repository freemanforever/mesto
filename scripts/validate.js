const params = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible',
}
//выводим сообщение о неправильном вводе в input 
const showInputError = (formElement, inputElement, errorMessage, params) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(params.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(params.errorClass);
};
//скрываем сообщение о неправильном вводе в input 
const hideInputError = (formElement, inputElement, params) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(params.inputErrorClass);
    errorElement.classList.remove(params.errorClass);
    errorElement.textContent = '';
};
//проводим проверку валидности input'а, 
//если не валиден, выводим сообщение об ошибке 
const checkInputValidity = (formElement, inputElement, params) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, params);
    } else {
        hideInputError(formElement, inputElement, params);
    }
}
//проверяем, есть ли из списка инпутов не валидный 
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
//сбрасываем ошибки с инпутов 
const resetErrorInput = (formElement, params) => {
    const inputList = formElement.querySelectorAll(params.inputSelector);
    const inputs = Array.from(inputList);
    inputs.forEach((inputElement) => {
        hideInputError(formElement, inputElement, params);
    });
}
//изменяем состояние кнопки отправки 
function toggleButtonState(inputList, submitButton, params) {
    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(params.inactiveButtonClass);
    } else {
        submitButton.classList.remove(params.inactiveButtonClass);
    };
}
//навешиваем на инпуты формы проверку валидности, меняем состояние кнопки отправки данных 
const setEventListeners = (formElement, params) => {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const submitButton = formElement.querySelector(params.submitButtonSelector);
    toggleButtonState(inputList, submitButton, params);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, params);
            toggleButtonState(inputList, submitButton, params);
        });
    });
}
//disable button 
const disableButton = (formElement, params) => {
    const submitButton = formElement.querySelector(params.submitButtonSelector);
    submitButton.classList.add(params.inactiveButtonClass);
}
//запускаем процесс валидации для всех форм 
const enableValidation = (params) => {
    const forms = document.querySelectorAll(params.formSelector);
    const formList = Array.from(forms);
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, params);
    });
}