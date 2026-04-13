# @awdorrin/ngx-odata-client

An Angular OData client library for consuming OData services. Forked from [angular-odata-es5](https://github.com/StefH/angular-odata-es5) and updated for modern Angular versions.

## Features

- 🚀 Support for Angular 19, 20, and 21
- 📦 Modern ESM package format
- 🔧 TypeScript support
- 🌐 Full OData query capabilities
- ⚡ RxJS-based async operations

## Installation

```bash
npm install @awdorrin/ngx-odata-client
```

## Compatibility

| Angular Version | Package Version |
|----------------|-----------------|
| 21.x           | 21.0.0+        |
| 20.x           | 21.0.0+        |
| 19.x           | 21.0.0+        |
| 20.x           | 20.0.0+        |
| 19.x           | 20.0.0+        |
| 18.x           | 18.0.0         |
| 17.x           | 17.0.1         |
| 16.x           | 16.0.1         |
| 15.x           | 15.0.2         |

## Usage

### Import the Module

```typescript
import { NgxOdataClientModule } from '@awdorrin/ngx-odata-client';

@NgModule({
  imports: [
    NgxOdataClientModule
  ]
})
export class AppModule { }
```

### Use the OData Service

```typescript
import { ODataService } from '@awdorrin/ngx-odata-client';

constructor(private odataService: ODataService) {
  // Configure your OData endpoint
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

## Links

- **npm Package**: https://www.npmjs.com/package/@awdorrin/ngx-odata-client
- **GitHub Repository**: https://github.com/awdorrin/ngx-odata-client
- **Issues**: https://github.com/awdorrin/ngx-odata-client/issues

## License

MIT

## Credits

Originally forked from [angular-odata-es5](https://github.com/StefH/angular-odata-es5) by StefH.
