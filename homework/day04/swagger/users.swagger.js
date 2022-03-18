/**
 * @swagger
 * /users:
 *      get:
 *          summary: 유저 정보 가져오기
 *          tags: [users]
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
 *                                  email:
 *	                                    type: string
 *	                                    example: yukina1418@gmail.com
 *                                  name:
 *	                                    type: string
 *	                                    example: 유도근
 *                                  phone:
 *	                                    type: string
 *	                                    example: 01034017015
 *                                  personal:
 *	                                    type: string
 *	                                    example: 960701-1111111
 *                                  prefer:
 *	                                    type: string
 *	                                    example: google.com
 */
