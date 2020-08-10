import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { RecomendationService } from './services/implementations/Recomendation.service';
import { CSVReaderService } from './services/implementations/CSVReader.service';

@Module({
  imports: [],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    RecomendationService,
    CSVReaderService,
  ],
})
export class AppModule {}
