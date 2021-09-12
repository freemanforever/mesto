(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type-error",errorClass:"popup__error_visible"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__avatar-edit-button"),o=document.querySelector(".popup__input_name"),i=document.querySelector(".popup__input_job"),u=document.querySelector(".places"),a=".place-card-template";function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"returnResultStatus",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status," : ").concat(e.statusText))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then(this.returnResultStatus)}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then(this.returnResultStatus)}},{key:"sendProfileInfo",value:function(e){var t=e.name,n=e.about;return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this.returnResultStatus)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch(this._baseUrl+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this.returnResultStatus)}},{key:"delCard",value:function(e){return fetch(this._baseUrl+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this.returnResultStatus)}},{key:"addLike",value:function(e){return fetch(this._baseUrl+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then(this.returnResultStatus)}},{key:"delLike",value:function(e){return fetch(this._baseUrl+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then(this.returnResultStatus)}},{key:"setAvatar",value:function(e){var t=e.avatar;return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this.returnResultStatus)}}])&&s(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t,n){var r=this,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"appendItem",(function(e){r._container.append(e)})),f(this,"prependItem",(function(e){r._container.prepend(e)})),this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&c(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.data,o=t.currentUserId,i=t.handleCardDelSubmit,u=t.handleCardClick,a=t.handleAddLike,s=t.handleDelLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._templateSelector=n,this._handleCardClick=u,this._isLiked=!1,this._handleCardDelSubmit=i,this._handleAddLike=a,this._handleDelLike=s,this._likes=r.likes,this._cardId=r._id,this._ownerId=r.owner._id,this._currentUserId=o,this.delCard=this.delCard.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place-card").cloneNode(!0)}},{key:"getElement",value:function(){var e=this;this._element=this._getTemplate(),this._titleElement=this._element.querySelector(".place-card__header"),this._titleElement.textContent=this._name,this._imageElement=this._element.querySelector(".place-card__image"),this._likeButton=this._element.querySelector(".place-card__like-button"),this._likeCounter=this._element.querySelector(".place-card__like-count"),this._likeCounter.textContent=this._likes.length;var t=this._imageElement;return t.src=this._link,t.alt=this._name,this._likes.forEach((function(t){t._id===e._currentUserId&&(e._likeButton.classList.add("place-card__liked"),e._isLiked=!0)})),this._setListeners(),this._element}},{key:"delCard",value:function(){this._element.remove(),this._element=null}},{key:"_setListeners",value:function(){var e=this;this._deleteButton=this._element.querySelector(".place-card__recycleButton"),this._deleteButton.addEventListener("click",(function(t){e._handleCardDelSubmit(e._cardId,t.target)})),this._currentUserId!==this._ownerId&&this._deleteButton.remove(),this._imageElement.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._likeButton.addEventListener("click",(function(){e._isLiked?e._handleDelLike(e._cardId):e._handleAddLike(e._cardId)}))}}])&&h(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.userNameSelector,r=t.userJobSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(".".concat(n)),this._userJobElement=document.querySelector(".".concat(r)),this._userAvatarElement=document.querySelector(".".concat(o))}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userJob:this._userJobElement.textContent,userAvatar:this._userAvatarElement.src}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userJob,r=e.userAvatar;t&&(this._userNameElement.textContent=t),n&&(this._userJobElement.textContent=n),r&&(this._userAvatarElement.src=r)}}])&&_(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=document.querySelector(".".concat(n)),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetInputError",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"disableButton",value:function(){this._formElement.querySelector(this._submitButtonSelector).classList.add(this._inactiveButtonClass)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&y(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"_handleOverlayClick",(function(e){e.target===e.currentTarget&&n.close()})),E(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),this._popupElement=document.querySelector(t),this._close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupElement.querySelector(".popup__close-button").addEventListener("click",this._close),document.addEventListener("keydown",this._handleEscClose),this._popupElement.addEventListener("mousedown",this._handleOverlayClick)}}])&&b(t.prototype,n),e}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._popupForm=t._popupElement.querySelector(".popup__form"),t._handleFormSubmit=r.bind(O(t)),t._saveButtonText=t._popupElement.querySelector(".popup__save-button").textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupElement.querySelectorAll(".popup__input"),this._inputValues={},this._inputList.forEach((function(t){return e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),w(I(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(){w(I(u.prototype),"open",this).call(this)}},{key:"close",value:function(){w(I(u.prototype),"close",this).call(this),this._popupForm.reset(),this.isLoading(!1)}},{key:"isLoading",value:function(e){this._popupForm.querySelector(".popup__save-button").textContent=e?"Сохранение...":this._saveButtonText}}])&&g(t.prototype,n),u}(k);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._openedImg=t._popupElement.querySelector(".popup-img__opened-image"),t._openedImgName=t._popupElement.querySelector(".popup-img__header"),t}return t=u,(n=[{key:"open",value:function(e,t){this._openedImg.setAttribute("src",t),this._openedImg.setAttribute("alt",e),this._openedImgName.textContent=e,A(T(u.prototype),"open",this).call(this)}}])&&B(t.prototype,n),u}(k);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var V,H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function u(e){var t=e.popupSelector,n=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,{popupSelector:t,handleFormSubmit:n})}return t=u,(n=[{key:"submitConfirm",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",this._close),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&N(t.prototype,n),u}(P);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new l({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"32e537f0-5d42-44fe-b91c-e46296511fbf","Content-Type":"application/json"}}),$=new m({userNameSelector:"profile__name",userJobSelector:"profile__job",userAvatarSelector:"profile__avatar-image"}),G=new p({renderer:function(e){G.appendItem(Z(e,a))}},u),K=new U(".popup-img"),Q=new P({popupSelector:".popup-profile-edit",handleFormSubmit:function(e){Q.isLoading(!0),z.sendProfileInfo({name:e.Name,about:e.Job}).then((function(e){$.setUserInfo({userName:e.name,userJob:e.about}),Q.close()})).catch((function(e){return console.log("Error with userProfilePopup"+e)}))}}),W=new P({popupSelector:".popup-place-add",handleFormSubmit:function(e){W.isLoading(!0),z.addCard({name:e.PlaceName,link:e.PlaceImage}).then((function(e){G.prependItem(Z(e,a)),W.close()})).catch((function(e){return console.log("Error with addCardPopup"+e)}))}}),X=new P({popupSelector:".popup-avatar-edit",handleFormSubmit:function(e){X.isLoading(!0),z.setAvatar({avatar:e.AvatarImage}).then((function(e){$.setUserInfo({userName:e.name,userJob:e.about,userAvatar:e.avatar}),X.close()})).catch((function(e){return console.log("Error with popupEditAvatar"+e)}))}}),Y=new H({popupSelector:".popup-del-confirm",handleFormSubmit:function(){}});function Z(e,t){var n=new d({data:e,handleCardClick:function(){K.open(e.name,e.link)},handleCardDelSubmit:function(){Y.submitConfirm((function(){Y.isLoading(!0),z.delCard(e._id).then((function(){n.delCard(),Y.close()})).catch((function(e){return console.log("Error with createCards handleCardDelSubmit"+e)}))})),Y.open()},handleAddLike:function(){z.addLike(e._id).then((function(e){n._isLiked=!0,n._likeCounter.textContent=e.likes.length,n._likeButton.classList.toggle("place-card__liked")})).catch((function(e){return console.log("Error with createCards handleAddLike"+e)}))},handleDelLike:function(){z.delLike(e._id).then((function(e){n._isLiked=!1,n._likeCounter.textContent=e.likes.length,n._likeButton.classList.toggle("place-card__liked")})).catch((function(e){return console.log("Error with handleDelLike"+e)}))},currentUserId:V},t);return n.getElement()}var ee=z.getInitialCards(),te=z.getUserInfo();Promise.all([ee,te]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo({userName:i.name,userJob:i.about,userAvatar:i.avatar}),V=i._id,G.renderItems(o)})).catch((function(e){return console.log("Error with promises..."+e)})),t.addEventListener("click",(function(){var e=$.getUserInfo();o.value=e.userName,i.value=e.userJob,ne.resetInputError(),ne.disableButton(),Q.open()})),n.addEventListener("click",(function(){document.querySelector(".form-place").reset(),re.resetInputError(),re.disableButton(),W.open()})),r.addEventListener("click",(function(){oe.resetInputError(),oe.disableButton(),X.open()})),Q.setEventListeners(),X.setEventListeners(),K.setEventListeners(),W.setEventListeners(),Y.setEventListeners();var ne=new v(e,"form-profile");ne.enableValidation();var re=new v(e,"form-place");re.enableValidation();var oe=new v(e,"form-avatar");oe.enableValidation()})();