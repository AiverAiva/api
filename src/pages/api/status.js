export default function status(req, res) {
    res.statusCode = 200;
    res.json({ message: 'It works' });
  }