const editProfilePopup = document.querySelector('.popup-profile-edit');
const addPlacePopup = document.querySelector('.popup-place-add');
const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const editProfileCloseButton = editProfilePopup.querySelector('.popup__close-button');
const addPlaceCloseButton = addPlacePopup.querySelector('.popup__close-button');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_name');
const inputJob = document.querySelector('.popup__input_job');
const inputPlaceName = document.querySelector('.popup__input_place-name');
const inputPlaceImg = document.querySelector('.popup__input_place-img');
const cardsList = document.querySelector('.places');
const cardTemplate = document.querySelector('.place-card-template');
const popupImg = document.querySelector('.popup-img');
const openPopupHeader = popupImg.querySelector('.popup-img__header');
const openPopupImg = popupImg.querySelector('.popup-img__opened-image');
const closePopupImg = popupImg.querySelector('.popup-img__close-button');
// Находим форму для Add Mesto в DOM
const addPlaceForm = addPlacePopup.querySelector('.popup__form');
// Находим форму для EditProfile в DOM
const editProfileForm = editProfilePopup.querySelector('.popup__form');
const initialCards = [
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
// Функция открытия-закрытия попапа
function togglePopup(popups) { popups.classList.toggle('popup_opened') };
// Функция для вставки данных в форму
const defaultUserData = () => {
    inputName.value = nameProfile.textContent;
    inputJob.value = jobProfile.textContent;
}
// Like card function
const likeCard = (evt) => {
    evt.preventDefault();
    evt.target.classList.toggle('place-card__like');
}
// Delete card function
const delCard = (evt) => {
    evt.preventDefault();
    evt.target.closest('.place-card').remove();
}
// Open Image function
const openImg = (evt) => {
    evt.preventDefault();
    const img = evt.target.closest('.place-card__image');
    openPopupImg.src = img.src;
    openPopupHeader.textContent = img.alt;
    togglePopup(popupImg);
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
    const card = renderCard(addCardValues.name, addCardValues.link);
    cardsList.prepend(card);
    togglePopup(addPlacePopup);
    addPlaceForm.reset();
}
// Собираем карточку для вывода на экран
function renderCard(name, link) {
    const card = cardTemplate.content.cloneNode(true);
    const likeButton = card.querySelector('.place-card__like-button');
    const delButton = card.querySelector('.place-card__recycleButton');
    const cardHeader = card.querySelector('.place-card__header');
    const cardImg = card.querySelector('.place-card__image');
    cardHeader.innerText = name;
    cardImg.alt = name;
    cardImg.src = link;
    //like card Mesto
    likeButton.addEventListener('click', likeCard);
    //delete card Mesto
    delButton.addEventListener('click', delCard);
    //open card img
    cardImg.addEventListener('click', openImg);
    return card;
}
//listeners
editProfileForm.addEventListener('submit', editProfileSubmitHandler);
addPlaceForm.addEventListener('submit', submitPlaceHandler);
editProfileButton.addEventListener('click', () => { defaultUserData() });
editProfileButton.addEventListener('click', () => { togglePopup(editProfilePopup) });
addPlaceButton.addEventListener('click', () => { togglePopup(addPlacePopup) });
editProfileCloseButton.addEventListener('click', () => { togglePopup(editProfilePopup) });
addPlaceCloseButton.addEventListener('click', () => { togglePopup(addPlacePopup) });
closePopupImg.addEventListener('click', () => { togglePopup(popupImg) });
// Выводим массив карточек на экран
function render() {
    initialCards.forEach(item => {
        const card = renderCard(item.name, item.link);
        cardsList.append(card);
    });
}
render();