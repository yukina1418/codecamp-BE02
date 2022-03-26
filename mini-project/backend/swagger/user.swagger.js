/**
 * @swagger
 * /user:
 *       post:
 *          summary: 유저 가입하기 API
 *          tags: [user]
 *          requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              user:
 *                                type: object
 *                                required: true
 *                                properties:
 *                                           name:
 *                                              type: string
 *                                              required: true
 *                                              example: 철수
 *                                           email:
 *                                              type: string
 *                                              required: true
 *                                              example : tkfkatkffu@naver.com
 *                                           personal:
 *                                              type: string
 *                                              required: true
 *                                              example : 123456-1414146
 *                                           phone:
 *                                              type: string
 *                                              required: true
 *                                              example: "01012345678"
 *                                           prefer:
 *                                              type: string
 *                                              required: true
 *                                              example: https://www.naver.com
 *                                           pwd:
 *                                              type: string
 *                                              required: true
 *                                              example: password
 *          responses:
 *              422:
 *                  description: 실패 메세지 전송
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: string
 *	                                    example: "에러!! 핸드폰 번호가 인증되지 않았습니다"
 *              200:
 *                  description: user의 _id 리턴
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: string
 *	                                    example: "가입완료, 철수님의 아이디는 : 623d8fe5f140f0d3cbd4618d입니다. "
 */
