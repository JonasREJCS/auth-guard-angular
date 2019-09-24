import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { Routes, RouterModule } from "@angular/router";
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from "../guards/auth-guard.service";



@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent],
  imports: [
    RouterModule.forRoot(dashboardRoutes)
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }
