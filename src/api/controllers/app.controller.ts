import { Controller, Get } from '@nestjs/common';

import { AppService } from '../services/app.service';
import { RecomendationService } from '../services/implementations/Recomendation.service';
import { Movie } from '../models/movie';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly recomendationService: RecomendationService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('top')
  getRecomendations(): Movie[] {
    return this.recomendationService.getTopMovies();
  }
}
