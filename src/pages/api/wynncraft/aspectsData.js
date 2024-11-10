export default async function status(req, res) {
    const aspectsData = {
        "Archer": [
            {
                "name": "Aspect of Chaotic Demolition",
                "id": "basalticTrapMaxAspect",
                "rarity": "Fabled",
                "description": "Basaltic Trap cap",
                "tiers": {
                    "Tier 1": "+2 traps",
                    "Tier 2": "+3 traps",
                    "Tier 3": "+4 traps"
                }
            },
            {
                "name": "Aspect of Upkeep Charges",
                "id": "bouncingBombMaxAspect",
                "rarity": "Fabled",
                "description": "Bouncing Bomb cap",
                "tiers": {
                    "Tier 1": "+1 bounce",
                    "Tier 2": "+2 bounces",
                    "Tier 3": "+3 bounces"
                }
            },
            {
                "name": "Aspect of Extreme Current",
                "id": "coursingRestraintsDurationAspect",
                "rarity": "Fabled",
                "description": "Coursing Restraints duration",
                "tiers": {
                    "Tier 1": "+20 ticks (1s)",
                    "Tier 2": "+33 ticks (1.65s)",
                    "Tier 3": "+40 ticks (2s)"
                }
            },
            {
                "name": "Aspect of the Great Escape",
                "id": "elusiveCooldownAspect",
                "rarity": "Fabled",
                "description": "Elusive cooldown",
                "tiers": {
                    "Tier 1": "-1 second",
                    "Tier 2": "-1.65 seconds",
                    "Tier 3": "-2 seconds"
                }
            },
            {
                "name": "Aspect of Undercrank",
                "id": "frenzyMaxAspect",
                "rarity": "Fabled",
                "description": "Frenzy cap",
                "tiers": {
                    "Tier 1": "+15% walk speed",
                    "Tier 2": "+30% walk speed",
                    "Tier 3": "+40% walk speed"
                }
            },
            {
                "name": "Aspect of Fragmentation Rounds",
                "id": "grapeBombMaxAspect",
                "rarity": "Fabled",
                "description": "Grape Bomb cap",
                "tiers": {
                    "Tier 1": "+2 grapes",
                    "Tier 2": "+3 grapes",
                    "Tier 3": "+4 grapes"
                }
            },
            {
                "name": "Aspect of the Poltergeist",
                "id": "phantomRayHitsAspect",
                "rarity": "Fabled",
                "description": "Phantom Ray duration",
                "tiers": {
                    "Tier 1": "+4 ticks (0.2s, 2 hits)",
                    "Tier 2": "+6 ticks (0.3s, 3 hits)",
                    "Tier 3": "+8 ticks (0.4s, 4 hits)"
                }
            },
            {
                "name": "Aspect of the Inexhaustible Quiver",
                "id": "arrowStormMaxAspect",
                "rarity": "Fabled",
                "description": "Arrow Storm Max Arrows",
                "tiers": {
                    "Tier 1": "+1 Arrow",
                    "Tier 2": "+2 Arrows",
                    "Tier 3": "+4 Arrows"
                }
            },
            {
                "name": "Aspect of Extreme Firepower",
                "id": "arrowBombRadiusAspect",
                "rarity": "Legendary",
                "description": "Arrow Bomb hitbox radius",
                "tiers": {
                    "Tier 1": "+0.5 blocks",
                    "Tier 2": "+0.85 blocks",
                    "Tier 3": "+1.2 blocks",
                    "Tier 4": "+1.5 blocks"
                }
            },
            {
                "name": "Aspect of Battlement Fortification",
                "id": "arrowShieldDefenseAspect",
                "rarity": "Legendary",
                "description": "Arrow Shield defense",
                "tiers": {
                    "Tier 1": "+3% resistance",
                    "Tier 2": "+6% resistance",
                    "Tier 3": "+8% resistance",
                    "Tier 4": "+10% resistance"
                }
            },
            {
                "name": "Aspect of Further Horizons",
                "id": "arrowStormPhantomRayRangeAspect",
                "rarity": "Legendary",
                "description": "Arrow Storm",
                "tiers": {
                    "Tier 1": "+0.05 arrow speed\n-0.5 spread\nPhantom Ray range\n+2 blocks",
                    "Tier 2": "+0.1 arrow speed\r\n-1 spread\nPhantom Ray range\n+3.5 blocks",
                    "Tier 3": "+0.15 arrow speed\r\n-1.5 spread\nPhantom Ray range\n+5 blocks",
                    "Tier 4": "+0.2 arrow speed\r\n-2 spread\nPhantom Ray range\n+6 blocks"
                }
            },
            {
                "name": "Aspect of Clinging Lichen",
                "id": "bryophyteRootsRadiusAspect",
                "rarity": "Legendary",
                "description": "Bryophyte Roots hitbox radius",
                "tiers": {
                    "Tier 1": "+0.5 blocks",
                    "Tier 2": "+0.85 blocks",
                    "Tier 3": "+1.2 blocks",
                    "Tier 4": "+1.5 blocks"
                }
            },
            {
                "name": "Aspect of Dynamic Entry",
                "id": "fierceStompRadiusAspect",
                "rarity": "Legendary",
                "description": "Fierce Stomp hitbox radius",
                "tiers": {
                    "Tier 1": "+1.25 blocks",
                    "Tier 2": "+2.25 blocks",
                    "Tier 3": "+3.25 blocks",
                    "Tier 4": "+4 blocks"
                }
            },
            {
                "name": "Aspect of Bullet Hell",
                "id": "shrapnelBombMaxAspect",
                "rarity": "Legendary",
                "description": "Shrapnel Bomb cap",
                "tiers": {
                    "Tier 1": "+8 shrapnel",
                    "Tier 2": "+14 shrapnel",
                    "Tier 3": "+18 shrapnel",
                    "Tier 4": "+22 shrapnel"
                }
            },
            {
                "name": "Aspect of the North Wind",
                "id": "snowStormRadiusAspect",
                "rarity": "Legendary",
                "description": "Snow Storm hitbox radius",
                "tiers": {
                    "Tier 1": "+1 block",
                    "Tier 2": "+1.75 blocks",
                    "Tier 3": "+2.5 blocks",
                    "Tier 4": "+3 blocks"
                }
            },
            {
                "name": "Boltslinger's Embodiment of Rended Skies",
                "id": "boltslingerAspect",
                "rarity": "Mythic",
                "description": "Guardian Angels",
                "tiers": {
                    "Tier 1": "+30% Fire Rate\n\n\n\n\n\n",
                    "Tier 2": "+30% Fire Rate\nTriple Shots\n+2 arrows\nAngle set to 6.5\n-15% damage per arrow\nArrow Storm\n+1 arrow per stream",
                    "Tier 3": "+50% Fire Rate\nTriple Shots\n+2 arrows\nAngle set to 6.5\n-15% damage per arrow\nArrow Storm\n+1 arrow per stream"
                }
            },
            {
                "name": "Sharpshooter's Embodiment of Laser Precision",
                "id": "sharpshooterAspect",
                "rarity": "Mythic",
                "description": "Focus cap",
                "tiers": {
                    "Tier 1": "+1 focus\n\n\n\n\n",
                    "Tier 2": "+1 focus\nTwain's Arc focus requirement\n-1 focus to activate\nCrepuscular Ray focus requirement\n-1 focus to activate\n",
                    "Tier 3": "+1 focus\nTwain's Arc\n-1 focus to activate\n+5% charge speed\nCrepuscular Ray focus requirement\n-2 focus to activate"
                }
            },
            {
                "name": "Trapper's Embodiment of Persistence Predation",
                "id": "trapperAspect",
                "rarity": "Mythic",
                "description": "Patient Hunter charge rate",
                "tiers": {
                    "Tier 1": "+20% damage per second\n\n",
                    "Tier 2": "+20% damage per second\r\nChilling Snare duration\n+3s",
                    "Tier 3": "+40% damage per second\nChilling Snare duration\n+3s"
                }
            }
        ],
        "Assassin": [
            {
                "name": "Aspect of Unyielding Fate",
                "id": "backstabAngleAspect",
                "rarity": "Fabled",
                "description": "Backstab Angle",
                "tiers": {
                    "Tier 1": "+20 degrees",
                    "Tier 2": "+35 degrees",
                    "Tier 3": "+50 degrees"
                }
            },
            {
                "name": "Aspect of Martial Trance",
                "id": "flowStateCooldownAspect",
                "rarity": "Fabled",
                "description": "Flow State cooldown",
                "tiers": {
                    "Tier 1": "-25 ticks (-1.25s)",
                    "Tier 2": "-45 ticks (-2.25s)",
                    "Tier 3": "-60 ticks (-3s)"
                }
            },
            {
                "name": "Aspect of the Airborne",
                "id": "jasmineBloomRangeAspect",
                "rarity": "Fabled",
                "description": "Jasmine Bloom radius",
                "tiers": {
                    "Tier 1": "+2 blocks",
                    "Tier 2": "+3 blocks",
                    "Tier 3": "+4 blocks"
                }
            },
            {
                "name": "Aspect of the Calling Card",
                "id": "markedMaxAspect",
                "rarity": "Fabled",
                "description": "Marked cap",
                "tiers": {
                    "Tier 1": "+1 mark",
                    "Tier 2": "+2 marks",
                    "Tier 3": "+3 marks"
                }
            },
            {
                "name": "Aspect of the Dagger's Silhouette",
                "id": "nightcloakKnifeMaxAspect",
                "rarity": "Fabled",
                "description": "Nightcloak Knife cap",
                "tiers": {
                    "Tier 1": "+1 knife",
                    "Tier 2": "+2 knives",
                    "Tier 3": "+3 knives"
                }
            },
            {
                "name": "Aspect of Seeking Stars",
                "id": "ricochetsMaxAspect",
                "rarity": "Fabled",
                "description": "Ricochets cap",
                "tiers": {
                    "Tier 1": "+1 ricochet",
                    "Tier 2": "+2 ricochets",
                    "Tier 3": "+3 ricochets"
                }
            },
            {
                "name": "Aspect of False Coercing",
                "id": "sandbaggingThresholdAspect",
                "rarity": "Fabled",
                "description": "Sandbagging damage threshold",
                "tiers": {
                    "Tier 1": "+1.25% hp to activate",
                    "Tier 2": "+2.25% hp to activate",
                    "Tier 3": "+3% hp to activate"
                }
            },
            {
                "name": "Aspect of Sleight-Of-Hand",
                "id": "shurikenMaxAspect",
                "rarity": "Fabled",
                "description": "Shurikens",
                "tiers": {
                    "Tier 1": "+1 shuriken\n-20% neutral damage\n-5% fire damage",
                    "Tier 2": "+2 shuriken\n-30% neutral damage\n-10% fire damage",
                    "Tier 3": "+3 shuriken\n-35% neutral damage\n-15% fire damage"
                }
            },
            {
                "name": "Aspect of Foul Play",
                "id": "bamboozleRadiusAspect",
                "rarity": "Legendary",
                "description": "Bamboozle hitbox radius",
                "tiers": {
                    "Tier 1": "+1 block",
                    "Tier 2": "+1.75 blocks",
                    "Tier 3": "+2.5 blocks",
                    "Tier 4": "+3 blocks"
                }
            },
            {
                "name": "Aspect of the Chain Knife",
                "id": "daggerAttackRangeAspect",
                "rarity": "Legendary",
                "description": "Main Attack range",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of Shadow Armor",
                "id": "dissolutionDurationAspect",
                "rarity": "Legendary",
                "description": "Dissolution duration",
                "tiers": {
                    "Tier 1": "+3 ticks (+0.15s)",
                    "Tier 2": "+6 ticks (+0.3s)",
                    "Tier 3": "+8 ticks (+0.4s)",
                    "Tier 4": "+10 ticks (+0.5s)"
                }
            },
            {
                "name": "Aspect of the Stellar Flurry",
                "id": "multihitHitsAspect",
                "rarity": "Legendary",
                "description": "Multihit hits",
                "tiers": {
                    "Tier 1": "+1 hit",
                    "Tier 2": "+2 hits",
                    "Tier 3": "+3 hits",
                    "Tier 4": "+4 hits"
                }
            },
            {
                "name": "Aspect of Redoublement",
                "id": "multihitRangeAspect",
                "rarity": "Legendary",
                "description": "Multihit + Backstab hitbox range",
                "tiers": {
                    "Tier 1": "+0.5 blocks\nBackstab hitbox radius\n+0.5 blocks",
                    "Tier 2": "+0.85 blocks\nBackstab hitbox radius\n+0.85 blocks",
                    "Tier 3": "+1.2 blocks\nBackstab hitbox radius\n+1.2 blocks",
                    "Tier 4": "+1.5 blocks\nBackstab hitbox radius\n+1.5 blocks"
                }
            },
            {
                "name": "Aspect of the Fog Machine",
                "id": "smokeBombRadiusAspect",
                "rarity": "Legendary",
                "description": "Smoke Bomb hitbox radius",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of the Pinwheel",
                "id": "spinAttackRadiusAspect",
                "rarity": "Legendary",
                "description": "Spin Attack + Lacerate hitbox radius",
                "tiers": {
                    "Tier 1": "+0.5 blocks",
                    "Tier 2": "+0.85 blocks",
                    "Tier 3": "+1.2 blocks",
                    "Tier 4": "+1.5 blocks"
                }
            },
            {
                "name": "Acrobat's Embodiment of Gravity Defiance",
                "id": "acrobatAspect",
                "rarity": "Mythic",
                "description": "Lacerate",
                "tiers": {
                    "Tier 1": "+2 hits\n-1 tick per hit\n\n\n",
                    "Tier 2": "+2 hits\n-1 tick per hit\nRighting Reflex\n+5s duration\n+0.15 fall speed",
                    "Tier 3": "+3 hits\n-1 tick per hit\nRighting Reflex\n+5s duration\n+0.15 fall speed"
                }
            },
            {
                "name": "Shadestepper's Embodiment of Unseen Execution",
                "id": "shadestepperAspect",
                "rarity": "Mythic",
                "description": "Vanish cooldown\r",
                "tiers": {
                    "Tier 1": "-1.25 seconds\n\n",
                    "Tier 2": "-1.25 seconds\nSatsujin cooldown\r\n-5 seconds",
                    "Tier 3": "-1.75 seconds\nSatsujin cooldown\n-5 seconds"
                }
            },
            {
                "name": "Trickster's Embodiment of the Ultimate Show",
                "id": "tricksterAspect",
                "rarity": "Mythic",
                "description": "Mirror Image",
                "tiers": {
                    "Tier 1": "-5s cooldown\n",
                    "Tier 2": "-5s cooldown\n+1 clone",
                    "Tier 3": "-7.5s cooldown\n+1 clone"
                }
            }
        ],
        "Mage": [
            {
                "name": "Aspect of Flickering Transmission",
                "id": "blinkMaxAspect",
                "rarity": "Fabled",
                "description": "Blink",
                "tiers": {
                    "Tier 1": "+1 teleport\n-3.5 blocks",
                    "Tier 2": "+2 teleports\n-5 blocks",
                    "Tier 3": "+3 teleports\n-6 blocks"
                }
            },
            {
                "name": "Aspect of Mystic Transfer",
                "id": "fortitudeDurationAspect",
                "rarity": "Fabled",
                "description": "Fortitude duration",
                "tiers": {
                    "Tier 1": "+25 ticks (1.25s)",
                    "Tier 2": "+45 ticks (2.25s)",
                    "Tier 3": "+60 ticks (3s)"
                }
            },
            {
                "name": "Aspect of Shining Status",
                "id": "lightweaverThresholdAspect",
                "rarity": "Fabled",
                "description": "Lightweaver threshold",
                "tiers": {
                    "Tier 1": "-8% hp to activate",
                    "Tier 2": "-15% hp to activate",
                    "Tier 3": "-20% hp to activate"
                }
            },
            {
                "name": "Aspect of Runic Extravagance",
                "id": "sigilRadiusAspect",
                "rarity": "Fabled",
                "description": "Burning + Freezing Sigil hitbox radius",
                "tiers": {
                    "Tier 1": "+1.25 blocks",
                    "Tier 2": "+2.25 blocks",
                    "Tier 3": "+3 blocks"
                }
            },
            {
                "name": "Aspect of Burning Providence",
                "id": "sunflareThresholdAspect",
                "rarity": "Fabled",
                "description": "Sunflare threshold",
                "tiers": {
                    "Tier 1": "-20% healing to activate",
                    "Tier 2": "-35% healing to activate",
                    "Tier 3": "-50% healing to activate"
                }
            },
            {
                "name": "Aspect of Fatal Fulguration",
                "id": "thunderstormHitsAspect",
                "rarity": "Fabled",
                "description": "Thunderstorm",
                "tiers": {
                    "Tier 1": "+1 hit\n-3% neutral damage\n-2% thunder damage\nBreathless\n-1% neutral damage\n",
                    "Tier 2": "+2 hits\n-6% neutral damage\n-4% thunder damage\nBreathless\n-2% neutral damage\n",
                    "Tier 3": "+3 hits\n-8% neutral damage\n-5% thunder damage\nBreathless\n-2% neutral damage\n-1% earth damage"
                }
            },
            {
                "name": "Aspect of Wind Walking",
                "id": "arcaneSpeedDurationAspect",
                "rarity": "Legendary",
                "description": "Arcane Speed duration",
                "tiers": {
                    "Tier 1": "+13 ticks (0.65s)",
                    "Tier 2": "+23 ticks (1.15s)",
                    "Tier 3": "+33 ticks (1.65s)",
                    "Tier 4": "+40 ticks (2s)"
                }
            },
            {
                "name": "Aspect of the Savior",
                "id": "healRadiusAspect",
                "rarity": "Legendary",
                "description": "Heal hitbox radius",
                "tiers": {
                    "Tier 1": "+1 block",
                    "Tier 2": "+1.75 blocks",
                    "Tier 3": "+2.5 blocks",
                    "Tier 4": "+3 blocks"
                }
            },
            {
                "name": "Aspect of the Ray of Frost",
                "id": "iceSnakeRadiusAspect",
                "rarity": "Legendary",
                "description": "Ice Snake hitbox radius",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of the Comet",
                "id": "meteorRadiusOphanimRangeAspect",
                "rarity": "Legendary",
                "description": "Meteor hitbox radius",
                "tiers": {
                    "Tier 1": "+0.65 blocks\nOphanim range\n+2.5 blocks\n+11% travel speed",
                    "Tier 2": "+1.15 blocks\nOphanim range\n+4.5 blocks\n+21% travel speed",
                    "Tier 3": "+1.65 blocks\nOphanim range\n+6.5 blocks\n+29% travel speed",
                    "Tier 4": "+2 blocks\nOphanim range\n+8 blocks\n+37% travel speed"
                }
            },
            {
                "name": "Aspect of the Magic Missile",
                "id": "psychokinesisRangeAspect",
                "rarity": "Legendary",
                "description": "Psychokinesis range",
                "tiers": {
                    "Tier 1": "+8 blocks",
                    "Tier 2": "+14 blocks",
                    "Tier 3": "+18 blocks",
                    "Tier 4": "+22 blocks"
                }
            },
            {
                "name": "Aspect of the Cone of Cold",
                "id": "snakeNestMaxAspect",
                "rarity": "Legendary",
                "description": "Snake Nest",
                "tiers": {
                    "Tier 1": "+2 ice snakes\n-5 angle",
                    "Tier 2": "+4 ice snakes\n-6.7 angle",
                    "Tier 3": "+6 ice snakes\n-7.5 angle",
                    "Tier 4": "+8 ice snakes\n-8.75 angle"
                }
            },
            {
                "name": "Aspect of the Dimension's Door",
                "id": "teleportRangeAspect",
                "rarity": "Legendary",
                "description": "Teleport range",
                "tiers": {
                    "Tier 1": "+2 blocks",
                    "Tier 2": "+3.5 blocks",
                    "Tier 3": "+5 blocks",
                    "Tier 4": "+6 blocks"
                }
            },
            {
                "name": "Aspect of the Apprentice's Bolt",
                "id": "wandAttackRangeAspect",
                "rarity": "Legendary",
                "description": "Main Attack range",
                "tiers": {
                    "Tier 1": "+1.5 blocks",
                    "Tier 2": "+2.75 blocks",
                    "Tier 3": "+4 blocks",
                    "Tier 4": "+5 blocks"
                }
            },
            {
                "name": "Arcanist's Embodiment of Total Obliteration",
                "id": "arcanistAspect",
                "rarity": "Mythic",
                "description": "Chaos Explosion",
                "tiers": {
                    "Tier 1": "-20 mana bank to activate\n\n\n",
                    "Tier 2": "-20 mana bank to activate\n+1 spell recast\n\n",
                    "Tier 3": "-20 mana bank to activate\n+1 spell recast\nArcane Transfer\n+30 mana bank"
                }
            },
            {
                "name": "Light Bender's Embodiment of Celestial Brilliance",
                "id": "lightBenderAspect",
                "rarity": "Mythic",
                "description": "Lightweaver cap",
                "tiers": {
                    "Tier 1": "+2 orbs\n\n",
                    "Tier 2": "+2 orbs\nOphanim cap\n+1 orb",
                    "Tier 3": "+3 orbs\nOphanim cap\n+1 orb"
                }
            },
            {
                "name": "Riftwalker's Embodiment of Chronal Control",
                "id": "riftwalkerAspect",
                "rarity": "Mythic",
                "description": "Timelock",
                "tiers": {
                    "Tier 1": "x1.5 duration\n(+60 maxTime)\nx1.5 duration per 5 winded\n(+10 timePerStack)\n\n",
                    "Tier 2": "x1.5 duration\n(+60 maxTime)\nx1.5 duration per 5 winded\n(+10 timePerStack)\nWindsweeper\n+5 max winded",
                    "Tier 3": "x1.75 duration\n(+90 maxTime)\nx1.75 duration per 5 winded\n(+15 timePerStack)\nWindsweeper\n+5 max winded"
                }
            }
        ],
        "Shaman": [
            {
                "name": "Aspect of Exsanguination",
                "id": "bloodPoolMaxAspect",
                "rarity": "Fabled",
                "description": "Sacrificial Shrine cap",
                "tiers": {
                    "Tier 1": "+10 blood pool",
                    "Tier 2": "+20 blood pool",
                    "Tier 3": "+30 blood pool"
                }
            },
            {
                "name": "Aspect of the Channeler",
                "id": "chantBuffAspect",
                "rarity": "Fabled",
                "description": "Lunatic Chant",
                "tiers": {
                    "Tier 1": "+25 ticks (1.25s)\nFanatic Chant\n+7 ticks (0.35s)\nCoward Chant\n+0.8 horizontal kb, +0.1 vertical kb",
                    "Tier 2": "+45 ticks (2.25s)\nFanatic Chant\n+14 ticks (0.7s)\nCoward Chant\n+1 horizontal kb, +0.2 vertical kb",
                    "Tier 3": "+60 ticks (3s)\nFanatic Chant\n+20 ticks (1s)\nCoward Chant\n+1.2 horizontal kb, +0.3 vertical kb"
                }
            },
            {
                "name": "Aspect of the Amphibian",
                "id": "frogDanceMaxAspect",
                "rarity": "Fabled",
                "description": "Frog Dance",
                "tiers": {
                    "Tier 1": "+2 bounces",
                    "Tier 2": "+3 bounces",
                    "Tier 3": "+4 bounces"
                }
            },
            {
                "name": "Aspect of Stances",
                "id": "maskBuffAspect",
                "rarity": "Fabled",
                "description": "Mask of the Lunatic",
                "tiers": {
                    "Tier 1": "+5% damage bonus\nMask of the Fanatic\n+5% resistance\nMask of the Coward\n+10% walk speed",
                    "Tier 2": "+8% damage bonus\nMask of the Fanatic\n+8% resistance\nMask of the Coward\n+16% walk speed",
                    "Tier 3": "+10% damage bonus\nMask of the Fanatic\n+10% resistance\nMask of the Coward\n+20% walk speed"
                }
            },
            {
                "name": "Aspect of Seismic Sense",
                "id": "natureJoltRadiusAspect",
                "rarity": "Fabled",
                "description": "Nature's Jolt hitbox radius",
                "tiers": {
                    "Tier 1": "+1.25 blocks",
                    "Tier 2": "+2.25 blocks",
                    "Tier 3": "+3 blocks"
                }
            },
            {
                "name": "Aspect of the Beckoned Legion",
                "id": "puppetMasterMaxAspect",
                "rarity": "Fabled",
                "description": "Puppet Master",
                "tiers": {
                    "Tier 1": "+1 puppet\n-1% earth damage\n\n",
                    "Tier 2": "+2 puppets\n-1% earth damage\n-1% air damage\n",
                    "Tier 3": "+3 puppets\n-1% neutral damage\n-1% earth damage\n-1% air damage"
                }
            },
            {
                "name": "Aspect of Surging Presence",
                "id": "auraSpeedAspect",
                "rarity": "Legendary",
                "description": "Aura duration",
                "tiers": {
                    "Tier 1": "-2 ticks (-0.1s)",
                    "Tier 2": "-4 ticks (-0.2s)",
                    "Tier 3": "-5 ticks (-0.25s)",
                    "Tier 4": "-6 ticks (-0.3s)"
                }
            },
            {
                "name": "Aspect of Motivation",
                "id": "bullwhipDamageAspect",
                "rarity": "Legendary",
                "description": "Bullwhip damage bonus",
                "tiers": {
                    "Tier 1": "+5% to summons",
                    "Tier 2": "+9% to summons",
                    "Tier 3": "+12% to summons",
                    "Tier 4": "+15% to summons"
                }
            },
            {
                "name": "Aspect of Lashing Fire",
                "id": "flamingTongueHitsAspect",
                "rarity": "Legendary",
                "description": "Flaming Tongue",
                "tiers": {
                    "Tier 1": "+1 hit\n-11% neutral damage\n-1% thunder damage\n-2% fire damage\n-1 tick per hit",
                    "Tier 2": "+2 hits\n-17% neutral damage\n-2% thunder damage\n-4% fire damage\n-1 tick per hit",
                    "Tier 3": "+3 hits\n-20% neutral damage\n-3% thunder damage\n-6% fire damage\n-1 tick per hit",
                    "Tier 4": "+4 hits\n-22% neutral damage\n-4% thunder damage\n-8% fire damage\n-1 tick per hit"
                }
            },
            {
                "name": "Aspect of the Monolith",
                "id": "totemDurationAspect",
                "rarity": "Legendary",
                "description": "Totem duration",
                "tiers": {
                    "Tier 1": "+200 ticks (10s)",
                    "Tier 2": "+360 ticks (18s)",
                    "Tier 3": "+480 ticks (24s)",
                    "Tier 4": "+600 ticks (30s)"
                }
            },
            {
                "name": "Aspect of Emanant Force",
                "id": "totemRadiusAspect",
                "rarity": "Legendary",
                "description": "Totem hitbox radius",
                "tiers": {
                    "Tier 1": "+1 block",
                    "Tier 2": "+1.75 blocks",
                    "Tier 3": "+2.5 blocks",
                    "Tier 4": "+3 blocks"
                }
            },
            {
                "name": "Aspect of Reverberation",
                "id": "totemicSmashRadiusAspect",
                "rarity": "Legendary",
                "description": "Totemic Smash hitbox radius",
                "tiers": {
                    "Tier 1": "+1.25 blocks",
                    "Tier 2": "+2.25 blocks",
                    "Tier 3": "+3.25 blocks",
                    "Tier 4": "+4 blocks"
                }
            },
            {
                "name": "Aspect of the Alraune's Roots",
                "id": "uprootRangeAspect",
                "rarity": "Legendary",
                "description": "Uproot + Haunting Memory range",
                "tiers": {
                    "Tier 1": "+2 blocks",
                    "Tier 2": "+3.5 blocks",
                    "Tier 3": "+5 blocks",
                    "Tier 4": "+6 blocks"
                }
            },
            {
                "name": "Acolyte's Embodiment of Unwavering Adherence",
                "id": "acolyteAspect",
                "rarity": "Mythic",
                "description": "Blood Sorrow",
                "tiers": {
                    "Tier 1": "+2s duration\n\n",
                    "Tier 2": "+2s duration\nSacrificial Shrine\n-3 blood cost",
                    "Tier 3": "+3s duration\nSacrificial Shrine\n-3 blood cost"
                }
            },
            {
                "name": "Ritualist's Embodiment of the Ancestral Avatar",
                "id": "ritualistAspect",
                "rarity": "Mythic",
                "description": "Awakened",
                "tiers": {
                    "Tier 1": "-30 mana to activate\n",
                    "Tier 2": "-30 mana to activate\n+10s duration",
                    "Tier 3": "-50 mana to activate\n+15s duration"
                }
            },
            {
                "name": "Summoner's Embodiment of the Omnipotent Overseer",
                "id": "summonerAspect",
                "rarity": "Mythic",
                "description": "Triple Totem",
                "tiers": {
                    "Tier 1": "+1 max totem\nadjust totem power to 45%\n\n\n",
                    "Tier 2": "+1 max totem\nadjust totem power to 45%\nShepherd\n+1 puppet per kill\n+8 puppet cap",
                    "Tier 3": "+1 max totem\nadjust totem power to 45%\nShepherd\n+2 puppets per kill\n+16 puppet cap"
                }
            }
        ],
        "Warrior": [
            {
                "name": "Aspect of Unquenching Flames",
                "id": "boilingBloodCooldownAspect",
                "rarity": "Fabled",
                "description": "Boiling Blood cooldown",
                "tiers": {
                    "Tier 1": "-12 ticks (0.6s)",
                    "Tier 2": "-22 ticks (1.1s)",
                    "Tier 3": "-30 ticks (1.5s)"
                }
            },
            {
                "name": "Aspect of Hyper-Perception",
                "id": "counterChanceAspect",
                "rarity": "Fabled",
                "description": "Counter chance",
                "tiers": {
                    "Tier 1": "+8% chance to activate",
                    "Tier 2": "+15% chance to activate",
                    "Tier 3": "+20% chance to activate"
                }
            },
            {
                "name": "Aspect of Searing Friction",
                "id": "flamingUppercutSpeedAspect",
                "rarity": "Fabled",
                "description": "Flaming Uppercut hit speed",
                "tiers": {
                    "Tier 1": "-2 ticks per hit (6 hits over 3s)",
                    "Tier 2": "-3 ticks per hit (7 hits over 3s)",
                    "Tier 3": "-4 ticks per hit (8 hits over 3s)"
                }
            },
            {
                "name": "Aspect of Empowering Fantasy",
                "id": "radianceDurationAspect",
                "rarity": "Fabled",
                "description": "Radiance duration",
                "tiers": {
                    "Tier 1": "+40 ticks (2s)",
                    "Tier 2": "+70 ticks (3.5s)",
                    "Tier 3": "+90 ticks (4.5s)"
                }
            },
            {
                "name": "Aspect of Rallying Fervor",
                "id": "sacredSurgeChargeAspect",
                "rarity": "Fabled",
                "description": "Sacred Surge charge",
                "tiers": {
                    "Tier 1": "+0.25% per ability",
                    "Tier 2": "+0.4% per ability",
                    "Tier 3": "+0.5% per ability"
                }
            },
            {
                "name": "Aspect of the Megaphone",
                "id": "airShoutRadiusAspect",
                "rarity": "Legendary",
                "description": "Air Shout hithox radius",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of Earthshaking",
                "id": "bashRadiusAspect",
                "rarity": "Legendary",
                "description": "Bash hitbox radius",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of Turbulence",
                "id": "cycloneRadiusAspect",
                "rarity": "Legendary",
                "description": "Cyclone hitbox radius",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of the Anvil Drop",
                "id": "heavyImpactRadiusAspect",
                "rarity": "Legendary",
                "description": "Heavy Impact hitbox radius",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of Overflowing Hope",
                "id": "sparklingHopeThresholdAspect",
                "rarity": "Legendary",
                "description": "Sparkling Hope threshold",
                "tiers": {
                    "Tier 1": "-0.75% healing to activate",
                    "Tier 2": "-1.5% healing to activate",
                    "Tier 3": "-2% healing to activate",
                    "Tier 4": "-2.5% healing to activate"
                }
            },
            {
                "name": "Aspect of the Returning Javelin",
                "id": "spearAttackRangeAspect",
                "rarity": "Legendary",
                "description": "Main Attack range",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of Deafening Echoes",
                "id": "tempestHitsAspect",
                "rarity": "Legendary",
                "description": "Tempest",
                "tiers": {
                    "Tier 1": "+1 hit\n-6% neutral damage\n-2% earth damage\n-2% air damage\n-2 ticks per hit",
                    "Tier 2": "+2 hits\n-10% neutral damage\n-3% earth damage\n-3% air damage\n-3 ticks per hit",
                    "Tier 3": "+3 hits\n-12% neutral damage\n-4% earth damage\n-4% air damage\n-4 ticks per hit",
                    "Tier 4": "+4 hit\n-13% neutral damage\n-5% earth damage\n-5% air damage\n-5 ticks per hit"
                }
            },
            {
                "name": "Aspect of Skyward Strikes",
                "id": "uppercutRangeAspect",
                "rarity": "Legendary",
                "description": "Uppercut hitbox range",
                "tiers": {
                    "Tier 1": "+0.65 blocks",
                    "Tier 2": "+1.15 blocks",
                    "Tier 3": "+1.65 blocks",
                    "Tier 4": "+2 blocks"
                }
            },
            {
                "name": "Aspect of Steel Chords",
                "id": "warScreamRadiusAspect",
                "rarity": "Legendary",
                "description": "War Scream/Tempest/Bloodlust range",
                "tiers": {
                    "Tier 1": "+1.25 blocks",
                    "Tier 2": "+2.25 blocks",
                    "Tier 3": "+3.25 blocks",
                    "Tier 4": "+4 blocks"
                }
            },
            {
                "name": "Battle Monk's Embodiment of Complete Synchrony",
                "id": "battleMonkAspect",
                "rarity": "Mythic",
                "description": "Discombobulate cap",
                "tiers": {
                    "Tier 1": "+20 max\n\n",
                    "Tier 2": "+20 max\nBash hits\n+1 hit",
                    "Tier 3": "+30 max\nBash hits\n+1 hit"
                }
            },
            {
                "name": "Fallen's Embodiment of Blind Fury",
                "id": "fallenAspect",
                "rarity": "Mythic",
                "description": "Blood Pact",
                "tiers": {
                    "Tier 1": "-0.1% health cost\n",
                    "Tier 2": "+10% damage\n-0.1% health cost",
                    "Tier 3": "+15% damage\n-0.1% health cost"
                }
            },
            {
                "name": "Paladin's Embodiment of Undying Determination",
                "id": "paladinAspect",
                "rarity": "Mythic",
                "description": "Mantle of the Bovemists cap",
                "tiers": {
                    "Tier 1": "+2 mantles\n\n",
                    "Tier 2": "+2 mantles\nMythril Skin resistance\n+5% base defense",
                    "Tier 3": "+3 mantles\nMythril Skin resistance\n+5% base defense"
                }
            }
        ]
    }

    try {
        res.status(200).json(aspectsData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}