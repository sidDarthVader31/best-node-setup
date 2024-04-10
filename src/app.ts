import 'reflect-metadata';
import express from 'express';
import { useContainer } from 'class-validator';
import initRoute from './routes';
import Container from 'typedi';
const app = express();
useContainer(Container);
initRoute(app);

app.get('/', (req, res)=>{
  res.send({
    message: 'hel;lo'
  })
})
export default app;
