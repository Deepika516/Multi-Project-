import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { SharedModule } from '@main-project/shared/shared.module';
import { ThemeModule } from '@main-project/theme/theme.module';
=======
>>>>>>> 948e066a20c500efdfd0b75c9fd7ee0f95fcbbac
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ThemeModule } from '@main-project/theme/theme.module';
import { SharedModule } from '@main-project/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ThemeModule, SharedModule],
})
export class HomeModule {}
