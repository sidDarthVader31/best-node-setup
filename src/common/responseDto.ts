import { IsString } from "class-validator";


type Nullable<T> = T | null;
class Response<T> {
  data: Nullable<T>;
  @IsString()
  message: string;

  constructor(message: string, data: T | null = null) {
    this.message = message;
    this.data = data;
  }
}

export default Response;
