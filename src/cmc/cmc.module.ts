import { Module } from '@nestjs/common';
import { CmcService } from './cmc.service';
import { CmcController } from './cmc.controller';

@Module({
  providers: [CmcService],
  controllers: [CmcController],
})
export class CmcModule {}
