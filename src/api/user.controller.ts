import { Body, Controller, Get, Post, Req, Res } from 'routing-controllers';
import Container , { Inject, Service} from 'typedi';

@Controller('/user')
export class UserController {
  constructor(){

  }
  @Post('/signup')
  async addUser(@Req() request: Request, @Body() body: any, @Res() response: any): Promise<any>{
    return {
      status: 200, 
      data: {},
      message: 'created successfully'
  };
  }
}
