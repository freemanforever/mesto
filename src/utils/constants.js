export const editProfilePopup = document.querySelector('.popup-profile-edit');
export const addPlacePopup = document.querySelector('.popup-place-add');
export const popupImg = document.querySelector('.popup-img');
export const editProfileButton = document.querySelector('.profile__edit-button');
export const addPlaceButton = document.querySelector('.profile__add-button');
export const editProfileCloseButton = editProfilePopup.querySelector('.popup__close-button');
export const addPlaceCloseButton = addPlacePopup.querySelector('.popup__close-button');
export const closePopupImg = document.querySelector('.popup-img__close-button');
export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__job');
export const inputName = document.querySelector('.popup__input_name');
export const inputJob = document.querySelector('.popup__input_job');
export const inputPlaceName = document.querySelector('.popup__input_place-name');
export const inputPlaceImg = document.querySelector('.popup__input_place-img');
export const cardsList = document.querySelector('.places');
// Находим форму для Add Mesto в DOM
export const addPlaceForm = addPlacePopup.querySelector('.popup__form');
// Находим форму для Edit Profile в DOM
export const editProfileForm = editProfilePopup.querySelector('.popup__form');
export const startCards = [
    {
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
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible',
}