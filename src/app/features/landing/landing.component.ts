import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
})

export class LandingComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  categories = ['Все', 'Веб дизайн', 'Мобильные приложения', '3D дизайн', 'SaaS'];
  activeCategoryIndex: number = 0;


  items = [
    { title: 'Oson SMS', description: 'How do you create compelling presentations that wow your colleagues and impress your managers?', image: '/images/6.png', category: 'Веб дизайн' },
    { title: 'Migrating to Linear 101', description: 'Linear helps streamline software projects, sprints, and bug tracking.', image: '/images/7.png', category: 'Мобильные приложения' },
    { title: 'Building your API stack', description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.', image: '/images/8.png', category: 'SaaS' },
    { title: 'Bill Walsh leadership lessons', description: 'Transforming a 2-14 team into a 3x Super Bowl winning Dynasty.', image: '/images/9.png', category: 'Веб дизайн' },
    { title: 'PM mental models', description: 'Mental models are simple expressions of complex processes or relationships.', image: '/images/10.png', category: 'Мобильные приложения' },
    { title: 'What is wireframing?', description: 'Introduction to wireframing and its principles.', image: '/images/11.png', category: 'SaaS' }
  ];

  cards = [
    {
      icon: '/icons/featured-icon.svg',
      title: 'Share team inboxes',
      description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
    },
    {
      icon: '/icons/featured-icon2.svg',
      title: 'Collaborative Workflows',
      description: 'Keep your entire team in sync with shared projects, notifications, and easy collaboration features.'
    },
    {
      icon: '/icons/featured-icon2.svg',
      title: 'Custom Integrations',
      description: 'Easily integrate with your existing tools and automate repetitive tasks with our API stack.'
    },
    {
      icon: '/icons/featured-icon.svg',
      title: 'Advanced Analytics',
      description: 'Get deep insights into your team’s performance and find opportunities for improvement with real-time analytics.'
    }
  ];


  setActiveCategory(index: number): void {
    this.activeCategoryIndex = index;
  }


  getFilteredItems() {
    const activeCategory = this.categories[this.activeCategoryIndex];

    if (activeCategory === 'Все') {
      return this.items;
    }

    return this.items.filter(item => item.category === activeCategory);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const email = this.contactForm.value.email;
      console.log('Отправить запрос ', email);
    }
  }

}
