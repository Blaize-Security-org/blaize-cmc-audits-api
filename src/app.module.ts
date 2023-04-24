import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CmcModule } from './cmc/cmc.module';

@Module({
  imports: [CmcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
