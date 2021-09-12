import "./index.css";
import {
    formConfig,
    popupConfig,
    profileConfig,
    inputName,
    inputJob,
    editProfileButton,
    addPlaceButton,
    cardsListSelector,
    editAvatarButton,
    apiConfig,
    cardTemplateSelector
} from "../utils/constants.js";
import Api from "../components/Api.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirmation.js";

let userId;
const api = new Api(apiConfig);
const userInfo = new UserInfo({
    userNameSelector: profileConfig.profileName,
    userJobSelector: profileConfig.profileJob,
    userAvatarSelector: profileConfig.profileAvatar
});
let cardsList = new Section({
    renderer: (item) => {
        cardsList.appendItem(createCard(item, cardTemplateSelector))
    }
}, cardsListSelector);
const popupImage = new PopupWithImage(popupConfig.imagePopup);
const userProfilePopup = new PopupWithForm({
    popupSelector: popupConfig.editProfilePopup,
    handleFormSubmit: (info) => {
        userProfilePopup.isLoading(true);
        api.sendProfileInfo({
            name: info.Name,
            about: info.Job
        })
            .then((data) => {
                userInfo.setUserInfo({
                    userName: data.name,
                    userJob: data.about
                });
                userProfilePopup.close();
            })
            .catch((err) => console.log(`Error with userProfilePopup` + err))
    }
});
const addCardPopup = new PopupWithForm({
    popupSelector: popupConfig.addCardPopup,
    handleFormSubmit: (info) => {
        addCardPopup.isLoading(true);
        api.addCard({
            name: info.PlaceName,
            link: info.PlaceImage
        })
            .then((data) => {
                cardsList.prependItem(createCard(data, cardTemplateSelector));
                addCardPopup.close();
            })
            .catch((err) => console.log(`Error with addCardPopup` + err))
    }
});
const popupEditAvatar = new PopupWithForm({
    popupSelector: popupConfig.editAvatarPopup,
    handleFormSubmit: (info) => {
        popupEditAvatar.isLoading(true);
        api.setAvatar({
            avatar: info.AvatarImage
        })
            .then((data) => {
                userInfo.setUserInfo({
                    userName: data.name,
                    userJob: data.about,
                    userAvatar: data.avatar
                });
                popupEditAvatar.close();
            })
            .catch((err) => console.log(`Error with popupEditAvatar` + err));
    }
});
const delConfirmPopup = new PopupWithConfirm({
    popupSelector: popupConfig.delConfirmPopup,
    handleFormSubmit: () => {
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
const openAddPopup = () => {
    document.querySelector(".form_place").reset();
    popupFormPlace.resetInputError();
    popupFormPlace.disableButton();
    addCardPopup.open();
};
const openAvatarPopup = () => {
    popupEditAvatarForm.resetInputError();
    popupEditAvatarForm.disableButton();
    popupEditAvatar.open();
};

function createCard(data, templateSelector) {
    const card = new Card(
        {
            data: data,
            handleCardClick: () => {
                popupImage.open(data.name, data.link);
            },
            handleCardDelSubmit: () => {
                delConfirmPopup.submitConfirm(() => {
                    delConfirmPopup.isLoading(true);
                    api.delCard(data._id)
                        .then(() => {
                            card.delCard();
                            delConfirmPopup.close();
                        })
                        .catch((err) => console.log(`Error with createCards handleCardDelSubmit` + err))
                });
                delConfirmPopup.open();
            },
            handleAddLike: () => {
                api.addLike(data._id)
                    .then(data => {
                        card._isLiked = true;
                        card._likeCounter.textContent = data.likes.length;
                        card._likeButton.classList.toggle('place-card__liked')
                    })
                    .catch((err) => console.log(`Error with createCards handleAddLike` + err))
            },
            handleDelLike: () => {
                api.delLike(data._id)
                    .then(data => {
                        card._isLiked = false;
                        card._likeCounter.textContent = data.likes.length;
                        card._likeButton.classList.toggle('place-card__liked')
                    })
                    .catch((err) => console.log(`Error with handleDelLike` + err))
            },
            currentUserId: userId
        }, templateSelector);
    return card.getElement();
}

const cardsData = api.getInitialCards();
const getUserData = api.getUserInfo();
Promise.all([cardsData, getUserData])
    .then(([data, user]) => {
        userInfo.setUserInfo({
            userName: user.name,
            userJob: user.about,
            userAvatar: user.avatar
        });
        userId = user._id;
        cardsList.renderItems(data);
    })
    .catch((err) => console.log(`Error with promises...` + err));

editProfileButton.addEventListener("click", openEditPopup);
addPlaceButton.addEventListener("click", openAddPopup);
editAvatarButton.addEventListener("click", openAvatarPopup);
userProfilePopup.setEventListeners();
popupEditAvatar.setEventListeners();
popupImage.setEventListeners();
addCardPopup.setEventListeners();
delConfirmPopup.setEventListeners();
const popupEditForm = new FormValidator(formConfig, "form__profile");
popupEditForm.enableValidation();
const popupFormPlace = new FormValidator(formConfig, "form__place");
popupFormPlace.enableValidation();
const popupEditAvatarForm = new FormValidator(formConfig, "form__avatar");
popupEditAvatarForm.enableValidation();
