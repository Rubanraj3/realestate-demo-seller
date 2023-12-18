import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerServiceService } from 'src/app/seller-service.service';

@Component({
  selector: 'mobile-stream-details',
  templateUrl: './mobile-stream-details.component.html',
  styleUrls: ['./mobile-stream-details.component.css']
})
export class MobileStreamDetailsComponent implements OnInit {
  constructor(private service:SellerServiceService,private arouter:ActivatedRoute){

  }
  id:any
  num:any
ngOnInit(): void {
 this.arouter.queryParams.subscribe((res:any)=>{
  this.id = res['id']
  this.num=res['i']
  this.num =  Number(this.num)
 })
 console.log(this.id)
 this.getDetails()
}
data:any=[]
 getDetails(){
  this.service.get_strea_details(this.id).subscribe((res:any)=>{
    console.log(res)
    this.data=res[0].users
  })
 }
}
