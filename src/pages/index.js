import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
    formConfig,
    popupConfig,
    profileConfig,
    inputName,
    inputJob,
    editProfileButton,
    addPlacePopup,
    popupImg,
    addPlaceButton,
    inputPlaceName,
    inputPlaceImg,
    cardsList,
    startCards,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo({
    userNameSelector: profileConfig.profileName,
    userJobSelector: profileConfig.profileJob
});

const userProfilePopup = new PopupWithForm({
    popupSelector: popupConfig.editProfilePopup,
    handleFormSubmit: () => {
        userInfo.setUserInfo({
            userName: inputName.value,
            userJob: inputJob.value
        });
        userProfilePopup.close();
    }
})
// // Функция открытия попапа редактирования профиля
const openEditPopup = () => {
    const currentProfileInfo = userInfo.getUserInfo();
    inputName.value = currentProfileInfo.userName;
    inputJob.value = currentProfileInfo.userJob;
    popupEditForm.resetInputError();
    popupEditForm.disableButton();
    userProfilePopup.open();
}

// //Функция открытия попапа добавления места
// const openAddPopup = () => {
//     addPlaceForm.reset();
//     popupFormPlace.resetInputError();
//     popupFormPlace.disableButton();
//     openPopup(addPlacePopup);
// }

// // Обработчик «отправки» для формы добавления карточки места
// function submitPlaceHandler(evt) {
//     evt.preventDefault();
//     const addCardValues = {
//         name: inputPlaceName.value,
//         link: inputPlaceImg.value
//     }
//     const card = new Card(addCardValues, '.place-card-template');
//     const cardElement = card.getElement();
//     cardsList.prepend(cardElement);
//     closePopup(addPlacePopup);
//     addPlaceForm.reset();
// }

// editProfileForm.addEventListener('submit', editProfileSubmitHandler);
// addPlaceForm.addEventListener('submit', submitPlaceHandler);
// addPlaceButton.addEventListener('click', () => { openAddPopup() });

// addPlaceCloseButton.addEventListener('click', () => { closePopup(addPlacePopup) });
// closePopupImg.addEventListener('click', () => { closePopup(popupImg) });
// // Выводим массив карточек на экран
// startCards.forEach(({ name, link }) => {
//     const card = new Card({ name, link }, '.place-card-template');
//     const cardElement = card.getElement();
//     cardsList.append(cardElement);
// });

//listeners
editProfileButton.addEventListener('click', openEditPopup);
userProfilePopup.setEventListeners();
//валидация форм
const popupEditForm = new FormValidator(formConfig, 'form_profile');
popupEditForm.enableValidation();
// const popupFormPlace = new FormValidator(config, addPlaceForm);
//popupFormPlace.enableValidation();