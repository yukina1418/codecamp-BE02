import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloGatewayDriver,
  ApolloGatewayDriverConfig,
} from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

// 게이트웨이에서는 @apollo/gateway 깔기
// 각각의 서비스에서는 @apollo/federation @apollo/subgraph 깔기
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'auth', url: 'http://auth-service:3001/graphql' },
            { name: 'resource', url: 'http://resource-service:3002/graphql' },
          ],
        }),
      },
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
