import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ODataServiceFactory } from './odata-service-factory';
import { ODataConfiguration, KeyConfigs } from './odata-configuration';

/**
 * @deprecated Use `provideODataClient()` instead of importing this module.
 * This NgModule will be removed in a future major version.
 *
 * Migration example:
 * ```typescript
 * // Before (NgModule approach)
 * import { NgxODataClientModule } from '@awdorrin/ngx-odata-client';
 *
 * @NgModule({
 *   imports: [NgxODataClientModule]
 * })
 * export class AppModule { }
 *
 * // After (Standalone approach)
 * import { provideODataClient } from '@awdorrin/ngx-odata-client';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [provideODataClient()]
 * };
 * ```
 *
 * @see provideODataClient
 */
@NgModule({ declarations: [],
    exports: [], imports: [CommonModule], providers: [
        ODataServiceFactory,
        ODataConfiguration,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class NgxODataClientModule { }
