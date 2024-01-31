import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from 'src/models/post-attributes';
import { ConfigService } from '../../../services/config';

@Component({
  selector: 'blog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  host: {
    class: 'flex flex-1',
  },
  templateUrl: './preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {
  @Input({ required: true }) public post!: PostAttributes;

  #service = inject(ConfigService);

  get getAuthor() {
    return this.#service.getAuthor(this.post.author);
  }
}
