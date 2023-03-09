import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from "../model/user.schema";
import { UserService } from "../model/user.service";
import { JwtService } from '@nestjs/jwt';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async SignUp(@Res() response, @Body() user : User){
    const newUser = await this.userService.signup(user);
    return response.status(HttpStatus.CREATED).json({
        newUser
    })
  }

  @Post('/signin')
  async SignIn(@Res() response, @Body() user : User){
    const token = await this.userService.signin(user);
    return response.status(HttpStatus.OK).json(token);
  }

}