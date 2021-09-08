export default class Api {
    constructor(options) {
        // тело конструктора
    }
    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
            headers: {
                authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    // другие методы работы с API
}
