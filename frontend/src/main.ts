import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
<<<<<<< HEAD
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
=======
import { App } from './app/app';

bootstrapApplication(App, appConfig)
>>>>>>> ac6decbfbee6a4a14a25f88ce76ed3f5a89cfdcb
  .catch((err) => console.error(err));
