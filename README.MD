# [![MEAN Logo](http://mean.io/system/assets/img/logos/meanlogo.png)](http://mean.io/) MEAN Stack Test

MEAN is a framework for an easy starting point with [MongoDB](https://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](https://angularjs.org/) based applications. It is designed to give you a quick and organized way to start developing MEAN based web apps with useful modules like Mongoose and Passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.

## Prerequisite Technologies
### Linux
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.
* *MongoDB* - <a href="https://www.mongodb.org/downloads">Download</a> and Install mongodb - <a href="https://docs.mongodb.org/manual/">Checkout their manual</a> if you're just starting.

## Prerequisite packages

* Mean currently uses gulp as a build tool and bower to manage frontend packages.
```
$ npm install -g gulp
// and bower
$ npm install -g bower 
```

## Installation
To start with MEAN install the `mean-cli` package from NPM.
This will add the *mean* command which lets you interact (install, manage, update ...) your Mean based application.

### Install the MEAN CLI

```bash
$ npm install -g mean-cli
```

### Invoke node with a task manager
Mean supports the gulp task runner for various services which are applied on the code.
To start your application run - 
```bash
$ gulp
```


### Running 
If you have a rails, node, or other mean project already running, you may need to use a different port. You can set the port and start your new mean project with one command:
```bash
$ gulp
```

Then, open a browser:
```bash
  http://localhost:3000
```


* Updating Bower:
```bash
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```bash
$ npm cache clean
```

* Bower Clean Cache:
```bash
$ bower cache clean
```


## Technologies

### The MEAN stack

MEAN is an acronym for *M*ongo, *E*xpress.js , *A*ngular.js and *N*ode.js

## CLI
### Overview

The MEAN CLI is a simple Command Line Interface for installing and managing MEAN applications. As a core module of the Mean.io project, it provides a number of useful tools to make interaction with your MEAN application easier, with features such as: scaffolding, module creation and admin, status checks, and user management.
```bash
$ mean
$ mean --help
$ mean help
```
  <code>mean help</code> can also be used in conjunction with any command to get more information about that particular functionality. For example, try <code>mean help init</code> to see the options for init
```bash
$ mean help [command]
```


### Packages
#### Management
 <p class="alert alert-warning">All of the remaining of the commands must be run from the root folder of your MEAN application.</p>
  <p>Contributed MEAN packages can be installed or uninstalled via the CLI. Also, currently installed modules can be viewed with the <code>list</code> command.</p>

```bash
$ mean list
$ mean install <module>
$ mean uninstall <module>
```

  <p class="alert alert-info">Mean packages installed via the installer are found in <i>/node_modules</i></p>
#### Search
To find new packages run the *mean search* command
```bash
$ mean search [packagename]
```
`mean search` will return all of the available packages, `mean search [packagename]` will filter the search results.

## License
We believe that mean should be free and easy to integrate within your existing projects so we chose [The MIT License](http://opensource.org/licenses/MIT)
