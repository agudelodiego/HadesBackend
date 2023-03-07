import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';
import { loginDto } from '../dtos/login.dto';
import { signupDto } from '../dtos/signup.dto';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService
  ){}


  async signupLocal(newUser:signupDto){
    
    // Verify username
    let usernameExist = await this.userService.searchUsername(newUser.username)
    if(usernameExist) throw new HttpException(`The username ${newUser.username} alredy in use by other user`,409)

    // Verify email
    let emailExist = await this.userService.searchEmail(newUser.email)
    if(emailExist) throw new HttpException(`The email ${newUser.email} alredy in user by other user`,409)

    // Encryp the password
    let encryptedPassword = await this.userService.encrypPassword(newUser.password)
    newUser.password = encryptedPassword
    
    // Create user
    let user = await this.userService.createUser({
      ...newUser, 
      authStrategy: 'local', 
      role: 'user'
    })

    // Generate jwt
    let jwt = await this.userService.generateJWT({
      payload:{
        username: user.username,
        role: user.role
      },
      issuer: 'eweed',
      audience: user.username,
      expiration:'30d'
    })

    return {
      message:'User created correctly',
      user:{
        email: user.email,
        username: user.username,
        createdAt: user.createdAt
      },
      jwt
    }
  }


  async loginLocal(user:loginDto){

    // Verify the email
    let userExist = await this.userService.searchEmail(user.email)
    if(!userExist) throw new HttpException(`The email ${user.email} not found`,404)

    // Validate the password
    let correctPassword = await this.userService.verifyPassword(userExist.password,user.password)
    if(!correctPassword) throw new HttpException('Email or password are incorrect',409)

    // Generate jwt 
    let jwt = await this.userService.generateJWT({
      payload:{
        username: userExist.username,
        role: userExist.role
      },
      issuer: 'eweed',
      audience: userExist.username,
      expiration:'30d'
    })
    
    return {
      message:'User sigin correctly',
      user:{
        email: userExist.email,
        username: userExist.username
      },
      jwt
    }
  }

}
