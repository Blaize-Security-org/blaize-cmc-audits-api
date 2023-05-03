import { BadRequestException, Injectable } from '@nestjs/common';
import { IReportJson, IReportResponse, IReportStruct } from './types';
import { readFileSync } from 'fs';
import * as path from 'path';
import { assertParse } from 'typia';
import { hashCode } from '../utils';

@Injectable()
export class ReportService {
  private reports: Array<IReportJson>;
  private perPage = 10;

  private total;
  private totalPages;

  constructor() {
    const filePath = path.join('storage', 'reports.json');
    const rawData = readFileSync(filePath, 'utf-8');
    this.reports = assertParse<Array<IReportJson>>(rawData);
    this.total = this.reports.length;
    this.totalPages = Math.ceil(this.total / this.perPage);
  }

  private getReports(): Array<IReportJson> {
    /*structuredClone(this.reports);*/
    return JSON.parse(JSON.stringify(this.reports));
  }

  getByPage(page: number): IReportResponse {
    if (page > this.totalPages || page < 1)
      throw new BadRequestException("page doesn't exist");

    const reports = this.getReports();

    const end = this.perPage * page;
    const start = end - this.perPage;

    const sliced = reports.slice(start, end).map((v): IReportStruct => {
      const reportDateTimestamp = new Date(v.reportDate).valueOf();
      const publicationDateTimestamp = new Date(v.publicationDate).valueOf();
      //TBD: date/time format
      const reportDate = !isNaN(reportDateTimestamp)
        ? reportDateTimestamp.toString()
        : '';
      const publicationDate = !isNaN(publicationDateTimestamp)
        ? publicationDateTimestamp.toString()
        : '';
      const lang = v.lang.split(',');
      const contractPlatform = v.contractPlatform.split(',');
      const id = hashCode(v.reportUrl);
      return {
        id,
        ...v,
        reportDate,
        publicationDate,
        lang,
        contractPlatform,
      };
    });
    return {
      page,
      per_page: this.perPage,
      total_pages: this.totalPages,
      total: this.total,
      data: sliced,
    };
  }
}
