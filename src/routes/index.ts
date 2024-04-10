import { Application } from "express";
import { useExpressServer } from "routing-controllers";
import { UserController } from "../api/user.controller";
import constants from '../common/constants';

function initRoute(app: Application){
  useExpressServer(app, {
    controllers: [UserController],
    routePrefix: `/api/${constants.ROUTE_VERSION}`
  })
}
export default initRoute;

