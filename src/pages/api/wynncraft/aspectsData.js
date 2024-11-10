export default async function status(req, res) {
    const result = await axios.get('/assets/aspects_data.json')

    res.statusCode = 200;
    res.json(result)
    
  }