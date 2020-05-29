import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MonitorJobEditComponent } from './job/edit/edit.component';
import { MonitorJobComponent } from './job/job.component';
import { MonitorJobViewComponent } from './job/view/view.component';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorOnlineComponent } from './online/online.component';
import { MonitorServerComponent } from './server/server.component';

const COMPONENTS = [MonitorOnlineComponent, MonitorJobComponent, MonitorServerComponent];
const COMPONENTS_NOROUNT = [MonitorJobEditComponent, MonitorJobViewComponent];

@NgModule({
  imports: [SharedModule, MonitorRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class MonitorModule {}
