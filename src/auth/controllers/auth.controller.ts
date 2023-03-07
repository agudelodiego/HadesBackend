import { Body, Controller, Get, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { loginDto } from '../dtos/login.dto';
import { signupDto } from '../dtos/signup.dto';
import { AuthService } from '../services/auth.service';

@Controller('api/v1/auth')
export class AuthController {

  constructor(
    private authService:AuthService
  ){}


  @Post('/signup/local')
  @UsePipes(new ValidationPipe())
  async signupLocal(
    @Body() newUser: signupDto,
    @Res({passthrough:true}) res: Response
  ){
    let result = await this.authService.signupLocal(newUser)
    res.cookie('jwt',result.jwt,{
      maxAge: 2592000000, //30 days in miliseconds
      secure: true,
      httpOnly: true,
      sameSite: 'none'
    })
    return result
  }


  @Post('/login/local')
  @UsePipes(new ValidationPipe)
  async loginLocal(
    @Body() user: loginDto,
    @Res({passthrough:true}) res: Response
  ){
    let result = await this.authService.loginLocal(user)
    res.cookie('jwt',result.jwt,{
      maxAge: 2592000000, //30 days in miliseconds
      secure: true,
      httpOnly: true,
      sameSite: 'none'
    })
    res.status(200)
    return result
  }



  @Get('/logout')
  async logout(
    @Res({passthrough:true}) res: Response
  ){
    res.clearCookie('jwt')
    return {
      message:'Logout success'
    }
  }

}
