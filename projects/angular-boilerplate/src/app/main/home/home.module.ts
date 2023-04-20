import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@main-project/shared/shared.module';
import { ThemeModule } from '@main-project/theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ThemeModule, SharedModule],
})
export class HomeModule {}
