import { CSVReaderService } from '../../api/services/implementations/CSVReader.service';

describe('CSVReaderService', () => {
  let csvReaderService: CSVReaderService;

  beforeEach(() => {
    csvReaderService = new CSVReaderService();
  });

  describe('readFile', () => {
    it('should throw an exception due that is not implemented', () => {
      // Arrange
      const path = 'path-to-file/movies_medata.csv';
      
      // Act
      const method = () => csvReaderService.readFile(path, null);

      // Assert
      expect(method).toThrow(Error);
    });
  });
})