import { Module } from '@nestjs/common';
import { AggregationService } from './aggregation.service';
import { AggregationController } from './aggregation.controller';

@Module({
  providers: [AggregationService],
  controllers: [AggregationController],
})
export class AggregationModule {}
