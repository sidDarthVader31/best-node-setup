import dotenv from 'dotenv';
import path from 'path';

export interface IConfig {
  PORT: string, 
  MYSQL_HOST: string, 
  MYSQL_PASSWORD: string, 
  MYSQL_PORT: string, 
  MYSQL_DB_NAME: string
}

const envInit = dotenv.config({
  path: path.resolve(__dirname, '..','..', 'env', `.env.${process.env.environment}`)
});

if(envInit.error){
  throw envInit.error;
}
export const config: IConfig = {
  PORT: process.env.PORT as string,
  MYSQL_HOST: process.env.MYSQL_HOST as string,
  MYSQL_PORT: process.env.MYSQL_PORT as string, 
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD as string,
  MYSQL_DB_NAME: process.env.MYSQL_DB_NAME as string
};
