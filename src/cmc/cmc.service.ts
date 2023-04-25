import { Injectable } from '@nestjs/common';
import { IAuditResponse } from './types';
import { readFileSync } from 'fs';
import * as path from 'path';
import { assertParse } from 'typia';

@Injectable()
export class CmcService {
  private audits: Array<IAuditResponse>;
  constructor() {
    const filePath = path.join('storage', 'cmc_audits.json');
    const rawData = readFileSync(filePath, 'utf-8');
    this.audits = assertParse<Array<IAuditResponse>>(rawData);
  }
  getAudits() {
    return this.audits;
  }
}
