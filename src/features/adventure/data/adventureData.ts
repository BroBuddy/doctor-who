import type { Adventure } from '../types/AdventureType'

export const adventureData: Adventure[] = [
    {
        id: 1,
        tag: 'A001',
        title: 'Stourford',
        year: 1947,
        tardis: 8,
        era: 'World War Era',
        type: 'Holiday',
        description:
            'You have landed on the edges of Stourford, a beautiful village in the heart of the lovely Cotswolds. It is an autumn afternoon and the weak sunshine bathes trees bursting with leaves of gorgeous red and gold. A chill mist begins to gather in the air as you hear church bells in the distance. The village is getting back to normal after the War, but something even more dangerous is awakening...',
        stats: { danger: 0, knowledge: 5, vp: 0 },
        special:
            'Roll 1D6+1 for Landing Location. Night falls at start of Turn 1D3+2 and lasts 6 Turns (Human Allies are -1 Bravery at Night).',
        enemy: {
            dice: '1D6',
            table: [
                { roll: '1-2', name: 'Gothic' },
                { roll: '3', name: 'Earth' },
                { roll: '4', name: 'Entity' },
                { roll: '5', name: 'Temporal' },
                { roll: '6', name: 'Chameleon' },
            ],
        },
        locations: [
            {
                roll: '1',
                name: 'Archaeological Dig',
                tags: ['Dark', 'Move 8'],
                description:
                    "A recently excavated site that tunnels into a hillside a mile outside Stourford and said to be the burial site of a Saxon warrior. The discovery was not popular with the villagers. Add +2 to Investigate Actions here. You may Study here. Take a -1 penalty to any Charm rolls with 'local' Characters after visiting here.",
                encounter: 'D6, +1 to roll if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy Lair' },
                    { roll: '2', description: 'Enemy encounter' },
                    { roll: '3', description: 'Incident' },
                    { roll: '4-5', description: 'Archaeologist' },
                    { roll: '6', description: 'Relic' },
                    { roll: '7', description: 'None' },
                ],
            },
            {
                roll: '2',
                name: 'Village Inn',
                tags: ['Move 6'],
                description:
                    'A lovely local inn where the sounds of talking and laughing are mixed with the clink of glasses and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions and +1 to Relax Actions but you may not Investigate here.',
                encounter: 'D6',
                rolls: [
                    { roll: '1', description: 'Incident' },
                    {
                        roll: '2+',
                        description:
                            'You can spend 1 Luck to have a Character event, spend 2 Luck to meet Louisa James or Madame Dumaris (Special Characters), or attempt a Charm 8 roll to have a Plot event (each once only).',
                    },
                ],
            },
            {
                roll: '3',
                name: 'Farm',
                tags: ['Move 7'],
                description:
                    "A rustic old farmhouse surrounded by stables and sheds with a battered tractor sitting close to the gate. The bark of a dog can be heard from a barn. Add +1 to Investigate Actions here. If you make a Charm 7 roll, you are invited inside by the farmer's wife – make an immediate Relax Action (Discover Phase) or Seek Information Action (Dilemma Phase).",
                encounter: 'D6',
                rolls: [
                    { roll: '1-2', description: 'Incident' },
                    { roll: '3-4', description: 'None' },
                    { roll: '5-6', description: 'Farmer' },
                ],
            },
            {
                roll: '4',
                name: 'Post Office',
                tags: ['Move 6'],
                description:
                    "This quaint little shop in the centre of Stourford is run by a very friendly and efficient postmistress who makes everyone's business her business. Add +2 to Seek Information Actions and +1 to Enemy Action rolls here. You may not Explore here. You may spend 2 Luck to meet Louisa James or Madame Dumaris (Special Characters) or have a Plot event.",
                encounter: 'D6',
                rolls: [
                    { roll: '1-2', description: 'None' },
                    { roll: '3', description: 'Incident' },
                    { roll: '4-5', description: 'Postmistress' },
                    { roll: '6', description: 'Character' },
                ],
            },
            {
                roll: '5',
                name: 'Manor House',
                tags: ['Move 7'],
                description:
                    'A magnificent old house and residence of the local gentry that is set in some lovely tended grounds with a vintage car sat on the drive. Add +1 to Investigate and Plan Actions here.',
                encounter: 'D6, add Diplomacy',
                rolls: [
                    {
                        roll: '1-2',
                        description:
                            'Butler calls a Constable (-2 to Charm roll)',
                    },
                    { roll: '3', description: 'Nobody at home – no event' },
                    {
                        roll: '4',
                        description:
                            'Tea with the gentry – roll for a Plot event',
                    },
                    { roll: '5', description: 'Local Gentry' },
                    {
                        roll: '6+',
                        description:
                            'Discover locked attic (+2 Knowledge) OR secret cellar (Enemy Lair – Dilemma or Defeat Phase only)',
                    },
                ],
            },
            {
                roll: '6',
                name: 'Old Church',
                tags: ['Move 6'],
                description:
                    'A lovely country stone church with beautiful stained glass windows that is surrounded by a well-kept graveyard. But does it contain hidden secrets? Add +1 to Research (History) Actions here.',
                encounter: 'D6, +1 if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy encounter' },
                    {
                        roll: '2',
                        description:
                            'Secret Passage - you may automatically Move to a random Location if you wish without using an Action',
                    },
                    { roll: '3-4', description: 'None' },
                    {
                        roll: '5',
                        description:
                            'Dusty records – make a History 8 roll to gain +1 Knowledge',
                    },
                    { roll: '6+', description: 'Vicar' },
                ],
            },
            {
                roll: '7',
                name: 'Country Lanes',
                tags: ['Exterior', 'Move 2'],
                description:
                    'You stroll along the beautiful country paths, through the russet leaves strewn on the ground from almost bare trees. A fresh, cool wind gently plays through your clothes. Add +1 to Explore Actions, +2 to Move Actions from here but you may not Investigate, Find Help or Research here.',
                encounter: 'D6, -1 to roll if Night',
                rolls: [
                    { roll: '0', description: 'Enemy encounter' },
                    { roll: '1', description: 'Enemy event' },
                    { roll: '2', description: 'Incident' },
                    { roll: '3-4', description: 'None' },
                    { roll: '5-6', description: 'Character event' },
                ],
            },
        ],
        plots: [
            {
                roll: '2-4',
                name: 'Relic',
                description:
                    'A mysterious artefact has been discovered – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
            },
            {
                roll: '5',
                name: 'Body in the Library',
                description:
                    'Someone has been found murdered nearby and a corpse discovered. Roll 1D6 and if result is a 1, discard random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
            },
            {
                roll: '6',
                name: 'Missing Villagers',
                description:
                    'Some people have been recently vanishing from the village in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
            },
            {
                roll: '7',
                name: 'Local Legend',
                description:
                    'You learn about a strange, mysterious legend of the village – the Stourford Wraith. Is it just superstition or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
            },
            {
                roll: '8',
                name: 'Halloween',
                description:
                    'Tonight marks the occult festival - could it be linked to the Enemy plans? Gain +1 Knowledge (or +2 Knowledge if with a native Character). At the start of the Defeat Phase, add +1 Danger.',
            },
            {
                roll: '9',
                name: 'Lights in the Sky',
                description:
                    'Strange lights have been seen by locals in the night sky recently. Could it relate to something sinister? Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
            },
            {
                roll: '10',
                name: 'Time Fissure',
                description:
                    'You learn that the village lies across a crack in Time. Add +1 Danger if a Temporal Enemy is revealed. Make a successful Brains 12 roll to gain +1 Knowledge (+2 Knowledge if Brains 15 roll).',
            },
            {
                roll: '11-12',
                name: 'Unusual Activity',
                description:
                    'You hear about strange events happening nearby. Roll 1D6: 1-4: Roll for random Location - gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (roll Enemy if Discover Phase); 5-6: Ruins (Move 8) a mile outside the village, remains of an old castle destroyed centuries ago. Add +1 to Investigate Actions here but any Ally with Bravery 1 or less will not enter if Night.',
            },
        ],
        characters: [
            {
                roll: '2-4',
                name: 'Local Gentry',
                description: 'An eccentric English gent. Make a Charm roll:',
                rolls: [
                    {
                        roll: '2-4',
                        description:
                            'He is insulted – take a -1 penalty to Find Help and Seek Information Actions.',
                    },
                    {
                        roll: '5-6',
                        description: 'No event.',
                    },
                    {
                        roll: '7-8',
                        description:
                            'He shares local gossip – roll for Plot event.',
                    },
                    {
                        roll: '9+',
                        description:
                            'He joins you as an Ally – roll for Plot event.',
                    },
                ],
                stats: {
                    brains: 1,
                    brawn: 0,
                    bravery: 1,
                },
                skills: ['Charm', 'Diplomacy', 'History'],
            },
            {
                roll: '5',
                name: 'Constable',
                description:
                    'A local bobby takes an interest in you. Make a Charm roll (-1 per Stealth, +3 if Danger 10+).',
                rolls: [
                    {
                        roll: '2-5',
                        description:
                            'You are wanted for questioning – make a Running 7 roll or Captured (6).',
                    },
                    {
                        roll: '6-9',
                        description: 'No further event.',
                    },
                    {
                        roll: '10+',
                        description:
                            'He becomes an Ally (+1 to Investigate and Find Help Actions).',
                    },
                ],
                stats: {
                    brains: 1,
                    brawn: 2,
                    bravery: 2,
                },
            },
            {
                roll: '6',
                name: 'Vicar',
                description:
                    'The local clergy of the parish. Make a Charm roll (adding History).',
                rolls: [
                    {
                        roll: '2-3',
                        description: 'He is offended and calls a Constable.',
                    },
                    {
                        roll: '4-7',
                        description: 'He tips his hat and leaves.',
                    },
                    {
                        roll: '8-9',
                        description: 'He shares news – roll for Plot event.',
                    },
                    {
                        roll: '10+',
                        description:
                            'He joins you as an Ally (+1 to Find Help Actions) – roll for Plot event.',
                    },
                ],
                stats: {
                    brains: 2,
                    brawn: 0,
                    bravery: 2,
                },
                skills: ['History'],
            },
            {
                roll: '7',
                name: 'Child',
                description:
                    'A ten-year old who attends the local primary school. Make a Charm roll:',
                rolls: [
                    {
                        roll: '2-4',
                        description: 'Lose 1 Luck.',
                    },
                    {
                        roll: '5-6',
                        description: 'No further event.',
                    },
                    {
                        roll: '7-8',
                        description:
                            'You share some secrets – gain 1 Knowledge or roll for a Plot event.',
                    },
                    {
                        roll: '9+',
                        description:
                            'Either becomes your Ally (Roll for a Plot event) or takes you to meet Louisa James.',
                    },
                ],
                stats: {
                    brains: 1,
                    brawn: 0,
                    bravery: 1,
                },
                skills: ['Stealth'],
            },
            {
                roll: '8',
                name: 'Postmistress',
                description:
                    'Running the Post Office and a local gossip. Make a Charm roll:',
                rolls: [
                    {
                        roll: '2-6',
                        description:
                            'Everyone gets to know your business – add +2 to Enemy Action roll next Turn.',
                    },
                    {
                        roll: '7-8',
                        description: 'Her gossip is just that – no event.',
                    },
                    {
                        roll: '9+',
                        description:
                            'Over a pot of tea she shares recent events – roll for 2 Plot events and choose one. Add +2 to next Seek Information Action.',
                    },
                ],
            },
            {
                roll: '9',
                name: 'Farmer',
                description:
                    'Lived local to Stourford all his life and knows the old ways. Make a Charm roll:',
                rolls: [
                    {
                        roll: '2-4',
                        description: 'Has a secret – +1 Danger.',
                    },
                    {
                        roll: '5-7',
                        description: 'Suspicious of strangers, he hurries off.',
                    },
                    {
                        roll: '8-9',
                        description: 'Gossip – roll for Plot event.',
                    },
                    {
                        roll: '10+',
                        description:
                            'He either becomes an Ally (+1 to Move Actions) or takes you to meet Madame Dumaris.',
                    },
                ],
                stats: {
                    brains: 0,
                    brawn: 1,
                    bravery: 1,
                },
                skills: ['Stealth'],
            },
            {
                roll: '10',
                name: 'Reporter',
                description:
                    'An intrepid journalist arriving at Stourford after the latest story. If you make a Charm 8 roll, the reporter becomes an Ally – roll for a Plot event.',
                stats: {
                    brains: 2,
                    brawn: 1,
                    bravery: 1,
                },
                skills: ['Aware', 'Charm', 'Running'],
            },
            {
                roll: '11-12',
                name: 'Archaeologist',
                description:
                    'A scientist who is working on the local dig. If you make a Charm 9 roll (adding Science), the archaeologist becomes your Ally – see the Relic Plot event.',
                stats: {
                    brains: 2,
                    brawn: 1,
                    bravery: 1,
                },
                skills: ['History', 'Science'],
            },
        ],
        specials: [
            {
                id: 1,
                image: 'madame-dumaris',
                name: 'Madame Dumaris',
                description:
                    'You have encountered Madame Dumaris, an old, rather eccentric and reclusive spiritualist who is very knowledgeable about the Occult and local legends of Stourford.',
                information:
                    'She gains +1 to Seek Information and any Research (History) Actions and clearly has some local knowledge - roll for a Plot event. If Madame Dumaris is killed, lose 1 Luck.',
                stats: {
                    brains: 4,
                    brawn: 0,
                    bravery: 3,
                },
                skills: ['Aware 2', 'Charm', 'History 2'],
            },
            {
                id: 2,
                image: 'louisa-james',
                name: 'Louisa James',
                description:
                    'You have met Louisa James, a young teacher from the local Stourford village primary school. Bright and brave, she is loved by her pupils and trusted by the local community.',
                information:
                    'You may also attempt to make a Charm (9) roll and if successful, Louisa joins you as a Companion – gain 1 Luck.',
                stats: {
                    brains: 2,
                    brawn: 1,
                    bravery: 2,
                },
                skills: ['Charm', 'History', 'Running'],
            },
        ],
    },
    {
        id: 2,
        tag: 'A002',
        title: 'Peladon',
        year: 3920,
        tardis: 9,
        era: 'Twilight Era',
        type: 'Investigation',
        description:
            "You have landed on Peladon, one of your favourite planets. It has been over thirty years since your first visit to this medieval planet of superstition and barbarism, and under the wise rule of its' King it has now joined the Galactic Federation. The familiar electric storms rage on the mountainside around the massive stone Citadel of Peladon. Is all well here? Or is your return in time to avert disaster once more?",
        stats: { danger: 1, knowledge: 6, vp: 1 },
        special:
            'Gain 1 Luck point when starting Adventure. Peladon counts as Medieval Era for Actions. Roll 1D6+1 for Landing Location.',
        enemy: {
            dice: '1D6',
            table: [
                { roll: '1', name: 'Military' },
                { roll: '2', name: 'Gothic' },
                { roll: '3', name: 'Entity' },
                { roll: '4', name: 'Chameleon' },
                { roll: '5', name: 'Criminal' },
                { roll: '6', name: 'Time Lord' },
            ],
        },
        locations: [
            {
                roll: '1',
                name: 'Throne Room',
                tags: ['Move 7'],
                description:
                    'The large chamber where the King meets with his trusted advisors or receives Federation guests. The emblem of Aggedor adorns the walls and loyal guards flank the entrance. Add +1 to Seek Information and Find Help Actions but you may not Investigate here.',
                encounter: 'D6',
                rolls: [
                    { roll: '1', description: 'Incident' },
                    {
                        roll: '2+',
                        description:
                            'You can pay 1 Luck point to meet the Chancellor or High Priestess, pay 2 Luck to meet King Peladon (Special Characters), or try a Diplomacy 9 roll to have a Plot event.',
                    },
                ],
            },
            {
                roll: '2',
                name: 'Temple of Aggedor',
                tags: ['Move 7'],
                description:
                    'A massive stone statue of the Royal Beast dominates the small, smoky temple that has a small altar in its centre. If you have an Incident here whilst captured, it is automatically a Capture Incident. Add +1 to Investigate Actions here. Charm, Diplomacy and Escape rolls have -1 penalty. You may pay 1 Luck point to meet Aggedor (Special Characters).',
                encounter: 'D6',
                rolls: [
                    { roll: '1', description: 'Incident' },
                    { roll: '2', description: 'No event' },
                    { roll: '3', description: 'Royal Guards' },
                    { roll: '4-5', description: 'High Priestess' },
                    { roll: '6', description: 'Aggedor' },
                ],
            },
            {
                roll: '3',
                name: 'Slopes of Mount Megeshra',
                tags: ['Wilderness', 'Cold', 'Exterior', 'Move 8'],
                description:
                    'The ferocious wind howls in your ears as you climb across the narrow, rocky ledges. Add +2 to Explore Actions here but if you roll doubles, you slip on the ledge – roll 1D6 for each Character and on a result of 1 they are killed.',
                encounter: 'D6, +1 to roll if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy encounter' },
                    { roll: '2-3', description: 'No event' },
                    { roll: '4', description: 'Incident' },
                    { roll: '5', description: 'Aggedor' },
                    {
                        roll: '6+',
                        description:
                            'Secret Passage – you may automatically Move to a random Location',
                    },
                ],
            },
            {
                roll: '4',
                name: 'Mines',
                tags: ['Dark', 'Move 8'],
                description:
                    'The mines of Peladon run deep into the mountain and are incredibly rich in many ores such as trisillicate. Add +1 to Investigate Actions here. Move rolls from here have a -1 penalty. At the end of each Turn here, roll 1D6: on a 1 there is a rock-fall and Characters here must make a Brawn (10) roll to Move from this Location.',
                encounter: 'D6, +1 to roll if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy encounter' },
                    { roll: '2-3', description: 'Miners' },
                    { roll: '4', description: 'Incident' },
                    { roll: '5', description: 'Enemy event' },
                    { roll: '6', description: 'Aggedor' },
                    { roll: '7', description: 'None' },
                ],
            },
            {
                roll: '5',
                name: 'Refinery',
                tags: ['Move 7'],
                description:
                    'Control centre where raw material from the mines is separated and refined. To enter requires an Engineer 8 roll to deactivate the security system — if failed, Characters here are stunned and may take no Action next Turn. You may spend 1 Luck (once only) to see Mineral Wealth (Plot). Add +1 to Investigate and Research (Science) Actions here.',
                encounter: 'D6, +1 if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Lair' },
                    { roll: '2', description: 'Enemy encounter' },
                    { roll: '3', description: 'Enemy event' },
                    { roll: '4', description: 'Incident' },
                    { roll: '5', description: 'None' },
                    { roll: '6+', description: 'Engineer' },
                ],
            },
            {
                roll: '6',
                name: 'Ambassadors Quarters',
                tags: ['Move 7'],
                description:
                    'A small set of rooms and chambers assigned to the various Federation Ambassadors attached to Peladon. Add Diplomacy to Investigate and Planning Actions here.',
                encounter: 'D6',
                rolls: [
                    { roll: '1', description: 'Incident' },
                    {
                        roll: '2+',
                        description:
                            'You can spend 1 Luck to meet an Alien Ambassador, 2 Luck to meet Alpha Centauri, 3 Luck to meet Ice Warriors, or attempt a Diplomacy 9 roll or a Stealth 9 roll to have a Plot event.',
                    },
                ],
            },
            {
                roll: '7',
                name: 'Citadel Corridors',
                tags: ['Move 2'],
                description:
                    'The narrow passages are lit by smoky, flickering torches held in iron sconces. Walls are adorned with large tapestries bearing the symbol of Aggedor. You may not Investigate, Seek Information or Research here. Add +2 to any Move Actions from here.',
                encounter: 'D6, +1 if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy encounter' },
                    {
                        roll: '2',
                        description:
                            'Secret Passage – you may automatically Move to a random Location if you wish without using an Action',
                    },
                    { roll: '3', description: 'Incident' },
                    { roll: '4-5', description: 'None' },
                    { roll: '6+', description: 'Character event' },
                ],
            },
        ],
        plots: [
            {
                roll: '2-4',
                name: 'Curse',
                description:
                    'You learn about a strange, mysterious legend of Peladon. Is it just superstition or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
            },
            {
                roll: '5',
                name: 'Murder',
                description:
                    'Someone has been found murdered nearby and a corpse discovered. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
            },
            {
                roll: '6',
                name: 'Alien Transmitter',
                description:
                    'You discover an automatic beacon sending out what appears to be a homing signal. If you can make an Engineer 7 roll, choose to gain +1 Knowledge or reduce Danger by -2.',
            },
            {
                roll: '7',
                name: 'Political Intrigue',
                description:
                    'You learn about the current difficult and potentially dangerous political climate. Gain +1 Knowledge (or +2 Knowledge with a successful History 9 or Diplomacy 8 roll) but add +1 Danger.',
            },
            {
                roll: '8',
                name: 'Buried in the Mines',
                description:
                    'You learn that something sinister has been discovered in the Peladon mines. If you Move there, you may make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
            },
            {
                roll: '9',
                name: 'Under Suspicion',
                description:
                    'Recent events place you under suspicion of nefarious activities or crimes. If you make either a Charm 10 roll or a Diplomacy 9 roll, gain 1 Knowledge. If you fail you are Captured (8).',
            },
            {
                roll: '10',
                name: 'Mineral Wealth',
                description:
                    'You learn that recently excavated trisillicate ore has contained some remarkable new deposits. If you make a Science 8 roll, either gain +1 Knowledge or +1 Research (Engineer).',
            },
            {
                roll: '11-12',
                name: 'Disturbed Tomb',
                description:
                    'Strange activity surrounding the tomb of a long-dead Peladon noble. If you go there (Dark, Move 9) you find an ornately decorated stone chamber deep beneath the catacombs. Add +1 Danger. Add +2 to Investigate Actions here. -1 to Charm/Diplomacy rolls here. Encounter (Aware roll): 2–5: Enemy encounter; 6: Enemy event; 7: Curse; 8: None; 9: Under Suspicion; 10–11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
            },
        ],
        characters: [
            {
                roll: '2-4',
                name: 'Alien Ambassador',
                description:
                    'Assigned here by the Galactic Federation. Make a Diplomacy roll (-1 per Stealth):',
                rolls: [
                    {
                        roll: '2-4',
                        description:
                            'Accused of being a traitor – Captured (7).',
                    },
                    { roll: '5-6', description: 'No event.' },
                    {
                        roll: '7-8',
                        description:
                            'Knows of local events – roll for a Plot event.',
                    },
                    {
                        roll: '9+',
                        description:
                            'Ambassador becomes an Ally – roll for a Plot event.',
                    },
                ],
                stats: { brains: 2, brawn: 1, bravery: 1 },
                skills: ['Aware', 'Diplomacy'],
            },
            {
                roll: '5',
                name: 'Chancellor',
                description:
                    "The King's most trusted advisor. Make a Diplomacy roll (-1 per Stealth, +2 if Enemy revealed):",
                rolls: [
                    { roll: '2-4', description: 'Captured (8).' },
                    { roll: '5-7', description: 'No event.' },
                    { roll: '8-9', description: 'Roll for Plot event.' },
                    {
                        roll: '10+',
                        description:
                            'He becomes an Ally – roll for Plot event.',
                    },
                ],
                stats: { brains: 3, brawn: 1, bravery: 2 },
                skills: ['Diplomacy', 'History'],
            },
            {
                roll: '6',
                name: 'Alpha Centauri',
                description:
                    'The hexapod hermaphrodite ambassador to Peladon, and a very old friend, who joins you as an Ally – roll for Plot event. Gain 1 Luck.',
                stats: { brains: 2, brawn: 0, bravery: 1 },
                skills: ['Aware', 'Diplomacy 2', 'History'],
            },
            {
                roll: '7',
                name: 'Royal Guards',
                description:
                    'A patrol of Citadel guards block your path. Make a Diplomacy roll (-1 per Stealth, +2 if Enemy revealed):',
                rolls: [
                    {
                        roll: '2-6',
                        description:
                            'Hostile – make Running 7 roll or become Captured (7) or Attacked (Brawn 5).',
                    },
                    { roll: '7-9', description: 'No further event.' },
                    {
                        roll: '10+',
                        description:
                            'They become Allies (1D3+1 in number, each Brains 0, Brawn 2, Bravery 2).',
                    },
                ],
                stats: { brains: 0, brawn: 2, bravery: 2 },
            },
            {
                roll: '8',
                name: 'High Priestess',
                description:
                    'Devout to her planet and religion, but also a suspicious zealot. Make a Diplomacy roll (-3 if in Temple, +3 if Enemy revealed, +3 if Aggedor with you):',
                rolls: [
                    { roll: '2-7', description: 'You are Captured (8).' },
                    { roll: '8-9', description: 'No further event.' },
                    {
                        roll: '10',
                        description:
                            'Informed of news – roll for a Plot event.',
                    },
                    {
                        roll: '11+',
                        description:
                            'She becomes your Ally – roll for Plot event.',
                    },
                ],
                stats: { brains: 2, brawn: 1, bravery: 3 },
                skills: ['Diplomacy', 'History'],
            },
            {
                roll: '9',
                name: 'Miners',
                description:
                    'A group of tough Pel miners. Make a Charm roll (add +2 if Enemy revealed, -1 if in Mines):',
                rolls: [
                    {
                        roll: '2-5',
                        description:
                            'Hostile – make Running 7 roll or become Captured (7) or Attacked (Brawn 5).',
                    },
                    { roll: '6-9', description: 'No further event.' },
                    {
                        roll: '10+',
                        description:
                            'One miner becomes an Ally – roll for Plot event.',
                    },
                ],
                stats: { brains: 2, brawn: 2, bravery: 2 },
                skills: ['Engineer'],
            },
            {
                roll: '10',
                name: 'Engineer',
                description:
                    'A reserved, cool and efficient technician. If you make a Charm 10 roll, the Engineer becomes an Ally – roll for a Plot event. He adds +1 to Research (Engineer) Actions, gains automatic access to the Refinery but is automatically selected in a Traitor Incident.',
                stats: { brains: 3, brawn: 1, bravery: 2 },
                skills: ['Engineer'],
            },
            {
                roll: '11-12',
                name: 'Ice Warriors',
                description:
                    'An Ice Lord and his loyal Warrior bodyguard. Make a Diplomacy roll:',
                rolls: [
                    {
                        roll: '2-7',
                        description:
                            'Hostile – Evade (Running 7), Surrender (Captured 8) or Attacked (Brawn 10).',
                    },
                    { roll: '8-11', description: 'No event.' },
                    {
                        roll: '12+',
                        description:
                            'Join as Allies – Ice Lord (Brains 3, Brawn 6, Bravery 4, Aware, Diplomacy, History) and Ice Warrior (Brains 1, Brawn 6, Bravery 3, Troop). Roll for a Plot event.',
                    },
                ],
                stats: { brains: 3, brawn: 6, bravery: 4 },
                skills: ['Aware', 'Diplomacy', 'History'],
            },
        ],
        specials: [
            {
                id: 1,
                image: 'aggedor',
                name: 'Aggedor',
                description:
                    'You have encountered Aggedor, the royal beast of Peladon, who advances towards you with a roar. The Doctor may calm Aggedor with hypnosis if you (alone) make a successful Charm 9 roll (adding +1 if you have a Sonic Screwdriver). If you succeed, you may use Aggedor as an Ally for any 1 Turn. If you fail, you can Evade Aggedor (Running 8 roll) or start an (Attack) Conflict. If you kill Aggedor, lose 1 Luck.',
                information:
                    'If used as an Ally: +2 to Move and Prevent Actions and Gaining an Audience.',
                stats: { brains: 0, brawn: 5, bravery: 5 },
                skills: [],
            },
            {
                id: 2,
                image: 'king-peladon',
                name: 'King Peladon',
                description:
                    'You encounter noble King Peladon, who is anxious to maintain ties with the Federation and is an old friend – gain 1VP. He is protected by 1D3+1 Royal Guards (each Brains 0, Brawn 2, Bravery 2, Troop). You may bow and the event ends (except in Throne Room) or try to gain an audience by making a Diplomacy roll (+2 if Enemy revealed, -1 each for Curse or Political Intrigue Plot events, -1 if you encountered High Priestess and not Allied her).',
                information:
                    "2–5: Commit error in protocol – Captured (8). 6–8: Peladon is pleased to see you – roll for Plot event. 9+: You are declared a Royal Ally (but he may not leave Throne Room). Gain +1 Knowledge. If Enemy revealed, Peladon's Royal Guards join as Allies. If Enemy not revealed, Peladon lends you his Champion as an Ally (Brains 0, Brawn 4, Bravery 4).",
                stats: { brains: 2, brawn: 1, bravery: 4 },
                skills: ['Diplomacy 2', 'Charm', 'History'],
            },
        ],
    },
    {
        id: 3,
        tag: 'A003',
        title: 'Mississippi',
        year: 1904,
        tardis: 8,
        era: 'Victorian Era',
        type: 'Holiday',
        description:
            "The TARDIS has landed on 'The River Queen', a beautiful paddle steamer that is lit with soft electric lamps as it slowly journeys at night along the famous and majestic Mississippi river. Whilst the well-dressed passengers sip their mint juleps provided by glamorous saloon girls, the jazz band strikes up another number. It's just the pace to relax and take a well earned break, but in the casino, the stakes are perhaps higher than expected...",
        stats: { danger: 0, knowledge: 5, vp: 0 },
        special:
            'Gain +1 Luck if you bring a Companion with History and Charm to Adventure. Night will fall at the start of Turn 2 and lasts for Adventure. Move Actions are automatic and you may choose another Action for Turn.',
        enemy: {
            dice: '1D6',
            table: [
                { roll: '1', name: 'Entity' },
                { roll: '2', name: 'Gothic' },
                { roll: '3', name: 'Temporal' },
                { roll: '4', name: 'Criminal' },
                { roll: '5', name: 'Time Lord' },
                { roll: '6', name: 'Chameleon' },
            ],
        },
        locations: [
            {
                roll: '1',
                name: 'Lounge Bar',
                tags: ['Move 6'],
                description:
                    'The sounds of talking, dancing and laughing are mixed with the clink of glasses and the tempo beat of the jazz band in the corner. Add +1 to (Charm) Seek Information Actions and +1 to Relax Actions but you may not Investigate here.',
                encounter: 'D6',
                rolls: [
                    { roll: '1', description: 'Incident' },
                    {
                        roll: '2+',
                        description:
                            'You can spend 1 Luck to meet a Saloon Girl or random Character, spend 3 Luck to meet Mark Twain (Special Characters), or attempt a Charm 8 roll to have a Plot event (Discover Phase only).',
                    },
                ],
            },
            {
                roll: '2',
                name: 'Casino',
                tags: ['Move 6'],
                description:
                    'The room is filled with passengers, all attempting to win their fortune in games of chance – either at the poker table or the roulette wheel. You may spend 1 Luck to Gamble as an Action, winning 3 Luck if you roll 7, 11 or doubles with 2D6. If you roll a 2, add +1 Danger.',
                encounter: 'D6',
                rolls: [
                    { roll: '1', description: 'Incident' },
                    {
                        roll: '2+',
                        description:
                            'Spend 1 Luck to meet a Gambler or random Character, spend 2 Luck to meet Gabrielle Blanchett (Special Character) or attempt a Charm 9 roll to have a Plot event (each once only).',
                    },
                ],
            },
            {
                roll: '3',
                name: 'Wheelhouse',
                tags: ['Move 7'],
                description:
                    "The control cabin of the steamer where the Captain of 'The River Queen' and his crew efficiently steer the majestic ship along the famous river. If you do not have any native Pilot Allies, you must make a Charm 8 roll or be Captured (7). Add +1 to Prevent and Plan Actions here. If you make a Pilot 8 roll as an Action here, reduce Danger by 1.",
                encounter: 'D6',
                rolls: [
                    { roll: '1-2', description: 'No event' },
                    { roll: '3-4', description: 'River Queen Crew' },
                    { roll: '5-6', description: 'Captain' },
                ],
            },
            {
                roll: '4',
                name: 'Cabins',
                tags: ['Move 6'],
                description:
                    'A smaller, but still very pleasant cabin, where the passengers aboard the steamer can sleep and relax. Add +1 to Seek Information and Investigate Actions here. You can spend 1 Luck to meet a random Character, spend 3 Luck to meet a Character of your choice (including Mark Twain or Gabrielle Blanchett) or spend 1 Luck to roll for a Plot event.',
                encounter: 'D6, +1 to roll if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy encounter' },
                    { roll: '2-3', description: 'No event' },
                    { roll: '4', description: 'Incident' },
                    { roll: '5+', description: 'Character event' },
                ],
            },
            {
                roll: '5',
                name: 'Private Stateroom',
                tags: ['Move 7'],
                description:
                    'Larger and more luxurious quarters for richer and more important passengers. But could those passengers be all what they seem? Add +1 to Seek Information and Investigate Actions here. You can spend 1 Luck to meet a Banker, Gambler, random Character or roll for a Plot event.',
                encounter: 'D6, +1 to roll if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy encounter' },
                    { roll: '2', description: 'Enemy event' },
                    { roll: '3', description: 'No event' },
                    { roll: '4', description: 'Incident' },
                    {
                        roll: '5+',
                        description:
                            'Character event but with -1 to any Charm roll',
                    },
                ],
            },
            {
                roll: '6',
                name: 'Boiler Room',
                tags: ['Move 7'],
                description:
                    'The heart of the steamer, all oil, smoke and pistons as the magnificent machinery pumps and turns, pushing the boat effortlessly through the water. If the Doctor is here and has Engineer, gain 1 VP (once only in Adventure). Add +1 to Investigate and Research (Engineer) Actions here.',
                encounter: 'D6, +1 to roll if Discover Phase',
                rolls: [
                    { roll: '1', description: 'Enemy encounter' },
                    { roll: '2', description: 'Enemy event' },
                    { roll: '3', description: 'No event' },
                    { roll: '4-5', description: 'Engineer' },
                    {
                        roll: '6+',
                        description:
                            'Roll for a Plot event or gain +1 Knowledge',
                    },
                ],
            },
        ],
        plots: [
            {
                roll: '2-4',
                name: 'Holed',
                description:
                    'The River Queen has been sabotaged and it is taking on water. Add +1 Danger each Turn until you make a successful Engineer 9 roll as an Action in the Boiler Room, then gain +1 Knowledge.',
            },
            {
                roll: '5',
                name: 'Murdered Passenger',
                description:
                    'Someone has been found murdered nearby and a corpse discovered. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
            },
            {
                roll: '6',
                name: 'Man Overboard',
                description:
                    'If you have Characters at the Riverboat Deck, roll randomly for the pushed Character who is killed unless you make a Medicine 7 or Brawn 10 roll there. Gain +1 Knowledge.',
            },
            {
                roll: '7',
                name: 'Mysterious Passenger',
                description:
                    'Someone aboard is not who they seem. If you make an Aware 9 roll, reveal Enemy or gain +1 Knowledge. If you have an Ally, roll 1D6 and on a 1, discard Ally and have an Enemy encounter.',
            },
            {
                roll: '8',
                name: 'Big Game',
                description:
                    'An important poker game is due to start — could it be linked to Enemy plans? If you go to the Casino, gain +1 Knowledge (+2 Knowledge if with a native Character). Add +1 Danger at the start of next Turn.',
            },
            {
                roll: '9',
                name: 'Captive',
                description:
                    'Someone or something important has been captured. If you Move to a random Location and make a Rescue 8 Action, roll 1D6: 1–2: Gain +1 Knowledge; 3–4: Character event; 5–6: Enemy encounter.',
            },
            {
                roll: '10',
                name: 'Light in the Sky',
                description:
                    'A strange light was seen by passengers in the night sky earlier. Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
            },
            {
                roll: '11-12',
                name: 'Mysterious Cargo',
                description:
                    'There have been strange noises from the Cargo Hold (Water, Dark). If you go there, you enter a shadowy area far below deck filled with large packing crates and containers. Add +2 to Investigate Actions here. Encounter (Aware roll): 2–5: Enemy encounter; 6: Enemy event; 7: Murdered Passenger; 8: None; 9: River Queen Crew; 10–11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
            },
        ],
        characters: [
            {
                roll: '2-4',
                name: 'Banker',
                description:
                    'A well-dressed high roller. Make a Charm roll (-1 per Stealth):',
                rolls: [
                    {
                        roll: '2-4',
                        description:
                            'He accuses you of thievery and cheating – see River Queen Crew with -1 to roll.',
                    },
                    { roll: '5-6', description: 'No event.' },
                    {
                        roll: '7-8',
                        description:
                            'He knows some local gossip – roll for a Plot event.',
                    },
                    {
                        roll: '9+',
                        description:
                            'He becomes an Ally – roll for a Plot event.',
                    },
                ],
                stats: { brains: 2, brawn: 1, bravery: 1 },
                skills: ['Aware', 'Diplomacy'],
            },
            {
                roll: '5',
                name: 'Saloon Girl',
                description:
                    'A smiling hostess aboard the steamer. Make a Charm roll (-1 if in the Lounge Bar or Casino):',
                rolls: [
                    { roll: '2-4', description: 'No event.' },
                    {
                        roll: '5-8',
                        description: 'Gossip – roll for Plot event.',
                    },
                    {
                        roll: '9+',
                        description: 'Becomes an Ally – roll for Plot event.',
                    },
                ],
                stats: { brains: 1, brawn: 0, bravery: 1 },
                skills: ['Charm'],
            },
            {
                roll: '6',
                name: 'Gambler',
                description:
                    'A professional at the card-tables. Make a Charm roll (subtracting Stealth, +2 if you spend 1 Luck, -2 if in Casino):',
                rolls: [
                    { roll: '2-6', description: 'Lose 1 Luck.' },
                    { roll: '7', description: 'No event.' },
                    {
                        roll: '8-9',
                        description: 'He shares news – roll for Plot event.',
                    },
                    {
                        roll: '10+',
                        description:
                            'He joins you as an Ally – roll for Plot event. Gain 1 Luck.',
                    },
                ],
                stats: { brains: 1, brawn: 2, bravery: 2 },
                skills: ['Aware', 'Stealth'],
            },
            {
                roll: '7',
                name: 'Passenger',
                description:
                    'Clutching a drink, this passenger is having the time of their life aboard the River Queen. Make a Charm roll (-1 per Stealth):',
                rolls: [
                    {
                        roll: '2-5',
                        description:
                            'Offended – see River Queen Crew with -1 to roll.',
                    },
                    { roll: '6-8', description: 'No further event.' },
                    {
                        roll: '9-10',
                        description: 'Gossip – roll for a Plot event.',
                    },
                    {
                        roll: '11+',
                        description:
                            'Becomes your Ally (choose Charm, History or Running).',
                    },
                ],
                stats: { brains: 1, brawn: 1, bravery: 1 },
            },
            {
                roll: '8',
                name: 'River Queen Crew',
                description:
                    'A pair of officers, dedicated to the comfort of passengers, but suspicious of stowaways. Make a Charm roll (-1 per Stealth, +3 if Danger 12+):',
                rolls: [
                    {
                        roll: '2-5',
                        description:
                            'Questioned – make Running 7 roll or Captured (6) or Attacked (Brawn 5).',
                    },
                    { roll: '6-9', description: 'No event.' },
                    {
                        roll: '10+',
                        description:
                            'They become your Allies (+1 to Find Help Actions).',
                    },
                ],
                stats: { brains: 1, brawn: 2, bravery: 2 },
                skills: ['Pilot', 'Running'],
            },
            {
                roll: '9',
                name: 'Captain',
                description:
                    'Nearing retirement, but still passionate about his boat. Make a Charm roll (+2 if Enemy revealed):',
                rolls: [
                    { roll: '2-5', description: 'Captured (7).' },
                    {
                        roll: '6-9',
                        description: 'He is not convinced – event ends.',
                    },
                    {
                        roll: '10+',
                        description:
                            'Becomes your Ally (+1 to Find Help Actions) – roll for Plot event. Can automatically Ally any Character encountered.',
                    },
                ],
                stats: { brains: 2, brawn: 1, bravery: 3 },
                skills: ['Diplomacy', 'Pilot 2'],
            },
            {
                roll: '10',
                name: 'Engineer',
                description:
                    'A talented grease-monkey that works on the steamer. If you make a Charm 10 roll (adding +2 if Danger 6+), the Engineer becomes an Ally – roll for a Plot event. Adds +1 to Research (Engineer) Actions if in the Boiler Room and +1 to Charm rolls with native Pilots.',
                stats: { brains: 2, brawn: 2, bravery: 2 },
                skills: ['Engineer'],
            },
            {
                roll: '11-12',
                name: 'Special',
                description:
                    'You may choose to encounter either Mark Twain or Gabrielle Blanchett (see Special Characters).',
            },
        ],
        specials: [
            {
                id: 1,
                image: 'mark-twain',
                name: 'Mark Twain',
                description:
                    'You have met Samuel L Clemens, better known as the famous author and lecturer, Mark Twain. Gain 1 VP. Twain puffs on a large cigar and regards you with a gleam in his eye. You try to talk with the writer to see if he knows anything useful. Make a Charm roll (with only female Characters adding their Charm).',
                information:
                    '2–5: Twain is too busy enjoying himself and brushes you off. 6–8: He knows a little gossip – roll for a Plot event, then leaves. 9+: Twain chuckles and joins you as an Ally – roll for a Plot event.',
                stats: { brains: 4, brawn: 1, bravery: 2 },
                skills: ['Aware', 'Charm', 'History 2'],
            },
            {
                id: 2,
                image: 'gabrielle-blanchett',
                name: 'Gabrielle Blanchett',
                description:
                    'You have met the glamorous and sassy Gabrielle Blanchett who works as a hostess at the casino. Although appearing only as a welcoming and pretty blonde saloon girl, Gabrielle is sharp and clever, using her charm and wit to always stack the deck.',
                information:
                    'Gabrielle joins you as an Ally and knows a bit about what is happening on the steamer – roll for Plot event. You may also attempt a Charm 9 roll and if successful, Gabrielle joins you as a Companion – gain 1 Luck.',
                stats: { brains: 2, brawn: 1, bravery: 2 },
                skills: ['Charm 2', 'Running', 'Stealth'],
            },
        ],
    },
]
