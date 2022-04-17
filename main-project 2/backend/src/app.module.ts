import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { ItemModule } from './apis/item/item.module';
import { pointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { PostModule } from './apis/post/post.module';
import { SubscriptionModule } from './apis/subscription/subscription.module';
import { UserModule } from './apis/User/user.module';

//하위 apis의 파일 각각에서 만든 api가 해당하는 폴더의 module에 합쳐지고
// 그것을 app.module에서 호출해서 main단에서 사용한다

@Module({
  imports: [
    // SubscriptionModule,
    UserModule,
    PostModule,
    AuthModule,
    pointTransactionModule,
    ItemModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '5515',
      database: 'mainproject',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
      retryAttempts: 30,
      retryDelay: 5000,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

// 모듈에서 함수를 서로 이어주는 역할을 지정한다