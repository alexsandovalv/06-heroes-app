# HeroesApp

## Dev
1. Clonar el proyecto
2. Ejecutar ```npm isntall```
3. Levantar backend ```npm run backend```
4. Ejecutar la app ```npm start``` o bine ```ng serve -o```

## Install lib

```shell
ng add @angular/material
npm install primeflex --save
./node_modules/primeflex/primeflex.css
```
```shell
npm install --save-dev json-server
```
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
