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
  his: any;
  today:any 
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
  ) { 
    const currentDate = new Date();
    this.today = currentDate.toISOString().slice(0, 16); // Format: "YYYY-MM-DDTHH:mm"
  }
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
  timeErr= false
  showDate(show: HTMLInputElement) {
    console.log(show.value)
    let v = show.value
    let verifyId = localStorage.getItem('verifyId')
    let data = {
      date: v,
      id: this.id,
      verify: verifyId
    }
  let   currentDate = new Date();
  let val = new Date(v);
     
    console.log(val , currentDate,val > currentDate)

    if( val > currentDate){
      this.timeErr=false
      this.service.select_date(data).subscribe((res: any) => {
        console.log(res)
        this.getDetails(this.id)
        this.his = res._id;
        this.data.start = res.start;
        this.data.end = res.end;
      })
    }else{
      this.timeErr = true
    }
 
  }
  dateToday(): Date {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return new Date(year, month, day, hour, minute);
  }
  getDetails(id: string) {
    this.service.get_details(id).subscribe((res: any) => {
      console.log(res, 'details');
      this.data = res
      if (res.streamID != null) {
        this.his = res.streamID;
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
  copy_success: any = false;
  copy_now() {
    this.copy_success = true;
    navigator.clipboard.writeText('https://buyer.indiapropertyexpo.live/b/' + this.his);

    setTimeout(() => {
      this.copy_success = false;
    }, 2000);
  }
}
