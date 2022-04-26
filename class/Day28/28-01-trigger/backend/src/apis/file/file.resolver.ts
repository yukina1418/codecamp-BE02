import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class FileResolver {
  constructor(
    //
    private readonly fileService: FileService,
  ) {}

  @Mutation(() => [String])
  uploadFile(
    // 그래프큐엘 업로드 타입 그리고 파일업로드로 바꿔서 사용한다
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
  ) {
    return this.fileService.upload({ files });
  }
}
