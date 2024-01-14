import { Injectable } from '@angular/core';
import { Author, Authors, blogConfig } from '../../../assets/config/config';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  #blogConfig = blogConfig;

  getPhotoSource(author: keyof Authors): Author {
    return this.#blogConfig.authors[author];
  }
}
