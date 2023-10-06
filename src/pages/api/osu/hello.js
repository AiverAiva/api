export default function hello(req, res) {
    const {
      query: { param },
    } = req;
  
    res.statusCode = 200;
    res.json({ message: `Hello, ${param}!` });
  }