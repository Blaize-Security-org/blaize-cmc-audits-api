export interface IReportResponse {
  projectName: string;
  contractPlatform: string;
  lang: string;
  reportDate: string;
  publicationDate: string;
  caseUrl: string;
  reportUrl: string;
}

export interface IReportStruct {
  data: IReportResponse[];
  skip: number;
  total: number;
}
