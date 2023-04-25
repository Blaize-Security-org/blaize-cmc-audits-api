import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { IAggregationStruct } from './types';
import { AggregationService } from './aggregation.service';

@Controller('aggregation')
export class AggregationController {
  constructor(private readonly AggregationService: AggregationService) {}
  @Get()
  getAggregation(@Query('skip') skip: string): IAggregationStruct {
    const skipNum = +skip;
    if (isNaN(skipNum) || skipNum < 0)
      throw new BadRequestException("invalid 'skip' parameter");
    return this.AggregationService.getAggregation(skipNum || 0);
  }
}
