import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '../components';

@Component({
  selector: 'blog-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  host: {
    class: 'flex flex-col w-full h-full'
  },
  template: `
   <blog-header  class="w-full mx-auto max-w-screen-xl"/>
    <div class="flex-1 px-4 sm:px-8 mt-9">
      <div class="mx-auto max-w-screen-lg lg:px-8">
        <router-outlet/>
      </div>
    </div>
    <blog-footer class="w-full mx-auto max-w-screen-xl"/>
  `,
})
export class AppComponent {}
