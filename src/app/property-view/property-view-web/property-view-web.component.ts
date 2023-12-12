import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { SocketioService } from 'src/app/managelivestream/socketio.service';
import { SellerServiceService } from 'src/app/seller-service.service';

@Component({
  selector: 'app-property-view-web',
  templateUrl: './property-view-web.component.html',
  styleUrls: ['./property-view-web.component.css']
})
export class PropertyViewWebComponent implements OnInit, OnDestroy {
  coundonw: any;
  now_time: any = new Date().getTime();
  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    this.getDetails(this.id);
    this.coundonw = timer(0, 1000).subscribe((res: any) => {
      this.now_time = new Date().getTime();
    })
  }
  constructor(
    private arouter: ActivatedRoute,
    private service: SellerServiceService,
    private router: Router,
    private socket: SocketioService
  ) { }
  buyer_joined(id: any) {
    this.socket.buyer_joined(id).subscribe((res: any) => {
      console.log(res)
      if (this.data != null) {
        this.data.status = res.stream.status;
      }
    })
  }
  id: any;
  data: any = []
  popup: boolean = false
  showDate(show: HTMLInputElement) {
    console.log(show.value)
    let v = show.value
    let verifyId = localStorage.getItem('verifyId')
    let data = {
      date: v,
      id: this.id,
      verify: verifyId
    }
    console.log(this.data)
    this.service.select_date(data).subscribe((res: any) => {
      console.log(res)
      this.getDetails(this.id)
    })
  }
  getDetails(id: string) {
    this.service.get_details(id).subscribe((res: any) => {
      console.log(res, 'details');
      this.data = res
      if (res.streamID != null) {
        this.buyer_joined(res.streamID)
      }
    });
  }
  go_live() {
    this.service.go_love({ post: this.id }).subscribe((res: any) => {
      console.log(res)
      this.router.navigateByUrl("/live/golive?id=" + this.id)
    })
  }
  ngOnDestroy(): void {
    this.coundonw.unsubscribe();
  }
}
