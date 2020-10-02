//выводим сообщение о неправильном вводе в input
function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(values.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(values.errorClass);
};
//скрываем сообщение о неправильном вводе в input
function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(values.inputErrorClass);
    errorElement.classList.remove(values.errorClass);
    errorElement.textContent = '';
};
//проводим проверку валидности input'а,
//если не валиден, выводим сообщение об ошибке
function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}
//навешиваем на инпуты формы проверку валидности, меняем состояние кнопки отправки данных
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(values.inputSelector));
    const submitButtonSelector = formElement.querySelector(values.submitButtonSelector);
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
        submitButtonSelector.classList.add(values.inactiveButtonClass);
    } else {
        submitButtonSelector.classList.remove(values.inactiveButtonClass);
    };
}
//скрываем ошибки из формы и блочим кнопку
const resetErrorInput = (formElement) => {
    const inputList = formElement.querySelectorAll(values.inputSelector);
    const inputs = Array.from(inputList);
    inputs.forEach((inputElement) => {
        hideInputError(formElement, inputElement);
    });
}
//disable button
const disableButton = (formElement) => {
    const submitButton = formElement.querySelector(values.submitButtonSelector);
    submitButton.classList.add(values.inactiveButtonClass);    
}
//запускаем процесс валидации для всех форм
function enableValidation() {
    const forms = document.querySelectorAll(values.formSelector);
    const formList = Array.from(forms);
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
}