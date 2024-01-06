import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {  } from 'src/assets/logo.svg'
import { BlogLogoComponent } from '../logo/blog-logo.component';

@Component({
  selector: 'blog-header',
  standalone: true,
  imports: [BlogLogoComponent],
  templateUrl: './header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
}
