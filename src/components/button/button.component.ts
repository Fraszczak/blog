import { NgTemplateOutlet } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  inject,
} from '@angular/core';
import { Author, SocialMedia } from '../../models';

@Component({
  selector: 'blog-button',
  templateUrl: './button.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgTemplateOutlet],
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) icon!: keyof SocialMedia;
  @Input({ required: true }) author!: Author;
}
