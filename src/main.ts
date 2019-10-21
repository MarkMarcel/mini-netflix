import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { DbService } from './app/services/db.service';

if (environment.production) {
  enableProdMode();
}
const dbService = new DbService();
dbService.initialise();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
