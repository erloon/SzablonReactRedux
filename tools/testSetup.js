
// 1. Rejestracja babela do transpilacji codu do testów
// 2. Wyłączenie Webpack-specific pod Mocha
// 3. Wymagany jsdom po to abyśmy mogli testować w in-memory
// 4. Ustawienie globalnych zmiennych do minifikacji w przeglądarce

/*eslint-disable no-var*/


process.env.NODE_ENV = 'test';

//Rejestracja babel
require('babel-register')();

//Wyłaczenie ustawien webpacka pod testy
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// Konfiguracja jsdom
// symuluje przeglądarkę pod testy
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
