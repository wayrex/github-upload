import { Injectable } from '@nestjs/common';
import * as csvjson from 'csvjson';

import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class CSVReaderService {
  readFile<T>(path: string, onComplete: (data: any[]) => T[]): T[] {
    throw new Error('Method not implemented.');
  }

  private importMetadata(): void {
    const metadataPath: string = join(
      __dirname,
      '../../../assets/movies_metadata.csv',
    );
    const dataString = readFileSync(metadataPath, { encoding: 'utf8' });
    const options = { delimiter: ',' };

    const data = csvjson.toObject(dataString, options);
    console.log(data);
  }
}
