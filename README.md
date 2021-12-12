# TN2 Trabajo Final
## Aplicación Web Applaudeme

### Integrantes:  
- Plumari
- Eserequis
- Artaza

## Requirements
### Creating node_modules
```
$ npm install
```
### Dependencies
- [VUE-CLI](https://cli.vuejs.org/guide/installation.html)
- [VUE-AXIOS](https://www.npmjs.com/package/vue-axios)
- [VUE-VUEX](https://vuex.vuejs.org/installation.html)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### RUN API server
```
$ npm start
```
### On Browser
```
$ http://localhost:8080/
```
## Features
### Global Filters:  
Se implementa un filtro global que trabaja sobre todos los campos de tipo Title, haciendo que cada caracter se imprima en mayúscula.

### Global Mixins:  
Se implementa un contador de "aplausos" ("Likes") que se comparten en todas las pantallas.

## Estructura
```
Applaudeme
|__node_modules
|
|__src
|  |__components
|  |__img
|
|__App.vue
|__axios.js
|__form.js
|__globalFilters.js
|__globalMixing.js
|
|__main.js
|__router.js
|__store.js
|
|__.gitignore
|__package-lock.json
|__package.json
|__README.md
|
```
### node_modules:
Carpeta de dependencias del proyecto.
### src/components:
Contiene los componentes en si tales como cada una de las pages, la barra de navegación, los formularios de registro.
### src/components/Cartelera:
Contiene los diferentes archivos que conforman la página principal del sitio o Home la cual corresponde a una Cartelera de espectaculos.
### src/components/Registro:
Contiene los diferentes archivos que confirman el formulario de Registro de Usuario en la web aplicaction.
### src/components/img:
Contiene todas las imagenes que consume la app (banners, icons, promotions, etc).
### src/axios.js
Contiene el objeto "vue axios" que se implementa en la aplicación para la conexión con la API.
### src/form.js
Contiene el objeto "vue form" que se implementa en la aplicación para la generación de formularios. Tambien contiene una validación por aplicable en estos formularios que devuelve los inputs sin espacios.
### src/globalFilters.js:
Contiene los filtros que se aplican a nivel global en la app.
### src/globalMisins.js:
Contiene los metodos y valores que comparten en toda la app a nivel global.
### src/main.js:
Contiene los imports de las librerías que se comparten e implementan para todo el proyecto.
### src/router.js:
Contiene las urls de cada componente para ser invocadas desde el navebar.
### src/store.js:
Contiene los valores, datos y metodos ('mutations') que invocan a objetos que se comparten globalmente en la app (VUEX)


