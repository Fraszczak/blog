import { Component, Input } from '@angular/core';
import PostAttributes from 'src/app/post-attributes';

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
})
export class PreviewComponent {
  @Input({ required: true }) public post!: PostAttributes;

  ngOnInit(): void {
    console.log('elo');
    console.log(this.post);
  }
}
