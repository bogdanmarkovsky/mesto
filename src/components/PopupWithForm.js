import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popUp.querySelector('.popup-form');
    this._elements = this._popUp.querySelectorAll('.popup-form__field');
    this._submitButton = this._popUp.querySelector('.popup-form__submit-button');
    this._inputValues = {};
  }

  _getInputValues() {
    this._elements.forEach((item) => {
      this._inputValues[item.name] = item.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popUp.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }

  updateLoading(isLoading, messageBefore = "Сохранить", messageAfter = "Сохранение...") {
    if (isLoading) {
      this._submitButton.textContent = messageAfter;
    } else {
      this._submitButton.textContent = messageBefore;
    }
  }

  close() {
    super.close();
    this._form.reset();
  }
}
