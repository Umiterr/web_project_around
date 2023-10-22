export default class Api {
  constructor({ baseUrl, groupId, resource }) {
    this.baseUrl = baseUrl;
    this.groupId = groupId;
    this.resource = resource;
  }

  async _fetchApi(method, path = "", body = undefined) {
    const response = await fetch(
      `${this.baseUrl}/${this.groupId}/${this.resource}${path}`,
      {
        method,
        headers: {
          authorization: `9731b001-57b1-4a17-816b-941eccd0a24a`,
          "Content-Type": body ? "application/json" : undefined,
        },
        body: body ? JSON.stringify(body) : undefined,
      }
    );
    if (!response.ok) {
      return Promise.reject(`Error: ${response.status}`);
    }
    const json = await response.json();
    return json;
  }

  getInitialCards() {
    return this._fetchApi("GET");
  }

  getUserInfo() {
    return this._fetchApi("GET", "/me");
  }

  setUserInfo({ name, about }) {
    return this._fetchApi("PATCH", "/me", { name, about });
  }

  setUserImage(imageURL) {
    return this._fetchApi("PATCH", "/me/avatar", { avatar: imageURL });
  }

  setNewCard({ title, imageURL }) {
    return this._fetchApi("POST", "", {
      name: title,
      link: imageURL,
    });
  }

  deleteNewCard(cardId) {
    return this._fetchApi("DELETE", `/${cardId}`);
  }

  setLike(cardId) {
    return this._fetchApi("PUT", `/likes/${cardId}`);
  }

  removeLike(cardId) {
    return this._fetchApi("DELETE", `/likes/${cardId}`);
  }
}
