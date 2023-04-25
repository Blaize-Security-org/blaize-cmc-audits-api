import { Test, TestingModule } from '@nestjs/testing';
import { CmcController } from './cmc.controller';

describe('CmcController', () => {
  let controller: CmcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CmcController],
    }).compile();

    controller = module.get<CmcController>(CmcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
