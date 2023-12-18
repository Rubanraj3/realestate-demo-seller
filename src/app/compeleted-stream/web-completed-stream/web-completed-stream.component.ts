import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from 'src/app/seller-service.service';

@Component({
  selector: 'web-completed-stream',
  templateUrl: './web-completed-stream.component.html',
  styleUrls: ['./web-completed-stream.component.css']
})
export class WebCompletedStreamComponent implements OnInit{
  constructor(private service:SellerServiceService){}
  ngOnInit(): void {
    this.getAll()
  }
  streamData:any=[]
  id:any
  getAll(){
    this.id= localStorage.getItem('id')
    this.service.get_cmplt_stream(this.id).subscribe((res:any)=>{
      this.streamData=res
    })
  }

}
