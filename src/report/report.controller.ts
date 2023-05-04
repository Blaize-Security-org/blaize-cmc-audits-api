import { Controller, Get, Query } from '@nestjs/common';
import { ReportService } from './report.service';
import { IReportResponse, QueryDTO } from './types';

@Controller('reports')
export class ReportController {
  constructor(private readonly report: ReportService) {}
  @Get()
  getReport(@Query() query: QueryDTO): IReportResponse {
    const { page, perPage } = query;

    return this.report.getByPage(page, perPage);
  }
}
