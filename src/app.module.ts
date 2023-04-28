import { Module } from '@nestjs/common';
import { ReportModule } from './report/report.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CmcModule } from './cmc/cmc.module';

@Module({
  imports: [CmcModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
