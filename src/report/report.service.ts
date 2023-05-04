import { BadRequestException, Injectable } from '@nestjs/common';
import {
  DEFAULT_PER_PAGE,
  IReportJson,
  IReportResponse,
  IReportStruct,
} from './types';
import { readFileSync } from 'fs';
import * as path from 'path';
import { assertParse } from 'typia';
import { hashCode } from '../utils';

@Injectable()
export class ReportService {
  private reports: Array<IReportJson>;
  private total;

  constructor() {
    const filePath = path.join('storage', 'reports.json');
    const rawData = readFileSync(filePath, 'utf-8');
    this.reports = assertParse<Array<IReportJson>>(rawData);
    this.total = this.reports.length;
  }

  private getReports(): Array<IReportJson> {
    // structuredClone(this.reports);
    return JSON.parse(JSON.stringify(this.reports));
  }

  getByPage(page = 1, perPage = DEFAULT_PER_PAGE): IReportResponse {
    const totalPages = Math.ceil(this.total / perPage);
    if (page > totalPages || page < 1)
      throw new BadRequestException("page doesn't exist");

    const reports = this.getReports();

    const end = perPage * page;
    const start = end - perPage;

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
      per_page: perPage,
      total_pages: totalPages,
      total: this.total,
      data: sliced,
    };
  }
}
