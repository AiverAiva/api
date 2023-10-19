import axios from 'axios'

export default async (req, res) => {
    const {
        query: { prefix },
    } = req;

    const prefixList = await axios.get('https://raw.githubusercontent.com/AiverAiva/data-crawler/main/data/wynncraft/guildprefix.json')
    
    
    if(prefix in prefixList.data){
        res.statusCode = 200;
        res.json(prefixList.data[prefix])
    }else{
        res.status(400).json({ error: "Guild not found or other issue(check api.weikuwu.me for more infomation)" });
    }
    
  }