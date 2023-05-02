import { Controller, Get, Query } from '@nestjs/common';
import { ReportService } from './report.service';
import { IReportResponse } from './types';

@Controller('reports')
export class ReportController {
  constructor(private readonly report: ReportService) {}
  @Get()
  getReport(@Query('page') page: string): IReportResponse {
    let pageValue: number = parseInt(page, 10);
    if (isNaN(pageValue)) {
      pageValue = 1;
    }
    return this.report.getByPage(pageValue);
  }
}
