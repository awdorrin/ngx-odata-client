import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ODataServiceFactory } from './odata-service-factory';
import { ODataConfiguration } from './odata-configuration';

/**
 * Provides the OData client services for standalone applications.
 * 
 * @example
 * ```typescript
 * // In app.config.ts or main.ts
 * import { provideODataClient } from '@awdorrin/ngx-odata-client';
 * 
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideODataClient(),
 *     // ... other providers
 *   ]
 * };
 * ```
 * 
 * @example
 * ```typescript
 * // With custom configuration
 * import { provideODataClient, ODataConfiguration } from '@awdorrin/ngx-odata-client';
 * 
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideODataClient(),
 *     {
 *       provide: ODataConfiguration,
 *       useFactory: () => {
 *         const config = new ODataConfiguration();
 *         config.baseUrl = 'https://api.example.com/odata';
 *         return config;
 *       }
 *     }
 *   ]
 * };
 * ```
 * 
 * @returns EnvironmentProviders for OData services
 */
export function provideODataClient(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(withInterceptorsFromDi()),
    ODataServiceFactory,
    ODataConfiguration
  ]);
}

/**
 * Provides the OData client services with custom configuration.
 * 
 * @example
 * ```typescript
 * import { provideODataClientWithConfig, ODataConfiguration } from '@awdorrin/ngx-odata-client';
 * 
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideODataClientWithConfig(() => {
 *       const config = new ODataConfiguration();
 *       config.baseUrl = 'https://api.example.com/odata';
 *       return config;
 *     })
 *   ]
 * };
 * ```
 * 
 * @param configFactory - Function that returns configured ODataConfiguration
 * @returns EnvironmentProviders for OData services with custom configuration
 */
export function provideODataClientWithConfig(
  configFactory: () => ODataConfiguration
): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: ODataConfiguration,
      useFactory: configFactory
    },
    ODataServiceFactory
  ]);
}
