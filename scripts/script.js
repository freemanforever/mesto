const popupProfileEdit = document.querySelector('.popup-profile-edit');
const popupPlaceAdd = document.querySelector('.popup-place-add');
const profileEditButton = document.querySelector('.profile__edit-button');
const placeAddButton = document.querySelector('.profile__add-button');
const profileEditCloseButton = popupProfileEdit.querySelector('.popup__close-button');
const placeAddCloseButton = popupPlaceAdd.querySelector('.popup__close-button');
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
//Собираем карточку и добавляем в массив
function renderItem({ label, link }) {
    const htmlElement = cardTemplate.content.cloneNode(true);
    htmlElement.querySelector('.place-card__header').innerText = label;
    htmlElement.querySelector('.place-card__image').src = link;
    //like
    const like = htmlElement.querySelector('.place-card__like-button');
    like.addEventListener('click', function (x) {
        x.target.classList.toggle('place-card__like');
    })

    //delete card Mesto
    const deleteCard = (event) => {
        event.preventDefault();
        event.target.closest('.place-card').remove();
    }
    const delButton = () => {
        const delButtons = document.querySelectorAll('.place-card__recycleButton');
        delButtons.forEach(button => button.addEventListener('click', deleteCard));
    }

    delButton();
    listCards.appendChild(htmlElement);
}
//Выводим массив карточек на экран
function render() {
    listCards.innerHTML = "";
    initialCards.forEach(renderItem);
}
//Функция открытия-закрытия попапа
function popupToggle(x) { x.classList.toggle('popup_opened') };
//Обработчик для редактирования профиля
// Находим форму для Edit в DOM
const formProfileEdit = popupProfileEdit.querySelector('.popup__form');
//Функция для вставки данных в форму
const defaultUserData = () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function profileEditSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupToggle(popupProfileEdit);
}
//Обработчик для добавления места
// Находим форму для Add Mesto в DOM
const formPlaceAdd = popupPlaceAdd.querySelector('.popup__form');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function placeAddSubmitHandler(evt) {
    evt.preventDefault();
    const htmlElement = cardTemplate.content.cloneNode(true);
    const addCardValues = {
        label: placeNameInput.value,
        link: placeImgInput.value
    }
    htmlElement.querySelector('.place-card__header').innerText = addCardValues.label;
    htmlElement.querySelector('.place-card__image').src = addCardValues.link;
    listCards.prepend(htmlElement);
    popupToggle(popupPlaceAdd);
    formPlaceAdd.reset();
    return
}

//listeners
formProfileEdit.addEventListener('submit', profileEditSubmitHandler);
formPlaceAdd.addEventListener('submit', placeAddSubmitHandler);
profileEditButton.addEventListener('click', () => { defaultUserData() });
profileEditButton.addEventListener('click', () => { popupToggle(popupProfileEdit) });
placeAddButton.addEventListener('click', () => { popupToggle(popupPlaceAdd) });
profileEditCloseButton.addEventListener('click', () => { popupToggle(popupProfileEdit) });
placeAddCloseButton.addEventListener('click', () => { popupToggle(popupPlaceAdd) });

render();