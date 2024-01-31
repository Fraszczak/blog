import { Component } from '@angular/core';
import { injectContent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../../models/post-attributes';
import { ReviewComponent } from '../../../components/post';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, ReviewComponent],
  template: `
    @if (post$ | async; as post) {
      <article>
        <blog-review [post]="post" />
      </article>
    }
  `,
})
export default class HomeComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
