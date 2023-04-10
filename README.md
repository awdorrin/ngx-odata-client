# NgxOdataClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

I removed the test, documentation and demo project because that seemed to be where the majority of conflicts were moving to newer versions of Angular.
I then repackage the original source code using the following commands:

ng new common_modules --no-create-application
cd common_modules
ng generate library ngx-odata-client
copy original files into common_modules/projects/ngx-odata-client/src/lib/
made adjustments to package.json and related files, used npm install / npm outdated commands and upgraded libraries to latest

# Build Library

ng build ngx-odata-client

# Publish Library

cd dist\ngx-odata-client
npm publish

# Use library
npm uninstall angular-odata-es5
npm install ngx-odata-client

rebuild application
