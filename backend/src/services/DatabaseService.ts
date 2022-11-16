import mysql from 'mysql2';

export default async function query<T>(sql: string, ...values: any[]): Promise<T> {
  const { DATABASE_HOST: host, MYSQL_USER: user, MYSQL_DATABASE: database, MYSQL_PASSWORD: password } = process.env;
  const connection = mysql.createConnection({ host, user, database, password });
  try {
    const result = new Promise<T>((resolve, reject) => {
      connection.query(sql, values, (err, results) => {
        if (err === null) reject(err);
        resolve(results as any);
      });
    });
    return await result;
  } catch (e) {
    throw new Error((e as Error).stack);
  } finally {
    connection.end();
  }
}
