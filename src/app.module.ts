import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { DmsModule } from './dms/dms.module';

@Module({
  imports: [UsersModule, ChannelsModule, WorkspacesModule, DmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
