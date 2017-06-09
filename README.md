# Open Weather

A simple application to find the weather of an city by
it's name.

It uses Open Weather API (for weather information) and
Geobytes API (for cities name suggestions).

Important note: there are some limitations concerning to
the APIs (for example the Geobytes API could not have
all cities in the world; Open Weather doesnt not recognize
non US characters very well).

This application also uses Create-React-App, React, Redux,
ImmutableJS and Yarn.

An example of the application running could be found here:
- [http://open-weather-garoudan.herokuapp.com](http://open-weather-garoudan.herokuapp.com)

### Simple Installation
- `git clone https://github.com/Danilo-Araujo-Silva/open-weather.git`
- `cd open-weather`
- `yarn install`
- `npm start`

### Detailed Installation

#### Install NodeJS (Optional)
If you don't have NodeJS and NPM installed yet you can follow
[these instructions](https://nodejs.org/en/download/package-manager/) in the
official documentation.

#### Install Latest NPM (Optional)
If you already have npm installed and you would like update it to the latest
version you can do it as follows:

- npm install npm@latest -g

#### Install Latest NodeJS (Optional)
If you already have npm installed and you would like to update the NodeJS to the
latest version you can do it as follows:

- sudo npm cache clean -f
- sudo npm install -g n
- sudo n stable

Important! The option `-f` is used to force clean the npm cache. Take care about it.
Anyway, I usually do this when I would like to install the latest NodeJS.

#### Install Yarn
If you don't have yarn installed yet you can follow [these instructions](https://yarnpkg.com/lang/en/docs/install/) in the official documentation.

#### Install NPM Dependencies
These instructions is used to install the local npm dependencies. The dependencies
will be placed in the `node_modules` folder (already ignored by `.gititnore`).

- yarn install

#### Usage

- npm start

## Author
[Danilo Araújo Silva (silva.danilo.araujo@gmail.com)](https://goo.gl/XW7hi3).