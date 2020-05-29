import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorJobComponent } from './job/job.component';
import { MonitorOnlineComponent } from './online/online.component';
import { MonitorServerComponent } from './server/server.component';

const routes: Routes = [
  { path: 'online', component: MonitorOnlineComponent },
  { path: 'job', component: MonitorJobComponent },
  { path: 'server', component: MonitorServerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorRoutingModule {}
