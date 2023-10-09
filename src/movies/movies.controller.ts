import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // Controller 이름이 이 펑션의 기본 엔트리 포인트가 됨  ex) localhost:3000/{Controller name}
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movied: string) {
    return `This will return ${movied} movie`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') deleteId: string) {
    return `This will delete a movie what id is ${deleteId}`;
  }

  @Patch('/:id') //Patch는 리소스의 일부만 업데이트하고 Put은 모든 리소스를 업데이트
  patch(@Param('id') patchId: string) {
    return `This will patch a movie what id is ${patchId}`;
  }
}
