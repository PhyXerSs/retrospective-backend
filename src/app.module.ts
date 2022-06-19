import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhiteboardModule } from './whiteboard/whiteboard.module';

@Module({
  imports: [ WhiteboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
