<p align="center">
  <img src="https://user-images.githubusercontent.com/47295014/202592575-459ca943-f9e2-4197-a949-78f0a9976b2f.png" />
</p>

## Introduction

This repository provides boilerplate for monolithic frontend and backend development. Leverage `npm workspace` to facilitate each package management. Also, when executing various commands, containers are used to reduce environment dependencies. In addition, open api is used to streamline communication between frontend and backend.

## Structure

- Frontend
  - Vite, React, Mui-material, Open API
- Backend
  - Express, mysql, Open API

## Getting Start

Copy this repository locally. You can start developing immediately.
Press `use this template` to start development.

Each command is abstracted in `makefile`. Follow the steps below to install dependent packages, start the development server, and deploy. Also, if you want to customize the command, please refer to `makefile` and change it.

### Install dependent packages

Install dependent packages based on package.json in each directory.

```sh
make install
```

### Start development server

Start both the frontend and backend development servers. Also, mysql for the backend will start automatically. Create `.env.local` first for mysql credentials.

```sh
make start
```

Stop with `ctrl + c` to exit. If you want to delete the container once because it just stops the running container, please execute as follows.

```sh
make down
```

### Build and deploy

To build and deploy to your server do the following

```
make deploy
```

### Alternative) Build only the container

I think that there are times when you want to build only containers and use them on each PaaS platform. This repository comes pre-built with `GitHub Actions`. Automatically create a container when you change the source code in the `main` branch.

### Clean the environment once

If you want to clean installed node_modules, dist, docker, please do the following

```sh
make clean
```

### others

If you want to incorporate Blockchain into your development, please refer to the following information. You can easily develop blockchain applications via Javascript sdk and API without learning how to develop difficult contracts.

**Site**

https://symbol-community.com/ja-JP

**Learning**

https://github.com/xembook/quick_learning_symbol

**Contact**

https://discord.gg/A8MRq5Vuvt
