
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { AuthGuard } from './guards/auth-guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard';
import { EmployeeListComponent } from './employee/employee-list/employee-list';
import { AddEmployeeComponent } from './employee/add-employee/add-employee';
import { AnalyticsDashboardComponent } from './analytics/analytics-dashboard/analytics-dashboard';
import { FileUploadComponent } from './file-upload/file-upload';
import { NgModule } from '@angular/core';
import { UserRegister } from './employee/user-register/user-register';


export const routes: Routes = [

   {
    path: '',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
path: 'register',
component: UserRegister,
},
{
  path: 'analytics',
  component: AnalyticsDashboardComponent,
},

{
  path: 'upload',
  component:
  FileUploadComponent
},
{
path: '',
redirectTo: 'login',
pathMatch: 'full'
}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
