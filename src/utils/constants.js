export const formConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible',
}
export const popupConfig = {
    editProfilePopup: '.popup-profile-edit',
    addCardPopup: '.popup-place-add',
    imagePopup: '.popup-img',
    editAvatarPopup: '.popup-avatar-edit',
    delConfirmPopup: '.popup-del-confirm'
}
export const profileConfig = {
    profileName: 'profile__name',
    profileJob: 'profile__job',
    profileAvatar: 'profile__avatar-image'
}
export const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',
    headers: {
        authorization: '32e537f0-5d42-44fe-b91c-e46296511fbf',
        'Content-Type': 'application/json'
    }
}
export const editProfileButton = document.querySelector('.profile__edit-button');
export const addPlaceButton = document.querySelector('.profile__add-button');
export const editAvatarButton = document.querySelector('.profile__avatar-edit-button');
export const inputName = document.querySelector('.popup__input_name');
export const inputJob = document.querySelector('.popup__input_job');
export const cardsListSelector = document.querySelector('.places');
export const cardTemplateSelector = '.place-card-template';