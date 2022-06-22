export default class Api {
  constructor(baseUrl, requiredHeaders) {
    this._baseUrl = baseUrl;
    this._headers = requiredHeaders;
  }

  getCardsFromServer() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
      }
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err)
      });
  }

  setCardOnServer(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
      },
      body: JSON.stringify({
        name: card.photo_caption,
        link: card.photo_link,
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
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
      },
      body: JSON.stringify({
        avatar: ava
      })
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err)
      });
  }

  deleteCardFromServer(item) {
    return fetch(`${this._baseUrl}/cards/${item._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
      }
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((result) => {
        return result.json();
      })
      .catch((err) => {
        console.log(err)
      });
  }

  setLikeOnServer(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
      }
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`)
        }
      })
      .then((result) => {
        return result.json();
      })
      .catch((err) => {
        console.log(err)
      });
  }

  deleteLikeFromServer(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
      }
    })
      .then((result) => {
        if (result.ok) {
          return result;
        } else {
          return Promise.reject(`Ошибка: ${result.status}`);
        }
      })
      .then((result) => {
        return result.json();
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getUserInfoFromServer() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
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
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._headers.authorization,
        'Content-Type': this._headers['Content-Type']
      },
      body: JSON.stringify({
        name: profileName,
        about: profileJob
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
}
