<p align="center">
  <img src="https://user-images.githubusercontent.com/47295014/202592575-459ca943-f9e2-4197-a949-78f0a9976b2f.png" />
</p>

## Introduction

This repository provides templates for monolithic frontend and backend development. Leverage "npm workspaces" to facilitate management of each package. It also uses open APIs to streamline communication between frontend and backend.

## Structure

- Frontend
  - Vite, React, Mui-material, i18n, Open API
- Backend
  - Express, mysql, Open API

## Getting Start

Copy this repository locally. You can start developing immediately.
Press `use this template` to start development.

### Install dependent packages

Install dependent packages based on package.json in each directory.

```sh
npm install
```

### Start development server

Start both the frontend and backend development servers. If you have not built Mysql locally, please use the provided docker-compose.

**When you want to start MYSQL**
```sh
make up
```

**When starting the development server**
```sh
npm start
```

### Build and deploy

Use the following command to build

```
npm run build
```

### Alternative) Build only the container

I think that there are times when you want to build only containers and use them on each PaaS platform. This repository comes pre-built with `GitHub Actions`. Automatically create a container when you change the source code in the `main` branch.

### others

If you want to incorporate Blockchain into your development, please refer to the following information. You can easily develop blockchain applications via Javascript sdk and API without learning how to develop difficult contracts.

**Site**

https://symbol-community.com/ja-JP

**Learning**

https://github.com/xembook/quick_learning_symbol

**Contact**

https://discord.gg/A8MRq5Vuvt
