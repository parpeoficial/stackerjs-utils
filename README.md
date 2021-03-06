[![Travis](https://img.shields.io/travis/parpeoficial/stackerjs-utils.svg)](https://travis-ci.org/parpeoficial/stackerjs-utils)
[![Codecov](https://codecov.io/gh/parpeoficial/stackerjs-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/parpeoficial/stackerjs-utils)
[![Maintainability](https://api.codeclimate.com/v1/badges/affe138d60076b13349c/maintainability)](https://codeclimate.com/github/parpeoficial/stackerjs-utils/maintainability)
[![Dependencies](https://img.shields.io/david/parpeoficial/stackerjs-utils.svg)](https://david-dm.org/parpeoficial/stackerjs-utils)
[![npm](https://img.shields.io/npm/dt/stackerjs-utils.svg)](https://www.npmjs.com/package/stackerjs-utils)

[![NPM](https://nodei.co/npm/stackerjs-utils.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stackerjs-utils/)

![StackerJS](https://s3-sa-east-1.amazonaws.com/parpe.prod/StackerJS-logo.png)

# Utils

Package of utilities that works nicely in and outside [StackerJS](https://github.com/parpeoficial/stackerjs)

## Config

```javascript
import { Config } from 'stackerjs-utils';

Config.set('any.value', { name: 'stackerjs-utils' });
Config.set('any.type', 'Hello');

Config.get('any.value'); // { "name": "stackerjs" }
Config.get('any.type'); // Hello
```

### .ENV file

When a .env is configured in project root like this:

```env
DB_DRIVER=mysql
APP_NAME=stackerjs-utils
```

It can be accessed by Config as:

```javascript
import { Config } from 'stackerjs-utils';

Config.env('db.driver'); // mysql
Config.env('DB_DRIVER'); // mysql
```

## Factory
Permits access easily functions and classes.

### Defining
```javascript
// config/providers.js

module.exports = {
    factories: {
        "FactoryName": function FactoryName()
        {
            //Do something
        },
        "OtherFactory": {
            factory: function Factorial() { /* Do something */ },
            params: { 
                define: "default",
                params: "to",
                be: "accessed",
                by: "factory"
            }
        }
    }
}
```

### Accessing
```javascript
import { Factory } from "stackerjs-utils";

let otherFactory = Factory("OtherFactory");
otherFactory.define; // default
otherFactory.params; // to

let otherFactory = Factory.make("OtherFactory", { define: "any" });
otherFactory.define; // any
otherFactory.params; // to
```