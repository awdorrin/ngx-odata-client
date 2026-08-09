/*
 * Public API Surface of ngx-odata-client
 */

// Standalone providers (recommended)
export { provideODataClient, provideODataClientWithConfig } from './lib/odata.providers';

// Module (deprecated)
export * from './lib/ngx-odata-client.module';

// Core services
export * from './lib/odata-service-factory';
export * from './lib/odata-configuration';
export * from './lib/odata-service';

// Types and models
export * from './lib/iodata-response-model';
export * from './lib/odata-operation';
export * from './lib/odata-query';
export * from './lib/odata-paged-result';
export * from './lib/odata-exec-return-type';
export * from './lib/odata-utils';
