import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-logo',
  templateUrl: './blog-logo.component.svg',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BlogLogoComponent {
  @Input() class = '';

}
