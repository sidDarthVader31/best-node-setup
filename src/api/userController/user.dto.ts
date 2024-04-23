import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class SignUpDTO {

  // constructor(name: string, email: string, phoneNumber: string, password: string){
  //   this.name = name;
  //   this.email = email;
  //   this.phoneNumber = phoneNumber;
  //   this.password = password;
  // }
  @IsString()
  @MaxLength(30)
  @MinLength(5)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(50)
  @MinLength(10)
  @IsEmail()
  @IsNotEmpty()
  email: string;


  @IsString()
  @MaxLength(10)
  @MinLength(10)
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;


  @IsString()
  @MaxLength(30)
  @MinLength(8)
  @IsNotEmpty()
  password: string;


}
