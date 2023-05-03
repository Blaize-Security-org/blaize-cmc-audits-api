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
