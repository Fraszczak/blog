import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from 'src/app/post-attributes';
import { ReviewService } from '../review/review.service';

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  host: {
    class: 'flex flex-1',
  },
  templateUrl: './preview.component.html',
})
export class PreviewComponent {
  @Input({ required: true }) public post!: PostAttributes;

  #service: ReviewService = inject(ReviewService);

  get getAuthor() {
    return this.#service.getPhotoSource(this.post.author);
  }
}
