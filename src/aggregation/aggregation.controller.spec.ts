import { Test, TestingModule } from '@nestjs/testing';
import { AggregationController } from './aggregation.controller';

describe('AggregationController', () => {
  let controller: AggregationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AggregationController],
    }).compile();

    controller = module.get<AggregationController>(AggregationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
