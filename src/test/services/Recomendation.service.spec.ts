import { RecomendationService } from '../../api/services/implementations/Recomendation.service';
import { CSVReaderService } from '../../api/services/implementations/CSVReader.service';
import { Movie } from '../../api/models/movie';

describe('RecomendationService', () => {
	let recomendationService: RecomendationService;
	let csvReaderService: CSVReaderService;

	beforeEach(() => {
		csvReaderService = new CSVReaderService();
		recomendationService = new RecomendationService(csvReaderService);
	});

	describe('getTopMovies', () => {
		it('should return a list of movies sorted by weighted rating', () => {
			// Arrange
			const expectedResult = [];
			const dataset: Movie[] = [];
			jest.spyOn(csvReaderService, 'readFile').mockImplementation(() => dataset);

			// Act
			const result = recomendationService.getTopMovies();

			// Assert
			expect(result).toBeInstanceOf(Array);
			expect(result).toEqual(expectedResult);
		});
	});
})