import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamService } from '../../services/team';
import { BehaviorSubject } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-15px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Dashboard implements OnInit {
  private teamService = inject(TeamService);
  
  // A stream that holds the current list of students
  private teamsSource = new BehaviorSubject<any[]>([]);
  teams$ = this.teamsSource.asObservable(); 

  // The Form with rules
  memberForm = new FormGroup({
    memberName: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  ngOnInit() {
    // Only fetch if we haven't loaded data yet
    if (this.teamsSource.value.length === 0) {
      this.teamService.getTeams().subscribe(data => {
        this.teamsSource.next(data);
      });
    }
  }

  onSubmit() {
    if (this.memberForm.valid) {
      const newMember = {
        id: Math.floor(Math.random() * 1000), // Random ID for the demo
        name: this.memberForm.value.memberName,
        email: 'new-student@helwan.edu.eg'
      };

      // Add to the top of the stream
      const current = this.teamsSource.value;
      this.teamsSource.next([newMember, ...current]);
      
      this.memberForm.reset();
    }
  }
}