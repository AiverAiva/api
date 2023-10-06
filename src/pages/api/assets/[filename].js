import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const {
    query: { filename },
  } = req;

  const filePath = path.join(process.cwd(), 'src/assets', filename);

  try {
    const data = fs.readFileSync(filePath);
    res.status(200).end(data);
  } catch (error) {
    res.status(404).end('File not found');
  }
}