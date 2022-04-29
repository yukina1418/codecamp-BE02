import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

//extends 상속 // 다중 상속은 불가능하다

//implements 구현받아온 것들을 클래스에 똑같이 만들어 사용할 수 있다.
// 존재하는 모든 요소를 다 만들어야만 사용이 가능함 아님 에러
// 얘는 다중 구현이 가능하다, 어짜피 다 만들어 써야하는거라서

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const state = exception.getStatus();
    const message = exception.message;

    console.log('=============');
    console.log('에러가 발생했어요!');
    console.log(`에러내용 : ${message}`);
    console.log(`에러코드 : ${state}`);
    console.log('=================');
  }
}
// 에러가 나면 데코레이터를 통해서 에러를 내뱉을 수 있다.
// 반복적인 에러를 이거 한개로 해결할 수 있다
