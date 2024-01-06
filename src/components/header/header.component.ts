import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';

@Component({
  selector: 'blog-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
}
