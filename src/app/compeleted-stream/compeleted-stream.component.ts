import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-compeleted-stream',
  templateUrl: './compeleted-stream.component.html',
  styleUrls: ['./compeleted-stream.component.css']
})
export class CompeletedStreamComponent {
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
