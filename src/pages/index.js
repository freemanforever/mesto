import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
// import PopupWithImage from '../components/PopupWithImage.js';
// import PopupWithForm from '../components/PopupWithForm.js';
// import UserInfo from '../components/UserInfo.js';
import {
    editProfilePopup, addPlacePopup, popupImg, editProfileButton, addPlaceButton,
    editProfileCloseButton, addPlaceCloseButton, closePopupImg, nameProfile, jobProfile,
    inputName, inputJob, inputPlaceName, inputPlaceImg, cardsList, addPlaceForm, editProfileForm, startCards, config
} from '../utils/constants.js';

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
const popupForm = new FormValidator(config, editProfileForm);
const popupFormPlace = new FormValidator(config, addPlaceForm);
popupForm.enableValidation();
popupFormPlace.enableValidation();