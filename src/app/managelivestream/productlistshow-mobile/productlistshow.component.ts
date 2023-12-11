import { Component, Input, OnInit } from '@angular/core';
import { Env } from 'src/app/environment';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-productlistshow-mobile',
  templateUrl: './productlistshow.component.html',
  styleUrls: ['./productlistshow.component.css']
})
export class ProductlistshowComponentMobile implements OnInit {

  @Input("streamDetails") streamDetails: any;
  baseURL = Env.baseAPi
  constructor(public Socket: SocketioService) { }
  primaryHost: any = false;
  streamProduct: any;
  ngOnInit(): void {

  }

}
