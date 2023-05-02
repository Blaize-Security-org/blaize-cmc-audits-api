import { Controller, Get, Query } from '@nestjs/common';
import { IReportStruct } from './types';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly ReportService: ReportService) {}
  @Get()
  getReport(@Query('skip') skip: string): IReportStruct {
    let skipValue: number = parseInt(skip, 10);
    if (isNaN(skipValue)) {
      skipValue = 0;
    }
    return this.ReportService.getReport(skipValue);
  }
}
