import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ODataServiceFactory } from './odata-service-factory';
import { ODataConfiguration, KeyConfigs } from './odata-configuration';

@NgModule({ declarations: [],
    exports: [], imports: [CommonModule], providers: [
        ODataServiceFactory,
        ODataConfiguration,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class NgxODataClientModule { }
