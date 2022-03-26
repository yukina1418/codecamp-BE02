/**
 * @swagger
 * /tokens/phone:
 *       post:
 *          summary: 토큰 인증 요청 API
 *          tags: [tokens]
 *          requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                   myphone:
 *                                      type: string
 *                                      required: true
 *                                      example: "01034017015"
 *          responses:
 *              200:
 *                  description: 같은 번호로 재 인증 요청 시
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: string
 *	                                    example: "인증번호가 변경되었습니다! "
 *              201:
 *                  description: 인증 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: string
 *	                                    example: "인증번호 발송 완료! "
 */
