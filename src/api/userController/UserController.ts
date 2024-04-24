import { Body, JsonController, Post } from 'routing-controllers';
import { SignUpDTO } from './user.dto';
import Response from '../../common/responseDto';
import { inject } from 'inversify';

@JsonController('/user')
export class UserController {
 constructor(@inject(SignUpDTO) private signupDTO: SignUpDTO) {}

  @Post('/signup')
  async addUser(@Body() body: SignUpDTO): Promise<Response<string>>{
    return new Response('created successfully', 'hello');
  }
}


