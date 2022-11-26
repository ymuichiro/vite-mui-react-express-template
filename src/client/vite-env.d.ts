/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV?: 'development' | 'production';
  readonly MYSQL_DATABASE?: string;
  readonly MYSQL_USER?: string;
  readonly MYSQL_PASSWORD?: string;
  readonly MYSQL_HOST?: string;
  readonly TZ?: string;
  readonly VITE_API_PORT?: number;
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
