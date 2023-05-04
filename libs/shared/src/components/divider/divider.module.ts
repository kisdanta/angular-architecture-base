import { NgModule } from '@angular/core';

import { DividerComponent } from './divider.component';

const COMPONENTS = [DividerComponent];

@NgModule({
  imports: [],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [],
})
export class DividerModule {}
