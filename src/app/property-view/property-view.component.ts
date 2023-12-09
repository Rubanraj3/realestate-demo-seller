import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerServiceService } from '../seller-service.service';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
})
export class PropertyViewComponent {
  show!: boolean;
  constructor(
    private arouter: ActivatedRoute,
    private service: SellerServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    this.show = window.innerWidth > 800;
  }
}
