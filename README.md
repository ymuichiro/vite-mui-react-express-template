# template

# structure

- Backend
  - Express
  - Mysql
  - open-api
- Frontend
  - React
  - mui-material
  - Recoil
  - open-api

## open-api usage

### frontend

```ts
import { UserApi, Configuration, GetUser200Response } from "open-api";
const conf = new Configuration({ basePath: import.meta.env.BASE_URL });
const client = new UserApi(conf);
```

# todo

- docker-compose 修正
- テストツール導入
- react-router-dom による流れるような画面遷移実装
- react-router-dom による綺麗な認証管理
- react-hooks-form のテンプレ導入
- mysql 起動高速化
