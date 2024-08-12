import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(
      routes,
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      }),
    ),
  ],
};
