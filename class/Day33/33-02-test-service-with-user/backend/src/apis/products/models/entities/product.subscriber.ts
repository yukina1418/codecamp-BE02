import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';

// 트리거가 내장되있는 클래스 EntitySubscriberInterface
// 그 옆에는 지켜보고 있는 Entity를 넣어준다.
// 글이 생성되었을 때 무언가 추가를 하고 싶다면, 글의 Entity를 넣어주면 된다.

// 로그를 DB에 저장하는 경우가 있지만 어지간하면 그렇게 쓰지 않는다
// 보통은 BigQuery에 담아놓는다.

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(connection: Connection) {
    connection.subscribers.push(this); // 디비랑 연결
  }
  // Product 테이블을 읽는다
  listenTo() {
    return Product;
  }
  afterInsert(
    //
    event: InsertEvent<Product>,
  ) {
    console.log(event);
    // 이벤트 속에는 DB에 입력될 데이터 값들이 적혀있다
    const bigquery = new BigQuery({
      keyFilename: 'gcp-bigquery.json',
      projectId: 'my-backend02',
    });
    // 상품이 하나 생성되면 빅쿼리에 아래와 같은 정보로 로그가 입력된다
    bigquery
      .dataset('MyBigQuery')
      .table('productLog')
      .insert([
        {
          id: event.entity.id,
          name: event.entity.name,
          description: event.entity.description,
          price: event.entity.price,
          isSoldout: event.entity.isSoldout,
        },
      ]);
    //생성해줘
    // event 속에는 발생한 정보가 들어가있다.
  }
}

// 옵티마이저 : 검색을 효율적으로 해주는 DB 내장 기능
// 실행 계획 : 효율적인 검색 계획 => 어디서부터 찾을까?
// Explain 명령어 : 옵티마이저가 결정한 실행 계획 보여줘
// Explain만 쿼리문 맨 위에 넣어주면 댐

// index 직접 만들기
// create index 원하는 이름 on board(title) <- 테이블(컬럼명)
// index를 직접 만들어주면 고유한 값이 추가적으로 생성이 되어야하기 때문에
// 검색 자체는 빨라지지만, 생성과 수정의 속도가 느려지는 현상이 발생한다.
// 그러니 적당히 거는게 좋다..^^...

// const, ref 둘다 인덱스

// 레디스
// 메모리 기반 DB // 임시저장 (캐싱) time to live < 얼마만큼 임시저장되는지 이야기를 할 때 ttl이 10분짜리다 라는 식으로 이야기함
//
// 레디스는 메모리기반 DB지만 날라가지 않게도 설정이 가능하다
// Memcached
// ? 메모리기반인데 안날라간다고?

// 빠른 검색용
// Cache-Aside 패턴
// mysql보다 빠른 Redis에서 가져오자
// 없으면 mysql에서 찾아서 가져오지만
// Redis에 캐싱(임시저장)을 하게 되서 두번째 사람부터는 빨라진다

// 임시 저장용
// Write-Back 패턴
// Redis에 임시저장하고 천천히 Mysql에 저장한다
