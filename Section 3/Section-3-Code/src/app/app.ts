import { CommonModule } from '@angular/common';
import { Component, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './auth';

  @Component({
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
  export class App {
    protected readonly title = signal('section3');
    count = signal(0);
    increment() {
      this.count.update(value => value + 1);
    }
/*
    // inject() is the modern way to get services in v21
  protected readonly auth = inject(Auth);

  handleLogin(name: string): void {
    this.auth.login(name);
  }
    */
  }
