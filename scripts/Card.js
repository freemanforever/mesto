class Card {
    constructor({ name, link }, selector) {
        this._name = name;
        this._link = link;
        this._selector = selector;
    }

    _getTemplate() {
        return this._selector.content.cloneNode(true).children[0];
    }

    _getElement() {
        this._element = this._getTemplate();
    }
}
export default Card;