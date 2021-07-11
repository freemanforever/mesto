import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
    formConfig,
    popupConfig,
    profileConfig,
    inputName,
    inputJob,
    editProfileButton,
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
const cardListInitiated = new Section({
    items: startCards,
    renderer: (data) => {
        cardListInitiated.addItem(generateCard(data));
    }
}, cardsList);
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
});
const addCardPopup = new PopupWithForm({
    popupSelector: popupConfig.addCardPopup,
    handleFormSubmit: () => {
        const addCardValues = {
            name: inputPlaceName.value,
            link: inputPlaceImg.value,
            handleCardClick: openImg
        }
        const card = new Card(addCardValues, '.place-card-template');
        const cardElement = card.getElement();
        cardsList.prepend(cardElement);
        addCardPopup.close();
        document.querySelector('.form_place').reset();
    }
});
const openEditPopup = () => {
    const profileInfo = userInfo.getUserInfo();
    inputName.value = profileInfo.userName;
    inputJob.value = profileInfo.userJob;
    popupEditForm.resetInputError();
    popupEditForm.disableButton();
    userProfilePopup.open();
};
const popupImage = new PopupWithImage(
    popupConfig.imagePopup
);
const openAddPopup = () => {
    document.querySelector('.form_place').reset();
    popupFormPlace.resetInputError();
    popupFormPlace.disableButton();
    addCardPopup.open();
};

function generateCard(item) {
    const card = new Card({
        name: item.name,
        link: item.link,
        handleCardClick: openImg
    }, '.place-card-template');
    const cardElement = card.getElement();
    return cardElement;
};

function openImg(name, link) {
    popupImage.open(name, link);
};
cardListInitiated.renderItems();
//listeners
editProfileButton.addEventListener('click', openEditPopup);
addPlaceButton.addEventListener('click', openAddPopup);
userProfilePopup.setEventListeners();
popupImage.setEventListeners();
addCardPopup.setEventListeners();
//validation
const popupEditForm = new FormValidator(formConfig, 'form_profile');
popupEditForm.enableValidation();
const popupFormPlace = new FormValidator(formConfig, 'form_place');
popupFormPlace.enableValidation();