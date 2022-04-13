import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostTag } from '../postTag/models/entities/postTag.entity';
import { Post } from './models/entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly PostRepository: Repository<Post>,

    @InjectRepository(PostTag)
    private readonly PostTagRepository: Repository<PostTag>,
  ) {}

  async findOne({ Postid }) {
    return await this.PostRepository.findOne({
      where: { post_id: Postid },
      relations: ['postTags'],
    });
  }
  async findAll() {
    return await this.PostRepository.find({ relations: ['postTags'] });
  }
  async create({ createPostInput }) {
    const { postTags, ...post } = createPostInput;

    const TagArr = [];
    for (let i = 0; i < postTags.length; i++) {
      const tagname = postTags[i].replace('#', '');

      const prevTag = await this.PostTagRepository.findOne({
        where: { names: `${tagname}` },
      });

      if (prevTag) {
        TagArr.push(prevTag);
      } else {
        const NewTag = await this.PostTagRepository.save({
          names: `${tagname}`,
        });
        TagArr.push(NewTag);
      }
    }
    console.log(TagArr);

    return await this.PostRepository.save({
      ...post,
      postTags: TagArr,
    });
  }

  async update({ Postid, updatePostInput }) {
    const Post = await this.PostRepository.findOne({
      where: { post_id: Postid },
    });

    const newProduct = {
      ...Post,
      ...updatePostInput,
    };
    return await this.PostRepository.save(newProduct);
  }

  async delete({ Postid }) {
    const result = await this.PostRepository.softDelete({
      post_id: Postid,
    }); // 다양한 조건으로 삭제 가능
    return result.affected ? true : false;
  }

  async restore({ Postid }) {
    const result = await this.PostRepository.restore({ post_id: Postid }); // 다양한 조건으로 삭제 가능
    return result.affected ? true : false;
  }
}
