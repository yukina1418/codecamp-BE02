import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostTag } from '../postTag/models/entities/postTag.entity';
import { Post } from './models/entities/post.entity';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostTag])],
  providers: [
    PostService, //
    PostResolver,
  ],
})
export class PostModule {}
