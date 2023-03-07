import { IsEmail, IsNotEmpty, Length } from 'class-validator'


// This is the information that must be into the body for sign up users correctly
export class signupDto {

  @IsNotEmpty()
  @Length(4,20)
  username: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @Length(4,20)
  password: string
}