import { Component, HostListener } from '@angular/core';
import { LABEL } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navbarBg: {} = {};
  labels = LABEL;
  // For scroll over effect on navbar background color
  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbarBg = {
        'background-color': this.labels.BLACK_BACKGROUND,
      };
    } else {
      this.navbarBg = {};
    }
  }
}
