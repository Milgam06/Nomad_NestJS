import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = []; //movie을 entity의 Movie[]형식으로

  getAllMov(): Movie[] {
    return this.movies;
  }

  getOneMov(id: string): Movie {
    return this.movies.find((movies) => movies.id === parseInt(id)); //parseInt(id) <=> +id
  }
}
