<h1 align="center">Welcome to DevRadar - Backend</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D12.14-blue.svg" />
  <img src="https://img.shields.io/badge/yarn-%3E%3D1.21-blue.svg" />
  <a href="https://github.com/rafaelfborges/devradar-backend#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/rafaelfborges/devradar-backend/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/rafaelfborges/devradar-backend/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/rafaelfborges/devradar-backend" />
  </a>
</p>

> Backend application developed during the Week Omnistack 10 of [Rocketseat](https://rocketseat.com.br).
> Two other applications are also part of this project:
>
> - [DevRadar - Web (React)](https://github.com/rafaelfborges/devradar-web)
> - [DevRadar - Mobile (React Native)](https://github.com/rafaelfborges/devradar-mobile)

### ✨ [Demo](http://devradar-osweek-backend.herokuapp.com)

![DevRadar - Backend](/demo/preview-devradar-api.png)

## Prerequisites

- node >=12.14
- yarn >=1.21

## Dependencies

- axios@^0.19.1
- cors@^2.8.5"
- dotenv@^8.2.0
- express@^4.17.1
- mongoose@^5.8.7
- socket.io@^2.3.0
- swagger-ui-express@^4.1.3

Development dependencies

- nodemon@^2.0.2

## Install

```sh
$ yarn install
```

## Usage

```sh
$ cp .env.example .env
$ yarn start
```

Or running dev

```sh
$ yarn dev
```

## Database configuration

For the project you need a moogodb connection, you follow these steps below:

1. Create an account on MongoDB Cloud
2. Create a mongo db cluster
3. Create a database with name **week10**
4. Create a user to database connection **week10** with your password
5. Get URL connection on cluster configuration
6. Replace MONGO_URL_CONNECTION key on .env
   eg: mongodb+srv://<username>:<password>@node-store-sqexu.mongodb.net/week10?retryWrites=true&w=majority

## Author

👤 **Rafael Borges**

- Website: https://linkedin.com/in/rafaelfborges/
- Github: [@rafaelfborges](https://github.com/rafaelfborges)
- LinkedIn: [@rafaelfborges](https://linkedin.com/in/rafaelfborges)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/rafaelfborges/devradar-backend/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Rafael Borges](https://github.com/rafaelfborges).<br />
This project is [MIT](https://github.com/rafaelfborges/devradar-backend/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
