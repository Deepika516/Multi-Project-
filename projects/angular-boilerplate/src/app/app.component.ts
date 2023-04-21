import { Component, OnInit } from '@angular/core';
import { ComponentBaseDirective } from 'projects/shared-library/src/lib/shared/core';
import { TranslationService } from 'projects/shared-library/src/lib/shared/core';
import { IconPacksManagerService } from 'projects/shared-library/src/lib/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBaseDirective implements OnInit {
  title = 'boiler-plate-ui';
  constructor(
    private readonly iconMgr: IconPacksManagerService,
    private readonly languageTranslateService: TranslationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.languageTranslateService.init();
    this.iconMgr.registerFontAwesome();
    this.iconMgr.registerSvgs();
  }
}
