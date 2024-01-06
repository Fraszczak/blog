import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Blog Archive</h1>
    @for (post of posts;track post.attributes.slug) {
    <blog-previev [post]="post" />
    }
  `,
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
