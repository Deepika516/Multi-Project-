import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IconPacksManagerService } from '@main-project/theme/services';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import {
  LocalizationModule,
  TranslationService,
} from '@main-project/core/localization';
import { SystemStoreFacadeService } from '@main-project/core/store';
import { InMemoryStorageService } from 'ngx-webstorage-service';
import { EnvAdapterService } from '@main-project/core/store/adapters';
import { ApiService } from '@main-project/core/api';
import { SharedModule } from '@main-project/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LocalizationModule,
    SharedModule,
  ],
  providers: [
    TranslationService,
    TranslateService,
    IconPacksManagerService,
    TranslateStore,
    SystemStoreFacadeService,
    EnvAdapterService,
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
