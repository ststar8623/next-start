# No-line
### Server Side Rendering App for online ordering

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

### Install dependencies
### Start

## Requirements

- Node 8.4.0
- Redis 4.0.1
- Postgresql 9.6.3

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

## App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable.

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See https://www.npmjs.com/package/config
And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

Create database with `createdb <database-name>` 

Setup environment variables in `config/ENV.json`

## Running the App

To run server in development: `yarn run dev`

To run server in production: `yarn start`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`

Access the app from `localhost:3000`