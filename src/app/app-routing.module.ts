import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGetAllBillsFormComponent } from './admin-get-all-bills-form/admin-get-all-bills-form.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'admin-dashboard/getAllBills',
    component: AdminGetAllBillsFormComponent,
  },
  { path: 'consumer-dashboard', component: ConsumerDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
