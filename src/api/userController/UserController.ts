import { Body, JsonController, Post } from 'routing-controllers';
import { SignUpDTO } from './user.dto';
import Response from '../../common/responseDto';
import { Service } from 'typedi';


@Service()
@JsonController('/user')
export class UserController {
    constructor() {
    }

  @Post('/signup')
  async addUser(@Body() body: SignUpDTO): Promise<Response<string>>{
    return new Response('created successfully', 'hello');
  }
}


