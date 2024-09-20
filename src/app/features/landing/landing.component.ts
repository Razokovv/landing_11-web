import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
})

export class LandingComponent {
  contactForm: FormGroup;
  isMenuOpen = false;
  projects: any[] = [];
  cards: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  categories = ['Все', 'Веб дизайн', 'Мобильные приложения', '3D дизайн', 'SaaS'];
  activeCategoryIndex: number = 0;

  getProjects() {
    this.http.get<any[]>('projects.json').subscribe(response => {
      this.projects = response;
    });

    this.http.get<any[]>('cards.json').subscribe(response => {
      this.cards = response;
    });
  }



  setActiveCategory(index: number): void {
    this.activeCategoryIndex = index;
  }


  getFilteredItems() {
    const activeCategory = this.categories[this.activeCategoryIndex];

    if (activeCategory === 'Все') {
      return this.projects;
    }

    return this.projects.filter(item => item.category === activeCategory);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const email = this.contactForm.value.email;
      console.log('Отправить запрос ', email);
    }
  }
}
