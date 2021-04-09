import { Injectable } from '@angular/core';
import { db } from '../../db/books';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getAllBooks() {
    console.log(db.books);
  }
}
