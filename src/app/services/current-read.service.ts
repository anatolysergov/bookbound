import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentReadService {

  books = [
    {
      title: "The Black Prism",
      author: "Brent Weeks",
      image: 'theblackprism.jpg'
    },
    {
      title: "The Final Empire: Mistborn Book 1",
      author: "Brandon Sanderson",
      image: "thewellofascension"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolken",
      image: "thehobbit",
    }
  ];

  constructor() { }

  getCurrentReads() {
    return this.books;
  }

}
