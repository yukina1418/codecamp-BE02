/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 스타벅스 커피 목록 조회 API
 *          tags: [starbucks]
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            properties:
 *                                  _id:
 *	                                    type: string
 *	                                    example: 623d8bf0f140f0d3cbd46178
 *                                  name:
 *	                                    type: string
 *	                                    example: 콜드브루
 *                                  img:
 *	                                    type: ing
 *	                                    example: https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg
 */
