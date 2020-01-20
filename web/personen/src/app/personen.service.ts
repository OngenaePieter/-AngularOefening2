import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonenService {
  url = "http://localhost:3000/";
  constructor() { }

  getPersonen(): Promise<string> {
    return fetch(`${this.url}users/`, { method: "GET" }).then(response => response.json())
  }

  addPersoon(data): Promise<string> {
    return fetch(`${this.url}users/toevoegen`, {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)
    }).then(response => response.json())
  }

}
