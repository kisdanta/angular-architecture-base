import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SecurityInterceptor } from './interceptors';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true },
  ],
})
export class SecurityModule {}
