import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module';

//하위 apis의 파일 각각에서 만든 api가 해당하는 폴더의 module에 합쳐지고
// 그것을 app.module에서 호출해서 main단에서 사용한다

@Module({
  imports: [
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

// 모듈에서 함수를 서로 이어주는 역할을 지정한다
