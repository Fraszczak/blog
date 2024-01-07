import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'blog-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  onMenuToggle(e: any) {
    const navlinks = document.querySelector(".navLinks");
    e.name = e.name === "menu" ? "close" : "menu";
    navlinks?.classList.toggle("left-[0%]");
  }

  onThemeToggle(value: boolean) {
    console.log(value)
    document.documentElement.classList.toggle('dark')
  }
  
}
