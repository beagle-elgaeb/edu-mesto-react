// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~ ЗАПРОСЫ К СЕРВЕРУ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._groupID = options.groupID;
    this._headers = options.headers;
  }

  getInitialCards() {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/cards`, {
      headers: {
        authorization: this._headers.authorization
      }
    })

    return this._wrapPromise(promise);
  }

  getProfileData() {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/users/me`, {
      headers: {
        authorization: this._headers.authorization
      }
    })

    return this._wrapPromise(promise);
  }

  setAvatar(avatar) {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })

    return this._wrapPromise(promise);
  }

  setProfileData(name, about) {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    }) 

    return this._wrapPromise(promise);
  }

  createCard(name, link) {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })

    return this._wrapPromise(promise);
  }

  removeCard(id) {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers
    })

    return this._wrapPromise(promise);
  }

  likeCard(id) {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers
    })

    return this._wrapPromise(promise);
  }

  unlikeCard(id) {
    const promise = fetch(`${this._baseUrl}/${this._groupID}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers
    })

    return this._wrapPromise(promise);
  }

  _wrapPromise(promise) {
    return promise
      .then(res => {
        if (res.ok) { return res.json() }
        return Promise.reject(`Статут ошибки: ${res.status}`);
      })
  }
}

const api = new Api(
  {
    baseUrl: "https://mesto.nomoreparties.co/v1",
    groupID: "cohort-26",
    headers: {
      authorization: "05288f01-26d1-4add-96c0-b100674c662e",
      'Content-Type': 'application/json'
    }
  });

  export default api;