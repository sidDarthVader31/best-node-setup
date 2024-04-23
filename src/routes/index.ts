import { Application } from "express";
import { useExpressServer } from "routing-controllers";
import { UserController } from '../api/userController/UserController';
import constants from '../common/constants';

function initRoute(app: Application){
  useExpressServer(app, {
    controllers: [UserController],
    routePrefix: `/api/${constants.ROUTE_VERSION}`,
    defaultErrorHandler: false
  })
}
export default initRoute;

