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
    imagePopup: '.popup-img'
}
export const profileConfig = {
    profileName: 'profile__name',
    profileJob: 'profile__job'
}
export const editProfileButton = document.querySelector('.profile__edit-button');
export const addPlaceButton = document.querySelector('.profile__add-button');
export const inputName = document.querySelector('.popup__input_name');
export const inputJob = document.querySelector('.popup__input_job');
export const inputPlaceName = document.querySelector('.popup__input_place-name');
export const inputPlaceImg = document.querySelector('.popup__input_place-img');
export const cardsList = document.querySelector('.places');

export const startCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];