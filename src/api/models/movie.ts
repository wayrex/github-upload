import { Genre } from './genre';

export class Movie {
  id: number;
  budget: number;
  genres: Genre[];
  homepage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  releaseDate: Date;
  revenue: number;
  status: string;
  title: string;
  voteAverage: number;
  voteCount: number;
}
