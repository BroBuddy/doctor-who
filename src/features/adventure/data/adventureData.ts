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
                            'He joins you as an Ally (Brains 1, Brawn 0, Bravery 1, Charm, Diplomacy, History) – roll for Plot event.',
                    },
                ],
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
                            'He becomes an Ally (Brains 1, Brawn 2, Bravery 2, +1 to Investigate and Find Help Actions).',
                    },
                ],
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
                            'He joins you as an Ally (Brains 2, Brawn 0, Bravery 2, History, +1 to Find Help Actions) – roll for Plot event.',
                    },
                ],
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
                            'Either becomes your Ally (Brains 1, Brawn 0, Bravery 1, Stealth, roll for a Plot event) or takes you to meet Louisa James.',
                    },
                ],
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
                            'He either becomes an Ally (Brains 0, Brawn 1, Bravery 1, Stealth, +1 to Move Actions) or takes you to meet Madame Dumaris.',
                    },
                ],
            },
            {
                roll: '10',
                name: 'Reporter',
                description:
                    'An intrepid journalist arriving at Stourford after the latest story. If you make a Charm 8 roll, the reporter becomes an Ally (Brains 2, Brawn 1, Bravery 1, Aware, Charm, Running) – roll for a Plot event.',
            },
            {
                roll: '11-12',
                name: 'Archaeologist',
                description:
                    'A scientist who is working on the local dig. If you make a Charm 9 roll (adding Science), the archaeologist becomes your Ally (Brains 2, Brawn 1, Bravery 1, History, Science) – see the Relic Plot event.',
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
]
