import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/workspaces/:workspace/dms')
export class DmsController {
  @Get(':id/chats')
  getChats(@Param('perPage') perPage, @Param('number') page){}
  @Get(':id/unreads')
  getUnReads(@Param('after') after){}
  @Post(':id/chats')
  saveChats(@Body('content') content) {}
  @Post(':id/images')
  saveImage(@Body('image') image){}
}
