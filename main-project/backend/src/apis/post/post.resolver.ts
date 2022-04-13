import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from './dto/createPost.input';
import { UpdatePostInput } from './dto/updatePost.input';
import { Post } from './models/entities/post.entity';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {} // 이렇게 쓰면 서비스 ts에 있는 클래스를 가져다가 쓸 수 있음

  @Query(() => Post)
  fetchPost(
    //
    @Args('Postid') Postid: string,
  ) {
    return this.postService.findOne({ Postid });
  }

  @Query(() => [Post])
  fetchPosts() {
    return this.postService.findAll();
  }

  @Mutation(() => Post)
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput, // args == 주는쪽
  ) {
    return this.postService.create({ createPostInput });
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('Postid') Postid: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return await this.postService.update({ Postid, updatePostInput });
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Args('Postid') Postid: string, //
  ) {
    return this.postService.delete({ Postid });
  }

  @Mutation(() => Boolean)
  restorePost(
    @Args('Postid') Postid: string, //
  ) {
    return this.postService.restore({ Postid });
  }
}
