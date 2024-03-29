import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../../models/post-attributes';
import { PreviewComponent } from '../../../components/post';

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
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-max">
      @for (post of posts; track post.attributes.slug) {
        <blog-preview [post]="post.attributes" />
      }
    </section>
  `,
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
