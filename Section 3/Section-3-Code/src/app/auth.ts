import { Injectable,signal } from '@angular/core';
/**
 * AuthService handles the authentication state of the application.
 * Using @Injectable with 'root' ensures it's a singleton (one instance for the whole app).
 */
@Injectable({
  providedIn: 'root',
})
export class Auth {
  // Signals are the modern way to store data in Angular 21
  // Signals: Modern reactive variables that notify the UI when data changes
  // We use 'readonly' so components can read the data but not overwrite it directly
  readonly isLoggedIn = signal<boolean>(false);
  readonly currentUser = signal<string>('');
/**
   * Validates and sets the user state to logged in.
   * @param username The name captured from the UI input field.
   */
  login(username: string): void {
    if (username.trim()) {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
    }
  }
/**
   * Resets the authentication state to default.
   */
  logout(): void {
    this.isLoggedIn.set(false);
    this.currentUser.set('');
  }
}
