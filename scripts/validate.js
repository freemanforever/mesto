//выводим сообщение о неправильном вводе в input
function showInputError(formSelector, inputSelector, errorMessage) {
    const errorSelector = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.add('popup__input_type-error');
    errorSelector.textContent = errorMessage;
    errorSelector.classList.add('popup__error_visible');
}
//скрываем сообщение о неправильном вводе в input
function hideInputError(formSelector, inputSelector) {
    const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
    inputSelector.classList.remove('popup__input_type-error');
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
}
//проводим проверку валидности input'а,
//если не валиден, выводим сообщение об ошибке
function checkInputValidity(formSelector, inputSelector) {
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
        hideInputError(formSelector, inputSelector);
    }
}
//навешиваем на инпуты формы проверку валидности, меняем состояние кнопки отправки данных
function setEventListeners(formSelector) {
    const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
    const submitButtonSelector = formSelector.querySelector('.popup__save-button');
    toggleButtonState(inputList, submitButtonSelector);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function () {
            checkInputValidity(formSelector, inputSelector);
            toggleButtonState(inputList, submitButtonSelector);
        });
    });
}
//запускаем процесс валидации для всех форм
function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formSelector);
    });
}
//проверяем, есть ли из списка инпутов не валидный
function hasInvalidInput(inputList) {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
}
//изменяем состояние кнопки отправки
function toggleButtonState(inputList, submitButtonSelector) {
    if (hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add('popup__button_disabled');
    } else {
        submitButtonSelector.classList.remove('popup__button_disabled');
    };
}
//скрываем ошибки из формы
const resetErrorInput = (formSelector) => {
    const inputList = formSelector.querySelectorAll('.popup__input');
    const inputs = Array.from(inputList);
    inputs.forEach((inputSelector) => {
        hideInputError(formSelector, inputSelector);
    });
}