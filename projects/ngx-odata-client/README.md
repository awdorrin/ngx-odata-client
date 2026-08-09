# @awdorrin/ngx-odata-client

An Angular OData client library for consuming OData services. Forked from [angular-odata-es5](https://github.com/StefH/angular-odata-es5) and updated for modern Angular versions.

## Features

- 🚀 Support for Angular 19, 20, 21, and 22
- 📦 Modern ESM package format
- 🔧 Full TypeScript support
- 🌐 Complete OData query capabilities
- ⚡ RxJS-based async operations
- ✨ Standalone API support (recommended)
- 🔄 Backward compatible with NgModule approach

## Installation

```bash
npm install @awdorrin/ngx-odata-client linq-collections
```

## Compatibility

| Angular Version | Package Version |
|----------------|-----------------|
| 22.x           | 22.0.0+        |
| 21.x           | 21.0.0+        |
| 20.x           | 20.0.0+        |
| 19.x           | 19.0.0+        |
| 18.x           | 18.0.0         |
| 17.x           | 17.0.1         |
| 16.x           | 16.0.1         |
| 15.x           | 15.0.2         |

## Usage

### Standalone API (Recommended) ✨

For modern Angular applications using standalone components:

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideODataClient } from '@awdorrin/ngx-odata-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideODataClient(),
    // ... other providers
  ]
};
```

#### With Custom Configuration

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideODataClientWithConfig, ODataConfiguration } from '@awdorrin/ngx-odata-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideODataClientWithConfig(() => {
      const config = new ODataConfiguration();
      config.baseUrl = 'https://api.example.com/odata';
      return config;
    }),
    // ... other providers
  ]
};
```

### NgModule API (Legacy - Deprecated) ⚠️

> **Deprecated**: This approach is deprecated and will be removed in v23. Please migrate to the standalone API above.

```typescript
import { NgxODataClientModule } from '@awdorrin/ngx-odata-client';

@NgModule({
  imports: [
    NgxODataClientModule
  ]
})
export class AppModule { }
```

### Using the OData Service

Once configured, inject and use the OData service in your components:

```typescript
import { Component, inject } from '@angular/core';
import { ODataServiceFactory, ODataConfiguration } from '@awdorrin/ngx-odata-client';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  template: `
    <div *ngFor="let product of products">
      {{ product.name }}: {{ product.price | currency }}
    </div>
  `
})
export class ProductsComponent {
  private odataFactory = inject(ODataServiceFactory);
  private productsService = this.odataFactory.CreateService<Product>('Products');
  
  products: Product[] = [];

  ngOnInit() {
    // Simple query
    this.productsService.Query()
      .Exec()
      .subscribe(products => {
        this.products = products;
      });
    
    // Query with filters
    this.productsService.Query()
      .Filter("price gt 100")
      .OrderBy("name")
      .Top(10)
      .Exec()
      .subscribe(products => {
        this.products = products;
      });
    
    // Get single entity
    this.productsService.Get(1)
      .Exec()
      .subscribe(product => {
        console.log('Product:', product);
      });
    
    // Create new entity
    const newProduct: Product = { id: 0, name: 'New Product', price: 99.99 };
    this.productsService.Post(newProduct)
      .Exec()
      .subscribe(created => {
        console.log('Created:', created);
      });
    
    // Update entity
    const updated: Product = { id: 1, name: 'Updated Product', price: 149.99 };
    this.productsService.Patch(updated, 1)
      .Exec()
      .subscribe(result => {
        console.log('Updated:', result);
      });
    
    // Delete entity
    this.productsService.Delete(1)
      .Exec()
      .subscribe(() => {
        console.log('Deleted');
      });
  }
}
```

### Advanced Queries

```typescript
// Paged results with count
this.productsService.Query()
  .Filter("category eq 'Electronics'")
  .OrderBy(['name', 'price desc'])
  .Top(20)
  .Skip(40)
  .ExecWithCount()
  .subscribe(pagedResult => {
    console.log('Total count:', pagedResult.count);
    console.log('Data:', pagedResult.data);
    console.log('Next page:', pagedResult.nextLink);
  });

// Select specific fields
this.productsService.Query()
  .Select(['id', 'name', 'price'])
  .Exec()
  .subscribe(products => {
    // Only id, name, and price fields returned
  });

// Expand related entities
this.productsService.Query()
  .Expand('Category')
  .Exec()
  .subscribe(products => {
    // Products with expanded Category data
  });

// Search
this.productsService.Query()
  .Search('laptop')
  .Exec()
  .subscribe(products => {
    // Products matching 'laptop' search
  });
```

