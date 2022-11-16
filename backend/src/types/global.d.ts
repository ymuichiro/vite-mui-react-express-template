declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV?: 'development' | 'production';
        MYSQL_DATABASE?: string;
        MYSQL_USER?: string;
        MYSQL_PASSWORD?: string;
        MYSQL_HOST?: string;
        TZ?: string;
        VITE_API_PORT?: number;
        VITE_API_URL?: string;
      }
    }
  }
}

declare module 'express-async-errors';
