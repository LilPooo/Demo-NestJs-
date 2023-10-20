import { IsEmail } from "class-validator";

export class CheckUserLoginDto {
    @IsEmail()
    username: string;
    password: string;
  }
  