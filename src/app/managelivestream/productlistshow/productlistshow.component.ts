import { Component, Input, OnInit } from '@angular/core';
import { Env } from 'src/app/environment';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-productlistshow',
  templateUrl: './productlistshow.component.html',
  styleUrls: ['./productlistshow.component.css']
})
export class ProductlistshowComponent implements OnInit {

  @Input("streamDetails") streamDetails: any;
  baseURL = Env.baseAPi
  constructor(public Socket: SocketioService) { }
  primaryHost: any = false;
  streamProduct: any;

  ngOnInit(): void {
    this.Socket.interested_post(this.streamDetails.stream.channel).subscribe((res: any) => {
      this.streamDetails.intrested = res.value;
    })
  }

}
