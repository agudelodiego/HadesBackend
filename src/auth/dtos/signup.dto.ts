import { IsEmail, IsNotEmpty } from 'class-validator'


// This is the information that must be into the body for sign up users correctly
export class signupDto {

  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}