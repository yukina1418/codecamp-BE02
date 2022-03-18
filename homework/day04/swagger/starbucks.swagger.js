/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 커피 메뉴 리스트 가져오기
 *          tags: [starbucks]
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  name:
 *	                                    type: string
 *	                                    example: 비타민 가득 산미넘치는 아메리카노
 *                                  kcal:
 *	                                    type: ing
 *	                                    example: 1
 */
