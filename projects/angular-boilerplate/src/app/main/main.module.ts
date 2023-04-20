import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from 'projects/shared-library/src/lib/theme';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { APP_CONFIG } from '@main-project/app-config/';
import { environment } from '@main-project/boiler/env/environment';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, ThemeModule],
  providers: [{ provide: APP_CONFIG, useValue: environment }],
})
export class MainModule {}
