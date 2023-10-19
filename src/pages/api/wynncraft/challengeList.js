export default function status(req, res) {
    const {
        query: { detailed = false },
    } = req;

    const detailedList = {
        "dungeons": ["Decrepit Sewers", "Infested Pit", "Lost Sanctuary", "Underworld Crypt", "Sand-Swept Tomb", "Ice Barrows", "Undergrowth Ruins", "Galleon's Graveyard", "Fallen Factory", "Eldritch Outlook", "Corrupted Decrepit Sewers", "Corrupted Infested Pit", "Corrupted Lost Sanctuary", "Corrupted Underworld Crypt", "Corrupted Sand-Swept Tomb", "Corrupted Ice Barrows", "Corrupted Undergrowth Ruins", "Corrupted Galleon's Graveyard"],
        "raids": ["Nest of the Grootslangs", "Orphion's Nexus of Light", "The Canyon Colossus", "The Nameless Anomaly"]
    }
    const List = [
        "Decrepit Sewers", "Infested Pit", "Lost Sanctuary", "Underworld Crypt", "Sand-Swept Tomb", "Ice Barrows", "Undergrowth Ruins", "Galleon's Graveyard", "Fallen Factory", "Eldritch Outlook",
        "Corrupted Decrepit Sewers", "Corrupted Infested Pit", "Corrupted Lost Sanctuary", "Corrupted Underworld Crypt", "Corrupted Sand-Swept Tomb", "Corrupted Ice Barrows", "Corrupted Undergrowth Ruins", "Corrupted Galleon's Graveyard", 
        "Nest of the Grootslangs", "Orphion's Nexus of Light", "The Canyon Colossus", "The Nameless Anomaly"
    ]

    const result = detailed?detailedList:List

    res.statusCode = 200;
    res.json(result)
    
  }