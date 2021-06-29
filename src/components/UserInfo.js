export default class UserInfo {
    constructor({
        userNameSelector,
        userJobSelector
    }) {
        this._userNameElement = document.querySelector(`.${userNameSelector}`);
        this._userJobElement = document.querySelector(`.${userJobSelector}`);
    }
    getUserInfo() {
        return {
            userName: this._userNameElement.textContent,
            userJob: this._userJobElement.textContent
        }
    }
    setUserInfo({
        userName,
        userJob
    }) {
        this._userNameElement.textContent = userName;
        this._userJobElement.textContent = userJob;
    }
}

/*Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу*/