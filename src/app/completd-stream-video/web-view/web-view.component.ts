import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerServiceService } from 'src/app/seller-service.service';

@Component({
  selector: 'app-web-view',
  templateUrl: './web-view.component.html',
  styleUrls: ['./web-view.component.css']
})
export class WebViewComponent {
  complated: any;
  cloud: any;
  play_video(item: any) {
    this.complated = item;
  }

  id: any;

  constructor(private api: SellerServiceService, private route: ActivatedRoute) {
    route.queryParamMap.subscribe((res: any) => {
      this.id = res.params.id;
      this.get_cloud();
    })
  }

  get_cloud() {
    this.api.get_cloud(this.id).subscribe((res: any) => {
      this.cloud = res;
      if (res.length != 0) {
        this.complated = res[0]
      }
    })
  }
}
