declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        readonly NODE_ENV?: 'development' | 'production';
        readonly MYSQL_DATABASE?: string;
        readonly MYSQL_USER?: string;
        readonly MYSQL_PASSWORD?: string;
        readonly MYSQL_HOST?: string;
        readonly VITE_API_PORT?: string;
        readonly VITE_API_URL?: string;
      }
    }
  }
}

declare module 'express-async-errors';
