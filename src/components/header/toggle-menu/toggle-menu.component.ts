import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'blog-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToggleMenuComponent {
  onMenuToggle(e: any) {
    const navlinks = document.querySelector('.navLinks');
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navlinks?.classList.toggle('left-[0%]');
  }
}
