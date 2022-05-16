export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
  }

  enableValidation() {
    const popupForm = this._form;
    const submitButton = document.getElementById(`${this._form.id}-submit-button`);
    popupForm.querySelectorAll(this._inputSelector).forEach((element) => {
      element.addEventListener('input', () => {
        this._checkInputValidity(element);
        this._setSubmitButtonState(popupForm, submitButton);
      });
    });
  }

  _checkInputValidity(element) {
    if (element.validity.valid) {
      this._hideInputError(element);
    } else {
      this._showInputError(element);
    }
  }

  _showInputError(input) {
    const errorElement = document.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input) {
    const errorElement = document.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
  }

  _setSubmitButtonState(form, button) {
    if (form.checkValidity()) {
      button.removeAttribute('disabled');
      button.classList.remove(this._inactiveButtonClass);
    } else {
      button.setAttribute('disabled', true);
      button.classList.add(this._inactiveButtonClass);
    }
  }

  resetValidationFields(form, button) {
    form.querySelectorAll(this._inputSelector).forEach((input) => {
      this._hideInputError(input);
    });
    this._setSubmitButtonState(form, button);
  }
}
