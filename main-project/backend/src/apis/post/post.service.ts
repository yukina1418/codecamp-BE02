import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostTag } from '../postTag/models/entities/postTag.entity';
import { User } from '../User/models/entities/user.entity';
import { Post } from './models/entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly PostRepository: Repository<Post>,

    @InjectRepository(PostTag)
    private readonly PostTagRepository: Repository<PostTag>,

    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
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
  //
  async logfind({ currentUser }) {
    return this.PostRepository.createQueryBuilder()
      .where({ user: currentUser.user_id })
      .getMany();
  }
  //
  async create({ currentUser, createPostInput }) {
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

    const NewPosrt = await this.PostRepository.save({
      ...post,
      postTags: TagArr,
      user: { user_id: currentUser.user_id },
    });
    console.log(NewPosrt);

    return NewPosrt;
  }

  async checkID({ currentUser, Postid }) {
    const Post = await this.PostRepository.findOne({
      where: { post_id: Postid },
      relations: ['user'],
    });

    if (Post.user.user_id !== currentUser.user_id) {
      throw new ConflictException('?????? ?????? ???????????? ????????????.');
    } else {
      return true;
    }
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
    }); // ????????? ???????????? ?????? ??????
    return result.affected ? true : false;
  }

  async restore({ Postid }) {
    const result = await this.PostRepository.restore({ post_id: Postid }); // ????????? ???????????? ?????? ??????
    return result.affected ? true : false;
  }
}
