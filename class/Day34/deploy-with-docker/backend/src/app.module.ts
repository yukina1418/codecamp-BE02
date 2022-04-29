import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { BoardModule } from './apis/boards/boards.module';
import { FileModule } from './apis/file/file.module';
import { pointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { ProductModule } from './apis/products/product.module';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { UserModule } from './apis/users/user.module';

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
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydocker02',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

// 모듈에서 함수를 서로 이어주는 역할을 지정한다
