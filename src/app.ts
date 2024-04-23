import 'reflect-metadata';
import express from 'express';
import { useContainer } from 'class-validator';
import initRoute from './routes';
import Container from 'typedi';
const app = express();
useContainer(Container);
initRoute(app);

app.get('/', (_, res)=>{
  res.send({
    message: 'hello'
  })
})
export default app;
