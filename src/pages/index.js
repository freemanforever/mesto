import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
    formConfig,
    popupConfig,
    profileConfig,
    inputName,
    inputJob,
    editProfileButton,
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
    const profileInfo = userInfo.getUserInfo();
    inputName.value = profileInfo.userName;
    inputJob.value = profileInfo.userJob;
    popupEditForm.resetInputError();
    popupEditForm.disableButton();
    userProfilePopup.open();
}

// //Функция открытия попапа добавления места
// const openAddPopup = () => {
//     addPlaceForm.reset();
//     popupFormPlace.resetInputError();
//     popupFormPlace.disableButton();
//     openPopup(addCardPopup);
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
//     closePopup(addCardPopup);
//     addPlaceForm.reset();
// }

// closePopupImg.addEventListener('click', () => { closePopup(popupImg) });

// // Выводим массив карточек на экран
const cardListInitiated = new Section({
    items: startCards,
    renderer: (data) => {
        cardListInitiated.addItem(generateCard(data));
    }
}, cardsList);

function generateCard(item) {
    const card = new Card({
        name: item.name,
        link: item.link,

    }, '.place-card-template');
    const cardElement = card.getElement();
    return cardElement;
}
cardListInitiated.renderItems();
//listeners
editProfileButton.addEventListener('click', openEditPopup);
userProfilePopup.setEventListeners();
// addPlaceForm.addEventListener('submit', submitPlaceHandler);
// addPlaceButton.addEventListener('click', () => { openAddPopup() });
//валидация форм
const popupEditForm = new FormValidator(formConfig, 'form_profile');
popupEditForm.enableValidation();
// const popupFormPlace = new FormValidator(config, addPlaceForm);
//popupFormPlace.enableValidation();