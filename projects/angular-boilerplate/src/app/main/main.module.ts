import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { APP_CONFIG } from '@main-project/app-config';
import { environment } from '@main-project/boiler/env/environment';
import { ThemeModule } from '@main-project/theme/theme.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, ThemeModule],
})
export class MainModule {}
