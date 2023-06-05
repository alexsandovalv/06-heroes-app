# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Scripts to create components
Creating Modules
```shell
ng g m auth --routing
ng g m heroes --routing
ng g m material
ng g m shared
```
Creating components
```shell
ng g c auth/pages/layout-page --inline-style --skip-tests
ng g c auth/pages/login-page --inline-style --skip-tests
ng g c auth/pages/register-page --inline-style --skip-tests
ng g c heroes/pages/heroePage --inline-style --skip-tests
ng g c heroes/pages/layoutPage --inline-style --skip-tests
ng g c heroes/pages/listPage --inline-style --skip-tests
ng g c heroes/pages/newPage --inline-style --skip-tests
ng g c heroes/pages/searchPage --inline-style --skip-tests
ng g c shared/pages/Error404Page --inline-style --skip-tests
```
