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
  private reports: Array<IReportStruct>;

  constructor() {
    const filePath = path.join('storage', 'reports.json');
    const rawData = readFileSync(filePath, 'utf-8');
    const reportJson = assertParse<Array<IReportJson>>(rawData);
    this.reports = reportJson.map((v): IReportStruct => {
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
  }

  //Note: 'deep' clonning func
  private getReports(): Array<IReportStruct> {
    // structuredClone(this.reports);
    return JSON.parse(JSON.stringify(this.reports));
  }

  getByPage(
    page = 1,
    perPage = DEFAULT_PER_PAGE,
    projectFilter?: string,
  ): IReportResponse {
    let reports = this.getReports();
    if (projectFilter) {
      reports = reports.filter((v) =>
        v.projectName.toLowerCase().includes(projectFilter.toLowerCase()),
      );
    }

    const totalPages = Math.ceil(reports.length / perPage) || 1;
    if (page > totalPages || page < 1)
      throw new BadRequestException("page doesn't exist");

    const end = perPage * page;
    const start = end - perPage;

    const sliced = reports.slice(start, end);

    return {
      page,
      per_page: perPage,
      total_pages: totalPages,
      total: reports.length,
      data: sliced,
    };
  }
}
