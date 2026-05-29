import { Injectable }
from '@angular/core';

import { HttpClient }
from '@angular/common/http';

import { Observable }
from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AnalyticsService {

//   getDepartmentCounts() {
//   return this.http.get<any>(
//     'http://localhost:8083/analytics/departmentCounts'
//   );
// }
     private apiUrl1 =
        environment.baseUrl.concat('/analytics');
 private apiUrl =
        environment.analyticsApi;


  constructor(
    private http: HttpClient
  ) {}

  getTotalEmployees():
  Observable<any> {

    return this.http.get(
      `${this.apiUrl}/departmentCounts`
    );
  }
}
