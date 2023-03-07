import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/mysql/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import * as jose from 'jose';
import { jwtconfig } from '../interfaces/jwt.interface';
import { newUser } from '../interfaces/newUser.interface';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}


  async generateJWT(config:jwtconfig){

    const secret = new TextEncoder().encode(process.env.SECRET)
    const alg = 'HS256'

    const jwt = await new jose.SignJWT(config.payload)
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer(config.issuer)
      .setAudience(config.audience)
      .setExpirationTime(config.expiration)
      .sign(secret)

    return jwt

  }


  async searchUsername(username: string){
    return this.userRepository.findOneBy({ username })
  }


  async searchEmail(email: string){
    return this.userRepository.findOneBy({ email })
  }


  async encrypPassword(password: string){
    return argon2.hash(password)
  }


  async verifyPassword(hash: string, password: string){
    return argon2.verify(hash,password)
  }

  async createUser(newUser: newUser){

    const user = this.userRepository.create(newUser)
    await this.userRepository.save(user)
    return user
 
  }



}
