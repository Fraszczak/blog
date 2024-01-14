import { ContentFile, MarkdownComponent } from '@analogjs/content';
import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import PostAttributes from 'src/app/post-attributes';
import { ReviewService } from './review.service';

@Component({
  selector: 'blog-review',
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './review.component.html',
})
export class ReviewComponent {
  @Input({ required: true }) post!: ContentFile<
    PostAttributes | Record<string, never>
  >;

  #service: ReviewService = inject(ReviewService);

  get getAuthor() {
    return this.#service.getPhotoSource(this.post.attributes.author);
  }
}
