import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export const DEFAULT_PER_PAGE = 10;
export const DEFAULT_PAGE = 1;

export interface IReportJson {
  projectName: string;
  reportUrl: string;
  lang: string;
  contractPlatform: string;
  reportDate: string;
  publicationDate: string;
  caseUrl: string;
}

export interface IReportStruct {
  id: string;
  projectName: string;
  reportUrl: string;
  lang: string[];
  contractPlatform: string[];
  reportDate: string;
  publicationDate: string;
  caseUrl: string;
}

export interface IReportResponse {
  data: IReportStruct[];
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
}

export class QueryDTO {
  @Transform(({ value }) => {
    const valNum = parseInt(value, 10);
    return isNaN(valNum) ? DEFAULT_PAGE : valNum;
  })
  @IsOptional()
  page: number;

  @Transform(({ value }) => {
    const valNum = parseInt(value, 10);
    return isNaN(valNum) ? DEFAULT_PER_PAGE : valNum;
  })
  @IsOptional()
  perPage: number;
}
