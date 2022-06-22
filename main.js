(()=>{"use strict";var e={871:(e,t,n)=>{e.exports=n.p+"59a79705711a42ced6f4.jpg"},458:(e,t,n)=>{e.exports=n.p+"62f8bfb9cb73d3e67e36.jpg"},190:(e,t,n)=>{e.exports=n.p+"e4f6f1d3be8922c700ca.jpg"},426:(e,t,n)=>{e.exports=n.p+"6df1bd7d3a69fb5f894f.jpg"},53:(e,t,n)=>{e.exports=n.p+"e985a13e4f195d8ebf5a.jpg"},313:(e,t,n)=>{e.exports=n.p+"d75cf55cc6dcd72e4e9a.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function n(e,o,r,i){var a=this,u=r.handlePhotoClick,c=r.handleDeleteClick,s=r.handleAddLike,l=r.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_isLiked",(function(){return a._likes.some((function(e){return e._id===a._userID}))})),t(this,"_isLikeState",(function(){a._isLiked()?a._handleDeleteLike(a._item):a._handleAddLike(a._item)})),this._item=e,this._name=e.name,this._link=e.link,this._likes=e.likes,this._ownerId=e.owner._id,this._selector=o,this._photoCard=document.querySelector(this._selector).content.querySelector(".photo-grid__card").cloneNode(!0),this._photoCardImage=this._photoCard.querySelector(".photo-grid__card-image"),this._photoCardText=this._photoCard.querySelector(".photo-grid__card-text"),this._photoCardLikes=this._photoCard.querySelector(".photo-grid__like-counter"),this._likeButton=this._photoCard.querySelector(".photo-grid__like-button"),this._removeButton=this._photoCard.querySelector(".photo-grid__remove-button"),this._handlePhotoClick=u,this._handleDeleteClick=c,this._handleAddLike=s,this._handleDeleteLike=l,this._userID=i}var o,r;return o=n,(r=[{key:"_fillCardContent",value:function(){this._photoCardImage.src=this._link,this._photoCardImage.alt=this._name,this._photoCardText.textContent=this._name,this._photoCardLikes.textContent=this._likes.length}},{key:"_checkOwnerId",value:function(){this._ownerId!==this._userID&&this._removeButton.remove()}},{key:"deleteCard",value:function(){this._photoCard.remove(),this._photoCard=null}},{key:"_checkLikeOwner",value:function(){this._isLiked()&&this.addLike(this._item)}},{key:"addLike",value:function(e){this._likeButton.classList.add("photo-grid__like-button_active"),this._likes=e.likes,this._photoCardLikes.textContent=e.likes.length}},{key:"deleteLike",value:function(e){this._likeButton.classList.remove("photo-grid__like-button_active"),this._likes=e.likes,this._photoCardLikes.textContent=e.likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",this._isLikeState),this._removeButton.addEventListener("click",(function(){e._handleDeleteClick(e._item)})),this._photoCardImage.addEventListener("click",(function(){e._handlePhotoClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._fillCardContent(),this._checkOwnerId(),this._checkLikeOwner(),this._setEventListeners(),this._photoCard}}])&&e(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._submitButtonClass=t.submitButtonClass,this._form=n,this._inputs=this._form.querySelectorAll(this._inputSelector),this._submitButton=this._form.querySelector(this._submitButtonClass)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setSubmitButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_showInputError",value:function(e){this._form.querySelector(".".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){this._form.querySelector(".".concat(e.id,"-error")).textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_setSubmitButtonState",value:function(){this._form.checkValidity()?(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveButtonClass)):(this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass))}},{key:"resetValidationFields",value:function(){var e=this;this._inputs.forEach((function(t){e._hideInputError(t)})),this._setSubmitButtonState()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){var n,o,r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){"Escape"==e.code&&r.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._popupSelector=t,this._popUp=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popUp.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popUp.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popUp.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=f(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(r){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._cardPopupImage=document.querySelector(".popup__image"),t._cardPopupText=document.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._cardPopupImage.alt=e,this._cardPopupImage.src=t,this._cardPopupText.textContent=e,l(d(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=m(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=t,n._form=n._popUp.querySelector(".popup-form"),n._elements=n._popUp.querySelectorAll(".popup-form__field"),n._submitButton=n._popUp.querySelector(".popup-form__submit-button"),n._inputValues={},n}return t=a,n=[{key:"_getInputValues",value:function(){var e=this;return this._elements.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;v(w(a.prototype),"setEventListeners",this).call(this),this._popUp.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"updateLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранить",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";this._submitButton.textContent=e?n:t}},{key:"close",value:function(){v(w(a.prototype),"close",this).call(this),this._form.reset()}}],n&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=L(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},j.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function P(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(o);if(r){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popUp.querySelector(".popup-form"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;j(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback(),e.close()}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(t,n){var o=t.data,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t,this._jobSelector=n,this._profileDefaultName=document.querySelector(this._nameSelector),this._profileDefaultJob=document.querySelector(this._jobSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileDefaultName.textContent,job:this._profileDefaultJob.textContent}}},{key:"setUserInfo",value:function(e){this._profileDefaultName.textContent=e.name,this._profileDefaultJob.textContent=e.about}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=(new URL(n(871),n.b),new URL(n(190),n.b),new URL(n(426),n.b),new URL(n(53),n.b),new URL(n(313),n.b),new URL(n(458),n.b),document.forms.profile_form),q=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__avatar"),z=D.elements.name,F=D.elements.about,V=document.querySelector(".profile__add-photo-button"),N=document.querySelector(".profile__avatar"),J={};function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var H=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._headers=n}var t,n;return t=e,(n=[{key:"getCardsFromServer",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then((function(e){return e.ok?e:Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"setCardOnServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]},body:JSON.stringify({name:e.photo_caption,link:e.photo_link})}).then((function(e){return e.ok?e:Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setAvatarOnServer",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e:Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"deleteCardFromServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then((function(e){return e.ok?e:Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},{key:"setLikeOnServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then((function(e){return e.ok?e:Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},{key:"deleteLikeFromServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then((function(e){return e.ok?e:Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},{key:"getUserInfoFromServer",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))}},{key:"setUserInfoOnServer",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._headers.authorization,"Content-Type":this._headers["Content-Type"]},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e:Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var $,K,Q=new B(".profile__title",".profile__subtitle"),W=new C(".popup_profile-form",(function(e){W.updateLoading(!0),te.setUserInfoOnServer(e.name,e.about).then((function(e){return e.json()})).then((function(e){Q.setUserInfo(e)})).finally((function(){W.updateLoading(!1),W.close()}))})),X=new C(".popup_photo-form",(function(e){X.updateLoading(!0),te.setCardOnServer(e).then((function(e){return e.json()})).then((function(e){$.addItem(oe(e))})).finally((function(){X.updateLoading(!1),X.close()}))})),Y=new C(".popup_change-ava",(function(e){Y.updateLoading(!0),te.setAvatarOnServer(e.ava_link).then((function(e){N.style.backgroundImage="url('".concat(e.avatar,"')")})).finally((function(){Y.updateLoading(!1),Y.close()}))})),Z=new y(".popup_photo-card"),ee=new T(".popup_delete-card"),te=new H("https://mesto.nomoreparties.co/v1/cohort-43",{authorization:"ac52a8a6-2f6f-44a0-a599-9a1089a190d8","Content-Type":"application/json"}),ne="";function oe(e){var t=new o(e,".card-template",{handlePhotoClick:function(){Z.open(e.name,e.link)},handleDeleteClick:function(){ee.open(),ee.setSubmitAction((function(){te.deleteCardFromServer(e).then((function(){t.deleteCard()}))}))},handleAddLike:function(e){te.setLikeOnServer(e._id).then((function(e){t.addLike(e)}))},handleDeleteLike:function(e){te.deleteLikeFromServer(e._id).then((function(e){t.deleteLike(e)}))}},ne);return t.generateCard()}q.addEventListener("click",(function(){J.profile_form.resetValidationFields();var e=Q.getUserInfo();z.value=e.name,F.value=e.job,W.open()})),V.addEventListener("click",(function(){J.photo_form.resetValidationFields(),X.open()})),A.addEventListener("click",(function(){J.ava_form.resetValidationFields(),Y.open()})),Z.setEventListeners(),W.setEventListeners(),X.setEventListeners(),ee.setEventListeners(),Y.setEventListeners(),K={formSelector:".popup-form",inputSelector:".popup-form__field",inactiveButtonClass:"popup-form__submit-button_disabled",inputErrorClass:"popup-form__field_type_error",submitButtonClass:".popup-form__submit-button"},Array.from(document.querySelectorAll(K.formSelector)).forEach((function(e){var t=new i(K,e),n=e.getAttribute("name");J[n]=t,t.enableValidation()})),Promise.all([te.getUserInfoFromServer(),te.getCardsFromServer()]).then((function(e){var t,n,o,r=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return i}}(n,o)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],a=r[1];t=i._id,ne=t,function(e){N.style.backgroundImage="url('".concat(e.avatar,"')"),Q.setUserInfo(e);var t=Q.getUserInfo();z.value=t.name,F.value=t.job}(i),function(e){$="",($=new x({data:e.reverse(),renderer:function(e){$.addItem(oe(e))}},".photo-grid__cards")).renderItems()}(a)}))})()})();