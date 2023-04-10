import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ODataServiceFactory } from './odata-service-factory';
import { ODataConfiguration, KeyConfigs } from './odata-configuration';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
    ODataServiceFactory,
    ODataConfiguration
  ]
})
export class NgxODataClientModule { }
