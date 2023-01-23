# Inventory-Server

## Setup

Note: The project directory structure consists of two primary folders. The root folder containing the server program, and the angular-frontend folder; containing the angular codebase. These are technically two projects, each with their own dependencies, build folders, and configuration files; therefore they must each be compiled separately.

Server host: **localhost:37561**

Angular route: **localhost:37561/app/**

<hr>

### Frontend
To install the dependencies for the angular application, run the following command from the angular-frontend folder:
```shell
npm install
```

To build the angular application, run the following command from the angular-frontend folder:
```shell
ng build
```

### Server
To install the dependencies for the server application, run the following command from the root of the project directory structure:
```shell
npm install
```

To build the server application, run the following command from the root of the project directory structure:
```shell
npm run build
```

To start the server application, run the following command from the root of the project directory structure:
```shell
npm run start
```