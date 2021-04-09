import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookbound';
  users: any;

  ngOnInit() {
    
  }

  constructor(
      private dbService: DbService,
      private http: HttpClient,
  ) { }

  getBooks() {
    console.log('run pt 1');
    this.dbService.getAllBooks();
    console.log('pt 2')
  }

}
