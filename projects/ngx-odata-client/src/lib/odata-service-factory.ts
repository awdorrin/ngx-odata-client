import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ODataConfiguration } from './odata-configuration';
import { ODataService } from './odata-service';

@Injectable({
    providedIn: 'root'
  })
export class ODataServiceFactory {

    constructor(private http: HttpClient, private config: ODataConfiguration) {
    }

    public CreateService<T>(typeName: string, config?: ODataConfiguration): ODataService<T> {
        return new ODataService<T>(typeName, this.http, config ? config : this.config);
    }
}
