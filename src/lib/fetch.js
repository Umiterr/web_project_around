class Api {
  constructor({ baseUrl, groupId, resource }) {
    this.baseUrl = baseUrl;
    this.groupId = groupId;
    this.resource = resource;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/${this.groupId}/${this.resource}`, {
      headers: {
        authorization: "9731b001-57b1-4a17-816b-941eccd0a24a",
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  getUser() {}

  updateCard() {}
}

export default Api;
