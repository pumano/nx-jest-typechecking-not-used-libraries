import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeelemComponent } from './someelem/someelem.component';
import { LibWithErrorsModule } from '@nxlatest/lib-with-errors';

@NgModule({
  imports: [CommonModule, LibWithErrorsModule],
  declarations: [SomeelemComponent],
})
export class HelpersModule {}
