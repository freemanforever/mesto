export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    returnResultStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status} : ${res.statusText}`);
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {headers: this._headers})
            .then(this.returnResultStatus)
    }

    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {headers: this._headers})
            .then(this.returnResultStatus)
    }

    sendProfileInfo({name, about}) {
        return fetch(
            this._baseUrl + '/users/me',
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    about: about
                })
            }
        )
            .then(this.returnResultStatus)
    }

    addCard({name, link}) {
        return fetch(
            this._baseUrl + '/cards',
            {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            }
        )
            .then(this.returnResultStatus)
    }

    delCard(cardId) {
        return fetch(
            this._baseUrl + `/cards/${cardId}`,
            {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this.returnResultStatus)
    }

    addLike(cardId) {
        return fetch(
            this._baseUrl + `/cards/likes/${cardId}`,
            {
                method: 'PUT',
                headers: this._headers
            }
        )
            .then(this.returnResultStatus)
    }

    delLike(cardId) {
        return fetch(
            this._baseUrl + `/cards/likes/${cardId}`,
            {
                method: 'DELETE',
                headers: this._headers
            }
        )
            .then(this.returnResultStatus);
    }

    setAvatar({avatar}) {
        return fetch(
            this._baseUrl + '/users/me/avatar',
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar,
                })
            }
        )
            .then(this.returnResultStatus)
    }
}
