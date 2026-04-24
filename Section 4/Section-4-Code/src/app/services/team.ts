import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private http = inject(HttpClient);
  
  getTeams() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}