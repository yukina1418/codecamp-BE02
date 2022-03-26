/**
 * @swagger
 * /tokens/phone:
 *       patch:
 *          summary: 토큰 인증 API
 *          tags: [tokens]
 *          requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                   token:
 *                                      type: string
 *                                      required: true
 *                                      example: "152351"
 *          responses:
 *              200:
 *                  description: 인증 실패
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                   type: string
 *	                                   example: "false"
 *              201:
 *                  description: 인증 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                   type: string
 *	                                   example: "true"
 */
