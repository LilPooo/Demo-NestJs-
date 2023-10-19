import{IsEmail,IsNotEmpty} from 'class-validator'
export class CreateUserDto {
  // shape of data that can be used to create a new user
  @IsEmail()
  @IsNotEmpty()
  username: string;
  password: string;
}
