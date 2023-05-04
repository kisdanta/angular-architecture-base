import { NgModule } from '@angular/core';

import { AvatarComponent } from './avatar.component';

const COMPONENTS = [AvatarComponent];

@NgModule({
  imports: [],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [],
})
export class AvatarModule {}
