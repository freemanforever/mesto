const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile-info__edit-button')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupSaveButton = document.querySelector('.popup__save-button')

const popupToggle = function() {
    popup.classList.toggle('popup_opened')
    document.getElementById('inputName').value = document.querySelector('.profile-info__name').textContent
    document.getElementById('inputJob').value = document.querySelector('.profile-info__job').textContent
}
popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
const saveInfo = function() {    
    popup.classList.toggle('popup_opened')
    document.querySelector('.profile-info__name').textContent = document.getElementById('inputName').value
    document.querySelector('.profile-info__job').textContent = document.getElementById('inputJob').value
}
popupSaveButton.addEventListener('click', saveInfo)