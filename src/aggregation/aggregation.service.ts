import { Injectable } from '@nestjs/common';
import { IAggregationResponse, IAggregationStruct } from './types';
import { readFileSync } from 'fs';
import * as path from 'path';
import { assertParse } from 'typia';

@Injectable()
export class AggregationService {
  private aggregation: Array<IAggregationResponse>;
  private limit = 100;
  constructor() {
    const filePath = path.join('storage', 'aggregation.json');
    const rawData = readFileSync(filePath, 'utf-8');
    this.aggregation = assertParse<Array<IAggregationResponse>>(rawData);
  }
  getAggregation(skip: number): IAggregationStruct {
    const total = this.aggregation.length;
    const end = skip + this.limit < total ? skip + this.limit : total;
    const sliced = this.aggregation.slice(skip, end);
    return {
      data: sliced,
      skip,
      total,
    };
  }
}
