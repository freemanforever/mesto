import { startCards, config } from './config.js';
import Card from './Card.js';
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
// Находим форму для EditProfile в DOM
const editProfileForm = editProfilePopup.querySelector('.popup__form');
// Функция открытия-закрытия попапа
export function togglePopup(popup) {
    document.addEventListener('keydown', closePopupByPressEscape);
    popup.addEventListener('mousedown', closePopupByClickOverlay);
    popup.classList.toggle('popup_opened');
};
// Функция открытия попапа редактирования профиля
const openEditPopup = () => {
    inputName.value = nameProfile.textContent;
    inputJob.value = jobProfile.textContent;
    //disableButton(editProfilePopup, config);
    //resetErrorInput(editProfilePopup, config);
    togglePopup(editProfilePopup);
}
//Функция открытия попапа добавления места
const openAddPopup = () => {
    addPlaceForm.reset();
    //disableButton(addPlacePopup, config);
    //resetErrorInput(addPlacePopup, config);
    togglePopup(addPlacePopup);
}
// Обработчик «отправки» для формы редактирования профиля
function editProfileSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputJob.value;
    togglePopup(editProfilePopup);
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
    togglePopup(addPlacePopup);
    addPlaceForm.reset();
}
//Функция закрытия попапа кликом по оверлею
function closePopupByClickOverlay(event) {
    if (event.target !== event.currentTarget) { return };
    togglePopup(event.target);
}
//Функция закрытия попапа нажатием Escape
const closePopupByPressEscape = (event) => {
    if (event.key === 'Escape') { togglePopup(document.querySelector('.popup_opened')) };
}
//listeners
editProfileForm.addEventListener('submit', editProfileSubmitHandler);
addPlaceForm.addEventListener('submit', submitPlaceHandler);
editProfileButton.addEventListener('click', () => { openEditPopup() });
addPlaceButton.addEventListener('click', () => { openAddPopup() });
editProfileCloseButton.addEventListener('click', () => { togglePopup(editProfilePopup) });
addPlaceCloseButton.addEventListener('click', () => { togglePopup(addPlacePopup) });
closePopupImg.addEventListener('click', () => { togglePopup(popupImg) });
// Выводим массив карточек на экран
startCards.forEach(({ name, link }) => {
    const card = new Card({ name, link }, '.place-card-template');
    const cardElement = card.getElement();
    cardsList.append(cardElement);
});
//завалидируем
//enableValidation(config);