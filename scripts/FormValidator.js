export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector('.popup-form__submit-button');
  }

  enableValidation() {
    this._inputs.forEach((item) => {
      item.addEventListener('input', () => {
        this._checkInputValidity(item);
        this._setSubmitButtonState();
      });
    });
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _showInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _setSubmitButtonState() {
    if (this._form.checkValidity()) {
      this._submitButton.removeAttribute('disabled');
      this._submitButton.classList.remove(this._inactiveButtonClass);
    } else {
      this._submitButton.setAttribute('disabled', true);
      this._submitButton.classList.add(this._inactiveButtonClass);
    }
  }

  resetValidationFields() {
    this._inputs.forEach((input) => {
      this._hideInputError(input);
    });
    this._setSubmitButtonState();
  }
}
