import { Body, Controller, Get, Post, Res, UseInterceptors } from '@nestjs/common';
import { User } from '../common/user.decorator';
import { UndefinedToNullInterceptor } from '../interceptor/undefinedToNullInterceptor';

@UseInterceptors(UndefinedToNullInterceptor)
@Controller('users')
export class UsersController {
  @Get()
  getUser(@User() user){}
  @Post()
  createUser(@Body('email') email, @Body('nickname') nickname, @Body('password') password) {}
  @Post('login')
  login(@Body('email') email, @Body('password') password) {}
  @Post('logout')
  logout(@Res() res){
    res.logout();
    res.clearCookie('connect.sid',{ httpOnly:true });
    res.send('ok');
  }
}
