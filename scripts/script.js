const popupProfileEdit = document.querySelector('.popup-profile-edit');
const popupPlaceAdd = document.querySelector('.popup-place-add');
const profileEditButton = document.querySelector('.profile__edit-button');
const placeAddButton = document.querySelector('.profile__add-button');
const profileEditCloseButton = document.querySelector('.profile-close-button');
const placeAddCloseButton = document.querySelector('.place-close-button');
const popupSaveButton = document.querySelector('.popup__save-button');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const placeNameInput = document.querySelector('.popup__input_place-name');
const placeImgInput = document.querySelector('.popup__input_place-img');
const listCards = document.querySelector('.places');
const cardTemplate = document.querySelector('.place-card-template');
const initialCards = [
    {
        label: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        label: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        label: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        label: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        label: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        label: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
function renderItem ({label, link}) {
    const htmlElement = cardTemplate.content.cloneNode(true);
    htmlElement.querySelector('.place-card__header').innerText = label;
    htmlElement.querySelector('.place-card__image').src = link;
    listCards.appendChild(htmlElement);
}
function render() {
    listCards.innerHTML = '';
    initialCards.forEach(renderItem);
}
function popupToggle(x) {x.classList.toggle('popup_opened')};

//1. Написать placeAddSubmitHandler для обработки добавления места.

// Находим форму в DOM
let formProfileEdit = document.querySelector('.popup__form_profile-edit');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function profileEditSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupToggle(popupProfileEdit);
}
// Находим форму в DOM
let formPlaceAdd = document.querySelector('.popup__form_place-add');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function placeAddSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupToggle(popupPlaceAdd);
}

render ();
formProfileEdit.addEventListener('submit', profileEditSubmitHandler);
formPlaceAdd.addEventListener('submit', placeAddSubmitHandler);
profileEditButton.addEventListener('click', () => {popupToggle(popupProfileEdit)});
placeAddButton.addEventListener('click', () => {popupToggle(popupPlaceAdd)});
profileEditCloseButton.addEventListener('click', () => {popupToggle(popupProfileEdit)});
placeAddCloseButton.addEventListener('click', () => {popupToggle(popupPlaceAdd)});