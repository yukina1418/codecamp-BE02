import { ApolloServer, gql } from "apollo-server";
import { checkValidationPhone, sendTokenToSMS, getToken } from "./phone.js";

const typeDefs = gql`
  type BoardReturn { # 우리가 보내주는 것은 type 타입
    number: Int
    writer: String
    title: String
    contents: String
  }

  input CreateBoardInput { # 받아오는 타입은 input 타입
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: CreateBoardInput): String
    createTokenOfPhone(myphone: String): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다,철수꺼",
          contents: "내용이에요",
        },
        {
          number: 2,
          writer: "영희",
          title: "제목입니다,영희꺼",
          contents: "내용이에요",
        },
        {
          number: 3,
          writer: "훈이",
          title: "제목입니다,훈이꺼",
          contents: "내용이에요",
        },
      ];

      // 2. 꺼내온 결과 응답 주기
      return result;
    },
  },

  Mutation: {
    createBoard: (_, args) => {
      console.log(args);
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

      // 2. 저장 결과 알려주기!!
      return "등록에 성공하였습니다!";
    },

    createBoard2: (_, args) => {
      console.log(args);
      // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

      // 2. 저장 결과 알려주기!!
      return "등록에 성공하였습니다!";
    },

    createTokenOfPhone: (_, args) => {
      // 1.  휴대폰 번호 자리수 맞는지 확인하기
      const isValid = checkValidationPhone(args.myphone);
      if (isValid) {
        // 2. 핸드폰 토큰 6자리 만들기
        const mytoken = getToken();
        // 3. 핸드폰 번호에 토큰 정보 전송하기
        sendTokenToSMS(args.myphone, mytoken);
        return "인증완료";
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3001}`);
});
