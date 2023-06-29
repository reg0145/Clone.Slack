import { Body, Controller, Get, Post, Res } from "@nestjs/common";

@Controller('users')
export class UsersController {
  @Get()
  getUesrs(){}
  @Post()
  createUser(@Body('email') email, @Body('nickname') nickname, @Body('password') password) {}
  @Post('login')
  login(@Body('email') email, @Body('password') password)
  @Post('logout')
  logout(@Res() res){
    res.logout();
    res.clearCookie('connect.sid',{httpOnly:true});
    res.send('ok');
  }
  
  
}
