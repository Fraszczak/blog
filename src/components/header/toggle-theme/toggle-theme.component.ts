import { Component } from '@angular/core';

@Component({
  selector: 'blog-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  standalone: true,
})
export class ToggleThemeComponent {
  onThemeToggle(value: boolean) {
    document.documentElement.classList.toggle('dark');
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }
}
