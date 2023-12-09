import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {
  baseAPi= "https://uyarchicrm.click"
  constructor(private http:HttpClient) { }
  send_otp(id:any){
    return this.http.get(this.baseAPi+`/v2/demostream/send/otp?id=${id}`)
  }
  get_details(id:any){
    return this.http.get(this.baseAPi+`/v2/demostream/get/stream/details?id=${id}`)
  }
  verify_otp(data:any){
    return this.http.post(this.baseAPi+'/v2/demostream/verify/otp',data)
  }
  select_date(data:any){
    return this.http.post(this.baseAPi+'/v2/demostream/select/data/time',data)
  }
}
