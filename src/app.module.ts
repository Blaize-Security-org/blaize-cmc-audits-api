import { Module } from '@nestjs/common';
import { AggregationModule } from './aggregation/aggregation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CmcModule } from './cmc/cmc.module';

@Module({
  imports: [CmcModule, AggregationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
