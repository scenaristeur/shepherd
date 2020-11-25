# Darcy shepherd
![Darcy Shepherd logo](shepherd-logo.png)

Darcy Shepherd is a Vue.js web app to use with the Darcy Ibex libary. 

## Project setup

Run the npm installation command to install the needed dependecies.

```
npm install
```
### The Ibex library
You can find the Ibex library in the [ibex-lib repository](https://github.com/Darcy-Social/ibex-lib)

The library needs to be included in the ibex.js file, to import a newer version follow these steps:

- Copy the classes from the file, leaving the imports in place
- Replace solid.auth with auth

This needs to be done until ibex-lib can be made into an npm package.

### Development server

You can run a vue-cli developmente server with the following command.

```
npm run serve
```

### Deploy

You can deploy the web app with the following command

```
npm run build
```

The file **.env.production** contains the web address of your web app _(in this case ibex.darcy.is)_