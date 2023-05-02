import { Injectable } from '@nestjs/common';
import { IReportResponse, IReportStruct } from './types';
import { readFileSync } from 'fs';
import * as path from 'path';
import { assertParse } from 'typia';

@Injectable()
export class ReportService {
  private reports: Array<IReportResponse>;
  private limit = 100;
  constructor() {
    const filePath = path.join('storage', 'reports.json');
    const rawData = readFileSync(filePath, 'utf-8');
    this.reports = assertParse<Array<IReportResponse>>(rawData);
  }
  getReport(skip: number): IReportStruct {
    const reports = JSON.parse(JSON.stringify(this.reports));
    const total = this.reports.length;
    const end = skip + this.limit < total ? skip + this.limit : total;
    const sliced = reports.slice(skip, end).map((v) => {
      const reportDateTimestamp = new Date(v.reportDate).valueOf();
      const publicationDateTimestamp = new Date(v.publicationDate).valueOf();
      //TBD: date/time format
      v.reportDate = !isNaN(reportDateTimestamp)
        ? reportDateTimestamp.toString()
        : '';
      v.publicationDate = !isNaN(publicationDateTimestamp)
        ? publicationDateTimestamp.toString()
        : '';
      const langString = v.lang as string;
      v.lang = langString.split(',');
      return v;
    });
    return {
      data: sliced,
      skip,
      total,
    };
  }
}
