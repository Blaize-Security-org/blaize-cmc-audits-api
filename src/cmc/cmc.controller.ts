import { Controller, Get } from '@nestjs/common';
import { CmcService } from './cmc.service';
import { IAuditResponse } from './types';

@Controller('cmc')
export class CmcController {
  constructor(private readonly CMCService: CmcService) {}
  @Get()
  getAudits(): Array<IAuditResponse> {
    return this.CMCService.getAudits();
  }
}
