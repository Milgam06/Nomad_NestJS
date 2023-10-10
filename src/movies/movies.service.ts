import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = []; //movie를 entity의 Movie[]형식으로 불러오기

  getAllMov(): Movie[] {
    return this.movies;
  }

  getOneMov(id: string): Movie {
    return this.movies.find((movies) => movies.id === parseInt(id)); //parseInt(id) <=> +id
  }
}
