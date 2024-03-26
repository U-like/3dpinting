import { Controller, Get, Param, ParseArrayPipe, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { stringify } from 'querystring';
import { StringDecoder } from 'string_decoder';
import { pipeline } from 'stream';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
 @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("get/:user")
  getTest(@Param('user')user:string){
    return user ;
  }
  @Get("Guest")
  notest(){
    return"Guest requests!"
  }
}