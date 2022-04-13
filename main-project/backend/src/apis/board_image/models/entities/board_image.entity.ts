import { Post } from 'src/apis/post/models/entities/post.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board_Image {
  @PrimaryGeneratedColumn('uuid')
  image_id: string;

  @Column()
  url: string;

  @Column()
  create_data: Date;

  @ManyToOne(() => Post)
  post: Post;
}
