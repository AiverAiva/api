import axios from 'axios'

export default async (req, res) => {
    const {
        query: { prefix },
    } = req;

    const prefixList = await axios.get('https://raw.githubusercontent.com/AiverAiva/data-crawler/main/data/wynncraft/guildprefix.json')

    if (prefix in prefixList.data) {
        res.statusCode = 200;
        res.json({guildName: prefixList.data[prefix]})
    } else {
        const lowercaseObjects = {};
        for (const key in prefixList.data) {
            const lowercaseKey = key.toLowerCase();
            lowercaseObjects[lowercaseKey] = prefixList.data[key];
        }
        if (prefix in lowercaseObjects) {
            res.statusCode = 200;
            res.json({ guildName: lowercaseObjects[prefix]})
        }else{
            res.status(400).json({ error: "Guild not found or other issue(check api.weikuwu.me for more infomation)" });
        }
    }

}