import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { PreviewComponent } from '../../../components';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PreviewComponent],
  template: `
    <h1
      class="p-4 text-center text-black dark:text-white text-xl font-bold tracking-[.25em]"
    >
      Blog Archive
    </h1>
    @for (post of posts; track post.attributes.slug) {
      <blog-preview [post]="post.attributes" />
    }
  `,
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
