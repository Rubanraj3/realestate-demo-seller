import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {
  show!: boolean;
  constructor() {}
  ngOnInit(): void {
   this.onResize()
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth)
   this.show = window.innerWidth > 800;
  
  }
}
