# template

A template for developing web applications using Vite, React, and Express.

# structure

- Frontend
  - Vite
  - React
  - Mui-material
  - emotion
  - Recoil
  - React-router-dom
- Backend
  - Express
  - mysql
- Other
  - Open API
  - Docker
  - eslint
  - prettier

## Initial setting

- A makefile is used to organize commands. If you haven't installed it, please install it first.

Install the dependent libraries by running

```
make install
```

## Start development server

Just run

```
make start
```

Stop with `ctrl + c` to exit. If you want to delete the container once because it just stops the running container, please execute as follows

```
make down
```

## Deploy

To build and deploy to your server do the following

```
make deploy
```

# others

Here are some other commonly used commands

## I want to clean the environment once

If you want to clean installed node_modules, dist, docker, please do the following

```
make clean
```

## I want to containerize once

The `make deploy` case is suitable for use on VMs, etc., but if you want to use it on Google Cloud run, etc., follow the steps below.

1. Push a set of developed sources to your own GitHub repository
2. After pushing, check the GitHub Actions tab in the repository and you will see that the build has started automatically
3. Wait for it to finish
4. When the completion mark appears, the container is complete.

# others

If you want to incorporate Blockchain into your development, please refer to the following information
You can easily develop blockchain applications via Javascript sdk and API without learning how to develop difficult contracts.

**Site**
https://symbol-community.com/ja-JP

**Learning**
https://github.com/xembook/quick_learning_symbol

**Contact**
https://discord.gg/A8MRq5Vuvt
