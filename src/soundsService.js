export default class soundService {

  constructor() {
    this.url = 'https://sound-sequencer.herokuapp.com/sounds';
  }

  post(data) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"

      },
      body: JSON.stringify(data)
    });
  }

  get() {
    return fetch(this.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
    });
  }

  delete(id) {
    return fetch(`${this.url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
    });
  }

  update(id, data) {
    return fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });
  }

}