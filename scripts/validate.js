//выводим сообщение о неправильном вводе в input
function showInputError(formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};
//скрываем сообщение о неправильном вводе в input
function hideInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};
//проводим проверку валидности input'а,
//если не валиден, выводим сообщение об ошибке
function checkInputValidity(formElement, inputElement) {
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
const resetErrorInput = (formElement, { inputSelector }) => {
    const inputList = formElement.querySelectorAll(inputSelector);
    const inputs = Array.from(inputList);
    inputs.forEach((inputElement) => {
        hideInputError(formElement, inputElement, params);
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
function setEventListeners(formElement, { inputSelector, submitButtonSelector }) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const submitButton = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, submitButton, params);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, submitButton, params);
        });
    });
}
//disable button
const disableButton = (formElement, { submitButtonSelector, inactiveButtonClass }) => {
    const submitButton = formElement.querySelector(submitButtonSelector);
    submitButton.classList.add(inactiveButtonClass);
}
//запускаем процесс валидации для всех форм
function enableValidation({ formSelector, ...params }) {
    const forms = document.querySelectorAll(formSelector);
    const formList = Array.from(forms);
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, params);
    });
}