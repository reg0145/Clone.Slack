import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/workspaces/:workspace/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}
  @Post()
  CreateChannel(@Body('name') name) {}
  @Get(':name')
  getChannel(){}
  @Get(':channel/chats')
  getChatsFromChannel(){}
  @Get(':channel/unreads')
  getUnreadsFromChannel() {}
  @Post(':channel/chats')
  saveChannel(@Body('content') content) {}
  @Get(':channel/members')
  getMembersFromChannel() {}
  @Post(':channel/members')
  inviteMemberToChannel(@Body('email') email) {}
}
