import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule }
from '@angular/common';
import { AnalyticsService } from '../../services/services/analytics.service';


@Component({

  selector:
    'app-analytics-dashboard',

  standalone: true,

  imports: [CommonModule],

  templateUrl:
    './analytics-dashboard.html',

  styleUrls:
    ['./analytics-dashboard.css']
})

export class
AnalyticsDashboardComponent
implements OnInit {

  departmentCounts: any[] = [];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {

    this.analyticsService.getTotalEmployees().subscribe({
      next: (data) => {
        this.departmentCounts = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
}
}