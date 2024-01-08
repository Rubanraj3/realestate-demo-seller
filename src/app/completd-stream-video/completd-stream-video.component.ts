import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-completd-stream-video',
  templateUrl: './completd-stream-video.component.html',
})
export class CompletdStreamVideoComponent {
  ngOnInit(): void {
    this.onResize();
  }
  show!: boolean;
  @HostListener('window:resize', ['$event'])
  onResize() {
    //console.log(window.innerWidth);
    this.show = window.innerWidth > 800;
  }
}
