import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Env } from './environment';
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {
  baseAPi = Env.baseAPi;
  constructor(private http: HttpClient) { }
  send_otp(id: any) {
    return this.http.get(this.baseAPi + `/v2/demostream/send/otp?id=${id}`)
  }
  get_details(id: any) {
    return this.http.get(this.baseAPi + `/v2/demostream/get/stream/details?id=${id}`)
  }
  verify_otp(data: any) {
    return this.http.post(this.baseAPi + '/v2/demostream/verify/otp', data)
  }
  select_date(data: any) {
    return this.http.post(this.baseAPi + '/v2/demostream/select/data/time', data)
  }
  go_love(data: any) {
    return this.http.post(this.baseAPi + '/v2/demostream/seller/go/live', data)
  }
  get_cmplt_stream(id: any) {
    return this.http.get(this.baseAPi + "/v2/demostream/getStreamDetails/" + id)
  }
  get_strea_details(id: any) {
    return this.http.get(this.baseAPi + '/v2/demostream/getViewAndIntrestedUsersByStream/' + id)
  }
  get_cloud(id: any) {
    return this.http.get(this.baseAPi + '/v2/demostream/get/cloud/records?id=' + id)
  }
}
