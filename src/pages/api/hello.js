/**
 * @swagger
 * /hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */

export default function status(req, res) {
    res.statusCode = 200;
    res.json({ message: 'Hello World!' });
  }