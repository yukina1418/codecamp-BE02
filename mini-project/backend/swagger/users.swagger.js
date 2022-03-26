/**
 * @swagger
 * /users:
 *      get:
 *          summary: 유저 정보 가져오기
 *          tags: [user]
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            properties:
 *                                  _id:
 *                                      type: string
 *                                      example: yukina1418@gmail.com
 *                                  name:
 *                                      type: string
 *                                      example: 유도근
 *                                  email:
 *                                      type: string
 *                                      example: "01034017015"
 *                                  personal:
 *                                      type: string
 *                                      example: 900000-1111111
 *                                  phone:
 *                                      type: string
 *                                      example: "01012345678"
 *                                  prefer:
 *                                      type: string
 *                                      example: https://naver.com
 *                                  og:
 *                                      type: object
 *                                      properties:
 *                                           title:
 *                                             type: string
 *                                             example: "네이버"
 *                                           description:
 *                                             type: string
 *                                             example: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"
 *                                           image:
 *                                             type: img
 *                                             example: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
 */
