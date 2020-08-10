import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../../api/controllers/app.controller';
import { AppService } from '../../api/services/app.service';
import { RecomendationService } from '../../api/services/implementations/Recomendation.service';
import { CSVReaderService } from '../../api/services/implementations/CSVReader.service';
import { Movie } from '../../api/models/movie';

describe('AppController', () => {
  let app: TestingModule;
  let csvReaderService: CSVReaderService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, RecomendationService, CSVReaderService],
    }).compile();

    csvReaderService = app.get<CSVReaderService>(CSVReaderService);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      // Arrange
      const appController = app.get<AppController>(AppController);

      // Act
      const result = appController.getHello();
      
      // Assert
      expect(result).toBe('Hello World!');
    });
  });

  describe('getRecomendations', () => {
    it('should return a list of "Movies"', () => {
      // Arrange
      const appController = app.get<AppController>(AppController);
      const dataset: Movie[] = [];
			jest.spyOn(csvReaderService, 'readFile').mockImplementation(() => dataset);

      // Act
      const result = appController.getRecomendations(); 
      const expectedSize = 0;

      // Assert
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(expectedSize);
    })
  })
});
