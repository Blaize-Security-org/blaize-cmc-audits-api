export interface IAggregationResponse {
  projectName: string;
  contractPlatform: string;
  lang: string;
  reportDate: string;
  publicationDate: string;
  caseUrl: string;
  reportUrl: string;
}

export interface IAggregationStruct {
  data: IAggregationResponse[];
  skip: number;
  total: number;
}
