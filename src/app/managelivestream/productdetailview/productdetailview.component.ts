import { Env } from 'src/app/environment';
import { Component, Input, OnInit } from '@angular/core';
import { SocketioService } from '../socketio.service';
import { ManagelivestreamService } from '../managelivestream.service';

@Component({
  selector: 'app-productdetailview',
  templateUrl: './productdetailview.component.html',
  styleUrls: ['./productdetailview.component.css']
})
export class ProductdetailviewComponent implements OnInit {

  @Input('data') viewProduct: any;

  constructor(private api: ManagelivestreamService, private web: SocketioService) {

  }
  baseUrl = Env.baseAPi;


  ngOnInit(): void {

  }

  down_now() {
    this.web.productView.next(null)
  }

}
