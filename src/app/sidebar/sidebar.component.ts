import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  cardGradient = 'linear-gradient(rgba(0, 224, 254, 0.5), rgba(17, 7, 254, 0.5))';

  cardGradient2 = 'linear-gradient(90deg,#e1dd72, #a8c66c)';
  isNavbarScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarScrolled = window.pageYOffset > 95;
  }

}
