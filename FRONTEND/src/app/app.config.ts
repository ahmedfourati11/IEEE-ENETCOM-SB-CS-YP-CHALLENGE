import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TestComponent } from './test/test.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};