# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [22.0.0] - 2026-08-09

### Added
- ✨ **Angular 22 Support**: Full compatibility with Angular 22
- ✨ **Standalone API**: New `provideODataClient()` function for modern Angular applications
- ✨ **Configuration Helper**: New `provideODataClientWithConfig()` for easy configuration with custom OData settings
- 📚 Comprehensive JSDoc documentation with migration examples
- 🧹 Cleaned up public-api.ts by removing commented code sections

### Changed
- 🔄 Updated peer dependencies to support Angular 19-22 (`^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0`)
- 📦 Updated package version to 22.0.0 to align with Angular versioning
- 📝 Improved public API exports organization with clear sections

### Deprecated
- ⚠️ **NgxODataClientModule**: The NgModule approach is deprecated in favor of the new standalone API
  - Still fully functional for backward compatibility
  - Will be removed in a future major version (v23 or later)
  - See migration examples in the @deprecated JSDoc comments

### Breaking Changes
None. This release maintains full backward compatibility with existing code.

### Migration Path
For applications using `NgxODataClientModule`, no immediate action required. However, we recommend migrating to the standalone API:

```typescript
// Before (NgModule - deprecated)
import { NgxODataClientModule } from '@awdorrin/ngx-odata-client';
@NgModule({ imports: [NgxODataClientModule] })

// After (Standalone - recommended)
import { provideODataClient } from '@awdorrin/ngx-odata-client';
providers: [provideODataClient()]
```

## [21.0.1] - Previous Release
- Bug fixes and improvements for Angular 21 support

## [21.0.0] - Previous Release
- Added support for Angular 19, 20, and 21
- Modern ESM package format
- Full TypeScript support

## [20.0.0] - Previous Release
- Angular 20 compatibility

## Earlier Versions
See git history for changes in versions prior to 20.0.0
