import { Injectable, Inject, forwardRef } from '@nestjs/common';

import { Movie } from '../../models/movie';
import { CSVReaderService } from './CSVReader.service';

@Injectable()
export class RecomendationService {
  constructor(
    @Inject(forwardRef(() => CSVReaderService))
    private readonly csvReaderService: CSVReaderService,
  ) {
  }

  getTopMovies(): Movie[] {
    const onComplete = (data: any): Movie[] => {
      // To Do: proccess data for converting to a movie array

      return [];
    };

    const dataset = this.csvReaderService.readFile('data/movies_metadata.csv', onComplete);

    return dataset;
  }
}
