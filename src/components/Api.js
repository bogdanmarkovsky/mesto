export default class Api {
  constructor() {
  }

  getCardsFromServer() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
      method: 'GET',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8'
      }
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err)
      });
  }

  setCardOnServer(card) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
      method: 'POST',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }

  setAvatarOnServer(ava) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me/avatar ', {
      method: 'PATCH',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: ava
      })
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getAvatarFromServer() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me ', {
      method: 'GET',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8'
      }
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err)
      });
  }

  deleteCardFromServer(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8',
        'Content-Type': 'application/json'
      }
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      });
  }


  setLikeOnServer(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${cardId}/likes `, {
      method: 'PUT',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8',
        'Content-Type': 'application/json'
      }
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      });
  }

  deleteLikeFromServer(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${cardId}/likes `, {
      method: 'DELETE',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8',
        'Content-Type': 'application/json'
      }
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      });
  }


  getUserInfoFromServer() {
    return fetch('https://nomoreparties.co/v1/cohort-43/users/me ', {
      method: 'GET',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8',
      }
    })
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((info) => {
        return info
      })
      .catch((err) => {
        console.log(err)
      });
  }

  setUserInfoOnServer(profileName, profileJob) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me ', {
      method: 'PATCH',
      headers: {
        authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: profileName,
        about: profileJob
      })
    })
      .then((result) => {
        if (!result.ok) {
          return Promise.reject(`Ошибка: ${result.status}`);
        } else {
          return result;
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
