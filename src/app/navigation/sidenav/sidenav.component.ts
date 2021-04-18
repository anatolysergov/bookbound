import { Component, OnInit } from '@angular/core';
import { CurrentReadService } from 'src/app/services/current-read.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  extended: boolean = true;
  curRead: [];

  constructor(private currentRead: CurrentReadService) { }

  ngOnInit(): void {
    //this.curRead = this.currentRead.getCurrentReads;
  }

  extendSideNav():void {
    this.extended = !this.extended;
    console.log(this.extended)
  }


}
