import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerServiceService } from 'src/app/seller-service.service';

@Component({
  selector: 'app-property-view-mobile',
  templateUrl: './property-view-mobile.component.html',
  styleUrls: ['./property-view-mobile.component.css']
})
export class PropertyViewMobileComponent implements OnInit {
  ngOnInit(): void {
    // this.arouter.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
    this.id = localStorage.getItem('id')
    this.getDetails(this.id);
  }
  constructor(
    private arouter: ActivatedRoute,
    private service: SellerServiceService,
    private router: Router
  ) {}
  id: any;
  data:any= []
  popup:boolean=false
  showDate(show:HTMLInputElement){
    console.log(show.value)
    let v  = show.value
    let verifyId = localStorage.getItem('verifyId')
    let data = {
        date:v,
      id:this.id,
      verify:verifyId
    }
    console.log(this.data)
    this.service.select_date(data).subscribe((res:any)=>{
      console.log(res)
      this.getDetails(this.id)
    })
  }
  getDetails(id: string) {
    this.service.get_details(id).subscribe((res: any) => {
      console.log(res, 'details');
      this.data =res
    });
  }
}
