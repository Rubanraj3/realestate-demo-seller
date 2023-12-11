import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ManagelivestreamService {

  baseurl = Env.baseAPi;

  constructor(private http: HttpClient) { }

  get_all_plans(id: any) {
    return this.http.get(this.baseurl + "/v2/demostream/get/stream/details?id=" + id);
  }

  get_all_plans_golive(id: any) {
    return this.http.get(this.baseurl + "/v2/demostream/seller/live/details?id=" + id);
  }
  start_cound_record(id: any) {
    return this.http.get(this.baseurl + "/v2/demostream/video/start/cloud?post=" + id);
  }

  get_token_details(id: any) {
    return this.http.get(this.baseurl + "/v1/ecomplan/golive/host/view?id=" + id);
  }
  create_token(data: any) {
    return this.http.post(this.baseurl + "/v2/generateRTC/production/livestream/generateToken/supplier", data);
    // return this.http.post("http://localhost:3000/v2/generateRTC/getToken" ,data, { headers: { auth: this.token }, });
    // return this.http.post(this.baseurl + "/v2/generateRTC/getToken", data, { headers: { auth: this.token }, });

  }
  get_old_chats(channel: any) {
    console.log(channel, 9898989898)
    return this.http.get(this.baseurl + "/v2/chat/getoldchats?channel=" + channel)

  }

  create_cloude_recording(data: any) {
    return this.http.post(this.baseurl + "/v2/generateRTC/production/livestream/generateToken/supplier/cloudrecording", data);
  }
  get_post_view(id: any) {
    return this.http.get(this.baseurl + "/v1/ecomplan/get/stream/post/view?id=" + id)
  }
  go_to_live(id: any) {
    return this.http.get(this.baseurl + "/v2/demostream/main/go/live?id=" + id);
  }
  send_sms_multible(body: any) {
    return this.http.post(this.baseurl + "/v2/demostream/multible/sms/send", body);
  }
  turn_on_chat(id: any) {
    return this.http.get(this.baseurl + "/v2/demostream/chat/turn/on?id=" + id);
  }

}
