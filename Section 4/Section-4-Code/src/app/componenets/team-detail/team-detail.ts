import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="padding: 30px; font-family: sans-serif;">
      <a routerLink="/" style="color: #3498db; text-decoration: none; font-weight: bold;">← Back to Home</a>
      <hr>
      <div style="background: #ecf0f1; padding: 25px; border-radius: 12px; margin-top: 20px;">
        <h2 style="margin-top: 0;">Student Detail Page</h2>
        <p><strong>Database ID:</strong> {{ studentId }}</p>
        <p style="color: #7f8c8d; font-style: italic;">
            This profile data is dynamic based on the URL parameter.
        </p>
      </div>
    </div>
  `
})
export class TeamDetail implements OnInit {
  private route = inject(ActivatedRoute);
  studentId: string | null = null;

  ngOnInit() {
    // This grabs the ID from 'team/:id'
    this.studentId = this.route.snapshot.paramMap.get('id');
  }
}