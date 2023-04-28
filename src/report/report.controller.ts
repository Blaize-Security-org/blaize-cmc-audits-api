import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { IReportStruct } from './types';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly ReportService: ReportService) {}
  @Get()
  getReport(@Query('skip') skip: string): IReportStruct {
    const skipNum = +skip;
    if (isNaN(skipNum) || skipNum < 0)
      throw new BadRequestException("invalid 'skip' parameter");
    return this.ReportService.getReport(skipNum || 0);
  }
}
