import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces(){}
  @Post()
  createWorkspace(@Body('workspace') workspace, @Body('url') url){}
  @Get(':workspace/members')
  getAllMemberFromWorkspace() {}
  @Post(':workspace/members')
  inviteMemberToWorkspace(@Body('email') email) {}
  @Get(':workspace/users/:id')
  getMemberInfoInWorkspace(){}
  @Delete(':workspace/members/:id')
  kickMemberInWorkspace(@Param('id') id) {}
}
