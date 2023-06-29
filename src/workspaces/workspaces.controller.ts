import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('workspaces')
export class WorkspacesController {
  @Get()
  getAllWorkspace(){}
  @Post()
  addWorkspace(@Body('workspace') workspace, @Body('url') url){}
  @Get(':workspace/members')
  getAllMemberInWorkspace() {}
  @Post(':workspace/members')
  inviteMemgerFromWorkspace(@Body('email') email) {}
  @Get(':workspace/users/:id')
  getMemberInWorkspace(){}
  @Delete(':workspace/members/:id')
  deleteMemberInWorkspace(@Param('id') id) {}
}
