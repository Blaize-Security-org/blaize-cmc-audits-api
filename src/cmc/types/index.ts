export interface IAuditResponse {
  coinId?: number; // CMC ID
  coinName: string;
  symbol: string; // if cmc id can be provided, symbol is not required
  auditor: string; //e.g. Certik, Hacken
  auditStatus: number; // 0=not audited,1=auditing, 2=audited
  score: number;
  auditTime: string; //2020-10-13T00:12:12Z
  contractAddress: string; //0x.../ if cmc id can be provided, contract address and platform is not required.
  contractPlatform: string; //'BSC'
  reportUrl: string; //e.g. ​​https://www.certik.org/projects/1inch
  overview?: Array<IAuditOverview>;
  communityAlerts?: Array<IAuditCommunityAlerts>;
  findings?: Array<IAuditFindings>;
}

interface IAuditOverview {
  name: string;
  score: number;
  msg: string;
}

interface IAuditCommunityAlerts {
  description: string;
  detail: string;
  status: string;
}

interface IAuditFindings {
  id: string; // MCF-01
  title: string;
  type: string;
  severity: string;
  resolved: boolean;
}
