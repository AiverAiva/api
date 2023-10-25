import axios from 'axios'

export default async (req, res) => {
    const {
        query: { guild },
    } = req;

    
    const prefixList = await axios.get('https://raw.githubusercontent.com/AiverAiva/data-crawler/main/data/wynncraft/guildprefix.json')
    

    if (guild in prefixList.data) {
        res.statusCode = 200;
        res.json({guildName: prefixList.data[guild]})
    } else {
        const lowercaseObjects = {};
        for (const key in prefixList.data) {
            const lowercaseKey = key.toLowerCase();
            lowercaseObjects[lowercaseKey] = prefixList.data[key];
        }
        if (guild in lowercaseObjects) {
            res.statusCode = 200;
            res.json({ guildName: lowercaseObjects[guild]})
        }else{
            const guildData = await axios.get(`https://api.wynncraft.com/public_api.php?action=guildStats&command=${guild}`)
            if ('error' in guildData.data){
                res.status(400).json({ error: "Unknown guild name or prefix, this is case sensitive btw(check api.weikuwu.me for more infomation)" });
            }else{
                res.status(200).json({guildName: prefixList.data[guild]});
            }
        }
    }

  }