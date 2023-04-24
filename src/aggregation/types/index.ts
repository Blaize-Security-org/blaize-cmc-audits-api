export interface IAggregationResponse {
  projectName: string;
  contractPlatform: string;
  lang: string;
  auditTime: string;
  reportUrl: string;
}

export interface IAggregationStruct {
  data: IAggregationResponse[];
  skip: number;
  total: number;
}
