import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-stream-details',
  templateUrl: './stream-details.component.html',
  styleUrls: ['./stream-details.component.css']
})
export class StreamDetailsComponent {
  ngOnInit(): void {
    this.onResize();
  }
  show!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    this.show = window.innerWidth > 800;
  }
}
