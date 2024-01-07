import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from 'src/app/post-attributes';

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [RouterLink],
  host: {
    class: 'flex flex-1'
  },
  templateUrl: './preview.component.html',
})
export class PreviewComponent {
  @Input({ required: true }) public post!: PostAttributes;
}
