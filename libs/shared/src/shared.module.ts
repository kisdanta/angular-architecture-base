import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule, AvatarModule, InputModule } from './components';

const MODULES = [DividerModule, AvatarModule, InputModule];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
  declarations: [],
  providers: [],
})
export class SharedModule {}