### Configuration Options

```typescript
import { ODataConfiguration } from '@awdorrin/ngx-odata-client';

const config = new ODataConfiguration();

// Set base URL
config.baseUrl = 'https://api.example.com/odata';

// Custom request options
config.defaultRequestOptions.headers = config.defaultRequestOptions.headers
  .set('Authorization', 'Bearer YOUR_TOKEN');

// Custom error handling
config.handleError = (error, caught) => {
  console.error('OData error:', error);
  // Your custom error handling
};
```

## Migration from NgModule to Standalone

### Step 1: Update your app configuration

**Before (NgModule):**
```typescript
import { NgxODataClientModule } from '@awdorrin/ngx-odata-client';

@NgModule({
  imports: [
    NgxODataClientModule,
    // other imports
  ]
})
export class AppModule { }
```

**After (Standalone):**
```typescript
import { provideODataClient } from '@awdorrin/ngx-odata-client';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideODataClient(),
    // other providers
  ]
};
```

### Step 2: Custom configuration (if applicable)

**Before:**
```typescript
@NgModule({
  imports: [NgxODataClientModule],
  providers: [
    {
      provide: ODataConfiguration,
      useFactory: () => {
        const config = new ODataConfiguration();
        config.baseUrl = 'https://api.example.com/odata';
        return config;
      }
    }
  ]
})
```

**After (Option 1 - Using configFactory):**
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideODataClientWithConfig(() => {
      const config = new ODataConfiguration();
      config.baseUrl = 'https://api.example.com/odata';
      return config;
    })
  ]
};
```

**After (Option 2 - Separate provider):**
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideODataClient(),
    {
      provide: ODataConfiguration,
      useFactory: () => {
        const config = new ODataConfiguration();
        config.baseUrl = 'https://api.example.com/odata';
        return config;
      }
    }
  ]
};
```

### Step 3: Service usage (no changes required)

Service injection and usage remain the same:
```typescript
import { ODataServiceFactory } from '@awdorrin/ngx-odata-client';

export class MyComponent {
  private odataFactory = inject(ODataServiceFactory);
  // or
  constructor(private odataFactory: ODataServiceFactory) { }
}
```

## Development

### Build the Library

```bash
npm run build:lib
```

### Publish to npm

```bash
npm run publish:lib
```

This will build the library and publish it to npm.

### Version Management

```bash
npm run version:patch  # Bump patch version (x.x.X)
npm run version:minor  # Bump minor version (x.X.0)
npm run version:major  # Bump major version (X.0.0)
```

## API Reference

### ODataServiceFactory

Main entry point for creating OData services.

```typescript
CreateService<T>(typeName: string, config?: ODataConfiguration): ODataService<T>
```

### ODataService<T>

Provides CRUD operations for OData entities.

- `Query()` - Create a new query
- `Get(key)` - Get entity by key
- `Post(entity)` - Create new entity
- `Patch(entity, key)` - Update entity (partial)
- `Put(entity, key)` - Replace entity (full)
- `Delete(key)` - Delete entity
- `CustomAction(key, actionName, postdata)` - Execute custom action
- `CustomFunction(key, functionName, parameters)` - Execute custom function

### ODataQuery<T>

Build and execute OData queries.

- `Filter(filter: string)` - Apply filter
- `OrderBy(orderBy: string | string[])` - Apply sorting
- `Top(top: number)` - Limit results
- `Skip(skip: number)` - Skip results
- `Select(select: string | string[])` - Select fields
- `Expand(expand: string | string[])` - Expand related entities
- `Search(search: string)` - Full-text search
- `Exec()` - Execute query
- `ExecWithCount()` - Execute with total count

## Links

- **npm Package**: https://www.npmjs.com/package/@awdorrin/ngx-odata-client
- **GitHub Repository**: https://github.com/awdorrin/ngx-odata-client
- **Issues**: https://github.com/awdorrin/ngx-odata-client/issues

## License

MIT

## Credits

Originally forked from [angular-odata-es5](https://github.com/StefH/angular-odata-es5) by StefH.
