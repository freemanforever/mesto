//выводим сообщение о неправильном вводе в input
function showInputError(formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};
//скрываем сообщение о неправильном вводе в input
function hideInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
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
//навешиваем на инпуты формы проверку валидности, меняем состояние кнопки отправки данных
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const submitButtonSelector = formElement.querySelector(params.submitButtonSelector);
    toggleButtonState(inputList, submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, submitButtonSelector);
        });
    });
}
//проверяем, есть ли из списка инпутов не валидный
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
//изменяем состояние кнопки отправки
function toggleButtonState(inputList, submitButtonSelector) {
    if (hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add(params.inactiveButtonClass);
    } else {
        submitButtonSelector.classList.remove(params.inactiveButtonClass);
    };
}
//скрываем ошибки из формы и блочим кнопку
const resetErrorInput = (formElement) => {
    const inputList = formElement.querySelectorAll(params.inputSelector);
    const inputs = Array.from(inputList);
    inputs.forEach((inputElement) => {
        hideInputError(formElement, inputElement, params);
    });
}
//disable button
const disableButton = (formElement) => {
    const submitButton = formElement.querySelector(params.submitButtonSelector);
    submitButton.classList.add(params.inactiveButtonClass);    
}
//запускаем процесс валидации для всех форм
function enableValidation({formSelector, ...params}) {
    const forms = document.querySelectorAll(formSelector);
    const formList = Array.from(forms);
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, params);
    });
}