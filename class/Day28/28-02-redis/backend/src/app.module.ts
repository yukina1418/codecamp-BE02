import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { BoardModule } from './apis/boards/boards.module';
import { FileModule } from './apis/file/file.module';
import { pointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { ProductModule } from './apis/products/product.module';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { UserModule } from './apis/users/user.module';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

//하위 apis의 파일 각각에서 만든 api가 해당하는 폴더의 module에 합쳐지고
// 그것을 app.module에서 호출해서 main단에서 사용한다

@Module({
  imports: [
    BoardModule,
    ProductCategoryModule,
    ProductModule,
    UserModule,
    AuthModule,
    FileModule,
    pointTransactionModule,
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
      database: 'qqq',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      // url: 'redis://my-redis:6379',
      isGlobal: true,
      socket: {
        host: 'localhost',
        port: 6379,
      },
    }),
    // CacheModule.register({
    //   store: redisStore,
    //   host: 'localhost',
    //   port: 6379, // Redis의 기본 포트번호이다.
    // }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

// 모듈에서 함수를 서로 이어주는 역할을 지정한다
