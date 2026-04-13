# @awdorrin/ngx-odata-client

An Angular OData client library for consuming OData services. Forked from [angular-odata-es5](https://github.com/StefH/angular-odata-es5) and updated for modern Angular versions.

## Package Information

- **npm Package**: [@awdorrin/ngx-odata-client](https://www.npmjs.com/package/@awdorrin/ngx-odata-client)
- **Current Version**: 21.0.0
- **Supported Angular Versions**: 19.x, 20.x, 21.x

## Quick Start

### Installation

```bash
npm install @awdorrin/ngx-odata-client
```

### Usage

```typescript
import { NgxOdataClientModule } from '@awdorrin/ngx-odata-client';

@NgModule({
  imports: [NgxOdataClientModule]
})
export class AppModule { }
```

For detailed documentation, see the [package README](./projects/ngx-odata-client/README.md).

## Development

This is a monorepo containing the library source code.

### Prerequisites

- Node.js 18+ 
- npm 9+
- Angular CLI

### Setup

```bash
npm install
```

### Build Library

```bash
npm run build:lib
```

The build artifacts will be stored in the `dist/ngx-odata-client` directory.

### Publish Library

```bash
# Bump version first
npm run version:patch   # or version:minor or version:major

# Build and publish
npm run publish:lib
```

### Available Scripts

- `npm run build:lib` - Build the library
- `npm run publish:lib` - Build and publish to npm (requires authentication)
- `npm run version:patch` - Bump patch version (bug fixes)
- `npm run version:minor` - Bump minor version (new features)
- `npm run version:major` - Bump major version (breaking changes)
- `npm run lint` - Run linting
- `npm run test` - Run unit tests

## Project History

This project was originally generated with Angular CLI version 15.1.6 and has been continuously updated to support the latest Angular versions.

The test, documentation, and demo projects were removed to simplify maintenance and reduce conflicts during Angular version upgrades. The focus is on maintaining a clean, up-to-date library that works with current Angular versions.

### Migration from angular-odata-es5

If you're migrating from the original `angular-odata-es5` package:

```bash
npm uninstall angular-odata-es5
npm install @awdorrin/ngx-odata-client
```

Update your imports:
```typescript
// Old
import { ... } from 'angular-odata-es5';

// New
import { ... } from '@awdorrin/ngx-odata-client';
```

## Contributing

Issues and pull requests are welcome at https://github.com/awdorrin/ngx-odata-client

## License

MIT

## Credits

Originally forked from [angular-odata-es5](https://github.com/StefH/angular-odata-es5) by StefH.
