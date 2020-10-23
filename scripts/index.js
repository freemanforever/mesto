import Card from './Card.js';
import FormValidator from './FormValidator.js';
const editProfilePopup = document.querySelector('.popup-profile-edit');
const addPlacePopup = document.querySelector('.popup-place-add');
export const popupImg = document.querySelector('.popup-img');
const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const editProfileCloseButton = editProfilePopup.querySelector('.popup__close-button');
const addPlaceCloseButton = addPlacePopup.querySelector('.popup__close-button');
const closePopupImg = document.querySelector('.popup-img__close-button');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const inputPlaceName = document.querySelector('.popup__input_place-name');
const inputPlaceImg = document.querySelector('.popup__input_place-img');
const cardsList = document.querySelector('.places');
// Находим форму для Add Mesto в DOM
const addPlaceForm = addPlacePopup.querySelector('.popup__form');
// Находим форму для Edit Profile в DOM
const editProfileForm = editProfilePopup.querySelector('.popup__form');
const startCards = [
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
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible',
}
const popupForm = new FormValidator(config, editProfileForm);
const popupFormPlace = new FormValidator(config, addPlaceForm);
// Функция открытия попапа 
export function openPopup(popup) { 
    document.addEventListener('keydown', closePopupByPressEscape); 
    popup.addEventListener('mousedown', closePopupByClickOverlay); 
    popup.classList.add('popup_opened'); 
}; 
//Функция закрытия попапа 
function closePopup(popup) { 
    popup.classList.remove('popup_opened'); 
    document.removeEventListener('keydown', closePopupByPressEscape); 
    popup.removeEventListener('mousedown', closePopupByClickOverlay); 
} 
// Функция открытия попапа редактирования профиля
const openEditPopup = () => {
    inputName.value = nameProfile.textContent;
    inputJob.value = jobProfile.textContent;
    popupForm.resetInputError();
    popupForm.disableButton();
    openPopup(editProfilePopup);
}
//Функция открытия попапа добавления места
const openAddPopup = () => {
    addPlaceForm.reset();
    popupFormPlace.resetInputError();
    popupFormPlace.disableButton();
    openPopup(addPlacePopup);
}
// Обработчик «отправки» для формы редактирования профиля
function editProfileSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputJob.value;
    closePopup(editProfilePopup);
}
// Обработчик «отправки» для формы добавления карточки места
function submitPlaceHandler(evt) {
    evt.preventDefault();
    const addCardValues = {
        name: inputPlaceName.value,
        link: inputPlaceImg.value
    }
    const card = new Card(addCardValues, '.place-card-template');
    const cardElement = card.getElement();
    cardsList.prepend(cardElement);
    closePopup(addPlacePopup);
    addPlaceForm.reset();
}
//Функция закрытия попапа кликом по оверлею
function closePopupByClickOverlay(event) {
    if (event.target !== event.currentTarget) { return };
    closePopup(event.target);
}
//Функция закрытия попапа нажатием Escape
const closePopupByPressEscape = (event) => {
    if (event.key === 'Escape') { closePopup(document.querySelector('.popup_opened')) };
}
//listeners
editProfileForm.addEventListener('submit', editProfileSubmitHandler);
addPlaceForm.addEventListener('submit', submitPlaceHandler);
editProfileButton.addEventListener('click', () => { openEditPopup() });
addPlaceButton.addEventListener('click', () => { openAddPopup() });
editProfileCloseButton.addEventListener('click', () => { closePopup(editProfilePopup) });
addPlaceCloseButton.addEventListener('click', () => { closePopup(addPlacePopup) });
closePopupImg.addEventListener('click', () => { closePopup(popupImg) });
// Выводим массив карточек на экран
startCards.forEach(({ name, link }) => {
    const card = new Card({ name, link }, '.place-card-template');
    const cardElement = card.getElement();
    cardsList.append(cardElement);
});
//валидация форм
popupForm.enableValidation();
popupFormPlace.enableValidation();