//выводим сообщение о неправильном вводе в input 
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};
//скрываем сообщение о неправильном вводе в input 
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};
//проводим проверку валидности input'а, 
//если не валиден, выводим сообщение об ошибке 
const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
}
//проверяем, есть ли из списка инпутов не валидный 
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
//сбрасываем ошибки с инпутов 
const resetErrorInput = (formElement, { inputSelector }) => {
    const inputList = formElement.querySelectorAll(inputSelector);
    const inputs = Array.from(inputList);
    inputs.forEach((inputElement) => {
        hideInputError(formElement, inputElement, config);
    });
}
//изменяем состояние кнопки отправки 
function toggleButtonState(inputList, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(inactiveButtonClass);
    } else {
        submitButton.classList.remove(inactiveButtonClass);
    };
}
//навешиваем на инпуты формы проверку валидности, меняем состояние кнопки отправки данных 
const setEventListeners = (formElement, { inputSelector, submitButtonSelector }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const submitButton = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, submitButton, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, submitButton, config);
        });
    });
}
//disable button 
const disableButton = (formElement, { inactiveButtonClass, submitButtonSelector }) => {
    const submitButton = formElement.querySelector(submitButtonSelector);
    submitButton.classList.add(inactiveButtonClass);
}
//запускаем процесс валидации для всех форм 
const enableValidation = (config) => {
    const forms = document.querySelectorAll(config.formSelector);
    const formList = Array.from(forms);
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
}