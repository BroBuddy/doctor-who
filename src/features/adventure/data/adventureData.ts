import type { Adventure } from '../types/AdventureType'

const A001: Adventure = {
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
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3', name: 'Earth' },
        { roll: '4', name: 'Entity' },
        { roll: '5', name: 'Temporal' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Archaeological Dig',
            move: 8,
            terrain: 'Dark',
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
            move: 6,
            terrain: null,
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
            move: 7,
            terrain: null,
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
            move: 6,
            terrain: null,
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
            move: 7,
            terrain: null,
            description:
                'A magnificent old house and residence of the local gentry that is set in some lovely tended grounds with a vintage car sat on the drive. Add +1 to Investigate and Plan Actions here.',
            encounter: 'D6, add Diplomacy',
            rolls: [
                {
                    roll: '1-2',
                    description: 'Butler calls a Constable (-2 to Charm roll)',
                },
                { roll: '3', description: 'Nobody at home – no event' },
                {
                    roll: '4',
                    description: 'Tea with the gentry – roll for a Plot event',
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
            move: 6,
            terrain: null,
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
            move: 2,
            terrain: 'Exterior',
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
}

const A002: Adventure = {
    id: 2,
    tag: 'A002',
    title: 'Peladon',
    year: 3920,
    tardis: 9,
    era: 'Twilight Era',
    type: null,
    description:
        "You have landed on Peladon, one of your favourite planets. It has been over thirty years since your first visit to this medieval planet of superstition and barbarism, and under the wise rule of its' King it has now joined the Galactic Federation. The familiar electric storms rage on the mountainside around the massive stone Citadel of Peladon. Is all well here? Or is your return in time to avert disaster once more?",
    stats: { danger: 1, knowledge: 6, vp: 1 },
    special:
        'Gain 1 Luck point when starting Adventure. Peladon counts as Medieval Era for Actions. Roll 1D6+1 for Landing Location.',
    enemy: [
        { roll: '1', name: 'Military' },
        { roll: '2', name: 'Gothic' },
        { roll: '3', name: 'Entity' },
        { roll: '4', name: 'Chameleon' },
        { roll: '5', name: 'Criminal' },
        { roll: '6', name: 'Time Lord' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Throne Room',
            move: 7,
            terrain: null,
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
            move: 7,
            terrain: null,
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
            move: 8,
            terrain: 'Wilderness, Cold, Exterior',
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
            move: 8,
            terrain: 'Dark',
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
            move: 7,
            terrain: null,
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
            move: 7,
            terrain: null,
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
            move: 2,
            terrain: null,
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
                    description: 'Accused of being a traitor – Captured (7).',
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
                    description: 'He becomes an Ally – roll for Plot event.',
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
                    description: 'Informed of news – roll for a Plot event.',
                },
                {
                    roll: '11+',
                    description: 'She becomes your Ally – roll for Plot event.',
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
}

const A003: Adventure = {
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
        'Gain +1 Luck if you bring a Companion with History and Charm to Adventure. Night will fall at the start of Turn 2 and lasts for Adventure. Move Actions are automatic and you may choose another Action for Turn. Riverboat Decks: (Water, Exterior) You stroll along the polished wooden deck of the paddle steamer, enjoying the gentle lapping of the river as you drift past the banks of the Mississippi. You may not Investigate, Research or Seek Information here. If you make an Aware 9 roll here, the Enemy Action roll for this Turn has a -1 modifier. Encounter (D6, +1 to roll if Discover Phase): 1: Enemy encounter; 2: Enemy event; 3: Incident; 4-5: None; 6+: Character event.',
    enemy: [
        { roll: '1', name: 'Entity' },
        { roll: '2', name: 'Gothic' },
        { roll: '3', name: 'Temporal' },
        { roll: '4', name: 'Criminal' },
        { roll: '5', name: 'Time Lord' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Lounge Bar',
            move: 6,
            terrain: null,
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
            move: 6,
            terrain: null,
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
            move: 7,
            terrain: null,
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
            move: 6,
            terrain: null,
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
            move: 7,
            terrain: null,
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
            move: 7,
            terrain: null,
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
                    description: 'Roll for a Plot event or gain +1 Knowledge',
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
                    description: 'He becomes an Ally – roll for a Plot event.',
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
}

const A004: Adventure = {
    id: 4,
    tag: 'A004',
    title: 'London',
    year: 1599,
    tardis: 8,
    era: 'Renaissance Era',
    type: 'Holiday',
    description:
        "You have landed in the streets of London during the reign of Elizabeth I. Mists gather in the evening air as the sun just starts to set over the Thames River. The city is crowded, dirty and an unpleasant smell lingers in the streets, but it is also filled with life and excitement as people bustle about you. Taverns, shops, theatres and more, you can take your pick! It's time to explore a fascinating period in history.",
    stats: { danger: 0, knowledge: 5, vp: 0 },
    special:
        'Gain 1 Luck if you bring a Companion with Aware and Charm to Adventure. Night will fall at start of Turn 1D3+2 and last 4 Turns.',
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3', name: 'Earth' },
        { roll: '4', name: 'Entity' },
        { roll: '5', name: 'Temporal' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Tavern',
            move: 6,
            terrain: null,
            description:
                'You have found a local inn where the sounds of talking and laughing are mixed with the clink of glasses and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions and +1 to Relax Actions. You may not Investigate here.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1',
                    description: 'Tavern brawl – Attacked (Brawn 3)',
                },
                { roll: '2', description: 'Incident' },
                {
                    roll: '3+',
                    description:
                        'Spend 1 Luck to meet a Wench or random Character, spend 3 Luck to meet William Shakespeare, or attempt a Charm 8 roll to have a Plot event (each once only).',
                },
            ],
        },
        {
            roll: '2',
            name: 'Globe Theatre',
            move: 8,
            terrain: null,
            description:
                'This incredible theatre has only just opened but is the talk of London. Gain 1 VP for each TARDIS Character with History here (once only). If you remain here for a full Turn with no other Action, you get to see a Shakespeare play performed and gain 1 Luck point per TARDIS Character. If the Enemy are Carrionites, add +1 Danger.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Incident' },
                {
                    roll: '2+',
                    description:
                        'Spend 1 Luck point to meet a random Character or spend 2 Luck points to meet William Shakespeare.',
                },
            ],
        },
        {
            roll: '3',
            name: 'Tower of London',
            move: 8,
            terrain: null,
            description:
                'The incredible castle in the centre of London and a grim reminder to any traitors to the Crown. Gain 1 VP if you spend a full Turn here (once only). Add +2 to Plan Actions here.',
            encounter: 'Diplomacy roll, -1 per Stealth',
            rolls: [
                { roll: '2-5', description: 'Captured (9)' },
                {
                    roll: '6-8',
                    description:
                        'Soldiers (-1 to Charm roll, Brawn 7 if Attacked, +2 to number if become Allies)',
                },
                { roll: '9', description: 'No event' },
                {
                    roll: '10-11',
                    description: 'Gain 1 Knowledge or roll for Plot event',
                },
                { roll: '12+', description: 'Meet Queen Elizabeth I' },
            ],
        },
        {
            roll: '4',
            name: 'Insane Asylum',
            move: 9,
            terrain: null,
            description:
                'You have found a terrifying madhouse where screaming patients are kept in terrible conditions. Add +1 to Investigate or Seek Information Actions here, -1 to Escape Actions.',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Attacked by inmates (Brawn 4)' },
                {
                    roll: '4',
                    description: 'Make an Aware 6 roll or become Captured (8)',
                },
                { roll: '5', description: 'Incident' },
                {
                    roll: '6+',
                    description:
                        'If you make a Medicine 8 roll, gain 2 Knowledge',
                },
            ],
        },
        {
            roll: '5',
            name: 'Greenwich Palace',
            move: 9,
            terrain: null,
            description:
                'The magnificent residence of Queen Elizabeth I that is filled with courtiers and protected by her loyal soldiers. Add +1 to Find Help Actions here.',
            encounter: 'Diplomacy roll',
            rolls: [
                { roll: '2-4', description: 'Captured (8)' },
                { roll: '5-6', description: 'Soldiers (with Brawn 10)' },
                { roll: '7-8', description: 'No event' },
                { roll: '9-10', description: 'Aristocrat' },
                {
                    roll: '11-12+',
                    description:
                        'Gain 2 Knowledge and if you remain here next Turn you may spend 2 Luck to meet Queen Elizabeth I (Special Character) as an Action.',
                },
            ],
        },
        {
            roll: '6',
            name: 'Church',
            move: 7,
            terrain: null,
            description:
                'An old stone church that looks unused and ill-kept, but you might find something useful inside it or perhaps in the old graveyard. Add +1 to Research (History) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                {
                    roll: '2',
                    description:
                        'Secret Passage – you may automatically Move to a random Location',
                },
                { roll: '3-4', description: 'No event' },
                {
                    roll: '5',
                    description:
                        'Dusty records – make a History 8 roll to gain +1 Knowledge',
                },
                {
                    roll: '6',
                    description:
                        'Talk to old priest – gain +1 Luck and roll for a Plot event',
                },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'Someone has been found murdered nearby and their corpse discovered. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Missing Persons',
            description:
                'Some people have been recently vanishing from the streets of London in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
        },
        {
            roll: '7',
            name: 'Old Fable',
            description:
                'You learn about a strange, mysterious legend. Is it just superstition or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
        },
        {
            roll: '8',
            name: 'Important Event',
            description:
                'Something important is due to happen soon in London — could it be linked to the Enemy plans? Gain +1 Knowledge (or +2 Knowledge if with a native Character). At the start of the Defeat Phase, add +1 Danger.',
        },
        {
            roll: '9',
            name: 'Lights in the Sky',
            description:
                'Strange lights have been seen by locals in the night sky recently. Could it relate to something sinister? Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
        },
        {
            roll: '10',
            name: 'Political Intrigue',
            description:
                'You learn about the current difficult and potentially dangerous political climate. Gain +1 Knowledge (or +2 Knowledge with a successful History 9 or Diplomacy 8 roll).',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1–4: Roll for a random Location – gain +1 Knowledge if you go there, then roll 1D6 and if 1–2 see Enemy Lair (roll for Enemy if Discover Phase); 5–6: An old house (Dark, Move 8). If you go there, it is a creepy townhouse with a forbidding air. The door creaks slowly open. Add +1 to Investigate Actions here but any Ally with Bravery 1 or less will not enter. Encounter (D6): 1–2: Enemy Lair; 3: Enemy encounter; 4: No event; 5: Gain +1 Knowledge; 6: Gain +2 Knowledge but +1 Danger and +1 Enemy Action rolls.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Merchant',
            description:
                'A well-dressed trader. Make a Charm roll (-1 per Stealth):',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'He accuses you of thievery and calls constables – see Soldiers with -1 to roll.',
                },
                { roll: '5-6', description: 'No event.' },
                {
                    roll: '7-8',
                    description:
                        'He knows some local gossip – roll for a Plot event.',
                },
                {
                    roll: '9+',
                    description: 'He becomes an Ally – roll for a Plot event.',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Diplomacy'],
        },
        {
            roll: '5',
            name: 'Wench',
            description:
                'A shrewd and feisty local girl who always knows some gossip. Make a Charm roll (-1 if in a Tavern):',
            rolls: [
                { roll: '2-4', description: 'No event.' },
                {
                    roll: '5-8',
                    description: 'Gossip – roll for Plot event.',
                },
                {
                    roll: '9+',
                    description: 'Becomes an Ally – roll for a Plot event.',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Charm'],
        },
        {
            roll: '6',
            name: 'Rogue',
            description:
                'A gentleman of the road. Make a Charm roll (add Stealth, +2 if you spend 1 Luck, -1 if in a Tavern):',
            rolls: [
                { roll: '2-3', description: 'Lose 1 Luck.' },
                { roll: '4-7', description: 'No event.' },
                {
                    roll: '8-9',
                    description: 'Shares news – roll for Plot event.',
                },
                {
                    roll: '10+',
                    description: 'Joins as Ally – roll for Plot event.',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
            skills: ['Stealth'],
        },
        {
            roll: '7',
            name: 'Soldiers',
            description:
                'A patrol of local guards block your path. Make a Charm roll (-1 per Stealth):',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Hostile – make Running 7 roll or become Captured (7 or 9 if at Tower of London) or Attacked (Brawn 5).',
                },
                { roll: '6-9', description: 'No further event.' },
                {
                    roll: '10+',
                    description:
                        'They become Allies (1D3+1 in number, each Brains 0, Brawn 2, Bravery 2) – roll for a Plot event (Discover Phase only).',
                },
            ],
            stats: { brains: 0, brawn: 2, bravery: 2 },
        },
        {
            roll: '8',
            name: 'Aristocrat',
            description: 'Finely dressed and cultured. Make a Diplomacy roll:',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'Militia are called – see Soldiers (-2 to Charm roll).',
                },
                { roll: '5-6', description: 'No event.' },
                { roll: '7-8', description: 'Roll for Plot event.' },
                { roll: '9+', description: 'Becomes your Ally.' },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Diplomacy', 'History'],
        },
        {
            roll: '9',
            name: 'Fugitive',
            description:
                'Someone that is avoiding the local militia for unknown reasons. Ignore if with Soldiers, otherwise make a Charm roll:',
            rolls: [
                {
                    roll: '2',
                    description: 'Pickpocket – lose a Gadget or 2 Luck.',
                },
                { roll: '3-7', description: 'No further event.' },
                { roll: '8-9', description: 'Roll for a Plot event.' },
                {
                    roll: '10+',
                    description:
                        'The fugitive becomes your Ally – roll for a Plot event.',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Stealth'],
        },
        {
            roll: '10',
            name: 'Swordsman',
            description:
                'Retired musketeer of the royal guard. Make a Diplomacy roll:',
            rolls: [
                {
                    roll: '2-3',
                    description: 'Challenged to duel (Brawn 3).',
                },
                { roll: '4-6', description: 'No event.' },
                { roll: '7-8', description: 'Roll for Plot event.' },
                {
                    roll: '9+',
                    description: 'Joins as Ally – roll for Plot event.',
                },
            ],
            stats: { brains: 1, brawn: 3, bravery: 3 },
            skills: ['Diplomacy', 'History'],
        },
        {
            roll: '11-12',
            name: 'Apothecary',
            description:
                'A learned man of herbs and potions. Make a Science roll:',
            rolls: [
                { roll: '2-7', description: 'No further event.' },
                { roll: '8-9', description: 'Roll for a Plot event.' },
                {
                    roll: '10+',
                    description:
                        'The apothecary becomes your Ally – roll for a Plot event.',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 1 },
            skills: ['Medicine', 'Science'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'william-shakespeare',
            name: 'William Shakespeare',
            description:
                'You have met the famous playwright and author William Shakespeare. Gain 1 VP. You try to talk with the bard to see if he knows anything useful. Make a Charm roll (with only female Characters adding their Charm).',
            information:
                '2–5: Shakespeare is busy writing a new play and brushes you off. 6–8: He knows about strange tales – roll for a Plot event, then leaves. 9+: He joins you as an Ally and knows about strange tales – roll for a Plot event.',
            stats: { brains: 4, brawn: 1, bravery: 2 },
            skills: ['Aware', 'Charm 2', 'History'],
        },
        {
            id: 2,
            image: 'queen-elizabeth',
            name: 'Queen Elizabeth I',
            description:
                "You have met the fearsome Queen with a retinue of soldiers. Gain 1 VP. Nearing the end of her reign, Elizabeth's bad humour is well known. You may either Evade or Talk.",
            information:
                'Evade – Roll 1D6: 1–4: The retinue pass by and event ends; 5–6: The soldiers attack (Brawn 7) unless you Surrender (Capture 9) or Evade using Running 7. Talk – Make a Diplomacy roll: 2–5: You unwittingly give insult and are captured at the Tower – Capture (9); 6–8: The Queen nods before departing; 9–10: You converse with the Queen – roll for Plot event; 11+: The Queen listens graciously – gain 1 Luck and a Soldier Ally (Brains 1, Brawn 3, Bravery 2) – roll for a Plot event.',
            stats: { brains: 3, brawn: 1, bravery: 4 },
            skills: ['Diplomacy', 'History'],
        },
    ],
}

const A005: Adventure = {
    id: 5,
    tag: 'A005',
    title: 'Ganymede',
    year: 2221,
    tardis: 8,
    era: 'Colonial Era',
    type: null,
    description:
        "The TARDIS has landed in the corridors of a remote mining station on Ganymede, the largest moon of Jupiter, as the human race expands further into the solar system. Conditions are harsh; the surface of the moon unstable, and the ore processing both difficult and dangerous, yet mankind's indomitable spirit still prevails – especially when the mineral deposits are so valuable to the companies that finance it...",
    stats: { danger: 1, knowledge: 5, vp: 0 },
    special:
        'When rolling for an Incident, if the 2D6 roll is less than Turn number, instead see the Tremors (Special Event).',
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3-4', name: 'Entity' },
        { roll: '5', name: 'Military' },
        { roll: '6', name: 'Criminal' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Ore Processing Plant',
            move: 8,
            terrain: null,
            description:
                'A huge hangar where raw materials from the surface are separated, graded and refined. Add +1 to Investigate Actions here. You may spend 3 Luck (reduced by 1 for each Science here, min 1) to find Vintarric Crystals (Special Events).',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'No event' },
                { roll: '4', description: 'Character event' },
                {
                    roll: '5-6',
                    description:
                        'If you make a Science 8 roll, gain +2 Knowledge',
                },
                { roll: '7', description: 'Mineralogist' },
            ],
        },
        {
            roll: '2',
            name: 'Science Laboratory',
            move: 7,
            terrain: null,
            description:
                'A small but well-equipped laboratory filled with specialised analysis apparatus for testing biological and mineral samples. If any TARDIS Character with Science remains here for 1 Turn, they gain +1 Brains until end of the Adventure. Add +1 to Research (Medicine or Science) and Plan (Medicine or Science) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1-2', description: 'Scientist' },
                { roll: '3-4', description: 'No event' },
                {
                    roll: '5-6',
                    description: 'Make Science 8 roll to gain +2 Knowledge',
                },
            ],
        },
        {
            roll: '3',
            name: 'Maintenance Area',
            move: 7,
            terrain: null,
            description:
                'An area full of partly-constructed or repaired equipment. If a TARDIS Character with Engineer remains here for 1 Turn, they gain +1 Brains until end of the Adventure or they draw a random Gadget card and play for 1 less Luck cost. Add +1 to Research (Engineer) and Plan (Engineer) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1-2', description: 'Engineer' },
                { roll: '3-4', description: 'No event' },
                {
                    roll: '5-6',
                    description:
                        'If you make an Engineer 8 roll, gain +2 Knowledge or add Engineer to any Prevent Action rolls',
                },
            ],
        },
        {
            roll: '4',
            name: 'Crew Quarters',
            move: 7,
            terrain: null,
            description:
                'The cramped and basic quarters where the personnel aboard the station try to relax. Add +1 to Seek Information Actions here. You can either spend 1 Luck to meet a random Character, spend 3 Luck to meet a Character of your choice (except Ood or Servo-robot) or spend 2 Luck to roll for a Plot event.',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-4', description: 'No event' },
                { roll: '5+', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Control Deck',
            move: 7,
            terrain: null,
            description:
                'The heart of the station where operations are co-ordinated so that the extracted minerals reach Earth as efficiently as possible. Add +1 to Prevent and Plan Actions here. If you make a Computers 8 roll, gain +1 Knowledge and cancel Dark at all Locations. If current Danger is 16+ you may spend 2 Luck to reduce Danger by 1.',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'No event' },
                { roll: '3-4', description: 'Character event' },
                { roll: '5+', description: 'Project Leader' },
            ],
        },
        {
            roll: '6',
            name: 'Drilling Rig',
            move: 8,
            terrain: null,
            description:
                'This is where massive drilling machinery smashes into the surface of the moon to extract the raw ore and minerals. A Character with Engineer is +2 Brawn here.',
            encounter: 'Engineer roll, +1 to roll if Discover Phase',
            rolls: [
                { roll: '2', description: 'Enemy Lair' },
                { roll: '3-4', description: 'Enemy encounter' },
                { roll: '5-6', description: 'No event' },
                { roll: '7', description: 'Servo-robot' },
                { roll: '8', description: 'Engineer' },
                { roll: '9', description: 'Mineralogist' },
                {
                    roll: '10-11',
                    description: 'Roll for Plot event or gain +1 Knowledge',
                },
                {
                    roll: '12+',
                    description: 'Vintarric Crystals (Special Events)',
                },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'Someone has been found murdered nearby and their corpse discovered. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Mysterious Runes',
            description:
                'You discover a set of strange symbols carved on the rock beneath the station. If you make a History 8 roll, gain +2 Knowledge. If you make a History 10 roll, instead reveal the Enemy.',
        },
        {
            roll: '7',
            name: 'Communications Fault',
            description:
                'You learn that the station has suffered a total communications blackout – you are cut off from any outside help. Gain +1 Knowledge. If you make a Computers 9 roll add +1 to Prevent Actions.',
        },
        {
            roll: '8',
            name: 'Geological Survey',
            description:
                'A geological report of the area beneath the surface of Ganymede may provide some clues. If you make a Computers 8 roll, gain +1 Knowledge. Roll 1D6 and on a result of 1–2, see Tremors (Special Event).',
        },
        {
            roll: '9',
            name: 'Buried in the Rock',
            description:
                'You learn that something sinister has been discovered in the rock strata beneath the station. Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
        },
        {
            roll: '10',
            name: 'Strange Mineral Deposits',
            description:
                'You learn that recently excavated ore has contained some remarkable new deposits. If you make a Science 8 roll either gain +1 Knowledge or see Vintarric Crystals (Special Event).',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'There have been strange readings from the Cargo Hold (Dark, Move 8). If you go there, you enter a shadowy bay filled with large containers of ore ready to be shipped back to Earth. Add +1 to Investigate Actions here. Encounter (Aware roll): 2–5: Enemy encounter; 6: Enemy event; 7: Brutal Death; 8: None; 9: Ood; 10–11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Ood',
            description:
                "A well-meaning, alien telepathic servitor joins you as an Ally, communicating through his glowing orb. However, if the Enemy is, or is revealed to be, an Entity, the Ood's eyes glow red and it attacks (Brawn 3). You can try to Evade with a Running 6 roll.",
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Engineer'],
        },
        {
            roll: '5',
            name: 'Medic',
            description:
                "A clever young physician who is worried about the crew's health. If you make a Charm 9 roll (adding +2 if Danger 6+), the Medic becomes an Ally – roll for a Plot event.",
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Medicine'],
        },
        {
            roll: '6',
            name: 'Engineer',
            description:
                'A talented technician that works on the station. If you make a Charm 10 roll (adding +2 if Danger 6+), the Engineer becomes an Ally – roll for a Plot event. You may also automatically Ally any Servo-Robot you encounter.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Engineer'],
        },
        {
            roll: '7',
            name: 'Security Guards',
            description:
                'A team of station guards. Make a Charm roll (-1 per Stealth, +3 if Danger 10+):',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Hostile – make a Running 7 roll or become Captured (7) or Attacked (Brawn 8).',
                },
                { roll: '6-9', description: 'No further event.' },
                {
                    roll: '10+',
                    description:
                        'The guards become your Allies (1D3+1 in number, each Brains 0, Brawn 2, Bravery 2).',
                },
            ],
            stats: { brains: 0, brawn: 2, bravery: 2 },
        },
        {
            roll: '8',
            name: 'Scientist',
            description:
                'A bright laboratory analyst. If you make a Charm 10 roll (adding +2 if Danger 6+), the Scientist becomes an Ally – roll for a Plot event. The Scientist gains +1 to Research (Science) Actions.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Science'],
        },
        {
            roll: '9',
            name: 'Project Leader',
            description:
                'Calculating and efficient, she just wants to get her job done. Make a Charm roll (add +2 if the Enemy is revealed):',
            rolls: [
                { roll: '2-5', description: 'Captured (7).' },
                {
                    roll: '6-9',
                    description: 'She is not convinced by you – event ends.',
                },
                {
                    roll: '10+',
                    description:
                        'Becomes an Ally – roll for a Plot event. Can automatically Ally any Characters encountered.',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 3 },
            skills: ['Computers'],
        },
        {
            roll: '10',
            name: 'Mineralogist',
            description:
                'A reserved and rather cold individual. If you make a Charm 10 roll, the Mineralogist becomes an Ally – roll for a Plot event and see Vintarric Crystals below. The Mineralogist is automatically selected in a Traitor Incident.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Science'],
        },
        {
            roll: '11-12',
            name: 'Servo-Robot',
            description:
                'A basic robot used for maintenance or menial jobs on the station. Roll 1D6:',
            rolls: [
                {
                    roll: '1-2',
                    description:
                        'It attacks (Brawn 3), but you may Evade with a Running 6 roll.',
                },
                {
                    roll: '3-4',
                    description: 'It ignores you – event ends.',
                },
                {
                    roll: '5-6',
                    description: 'The robot becomes your Ally.',
                },
            ],
            stats: { brains: 0, brawn: 2, bravery: 3 },
            skills: ['Engineer'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'vintarric-crystals',
            name: 'Vintarric Crystals',
            description:
                'You discover some strange, glowing crystals that may have some very useful properties. Characters that possess Vintarric Energy Crystals may cancel the Dark keyword at any Location or Encounter and gain +2 in any Conflict with Weeping Angels. If the Character has Aware 2, reveal the Enemy or gain +1 Knowledge.',
            information:
                'You may discard the crystals to add +3 in any Prevent roll that includes Science.',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: 'tremors',
            name: 'Tremors',
            description:
                'The floor beneath you suddenly shifts as the station is hit by powerful seismic waves from beneath the surface. Roll 1D6 for affected Location (rolling twice if Danger 15+). If you have Characters at affected Locations, roll 1D6 for each Location.',
            information:
                '1–2: Characters at the Location(s) are trapped until they or any Characters attempting to rescue them make a Brawn 10 roll. 3–4: No further effect. 5: Enemy Lair is revealed. 6: Choose a Character to be killed. Any bonuses to Actions at affected Locations are cancelled until you make an Engineer 8 roll as an Action at that Location or at the Control Deck.',
            stats: null,
            skills: [],
        },
    ],
}

const A006: Adventure = {
    id: 6,
    tag: 'A006',
    title: 'Malphasos Beta',
    year: 2384,
    tardis: 9,
    era: 'Colonial Era',
    type: 'Wilderness',
    description:
        'The TARDIS has landed on an unexplored and remote planet in the Andromeda galaxy. Bleak mountains and steep, rolling hills stretch far into the distance under a heavy sky that threatens to burst into heavy rain. A keen wind picks up as you pick your way through scattered rocks and you shiver with the cold. Is the planet totally deserted? Or does it hold a dark secret from millennia past...?',
    stats: { danger: 0, knowledge: 6, vp: 0 },
    special:
        'When Enemy Goal revealed, see instead Obtain Advanced Weaponry (Special Events). Night will fall at the start of Turn 1D6+2 and last 3 Turns. If at Cold Location at the start of a Turn, kill a Human Character with Brawn 1 unless you lose 1 Luck (2 Luck if Night).',
    enemy: [
        { roll: '1-3', name: 'Military' },
        { roll: '4-5', name: 'Criminal' },
        { roll: '6', name: 'Time Lord' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Destroyed Camp',
            move: 9,
            terrain: 'Exterior',
            description:
                'You find the remains of a camp, now blackened and burnt. Add +1 Danger (once only). Add +1 to Investigate Actions here. You may attempt an Aware 7 roll to gain 1 Clue (once only) to finding the Lost Valley Location.',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1-2', description: 'Enemy encounter' },
                { roll: '3', description: 'No event' },
                {
                    roll: '4',
                    description: 'Character event (with +2 to roll)',
                },
                {
                    roll: '5+',
                    description:
                        'If you make an Aware 8 roll, gain +1 Knowledge or roll for a Plot event',
                },
            ],
        },
        {
            roll: '2',
            name: 'Thick Woods',
            move: 9,
            terrain: 'Exterior',
            description:
                'You have entered a patch of densely packed trees that block much of the sunlight. You must pay 1 Luck or the Location becomes Dark. You may attempt an Aware 9 roll to gain 1 Clue (once only) to finding the Lost Valley Location.',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3-4', description: 'Lost (Incident)' },
                { roll: '5', description: 'No event' },
                {
                    roll: '6+',
                    description: 'Character event (with -1 to roll)',
                },
            ],
        },
        {
            roll: '3',
            name: 'Grassy Plains',
            move: 6,
            terrain: 'Exterior',
            description:
                'You have entered a region of flat grassland where the sun is warmer. Add +1 to Explore and Move Actions, but cannot Investigate here. You may attempt an Aware 10 roll to gain 1 Clue (once only) to finding the Lost Valley Location.',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'No event' },
                { roll: '5', description: 'Plot event' },
                {
                    roll: '6+',
                    description: 'Character event (with +1 to roll)',
                },
            ],
        },
        {
            roll: '4',
            name: 'Craggy Mountains',
            move: 7,
            terrain: 'Cold, Exterior',
            description:
                'You have reached the imposing mountain range you saw earlier from afar and the keen wind grows ever bitter. Add +1 Danger if Night. Add +2 to Explore and Move Actions, but cannot Investigate here. You may attempt an Aware 7 roll to gain 1 Clue (once only) to finding the Lost Valley Location.',
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4-6', description: 'No event' },
                { roll: '7', description: 'Lost (Incident)' },
            ],
        },
        {
            roll: '5',
            name: 'Winding River',
            move: 7,
            terrain: 'Water, Exterior',
            description:
                "A fast-flowing wide river cuts across the landscape and you'll need to find somewhere to cross. Add +1 to Explore Actions but -1 to Move Actions. You may not Investigate here. You may attempt an Aware 9 roll to gain 1 Clue (once only) to finding the Lost Valley Location.",
            encounter: 'D6, +1 to roll if Discover Phase',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'Incident' },
                { roll: '4-5', description: 'No event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '6',
            name: 'Lost Valley',
            move: 'Must have 4 Clues',
            terrain: 'Exterior',
            description:
                'You have discovered a deep, hidden valley that twists down into the landscape, an eerie mist crawling through it. Add +1 Danger. Reveal the Enemy and Goal.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-5', description: 'Enemy encounter' },
                { roll: '6', description: 'Enemy event' },
                { roll: '7', description: 'Incident' },
                { roll: '8', description: 'No event' },
                { roll: '9', description: 'Character event' },
                {
                    roll: '10+',
                    description: 'Find Vault of Kadarr (Special Events)',
                },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Alien Transmitter',
            description:
                'You discover an automatic beacon sending out what appears to be a homing signal. If you can make an Engineer 7 roll, choose to gain +1 Knowledge or reduce Danger by -2.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'You have found a mangled corpse of a man in an environment suit. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Dropped Data-pad',
            description:
                'You discover a damaged data-pad lying on the ground. If you make a Computers 6 roll gain +1 Knowledge. If you make a Computers 9 roll, instead reveal the Enemy.',
        },
        {
            roll: '7',
            name: 'Fables',
            description:
                'You remember a legend about an alien race from this part of the galaxy. Might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
        },
        {
            roll: '8',
            name: 'Geological Survey',
            description:
                'Taking some rock and soil samples may provide some clues. If you make a Science 8 roll, gain +1 to your next Move Action and choose to either gain +1 Knowledge or 1 Clue.',
        },
        {
            roll: '9',
            name: 'Light in the Sky',
            description:
                'You see a strange light streaking across the sky. Could it relate to something sinister? Make a successful Brains 11 roll (+1 to roll if Night) to reveal the Enemy, or gain +1 Knowledge if you fail.',
        },
        {
            roll: '10',
            name: 'Energy Barrier',
            description:
                'You discover that an energy barrier has been created across the local area. Gain +1 Knowledge but you may not take any Move Actions until you make an Engineer 9 roll (+1 per attempt).',
        },
        {
            roll: '11-12',
            name: 'Caves',
            description:
                'You discover the entrance to a small cave where you hear dripping water within (Dark Location, Move 8). If you enter, add +2 to Investigate Actions and Enemy Action rolls here. All Evade options gain +1 to the roll. Encounter (Aware roll): 2–4: Enemy encounter; 5: Malphasian; 6: Enemy event; 7: Brutal Death; 8: None; 9: Alien Rats; 10–11: A fall of rocks kills a Character of your choice unless you pay 2 Luck; 12+: Tunnel – move to Lost Valley Location.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Alien Rats',
            description:
                'You are attacked by a pack of large rats that scurry towards you with a terrifying squeal. Roll 1D6+1 (or +3 if Dark) for the number of rats encountered, each Brains 0, Brawn 1, Bravery 1 (Creature). You may try to Evade with a Running 9 roll (-2 if Dark), or you must start a Conflict (Attack).',
            stats: { brains: 0, brawn: 1, bravery: 1 },
        },
        {
            roll: '5',
            name: 'Malphasian',
            description:
                'A small and timid native with large eyes and pale, rocky skin. If you make a Charm 9 roll it becomes an Ally (+1 to Move Actions) – roll for a Plot event or gain 1 Clue.',
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Stealth'],
        },
        {
            roll: '6',
            name: 'Soldiers',
            description:
                'A military expedition. Make a Charm roll (+1 if Enemy revealed, +1 if Danger 10+):',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'Hostile – make a Running 7 roll or become Captured (7) or Attacked (Brawn 10).',
                },
                {
                    roll: '7-9',
                    description:
                        'They question you with suspicion but let you go – you may pay 1 Luck to gain +1 Knowledge.',
                },
                {
                    roll: '10+',
                    description:
                        'They become Allies (1D3+1; captain is Brains 1, Brawn 3, Bravery 3, Running; others are Brains 0, Brawn 3, Bravery 2) – roll for a Plot event.',
                },
            ],
            stats: { brains: 1, brawn: 3, bravery: 3 },
        },
        {
            roll: '7',
            name: 'Survivor',
            description:
                'A badly wounded survivor of an expedition. Unless you make a Medicine 7 roll, the Survivor dies – lose 1 Luck (or 2 Luck but roll for a Plot event). If treated, the Survivor joins you as an Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
        },
        {
            roll: '8',
            name: 'Explorer',
            description:
                'A brave pilot that has crashed here and who is very glad to see you. She becomes your Ally and adds +1 to Move Actions at Exterior Locations. Roll for Plot event.',
            stats: { brains: 2, brawn: 2, bravery: 3 },
            skills: ['Charm', 'Engineer', 'Pilot'],
        },
        {
            roll: '9-10',
            name: 'Survey Team',
            description:
                'A small scientific expedition. Make a Charm roll (+2 if the Enemy is revealed):',
            rolls: [
                { roll: '2-5', description: 'Captured (7).' },
                {
                    roll: '6-9',
                    description:
                        'They are not convinced and leave – you may pay 1 Luck to roll for a Plot event.',
                },
                {
                    roll: '10+',
                    description:
                        'They join you as Allies (1D3+1, each Brains 2, Brawn 2, Bravery 2, choose Engineer, History or Science). Add +1 to Move Actions due to their geo-locaters. Roll for a Plot event or gain +1 Knowledge or 1 Clue.',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 2 },
        },
        {
            roll: '11-12',
            name: 'River Song',
            description:
                'You have encountered the glamorous but mysterious archaeologist. Gain +2 Luck and play Friend card.',
            stats: { brains: 3, brawn: 1, bravery: 3 },
            skills: ['Aware', 'Charm', 'History', 'Running', 'TARDIS'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'vault-of-the-kadarr',
            name: 'Vault of the Kadarr',
            description:
                'May only Move here from the Lost Valley and must make either a Brawn or Engineer 12 roll to enter the Vault (Dark Location). The Vault is filled with weaponry of terrifying power. Add +1 Danger. While inside, add +1 to any Plan, Challenge and Rescue Actions but -1 to Evade options. Add +1 to the Enemy Action roll each Turn.',
            information:
                'Encounter (D6): 1: Security System – roll 1D6 for each Character (killed on roll of 1); 2: Enemy encounter; 3: Enemy event; 4: No event; 5: Activate computer system – gain +1 to Prevent Actions; 6: Discover weaponry – each of your Characters gains +2 Brawn (not cumulative).',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: null,
            name: 'Obtain Advanced Weapon Technology',
            description:
                'You discover that the Enemy wishes to locate the Vault of the Kadarr, the armoury of alien weapon-smiths from the birth of the universe. With this technology, the Enemy could be unstoppable! You must reach the Vault by finding the Lost Valley, entering the Vault and then choose one of two options.',
            information:
                'Trap Enemy Inside the Vault: Make a Computers 10 roll to activate the Vault system, then take a Prevent Action (adding Running but subtract Danger of Enemy). If you fail, have an Enemy encounter and add +1 Danger. Use Kadarr Weapons Against Enemy: Make an Aware roll, adding half the result (round down) to the Brawn of each of your Characters. Then have an Enemy encounter (automatically add a Leader) and win an (Attack) Conflict.',
            stats: null,
            skills: [],
        },
    ],
}

const A007: Adventure = {
    id: 7,
    tag: 'A007',
    title: 'London',
    year: 2022,
    tardis: 6,
    era: 'Post-Modern Era',
    type: null,
    description:
        'The TARDIS has landed in the streets of modern London which is bustling with a myriad of tourists and shoppers from across the globe. Red London buses and black taxi cabs drive along the packed roads passing familiar iconic landmarks such as Big Ben and the London Eye. It looks so usual and ordinary, but not everything is as it seems and for someone, normal life might soon be changed forever...',
    stats: {
        danger: 0,
        knowledge: 6,
        vp: 1,
    },
    special:
        'You may Tour London as an Action (Special Events). If you have no Companion, you may spend 1 Luck on the first Character event to instead encounter any Companion from this Era. London Streets: (Exterior, Move 2) You stroll along the packed streets of the capital city, avoiding the heavy traffic whilst enjoying the iconic surroundings. The familiar and reassuring chimes of Big Ben fill the air. Add +1 to Explore Actions but you may not Research here. You may spend 1 Luck to jump on a bus and gain +2 to a Move Action from here. Encounter (D6): 1-2: Incident; 3-4: No further event; 5-6: Character event.',
    enemy: [
        { roll: '1-2', name: 'Military' },
        { roll: '3-4', name: 'Chameleon' },
        { roll: '5', name: 'Criminal' },
        { roll: '6', name: 'Time Lord' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Tower of London',
            move: 8,
            terrain: 'Exterior, Monument',
            description:
                'The amazing castle that stands in the centre of the city and which also contains the secret base of UNIT. Add +2 to Plan Actions here. If you have a unique UNIT Character, you may see Calling UNIT (Special Events).',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Character event' },
                { roll: '2-3', description: 'None' },
                {
                    roll: '4-5',
                    description: 'Gain +1 Knowledge or roll for Plot event',
                },
                {
                    roll: '6',
                    description:
                        'UNIT - If you have a Character with UNIT, see Special Events. If not, make Diplomacy 8 roll to see Special Events or be Captured (8).',
                },
            ],
        },
        {
            roll: '2',
            name: 'Covent Garden Underground',
            move: 7,
            terrain: 'Underground',
            description:
                'A typical station that is part of the extensive Underground rail network beneath London. This Location is Dark unless you spend 1 Luck. If Danger less than 10, you may spend 1 Luck to Move from here to any Location as an Action. If the Enemy is The Great Intelligence, add +1 Danger and to number of Yeti encountered.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'None' },
                { roll: '4', description: 'Plot event' },
                { roll: '5+', description: 'Character event' },
            ],
        },
        {
            roll: '3',
            name: 'Westminster',
            move: 7,
            terrain: 'Exterior, Monument',
            description:
                'One of the most recognisable areas in the city, from Big Ben to the iconic bridge spanning the River Thames. Add +1 to Investigate Actions here. You may spend 1 Luck to either have a Character event or add +2 to a Move Action next turn. If the Enemy are Daleks, add +1 Danger and +1 to number of Daleks encountered.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Plot event' },
                { roll: '5', description: 'Character event' },
                { roll: '6+', description: 'Gain 1 Luck' },
            ],
        },
        {
            roll: '4',
            name: "St. Paul's Cathedral",
            move: 7,
            terrain: 'Exterior, Monument',
            description:
                'An iconic feature of the London skyline with the incredible dome and beautiful architecture. Add +1 to Investigate Actions here. You may spend 1 Luck to gain 1 VP (once only). If the Enemy are Cybermen, add +1 Danger and +1 to number of Cybermen encountered.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'None' },
                { roll: '5', description: 'Plot event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Oxford Street & London Eye',
            move: 6,
            terrain: 'Exterior, Monument',
            description:
                'The best shopping in the city and the massive observation wheel is a popular tourist attraction offering the best view of London. Add +1 to Prevent Actions here. If the Enemy are Autons, add +1 Danger.',
            encounter: '2D6 (+2 to roll if Discover Phase)',
            rolls: [
                { roll: '2-3', description: 'Enemy Lair' },
                { roll: '4', description: 'Enemy encounter' },
                { roll: '5', description: 'Enemy event' },
                { roll: '6-7', description: 'None' },
                {
                    roll: '8-9',
                    description:
                        'Add +1 to Move Actions next Turn or +1 Knowledge',
                },
                { roll: '10+', description: 'Character event' },
            ],
        },
        {
            roll: '6',
            name: 'National Museum',
            move: 7,
            terrain: 'Museum',
            description:
                'This houses many rare, precious artefacts and artworks in display cases and galleries. A Character with History is +1 Brains here and may Study with +1 to roll. Add +1 VP if Profit Goal. You may Seek Information here using History.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Plot event' },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Character event' },
                {
                    roll: '5-6',
                    description:
                        'Find ancient relic - make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success',
                },
                { roll: '7', description: 'Gain +1 Knowledge' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Captive',
            description:
                'Someone or something important has been captured. If you Move to a random Location then do a Rescue (8+) Action, roll 1D6: 1-2: Gain +1 Knowledge; 3-4: Character event; 5-6: Enemy encounter.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'Someone has been found murdered nearby and a corpse discovered. Roll 1D6 and if result is a 1, discard random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Alien Hoax',
            description:
                'You discover a newspaper is reporting that alien ships have been seen in the sky but dismissing it as a hoax... If you have 10 Brains then reveal the Enemy.',
        },
        {
            roll: '7',
            name: 'News Report',
            description:
                'You catch the latest report from Trinity Wells on television – either all your TARDIS Characters gain Aware until the end of the Adventure OR gain +1 Knowledge.',
        },
        {
            roll: '8',
            name: 'Front',
            description:
                "You discover that a large and reputable organisation is really a front for the Enemy's secret plans. You may reveal the Enemy or gain +1 Knowledge. Add +1 to Seek Information Actions using Charm or Stealth.",
        },
        {
            roll: '9',
            name: 'Missing Persons',
            description:
                'Some people have been recently vanishing from the streets of London in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
        },
        {
            roll: '10',
            name: 'Red Alert',
            description:
                'The city is on maximum alert for some reason. Everyone is suspicious and nervous. Add +1 to Investigate Actions. Add +1 to the number of Police/UNIT Troops encountered with -1 to Charm rolls.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-4: Roll for a random Location and gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (rolling for Enemy first); 5-6: The Shard (Exterior, Move 7) The tallest London skyscraper that promises an incredible experience in events, bars and restaurants. Add +2 to Investigate Actions here. Add +1 to Enemy Action rolls here. Encounter (2D6): 2-4: Enemy encounter (Lair); 5: Enemy event; 6: No event; 8-9: Gain 1 Luck or spend 1 Luck for +2 Knowledge; 10-12: Character event.',
        },
    ],
    characters: [
        {
            roll: '2-3',
            name: 'Criminal',
            description: 'A shady-looking individual. Make a Stealth roll:',
            stats: { brains: 1, brawn: 2, bravery: 1 },
            skills: ['Stealth'],
            rolls: [
                {
                    roll: '2-4',
                    description: 'Attacked (Brawn 3)',
                },
                {
                    roll: '5-6',
                    description: 'Lose 2 Luck or 1 Gadget',
                },
                {
                    roll: '7',
                    description: 'Add +1 Danger',
                },
                {
                    roll: '8',
                    description: 'No event.',
                },
                {
                    roll: '9-10',
                    description:
                        'Word on the street - pay 1 Luck for a Plot event; 11+: He becomes your Ally - roll for a Plot event. The criminal will leave if you encounter Police or UNIT.',
                },
                {
                    roll: '11+',
                    description:
                        'He becomes your Ally - roll for a Plot event. The criminal will leave if you encounter Police or UNIT.',
                },
            ],
        },
        {
            roll: '4',
            name: 'Technician',
            description:
                'A talented computer analyst. If you make a Charm 9 roll (adding current Danger), the analyst becomes your Ally – roll for a Plot event. Add +1 to Research (Computers) Actions.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Computers'],
        },
        {
            roll: '5',
            name: 'Police',
            description:
                'A pair of local policemen takes an interest. Make a Charm roll (-1 per Stealth, +3 if Danger 12+):',
            stats: { brains: 1, brawn: 2, bravery: 2 },
            skills: ['Running'],
            infomation:
                'Each Police Ally: +1 to Investigate, Move and Find Help Actions.',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Wanted for questioning – make Running 7 roll or Captured (6) or Attacked (Brawn 5).',
                },
                {
                    roll: '6-9',
                    description: 'No further event.',
                },
                {
                    roll: '10+',
                    description: 'The Police become your Allies.',
                },
            ],
        },
        {
            roll: '6',
            name: 'Businessman',
            description:
                'A shrewd banker that works in the London financial sector. Pay 1 Luck or make a Charm 10 roll for the businessman to join you as an Ally - roll for a Plot event. He is automatically selected in a Traitor Incident.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Diplomacy'],
            infomation: '+1 to Seek Information Actions.',
        },
        {
            roll: '7',
            name: 'Tourist',
            description:
                'A young foreign student on their first visit to London. Pay 1 Luck to gain a Plot event. If you make a Charm 8 roll the tourist becomes an Ally but does not count as a native Character.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Running'],
        },
        {
            roll: '8',
            name: 'Tour Guide',
            description:
                'A professional guide who shows tourists around London. If you make a Charm 10 roll (adding current Danger), the guide becomes an Ally. Add +1 to Move Actions.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Charm', 'History'],
        },
        {
            roll: '9',
            name: 'Reporter',
            description:
                'An intrepid journalist after a story. If you make Charm 8 roll, she becomes an Ally - roll for Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Charm', 'Running'],
        },
        {
            roll: '10',
            name: 'Professional',
            description:
                'A young but eager professional on a break from work. If you make a Charm 9 roll (+2 if Enemy revealed), the professional becomes an Ally.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Engineer or Medicine or Science'],
        },
        {
            roll: '11-12',
            name: 'Old Friend',
            description:
                'You meet a former Companion native to this Era. Gain +2 Luck and put the Companion card into play.',
        },
    ],
    specials: [
        {
            id: 1,
            image: 'touring-london',
            name: 'Touring London',
            description:
                'You decide to hop on a red bus, hire a black cab, use the London Underground or simply walk the streets to tour the city and visit some famous sites.',
            information:
                'You may choose to Relax at any Monument Location. In addition to any Relax Action results, if you spend a complete Turn at a Monument, you may either gain 1 VP or 1 Luck. If you visit at least 3 Monuments, also gain 1 Idea card and an additional 1 VP.',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: 'calling-unit',
            name: 'Calling UNIT',
            description:
                'If you have a Character with UNIT you may automatically Move to Tower of London Location.',
            information:
                'Add +1 to Research Actions there. You may spend 2 Luck (each) to encounter Kate Stewart and Osgood. You may add Diplomacy to a Find Help Action there (with +1 if Dilemma Phase or +2 if Defeat Phase - max +4). If the result of the Find Help Action is 12+, you may instead recruit a UNIT Squad and allocate the Squad to a Location of your choice. If you then have an Enemy encounter at that Location, you may discard the entire Squad and cancel the Enemy encounter.',
            stats: { brains: 0, brawn: 3, bravery: 3 },
            skills: ['Running', 'UNIT'],
        },
    ],
}

const A008: Adventure = {
    id: 8,
    tag: 'A008',
    title: 'Eden',
    year: 2122,
    tardis: 10,
    era: 'Near Future Era',
    type: 'Wilderness',
    description:
        'The TARDIS has landed on Eden, a lush jungle planet of green light and orange sunsets. You are surrounded by dense trees wound by thick creepers and vines, and huge plants with garish red stalks and leaves. The air is still and humid, alive with buzzing of insects as the roar of alien creatures echo from the darkness. But Eden holds an even deadlier secret...',
    stats: {
        danger: 1,
        knowledge: 5,
        vp: 2,
    },
    special:
        'The Move values shown on Locations indicate the number needed to leave that Location. Roll for a random Location when you do. Night will fall at the start of Turn 1D3+3 and last 4 full Turns. Lush Jungle: (Exterior, Move 7) You push your way through a tropical jungle of twisted trees, slithering creepers and huge vines. The dense foliage competes for space and almost completely blocks the light, leaving only a dim twilight of orange. You may not Investigate here. Encounter (D6, -1 to roll if Night): 0-1: Mandrels (see Special Events); 2: Enemy encounter (Mandrels if Discover Phase); 3: Incident; 4-5: None; 6: Character event.',
    enemy: [
        { roll: '1-2', name: 'Criminal' },
        { roll: '3', name: 'Villain' },
        { roll: '4-5', name: 'Military' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Dense Jungle',
            move: 9,
            terrain: 'Exterior',
            description:
                'This part of the jungle is even more oppressive with thick, alien vegetation pressing in at you from all sides and the ground covered in moss and garish fronds. You must spend 1 Luck point or this Location becomes Dark.',
            encounter: 'D6 (-1 to roll if Night)',
            rolls: [
                { roll: '0-1', description: 'Mandrels (see Special Events)' },
                {
                    roll: '2',
                    description: 'Enemy encounter (Mandrels if Discover Phase)',
                },
                { roll: '3', description: 'Lost (Incident)' },
                { roll: '4', description: 'Hostile Vegetation' },
                { roll: '5', description: 'None' },
                { roll: '6', description: 'Character event' },
            ],
        },
        {
            roll: '2',
            name: 'Jungle River',
            move: 8,
            terrain: 'Water, Exterior',
            description:
                'You have found a wide and fast-flowing river that cuts through the jungle. Getting across might prove difficult. Take a -1 penalty to Move Actions from here unless you spend 1 Luck per Character in group or can make an Aware 9 roll. You may not Investigate here.',
            encounter: 'D6 (-1 to roll if Night)',
            rolls: [
                { roll: '0-1', description: 'Mandrels (see Special Events)' },
                {
                    roll: '2',
                    description: 'Enemy encounter (Mandrels if Discover Phase)',
                },
                { roll: '3', description: 'Enemy Event' },
                { roll: '4', description: 'None' },
                { roll: '5', description: 'Character event' },
                { roll: '6', description: 'Incident' },
            ],
        },
        {
            roll: '3',
            name: 'Jungle Caves',
            move: 9,
            terrain: 'Dark',
            description:
                'You discover the entrance to a small cave where you hear dripping water within. Add +2 to Investigate Actions and Enemy Action rolls here. All Evade options gain +1 to the roll.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-4', description: 'Enemy encounter' },
                { roll: '5', description: 'Insect' },
                { roll: '6', description: 'Enemy event' },
                { roll: '7', description: 'Brutal Death' },
                { roll: '8', description: 'None' },
                { roll: '9', description: 'Character event' },
                {
                    roll: '10-11',
                    description:
                        'A fall of rocks kills a Character of your choice unless you pay 2 Luck',
                },
                {
                    roll: '12+',
                    description: 'Tunnel – move to random Location',
                },
            ],
        },
        {
            roll: '4',
            name: 'Jungle Ravine',
            move: 8,
            terrain: 'Exterior',
            description:
                'You have stumbled across a deep ravine, but a huge fallen tree has collapsed, forming an unstable bridge to the other side. If you cross, each Character must make a Running 6 roll (adding Brawn) or fall into the ravine and be killed. If you do not cross, Move Actions have a -2 penalty here. Evade options have -2 penalty unless you try to cross ravine.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Mandrels (see Special Events)' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Plot event' },
                { roll: '5-6', description: 'None' },
            ],
        },
        {
            roll: '5',
            name: 'Temple Ruins',
            move: 8,
            terrain: 'Dark',
            description:
                'A partly collapsed, ancient stone temple buried in the jungle with crumbling passages that twist downwards into the darkness. Add +1 to Investigate Actions here.',
            encounter: 'D6 adding Aware',
            rolls: [
                { roll: '1-2', description: 'Lost (Incident)' },
                { roll: '3', description: 'Abandoned – no event' },
                { roll: '4', description: 'Enemy Lair' },
                { roll: '5', description: 'Enemy encounter' },
                {
                    roll: '6',
                    description: 'Gain +1 Knowledge or roll for Plot event',
                },
                {
                    roll: '7+',
                    description:
                        'Gain +2 Knowledge but +1 Danger and +1 Enemy Action rolls whilst here',
                },
            ],
        },
        {
            roll: '6',
            name: 'Jungle Swamp',
            move: 10,
            terrain: 'Water, Exterior',
            description:
                'Any firm ground soon gives way to marsh and pools of fetid, stagnant water get larger to eventually form an endless swamp.',
            encounter: 'D6 (-1 to roll if Night)',
            rolls: [
                { roll: '0-1', description: 'Mandrel (Special Event)' },
                { roll: '2', description: 'Lost (Incident)' },
                { roll: '3', description: 'Insect' },
                { roll: '4', description: 'Enemy encounter' },
                {
                    roll: '5',
                    description:
                        'Marsh – Roll 1D6 for each Character, on a result of 1 the Character is trapped. Other Characters must make a Brawn 8 roll to rescue them or they are pulled under and are killed',
                },
                { roll: '6', description: 'No event' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Decomposing Creature',
            description:
                'You discover the powdery corpse of an alien creature that almost decomposes in front of your eyes. Make a Science 8 roll and a Medicine 8 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'You find the mangled corpse of a man in an environment suit, gouged by huge claw marks. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Dropped Data-pad',
            description:
                'You discover a damaged data-pad lying on the ground. If you make a Computers 6 roll gain +1 Knowledge. If you make a Computers 9 roll, instead reveal the Enemy.',
        },
        {
            roll: '7',
            name: 'Alien Transmitter',
            description:
                'You discover an automatic beacon sending out what appears to be a homing signal. If you can make an Engineer 7 roll, choose to gain +1 Knowledge or reduce Danger by -2.',
        },
        {
            roll: '8',
            name: 'Secret Forces',
            description:
                'You discover clues that might possibly reveal the Enemy, but also that the Enemy is hiding on the planet. Make a successful Brains 10 roll to reveal the Enemy. If Enemy is Military, add +1 Danger and +1 number encountered.',
        },
        {
            roll: '9',
            name: 'Relic',
            description:
                'You discover a mysterious artefact buried in the mud – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '10',
            name: 'Sterile Area',
            description:
                'You discover a strange area in the jungle that looks bare and completely razed. Make a successful Brains 12 roll (adding Science) to gain +1 Knowledge (+2 Knowledge if Brains 15 roll).',
        },
        {
            roll: '11-12',
            name: 'Abandoned Pod',
            description:
                'You discover the remains of a small pre-fabricated survival pod that a planetary expedition might have used, but it seems long-since abandoned. Add +2 to Investigate Actions here. Roll 1D6 to see what you find (once only): 1: Enemy encounter; 2: It is empty; 3: Survivor; 4: Dropped Data-pad; 5: Find some clues – gain +1 Knowledge; 6: A number of bodies, all bearing terrible wounds from huge claws. Add +1 Danger. If you make a Medicine 8 roll, gain +1 Knowledge. Also roll 1D6 and on a 1-2, meet Survey Team but with -2 to Charm roll.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Hostile Vegetation',
            description:
                'You are attacked by a plant creature (Brawn 1D3+1) that is determined to have one of your Characters (randomly selected) for dinner. If you have other Characters with a total Brawn of at least twice that of the plant creature, the victim can be pulled free, otherwise start an (Attack) Conflict.',
        },
        {
            roll: '5',
            name: 'Mercenaries',
            description:
                'A tough group of soldiers. Make a Charm roll (+1 if Enemy revealed, +1 if Danger 15+):',
            stats: { brains: 0, brawn: 3, bravery: 2 },
            rolls: [
                {
                    roll: '2-8',
                    description:
                        'ostile – make a Running 8 roll or become Captured (8) or Attacked (Brawn 10)',
                },
                {
                    roll: '9-10',
                    description:
                        'hey question you with suspicion but let you go – you may pay 1 Luck to gain +1 Knowledge',
                },
                {
                    roll: '11+',
                    description:
                        'They become uneasy Allies (1D3+1 in number; leader is Brains 1, Brawn 3, Bravery 3)',
                },
            ],
        },
        {
            roll: '6',
            name: 'Fugitive',
            description:
                'Someone that is avoiding interplanetary justice for unknown reasons. Ignore if with any Ally, otherwise make a Charm roll (-2 if Profit Goal):',
            stats: { brains: 1, brawn: 1, bravery: 2 },
            skills: ['Running', 'Stealth'],
            rolls: [
                {
                    roll: '2-3',
                    description:
                        'Attacked (Brawn 2); 4-5: Betrayed – Captured (6)',
                },
                {
                    roll: '6-9',
                    description:
                        'The fugitive runs into the jungle no further event',
                },
                {
                    roll: '10+',
                    description:
                        'The fugitive becomes your Ally – roll for Plot event.',
                },
            ],
        },
        {
            roll: '7',
            name: 'Survivor',
            description:
                'A badly wounded survivor of an expedition. Unless you make a Medicine 7 roll however, the survivor dies – lose 1 Luck (or 2 Luck but roll for a Plot event). If treated, the survivor joins you as an Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Engineer or Pilot or Science'],
        },
        {
            roll: '8',
            name: 'Explorer',
            description:
                'A brave pilot that has crashed here and who is very glad to see you. She becomes your Ally. She adds +1 to Move Actions at Exterior Locations. Roll for a Plot event.',
            stats: { brains: 2, brawn: 2, bravery: 3 },
            skills: ['Charm', 'Engineer', 'Pilot'],
        },
        {
            roll: '9-10',
            name: 'Survey Team',
            description:
                'A small scientific expedition. Make a Charm roll (+2 if the Enemy is revealed):',
            stats: { brains: 2, brawn: 2, bravery: 2 },
            skills: ['Engineer / History / Science'],
            rolls: [
                {
                    roll: '2-5',
                    description: 'Captured (7)',
                },
                {
                    roll: '6-9',
                    description:
                        'They are not convinced by you and leave - event ends but you may pay 1 Luck to roll for a Plot event.',
                },
                {
                    roll: '10+',
                    description:
                        'They join you as Allies (roll 1D3+1 for number). Add +1 to Move Actions due to their geo-locaters. Roll for a Plot event or gain +1 Knowledge.',
                },
            ],
        },
        {
            roll: '11-12',
            name: 'Insect',
            description:
                'A large glowing insect flies from the gloom and attaches itself to the neck of a randomly selected Character. Unless the Character makes Brawn 10 roll (add Bravery), the Character collapses for a full Turn and can take no Action.',
        },
    ],
    specials: [
        {
            id: 1,
            image: 'mandrels',
            name: 'Mandrels',
            description:
                'You have encountered 1D3 Mandrels that advance towards you out of the gloom with a terrifying roar. Mandrels have large eyes that glow green and long, powerful arms that end in huge, sharp claws. They are however, susceptible to ultrasonic frequencies which have been known to calm them.',
            information:
                'If you have a sonic screwdriver and spend 1 Luck per Mandrel, you can pacify the creatures and escape. If not, you must make a Running 8 roll or start (Attack) Conflict. If you win the Conflict you discover the terrible secret of the Mandrels as the when the body of the creatures decompose, they create raw Vraxoin – a powerful and hugely addictive drug. If a Profit Goal is revealed, add +1 Danger and +1 to Enemy Action rolls. If you can make a Medicine 9 roll (adding Science), gain +2 Knowledge. Any Fugitive Ally becomes a Traitor (see event).',
            stats: { brains: 0, brawn: 4, bravery: 4 },
            skills: ['Creature'],
        },
    ],
}

const A009: Adventure = {
    id: 9,
    tag: 'A009',
    title: 'London',
    year: 1892,
    tardis: 8,
    era: 'Victorian Era',
    type: null,
    description:
        "You have landed in Victorian London. It is a dark, cold evening and thick fog covers the cobbled streets which are lit by the soft but eerie glow of gas lamps. A hansom cab rattles past you as your breath curls in the chilly air. In the distance you can hear the unmistakeable sound of a ship's foghorn – you must be close to the docks. Time to experience living history...",
    stats: {
        danger: 1,
        knowledge: 5,
        vp: 1,
    },
    special:
        'See Special Events below for more details on Move Actions. Night has fallen immediately and will last 4 Turns. London Streets: (Exterior, Move 3) You walk through the dark and foggy Victorian streets, your footsteps echoing on the cobbles. Add +1 to Explore Actions. You may not Research here. Encounter (D6, -1 to roll if Night and +2 if Discover Phase): 0-1: Enemy encounter; 2: Ruffians (Make a Running 7 roll to escape or be Attacked - Brawn 5); 3: Incident; 4-5: None; 6+: Character event.',
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3', name: 'Earth' },
        { roll: '4', name: 'Entity' },
        { roll: '5', name: 'Temporal' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Tavern',
            move: 7,
            terrain: 'Interior',
            description:
                'You have found a local inn where the sounds of talking and laughing are mixed with the clink of glasses and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions but you may not Investigate here.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1',
                    description:
                        'You get mixed up in a tavern brawl and are Attacked (Brawn 3)',
                },
                { roll: '2', description: 'Incident' },
                {
                    roll: '3+',
                    description:
                        'You can spend 1 Luck point to meet a Wench or a random Character, or make a Charm 8 roll to have a Plot event (each once only)',
                },
            ],
        },
        {
            roll: '2',
            name: 'Music Hall Theatre',
            move: 9,
            terrain: 'Interior',
            description:
                'A grand music hall that welcomes impressive acts and memorable characters, both on and off the stage. Add +1 to Investigate and Seek Information Actions here. If it is Night you may remain here for a full turn choosing no Action, you enjoy a performance at the Hall and gain 1 Luck point per TARDIS Character.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Incident' },
                {
                    roll: '2+',
                    description:
                        'You may spend 1 Luck point to have a Character event or 2 Luck to meet Caroline Fairfax (Special Characters)',
                },
            ],
        },
        {
            roll: '3',
            name: 'Manor House',
            move: 11,
            terrain: 'Interior',
            description:
                'A magnificent residence on the outskirts of London owned by a rich gentleman. Add +1 to Investigate and Plan Actions here.',
            encounter: 'D6 adding Diplomacy or Stealth',
            rolls: [
                {
                    roll: '1',
                    description: 'Butler calls Constables (-2 to Charm roll)',
                },
                { roll: '2', description: 'Maid' },
                { roll: '3', description: 'Nobody at home – no event' },
                {
                    roll: '4',
                    description: 'Tea with the gentry – roll for a Plot event',
                },
                { roll: '5', description: 'Gentleman' },
                {
                    roll: '6',
                    description: 'Caroline Fairfax (Special Character)',
                },
                {
                    roll: '7+',
                    description:
                        'Discover locked attic (gain +2 Knowledge) or secret cellar (Enemy Lair - Dilemma or Defeat Phase only)',
                },
            ],
        },
        {
            roll: '4',
            name: "Gentleman's Club",
            move: 10,
            terrain: 'Interior',
            description:
                'An exclusive club in the West End of London for the explorers, scientists, politicians and industrialists of the Victorian age. You must make a Diplomacy 9 roll (adding Charm) to enter, but no female Characters are allowed (or may add Skills to entry roll). Add +1 to Find Help or Plan Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                {
                    roll: '4',
                    description: 'Roll for a Plot event or gain +1 Knowledge',
                },
                { roll: '5', description: 'Gentleman' },
                { roll: '6', description: 'Businessman' },
            ],
        },
        {
            roll: '5',
            name: 'London Docks',
            move: 8,
            terrain: 'Water, Exterior',
            description:
                'The London docks were amongst the most important across the globe at the time and were always a hive of activity whatever time of day or night. But the melting pot of cultures and characters could also be unsavoury... Add +1 to Investigate Actions here.',
            encounter: 'D6 (-1 to roll if Night)',
            rolls: [
                {
                    roll: '0-1',
                    description:
                        'Ruffians (Make a Running 7 roll to escape or Attacked - Brawn 6)',
                },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Fugitive' },
                { roll: '5', description: 'Dockworker' },
                { roll: '6', description: 'Incident' },
            ],
        },
        {
            roll: '6',
            name: 'Factory',
            move: 9,
            terrain: 'Interior',
            description:
                'A huge smoke-belching factory behind securely locked gates. You must make a Charm 8 or Stealth 8 roll to enter (Stealth only if Night). Add +1 to Investigate or Research (Engineer) Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                {
                    roll: '1',
                    description: 'Enemy encounter (Lair if Danger 12+)',
                },
                { roll: '2', description: 'Enemy event' },
                {
                    roll: '3',
                    description: 'Constables (-2 to Charm roll, -3 if Night)',
                },
                { roll: '4', description: 'Businessman' },
                { roll: '5', description: 'None' },
                {
                    roll: '6',
                    description:
                        'Gain +2 Knowledge or +2 to any Research (Engineer) Action here',
                },
                { roll: '7', description: 'Plot event or gain +1 Knowledge' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Body in the Thames',
            description:
                'Someone has been found murdered and dragged from the river. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Missing Persons',
            description:
                'Some people have been recently vanishing from the streets of London in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
        },
        {
            roll: '7',
            name: 'Mysterious Strangers',
            description:
                'There have been reports of a pair of strangers in the local area. If you make an Aware 9 roll, reveal Enemy or gain +1 Knowledge. If you have an Ally, roll 1D6 and on a 1, discard Ally and have an Enemy encounter.',
        },
        {
            roll: '8',
            name: 'Important Package',
            description:
                'You discover that the Enemy is searching for an important document. Roll 1D6 for each Ally, on a result of 6, they have it – gain +2 Knowledge. If not, roll for a random Location and if Move there, gain +1 Knowledge.',
        },
        {
            roll: '9',
            name: 'Strange Theft',
            description:
                "You discover that something has been stolen from a nearby Location. Roll 1D6: 1-2: Manor House; 3-4: Factory; 5-6: Gentleman's Club. If you Move there and make an Aware 8 or Charm 8 roll, gain +1 Knowledge.",
        },
        {
            roll: '10',
            name: 'Clever Alias',
            description:
                'You learn that someone in this part of London is not entirely as they seem. If you can make an Aware 9 roll, reveal the Enemy. If the Enemy is either a Chameleon or The Master, add +1 Danger and have a Traitor Incident.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-3: Sewers (Dark, Water, Move 8) Miles of dank sewers run beneath London that could contain any number of hidden secrets. Add +2 to Explore or Investigate Actions here. Encounter (D6): 1-2: Enemy Lair; 3: Enemy encounter; 4: Lost (Incident); 5: Gain +1 Knowledge; 6: Gain +2 Knowledge but add +1 Danger. 4-6: Abandoned House (Dark, Move 9). You find a dark townhouse with a forbidding air. Is it empty? Allies with Bravery 1 will not enter. Add +1 to Investigate Actions here. Encounter (D6): 1: Enemy Lair; 2-3: Enemy encounter; 4: None; 5: Gain +1 Knowledge; 6: Gain +2 Knowledge but +1 Danger and +1 Enemy Action rolls here.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Businessman',
            description:
                'A wealthy factory owner. Make a Charm roll (-1 per Stealth).',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'He accuses you of thievery and calls Constables (with -1 to Charm roll)',
                },
                { roll: '5-7', description: 'No event' },
                {
                    roll: '8-9',
                    description:
                        'Knows some local gossip – roll for a Plot event',
                },
                {
                    roll: '10+',
                    description:
                        'Joins you as an Ally - roll for Plot event and he will pay once for a Hansom',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
        },
        {
            roll: '5',
            name: 'Wench',
            description:
                'A shrewd and feisty local girl who always knows some gossip. Make a Charm roll (-1 if in a Tavern).',
            rolls: [
                { roll: '2-4', description: 'No event' },
                { roll: '5-8', description: 'Gossip – roll for Plot event' },
                {
                    roll: '9+',
                    description: 'Joins you as an Ally – roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Aware', 'Charm', 'Stealth'],
        },
        {
            roll: '6',
            name: 'Gentleman',
            description: 'Finely dressed and cultured. Make a Diplomacy roll.',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'Local police are called – see Constables (-2 to Charm roll)',
                },
                { roll: '5-6', description: 'No event' },
                { roll: '7-8', description: 'Roll for Plot event' },
                { roll: '9+', description: 'Becomes your Ally' },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Diplomacy', 'History'],
        },
        {
            roll: '7',
            name: 'Constables',
            description:
                'A pair of local bobbies take an interest in you. Make a Charm roll (-1 per Stealth, +3 if Danger 10+).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Wanted for questioning – make Running 7 roll or Captured (6)',
                },
                { roll: '6-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'They join you as Allies (+1 to Investigate and Find Help Actions)',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
            skills: ['Running'],
        },
        {
            roll: '8',
            name: 'Dockworker',
            description: 'Tough and world weary. Make a Charm roll.',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'Starts brawl (Attacked (Brawn 3) or Evade with Running 7)',
                },
                { roll: '5-6', description: 'No event' },
                { roll: '7-8', description: 'Gossip - roll for Plot event' },
                {
                    roll: '9+',
                    description: 'Becomes your Ally – roll Plot event',
                },
            ],
            stats: { brains: 0, brawn: 3, bravery: 2 },
        },
        {
            roll: '9',
            name: 'Fugitive',
            description:
                'Someone that is trying to avoid local authorities for unknown reasons. Ignore if with Constables, otherwise make a Stealth roll.',
            rolls: [
                {
                    roll: '2',
                    description: 'Pickpocket - lose a Gadget or 2 Luck',
                },
                { roll: '3-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for Plot event' },
                {
                    roll: '10+',
                    description:
                        'The fugitive becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Stealth'],
        },
        {
            roll: '10',
            name: 'Maid',
            description:
                'The loyal and perceptive maid who works for a rich family. She joins you as an Ally and adds +1 to Investigate Actions at a Manor House Location. Roll for a Plot event.',
            stats: { brains: 1, brawn: 0, bravery: 2 },
            skills: ['Aware', 'Charm', 'Running'],
        },
        {
            roll: '11-12',
            name: 'Old or New Friends',
            description:
                'You may pay 2 Luck to meet Caroline Fairfax or any Friend that is native to the Victorian Era.',
        },
    ],
    specials: [
        {
            id: 1,
            image: 'travelling-around-victorian-london',
            name: 'Travelling Around Victorian London',
            description:
                'Due to the heavy fog that stifles London during the Victorian Era, the Move numbers for this Adventure are high and have an additional -1 penalty if it is Night.',
            information:
                'You may pay 1 Luck to automatically succeed at a Move Action to any Location for up to 4 Characters. Each time you use a Hansom cab, roll 1D6 and on a 6, roll for a Plot event for any gossip from the driver.',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: 'caroline-fairfax',
            name: 'Caroline Fairfax',
            description:
                'You have met Caroline Fairfax, the loyal, but independent daughter of a Victorian politician. Caroline will join you as an Ally and is knowledgeable about what has been happening in this part of London recently, so roll for a Plot event.',
            information:
                'You may also attempt to make a Charm (9) roll and if successful, Caroline joins you as a Companion – gain 1 Luck.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Aware', 'Charm', 'History', 'Running'],
        },
    ],
}

const A010: Adventure = {
    id: 10,
    tag: 'A010',
    title: 'The Hades Expanse',
    year: 5220,
    tardis: 11,
    era: 'Twilight Era',
    type: 'Space',
    description:
        'The TARDIS has entered the legendary region of space where all spacecraft mysteriously lose power and become trapped for eternity. A myriad fleet of various ships float about you, some ancient and badly scarred whilst others are newer with almost no visible damage. What mysterious force could be keeping the ships here? And how do you restore power to your TARDIS...?',
    stats: {
        danger: 2,
        knowledge: 6,
        vp: 2,
    },
    special:
        'You may not Find Help in this Adventure. When Enemy Goal revealed, see instead Escape the Expanse (Special Events). You may continue to have Plot events throughout Adventure and must track Knowledge in the Defeat Phase. Roll 1D3 for your Landing Location. Travel the Expanse: Do not make Move Actions to switch Locations. Instead make an Engineer roll as an Action to get a ship operational. If successful, continue by making a Pilot roll to reach new Location. If you fail Pilot roll, add +1 Danger.',
    enemy: [
        { roll: '1-3', name: 'Military' },
        { roll: '4', name: 'Villain' },
        { roll: '5', name: 'Criminal' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Pleasure Yacht',
            move: null,
            terrain: 'Engineer 7, Pilot 8',
            description:
                'A small but elegant ship with beautiful design and opulent, luxurious interiors. Why is the ship completely deserted? Add +1 to Investigate Actions here. You may spend 1 Luck to find a pouch of gems. If you give them to a Character, they automatically join you as an Ally (if possible).',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Deadly Virus' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'No event' },
                { roll: '5', description: 'Plot event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '2',
            name: 'Cargo Cruiser',
            move: null,
            terrain: 'Engineer 8, Pilot 7',
            description:
                'A large bulk ship that is an old, twisted wreck and that creaks alarmingly as you explore. Pilot rolls made with this ship have a -1 penalty and roll 1D6 each time - on a result of 1 see Hull Breach.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1',
                    description:
                        'Rogue Cyberman – Attacked (Brawn 6) unless you make a Running 7 roll to escape',
                },
                { roll: '2', description: 'Hull Breach' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'No event' },
                { roll: '5', description: 'Strange Cargo (Plot event)' },
                { roll: '6', description: 'Character event' },
            ],
        },
        {
            roll: '3',
            name: 'Military Fighter',
            move: null,
            terrain: 'Engineer 9, Pilot 8',
            description:
                'A sleek, black ship of advanced design with powerful weapons and engines. Add +1 to Pilot rolls in the Expanse with this ship. Add +1 to Investigate Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                {
                    roll: '2',
                    description:
                        'Security Systems – make a Brains 10 roll (adding Stealth), if you fail, select one Character to be killed',
                },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'No event' },
                { roll: '5', description: 'Plot event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '4',
            name: 'Escape Pod',
            move: null,
            terrain: 'Engineer 5, Pilot 10',
            description:
                'A small pod from one of the other ships in the Expanse that might have already been destroyed by the forces here. You may not complete any Actions here that require an Action table. If you make a Computers 8 roll, gain 1 Knowledge (once only). You may spend 1 Luck to have a Character event or 2 Luck to choose a Character event.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy event' },
                { roll: '2-3', description: 'Incident' },
                { roll: '4+', description: 'None' },
            ],
        },
        {
            roll: '5',
            name: 'Alien Ship',
            move: null,
            terrain: 'Science 10, Pilot 9',
            description:
                'An incredible ship of totally organic design and warm, vivid colours that gently pulsate as you explore it. Strange, but pleasant fluting music is mixed with an urgent throb that signifies the ship has been damaged. You may Study here as an Action using Science. Add +1 to Investigate and Research (Science) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy Event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'No event' },
                { roll: '5', description: 'Plot event' },
                { roll: '6', description: 'Alien Survivor' },
            ],
        },
        {
            roll: '6',
            name: 'Abandoned TARDIS',
            move: null,
            terrain: 'TARDIS 10, Pilot 11',
            description:
                'You have found an old TARDIS, now just a cold, empty husk with a silent, dead console. With a sudden, sinking feeling, you realize that this TARDIS is the cause of the power drain that has been trapping ships in the Expanse. Add +2 to TARDIS rolls and Prevent Actions in the Defeat Phase.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Time Lord Survivor' },
                { roll: '3', description: 'Draw random Gadget card' },
                { roll: '4', description: 'Gain +2 Knowledge' },
                { roll: '5-6', description: 'No event' },
            ],
        },
    ],
    plots: [
        {
            roll: '1',
            name: 'Deadly Virus',
            description:
                'You discover a deadly virus killed the crew aboard this ship. Unless you have 2 Medicine or can make a Medicine 10 roll, each Human Character with less than 4 total Brawn and Bravery are killed.',
        },
        {
            roll: '2',
            name: 'Homing Beacon',
            description:
                'You discover an automatic beacon sending out what appears to be a homing signal. If you can make an Engineer 7 roll, choose to gain +1 Knowledge or reduce Danger by -2.',
        },
        {
            roll: '3',
            name: 'Hull Breach',
            description:
                'The area of the ship starts to break apart and you could be sucked out into space! Each Character must make a Brawn 6 roll (adding Running) to hold onto a bulkhead or be killed.',
        },
        {
            roll: '4',
            name: 'Distress Call',
            description:
                'You have picked up a distress call from one of the other ships in the Expanse. Roll 1D6 for a random Location and if you go there gain +2 Knowledge.',
        },
        {
            roll: '5',
            name: 'Prison Cell',
            description:
                'You discover that someone or something important has been captured. If you make a Rescue (8) Action, roll 1D6: 1-2: Gain +1 Knowledge; 3-4: Character event; 5-6: Enemy encounter.',
        },
        {
            roll: '6',
            name: 'Collision',
            description:
                'You see another wrecked ship heading directly towards you! You must make an Engineer roll to coax the engines of your ship back into life and then a Pilot 9 roll to evade the other ship. If you fail, add +3 Danger.',
        },
        {
            roll: '7',
            name: 'Missing Escape Pod',
            description:
                'You discover that the ship is missing an escape pod – is somebody still alive? Gain +1 Knowledge and add +2 to Pilot rolls reaching the Escape Pod Location.',
        },
        {
            roll: '8',
            name: 'Computer Log',
            description:
                'You discover a damaged databank that you might get working. If you can make a Computers 8 roll, gain +1 Knowledge.',
        },
        {
            roll: '9',
            name: 'Strange Cargo',
            description:
                'There have been strange readings from the Cargo Hold. If you go there, you enter a Dark, shadowy bay that is filled with large containers. Add +1 to Investigate Actions here. Encounter (Aware roll): 2-5: Enemy encounter; 6: Enemy event; 7: Plot event; 8: None; 9: Character event; 10-11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
        },
    ],
    characters: [
        {
            roll: '2',
            name: 'Plague Victims',
            description:
                'Victims of a terrible and disfiguring wasting disease who shuffle towards you. You may Evade (Running 7) or are Attacked (Brawn 4). After the Conflict you must make a Medicine 9 roll or kill 1D3 Human Characters.',
        },
        {
            roll: '3',
            name: 'Servo-Robot',
            description: 'Basic robot used for maintenance. Roll 1D6.',
            rolls: [
                {
                    roll: '1-2',
                    description:
                        'It attacks (Brawn 3), but you may Evade with a Running 6 roll',
                },
                { roll: '3-4', description: 'It ignores you – event ends' },
                { roll: '5-6', description: 'The robot joins you as an Ally' },
            ],
            stats: { brains: 1, brawn: 2, bravery: 0 },
            skills: ['Engineer', 'Machine'],
        },
        {
            roll: '4',
            name: 'Old or New Friends',
            description:
                'You may pay 1 Luck to meet a Friend native to this Era or Major Tom Draper (below).',
        },
        {
            roll: '5',
            name: 'Soldiers',
            description:
                'A military team. Make a Charm roll (+1 if Enemy revealed, +1 if Danger 10+).',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'Hostile – make a Running 7 roll or become Captured (7) or Attacked (Brawn 10)',
                },
                {
                    roll: '7-9',
                    description:
                        'They question you suspiciously but let you go',
                },
                {
                    roll: '10+',
                    description:
                        'They become Allies (1D3+1 in number; captain is Brains 1, Brawn 3, Bravery 3, Running; others are Brains 0, Brawn 3, Bravery 2)',
                },
            ],
        },
        {
            roll: '6',
            name: 'Mercenaries',
            description:
                'A tough group of soldiers. Make a Charm roll (+1 if Enemy revealed, +1 if Danger 15+).',
            rolls: [
                {
                    roll: '2-8',
                    description:
                        'Hostile – make a Running 8 roll or become Captured (8) or Attacked (Brawn 10)',
                },
                {
                    roll: '9-10',
                    description: 'They question you but let you go',
                },
                {
                    roll: '11+',
                    description:
                        'They become uneasy Allies (1D3+1 in number; leader is Brains 1, Brawn 3, Bravery 3; others are Brains 0, Brawn 3, Bravery 2)',
                },
            ],
        },
        {
            roll: '7',
            name: 'Engineer',
            description:
                'A talented technician aboard the ship. If you make a Charm 9 roll (adding +2 if Danger 8+), the Engineer becomes an Ally – gain +1 Knowledge. You also automatically Ally any Servo-Robots you encounter.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Engineer'],
        },
        {
            roll: '8',
            name: 'Alien Survivor',
            description:
                'A gaseous alien being that glows with an inner light. Make a Charm roll (adding Aware).',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'You fail to make contact and the alien vanishes',
                },
                {
                    roll: '7-9',
                    description:
                        'The alien communicates with you – gain +1 Knowledge, it then vanishes',
                },
                {
                    roll: '10+',
                    description:
                        'The alien joins you as an Ally – gain +1 Knowledge',
                },
            ],
            stats: { brains: 3, brawn: 0, bravery: 1 },
            skills: ['Aware', 'History', 'Pilot'],
        },
        {
            roll: '9',
            name: 'Time Lord Survivor',
            description:
                'Badly wounded, the Time Lord will die unless you make a Medicine 7 roll. If treated, the Time Lord joins you as an Ally – gain +1 Knowledge.',
            stats: { brains: 4, brawn: 1, bravery: 2 },
            skills: ['Engineer', 'Science', 'TARDIS'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'major-tom-draper',
            name: 'Major Tom Draper',
            description:
                'You have encountered Major Tom Draper, a soldier and pilot serving in Space Corps but who has been stranded alone in the Expanse. Draper will join you as an Ally and knows something about what is happening here so gain +1 Knowledge.',
            information:
                'You may also attempt to make a Charm (9) roll and if successful Major Draper joins you as a Companion – gain 1 Luck.',
            stats: { brains: 2, brawn: 3, bravery: 3 },
            skills: ['Computers', 'Pilot 2', 'Running'],
        },
        {
            id: 2,
            image: null,
            name: 'Escape the Expanse (Goal)',
            description:
                '(7VP, Quest) You discover that the Enemy wishes to locate the source of the power drain holding their ship so that they can escape the Hades Expanse. If the Doctor is captured by the Enemy, add +1 Danger. In the Defeat Phase you may lose 1 Knowledge to add +1 to Pilot or TARDIS rolls (max 3 per Turn).',
            information:
                'Trap Enemy Inside the Expanse: Make a Computers 11 roll to activate ship security systems. Then take a Prevent Action (adding Running but minus the Danger of Enemy). If fail, have an Enemy encounter and add +1 Danger. Boost your TARDIS and Escape: You must return to the TARDIS and make a TARDIS 10 roll. If you fail, the TARDIS is Damaged and add +1 Danger. If your total is 12+, you also free the Ships from the Expanse and gain 3 Luck.',
            stats: null,
            skills: [],
        },
    ],
}

const A011: Adventure = {
    id: 11,
    tag: 'A011',
    title: 'Egypt',
    year: -46,
    tardis: 9,
    era: 'Antiquity Era',
    type: null,
    description:
        'You have landed in Ancient Egypt and the time of the Pharaohs. The sand of the desert stretches for miles in all directions and the dusty heat of the Sun is almost unbearable. But perhaps you can find shelter and water at an oasis, or locate and explore an Egyptian city? Or perhaps you can discover and investigate the mysteries of the incredible Pyramids?',
    stats: {
        danger: 1,
        knowledge: 5,
        vp: 1,
    },
    special:
        'Gain 1 Luck at start of Adventure if you or a Companion has History (2 Luck if a Character has History and Science). Desert Sands: (Wilderness, Exterior, Move 4) You walk across the stiflingly hot desert, your feet sinking into the soft sand. You may not take Investigate or Research Actions here. At the end of a Turn here, each Character must make a Bravery 7 roll or take a -1 penalty to Skill and Quality rolls on the next turn due to heatstroke. Encounter (D6, +1 to roll if Discover Phase): 1: Enemy encounter; 2: Enemy event; 3: Incident; 4: None; 5: Character event; 6+: Lost (Incident).',
    enemy: [
        { roll: '1', name: 'Military' },
        { roll: '2-3', name: 'Entity' },
        { roll: '4', name: 'Chameleon' },
        { roll: '5', name: 'Temporal' },
        { roll: '6', name: 'Villain' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Ancient Pyramids',
            move: 8,
            terrain: 'Exterior',
            description:
                'The incredible structures that rise from the desert contain the tombs of long-dead rulers of ancient Egypt and any that disturb them are said to be cursed. You may Study here. Add +2 to Investigate Actions but any Charm or Diplomacy rolls made here have a -3 penalty.',
            encounter: 'D6 adding History',
            rolls: [
                { roll: '1-2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy Lair' },
                { roll: '4', description: 'Curse' },
                { roll: '5', description: 'Character event' },
                { roll: '6', description: 'Plot event or +1 Knowledge' },
                {
                    roll: '7+',
                    description: 'Gain +2 Knowledge and add +1 Danger',
                },
            ],
        },
        {
            roll: '2',
            name: 'Temple of Osiris',
            move: 8,
            terrain: 'Exterior',
            description:
                'Massive stone statues of the Egyptian Gods dominate the large, smoky temple that has a large altar in its centre. If you have an Incident here whilst captured, it is automatically a Capture Incident. Add +1 to Investigate Actions here. Charm, Diplomacy and Escape rolls have a -1 penalty. Add +1 Danger if Entity Enemy. You may spend 1 Luck to meet High Priest.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Incident' },
                { roll: '2', description: 'None' },
                { roll: '3', description: 'Royal Guards' },
                { roll: '4', description: 'Plot' },
                { roll: '5', description: 'High Priest' },
                { roll: '6', description: 'Enemy encounter' },
            ],
        },
        {
            roll: '3',
            name: 'Oasis',
            move: 9,
            terrain: 'Wilderness, Exterior',
            description:
                'An area of fertility within the stifling heat of the desert, the oasis offers shade and water for the weary traveller. Add +1 to Explore and Find Help Actions here. You may spend 1 Luck so a Character does not have a penalty on rolls due to heatstroke this Turn.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy event' },
                {
                    roll: '2',
                    description:
                        'Sandstorm – You may not Move from here next turn',
                },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Incident' },
                { roll: '5+', description: 'Character event' },
            ],
        },
        {
            roll: '4',
            name: 'City of Thebes',
            move: 8,
            terrain: 'Exterior',
            description:
                'The city bustles with life at all levels – from the slaves, the artisans, to the nobles and warriors of Egypt. Add +1 to Seek Information and Find Help Actions here. You can spend 1 Luck to have a Character event, spend 3 Luck to meet a Character of your choice (including Queen Cleopatra) or spend 1 Luck to roll for a Plot event.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'None' },
                { roll: '4', description: 'Incident' },
                { roll: '5+', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Banks of the Nile',
            move: 7,
            terrain: 'Water, Exterior',
            description:
                'The most majestic and sacred river winds its way through Egypt, giving life to the land. Boats drift along the river and many are drawn to the banks for water, although they can be easy prey for the vicious crocodiles. Add +2 to Move Actions from here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                {
                    roll: '2-3',
                    description:
                        'Nile Crocodiles – Attacked (Brawn 6, Creature) unless Evade with Running 6',
                },
                { roll: '4-5', description: 'None' },
                { roll: '6', description: 'Incident' },
                { roll: '7', description: 'Character event' },
            ],
        },
        {
            roll: '6',
            name: "Cleopatra's Palace",
            move: 9,
            terrain: 'Exterior',
            description:
                'The magnificent residence of Queen Cleopatra that is filled with her slaves, courtiers and protected by her loyal guards. Add +1 to Find Help, Seek Information and Plan Actions here.',
            encounter: 'Diplomacy roll',
            rolls: [
                { roll: '2-4', description: 'Captured (8)' },
                { roll: '5-6', description: 'Royal Guards (with Brawn 10)' },
                { roll: '7-8', description: 'None' },
                { roll: '9', description: 'Noble' },
                { roll: '10', description: 'High Priest' },
                {
                    roll: '11+',
                    description:
                        'Gain 2 Knowledge or spend 1 Luck point to meet Queen Cleopatra of the Nile (Special Character) as an Action',
                },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Curse',
            description:
                'You learn about a strange Egyptian legend. Is it just superstition or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
        },
        {
            roll: '5',
            name: 'Murder',
            description:
                'Someone has been found murdered nearby and a corpse discovered. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '7',
            name: 'Political Intrigue',
            description:
                'You learn about the current difficult and potentially dangerous political climate in Egypt. Gain +1 Knowledge (or +2 Knowledge with a successful History 9 or Diplomacy 8 roll) but add +1 Danger.',
        },
        {
            roll: '8',
            name: 'Prophecy',
            description:
                'You learn that a strange prophecy has been made by the temple priests. Gain +1 Knowledge if you make a Brains 12 roll (add Aware and History).',
        },
        {
            roll: '9',
            name: 'Under Suspicion',
            description:
                'Recent events place you under suspicion of nefarious activities or crimes. If you make either a Charm 10 roll or Diplomacy 9 roll, gain +1 Knowledge. If you fail you are Captured (8).',
        },
        {
            roll: '10',
            name: 'Mistaken Identity',
            description:
                'You discover that one of your Companions has been mistaken for someone of importance. Gain +2 to all Charm and Diplomacy rolls in this Adventure where Companion is present.',
        },
        {
            roll: '11-12',
            name: 'Disturbed Tomb',
            description:
                'Strange activity surrounding the tomb of a long-dead Egyptian noble. If you go there (Dark, Move 9) then you find an ornately decorated stone chamber deep beneath the catacombs of the citadel. Add +1 Danger. Add +2 to Investigate Actions here. -1 to Charm/Diplomacy rolls here. Encounter (Aware roll): 2-5: Enemy encounter; 6: Enemy event; 7: Curse; 8: None; 9: Under Suspicion; 10-11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Military General',
            description:
                'A brutal and scheming commander and his warriors. Make a Diplomacy roll (+1 if Enemy revealed).',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'Attacked (Brawn 7) unless you Surrender (Capture 8) or Evade (Running 8)',
                },
                { roll: '7-8', description: 'No event' },
                {
                    roll: '9-10',
                    description: 'Knows of local events – roll for Plot event',
                },
                {
                    roll: '11+',
                    description:
                        'Becomes Ally (Brains 2, Brawn 4, Bravery 4, Diplomacy) plus 1D6 Guards (each Brains 0, Brawn 3, Bravery 2) - roll for a Plot event',
                },
            ],
        },
        {
            roll: '5',
            name: 'Noble',
            description: 'Finely dressed and cultured. Make a Diplomacy roll.',
            rolls: [
                {
                    roll: '2-3',
                    description:
                        'Guards called – see Royal Guard (-2 to Charm roll)',
                },
                { roll: '4-6', description: 'No event' },
                { roll: '7-8', description: 'Plot event' },
                {
                    roll: '9+',
                    description: 'Becomes your Ally – roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 1 },
            skills: ['Charm', 'Diplomacy', 'History'],
        },
        {
            roll: '6',
            name: 'High Priest',
            description:
                'Devout to his Queen and the Gods, but also a suspicious zealot. Make a Diplomacy roll (-3 if in a Temple, +3 if Enemy revealed).',
            rolls: [
                { roll: '2-7', description: 'You are Captured (8)' },
                { roll: '8-9', description: 'No further event' },
                {
                    roll: '10',
                    description: 'Informed of news - roll for a Plot event',
                },
                {
                    roll: '11+',
                    description: 'He becomes your Ally – roll for Plot event',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 3 },
            skills: ['Diplomacy', 'History'],
        },
        {
            roll: '7',
            name: 'Royal Guards',
            description:
                'A patrol of guards block your path. Make a Diplomacy roll (with -1 per Stealth, +2 if Enemy revealed).',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'Hostile – either Evade (Running 7 roll) or become Captured (7) or Attacked (Brawn 5)',
                },
                { roll: '7-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'They become Allies (1D3+1 in number, each Brains 0, Brawn 2, Bravery 2)',
                },
            ],
        },
        {
            roll: '8',
            name: 'Scholar',
            description:
                'A learned man of herbs and potions. Make a Science roll.',
            rolls: [
                { roll: '2-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for a Plot event' },
                {
                    roll: '10+',
                    description:
                        'The scholar becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 1 },
            skills: ['Medicine', 'Science'],
        },
        {
            roll: '9',
            name: 'Merchant',
            description:
                'A well-dressed trader. Make a Charm roll (-1 per Stealth).',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'He accuses you of thievery and calls guards – see Royal Guards with -1 to roll',
                },
                { roll: '5-6', description: 'No event' },
                {
                    roll: '7-8',
                    description:
                        'He knows some local gossip – roll for a Plot event',
                },
                {
                    roll: '9+',
                    description: 'He becomes an Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Diplomacy'],
        },
        {
            roll: '10',
            name: 'Fugitive',
            description:
                'Someone that is avoiding the guards for unknown reasons. Ignore if with Royal Guards or Cleopatra, otherwise make a Charm roll.',
            rolls: [
                {
                    roll: '2',
                    description: 'Pickpocket - lose a Gadget or 2 Luck',
                },
                { roll: '3-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for Plot event' },
                {
                    roll: '10+',
                    description:
                        'The fugitive becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Stealth'],
        },
        {
            roll: '11-12',
            name: 'Handmaiden',
            description: 'A demure and beautiful servant. Make a Charm roll.',
            rolls: [
                { roll: '2-4', description: 'Bows and continues her duties' },
                {
                    roll: '5-8',
                    description: 'Shares local news – roll for Plot event',
                },
                {
                    roll: '9+',
                    description: 'Becomes Ally – roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Charm', 'History'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'queen-cleopatra-of-the-nile',
            name: 'Queen Cleopatra of the Nile',
            description:
                'You have met the beautiful and cunning Cleopatra, Queen of Egypt and the Nile. Gain 1 VP. She is with a retinue of servants and soldiers.',
            information:
                'Evade: Roll 1D6: 1-5: The retinue passes by and event ends; 6: The soldiers attack (Brawn 7) unless you Surrender (Captured 9), or try to Evade using a Running 8 roll. Talk: You attempt to gain an audience with Cleopatra. Make a Diplomacy roll (add Charm of any one male Character): 2-4: You unwittingly give insult and are Captured (8). 5-7: Cleopatra has nothing useful to tell you and brushes you off. 8-9: You have an interesting conversation with Cleopatra – roll for a Plot event. She then graciously departs. You may spend 1 Luck to meet her Handmaiden. 10+: The Queen declares that you have a common cause and joins you as an Ally along with her loyal bodyguard (Brains 0, Brawn 4, Bravery 4). You may also roll for a Plot event.',
            stats: { brains: 3, brawn: 1, bravery: 4 },
            skills: ['Aware', 'Charm 2', 'Diplomacy 2', 'History', 'Stealth'],
        },
    ],
}

const A012: Adventure = {
    id: 12,
    tag: 'A012',
    title: 'Raaga',
    year: 2482,
    tardis: 11,
    era: 'Colonial Era',
    type: 'Wilderness',
    description:
        'You have landed on Raaga, a Terileptil prison planet. Raaga is rich in tinclavic, a valuable and versatile metal that leaves a highly corrosive residue. Prisoners sent to the harsh penal world usually end up mining the highly toxic ore under terrible conditions. To be sentenced to Raaga is to be sentenced for life...',
    stats: {
        danger: 2,
        knowledge: 4,
        vp: 2,
    },
    special:
        'You Move to different Locations using Stealth. If you fail a Stealth roll by 3 or more, see Android Guards as Encounter this Turn. When rolling for a Goal, roll 1D6: 1-4: See Special Goals below; 5-6: Roll for Goal as normal. Twisting Caves: (Dark, Stealth 6) The caves beneath the hot surface of Raaga wind through many levels and seem to continue for miles. Explore Actions have a -2 penalty but add Aware. You may not take Investigate or Research Actions here. If you are Captured here, you are placed in the Prisoner Quarters with -1 to Escape Actions. Encounter (D6, +1 to roll if Discover Phase): 1: Enemy encounter; 2: Character event; 3: Incident; 4: None; 5: Android Guards; 6: Lost (Incident).',
    enemy: [
        { roll: '1', name: 'Military' },
        { roll: '2-4', name: 'Criminal' },
        { roll: '5', name: 'Chameleon' },
        { roll: '6', name: 'Villain' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Punishment Zone',
            move: 10,
            terrain: 'Exterior',
            description:
                'Troublesome prisoners that do not immediately comply with instructions are often brought here on the harsh surface of Raaga. It reminds other prisoners of the penalty of rebellion. Rescue Actions have a -2 penalty.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Cruel Overseer' },
                { roll: '3-4', description: 'Capture Incident' },
                {
                    roll: '5+',
                    description:
                        'Choose any Character event but you must perform a Rescue (8) roll. If successful, add +4 to any Charm or Diplomacy roll',
                },
            ],
        },
        {
            roll: '2',
            name: 'Ore Processing Plant',
            move: 9,
            terrain: 'Interior',
            description:
                'The large, industrial centre where raw tinclavic from the mines is separated and refined. To enter also requires an Engineer 8 roll to deactivate the security system - if failed, Characters here take no Action next Turn. Add +1 to Investigate and Research (Science) Actions here.',
            encounter: 'D6 (+1 if Discover Phase)',
            rolls: [
                { roll: '1-2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'None' },
                { roll: '6+', description: 'Mineralogist' },
            ],
        },
        {
            roll: '3',
            name: 'Prisoner Quarters',
            move: 7,
            terrain: 'Interior',
            description:
                'The slaves and prisoners are kept in cramped and basic quarters with food and warmth in short supply. Add +1 to Seek Information Actions here. You can either: spend 1 Luck to meet a random Character, spend 3 Luck to meet a Character of your choice or spend 2 Luck to roll for a Plot event.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'No event' },
                { roll: '4+', description: 'Character event' },
            ],
        },
        {
            roll: '4',
            name: 'Tinclavic Mines',
            move: 8,
            terrain: 'Dark',
            description:
                'The mines of Raaga run deep beneath the surface of the planet and are incredibly rich in tinclavic ore. Add +1 to Investigate Actions here. At the end of each Turn here, roll 1D6 - on a roll of 1 there is a rock-fall and a random Character here is killed unless you spend 2 Luck.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'Character event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'Enemy event' },
                {
                    roll: '6',
                    description:
                        'Tinclavic poisoning – kill a Character here unless you spend 3 Luck',
                },
            ],
        },
        {
            roll: '5',
            name: 'Control Area',
            move: 10,
            terrain: 'Interior',
            description:
                'The heart of the mining prison where operations are co-ordinated so that the extracted tinclavic is shipped off-world as efficiently as possible. To enter also requires a Computers 9 roll to deactivate the security system - if failed, encounter Android Guards (Brawn 16). Add +2 to Prevent and Challenge Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy event' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'Android Guards' },
                { roll: '5+', description: 'No event' },
            ],
        },
        {
            roll: '6',
            name: 'Deep Caves',
            move: 7,
            terrain: 'Dark',
            description:
                'The caves beneath the mines are steep, dangerous and rarely explored. Add +2 to Explore and Investigate Actions here.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-4', description: 'Lost (Incident)' },
                { roll: '5', description: 'Enemy encounter' },
                {
                    roll: '6',
                    description:
                        'Rock-fall – random Character is killed unless you spend 2 Luck',
                },
                { roll: '7-8', description: 'No event' },
                { roll: '9', description: 'Character event' },
                {
                    roll: '10',
                    description:
                        'Cave Creature - Attacked (Brawn 8, Creature) unless you make a Running 8 roll',
                },
                {
                    roll: '11+',
                    description:
                        'Gain 2 Knowledge or spend 1 Luck to gain +2 to next Prevent Action',
                },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Captive',
            description:
                'Someone or something important has been captured. If you Move to the Punishment Zone then do a Rescue (9) Action, roll 1D6: 1-2: Gain +1 Knowledge; 3-4: Character event; 5-6: Enemy encounter.',
        },
        {
            roll: '5',
            name: 'Mineral Wealth',
            description:
                'You learn that recently excavated Tinclavic ore has contained some remarkable new deposits. If you make a Science 8 roll either gain +1 Knowledge or +1 Research (Science).',
        },
        {
            roll: '6',
            name: 'Missing Prisoners',
            description:
                'Some prisoners have been recently vanishing from the mines in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
        },
        {
            roll: '7',
            name: 'Red Alert',
            description:
                'The mine is on maximum alert. Gain +1 Knowledge. Add +1 to Investigate Actions. Escape and Rescue Actions and any Charm rolls have a -1 penalty. A red alert can be cancelled with a Computers 7 roll at the Control Area.',
        },
        {
            roll: '8',
            name: 'Buried in the Mines',
            description:
                'You learn that something sinister has been discovered in the Tinclavic mines. If you Move there, and make a Brains 10 roll, you can either reveal the Enemy or gain +1 Knowledge.',
        },
        {
            roll: '9',
            name: 'Murdered Prisoner',
            description:
                'One of the prisoners has been found dead nearby and their corpse discovered. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '10',
            name: 'Energy Barrier',
            description:
                'You discover that an energy barrier has been created across a random Location. Gain +1 Knowledge but you may not go to that Location unless you also make an Engineer 9 roll (+1 per attempt).',
        },
        {
            roll: '11-12',
            name: 'Restricted Area',
            description:
                'There is strange activity within a highly restricted zone in the Tinclavic Mines where almost no-one has clearance. If you go there (with -2 to required Stealth roll) then add +1 Danger. Add +2 to Investigate Actions here. Encounter (Aware roll): 2-5: Enemy encounter; 6: Enemy event; 7: Plot event; 8: None; 9: Character event; 10-11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Terileptil Prisoner',
            description:
                'A special prisoner who is shunned by both the Raagan slaves and their Terileptil captors. Make a Diplomacy roll (+1 if Enemy revealed).',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'Attacked (Brawn 4) unless you Evade (Running 8)',
                },
                { roll: '7-8', description: 'No event' },
                {
                    roll: '9-10',
                    description:
                        'Grudgingly shares some information - roll for Plot event or gain +1 Knowledge',
                },
                {
                    roll: '11+',
                    description: 'Becomes Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 4, bravery: 3 },
            skills: ['Engineer', 'Stealth'],
        },
        {
            roll: '5-6',
            name: 'Raagan Slaves',
            description:
                'A group of the small reptilian indigenous species now enslaved by the Terileptils to help mine the tinclavic. Make a Charm roll.',
            rolls: [
                {
                    roll: '2-3',
                    description: 'Guards called – see Android Guards',
                },
                {
                    roll: '4',
                    description:
                        'Unless you can Evade (Running 9), you are Attacked (Brawn 5)',
                },
                {
                    roll: '5-7',
                    description: 'The Raagans are too timid - no event',
                },
                {
                    roll: '8-9',
                    description: 'They share information – roll for Plot event',
                },
                {
                    roll: '10+',
                    description:
                        'One Raagan becomes your Ally – roll for a Plot event or gain +1 Knowledge',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Stealth'],
        },
        {
            roll: '7',
            name: 'Android Guards',
            description:
                'A patrol of bejewelled and armed Terileptil Android Guards block your path. Unless you Surrender (Captured 8) or Evade (Running 7), you are Attacked (Brawn 8).',
        },
        {
            roll: '8',
            name: 'Cruel Overseer',
            description:
                'A large and bloated Terileptil who keeps the prisoners and slaves in check with a pair of Android Guards. Unless you Surrender (Captured 8) or Evade (Running 7), you are Attacked (Brawn 13). Add the Overseer to any Enemy encounters if Danger 12+.',
            stats: { brains: 1, brawn: 5, bravery: 4 },
            skills: ['Minion'],
        },
        {
            roll: '9',
            name: 'Mineralogist',
            description:
                'A reserved and rather cold individual. If you make a Charm 10 roll, the Mineralogist becomes an Ally (roll Plot event). The Mineralogist is automatically selected in a Traitor Incident.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Science'],
        },
        {
            roll: '10',
            name: 'Survivor',
            description:
                'A badly wounded survivor of a captured expedition. Unless you make a Medicine 7 roll however, the Survivor dies – lose 1 Luck (or 2 Luck but roll for a Plot event). If treated, the Survivor joins you as an Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Engineer or Science'],
        },
        {
            roll: '11-12',
            name: 'Raagan Slave',
            description:
                'A small, native Raagan prisoner with large eyes and green reptilian skin. If you make a Charm 9 roll it becomes an Ally – roll for a Plot event or gain +1 Knowledge.',
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Stealth'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'steal-tinclavic-ore',
            name: 'Steal Tinclavic Ore (Goal)',
            description:
                '1-3: Steal Tinclavic Ore (4VP; Profit): The Enemy is trying to steal valuable Tinclavic ore from the mines. Add +1 Danger if a Criminal Enemy. You may either:',
            information:
                'Trap Enemy in Mines: Make Prevent Action (add Engineer) in the Tinclavic Mines. Add +1 Danger and have an Enemy encounter if you fail. Swap Tinclavic with Worthless Ore: Make Prevent Action (add Stealth) in the Ore Processing Plant. Add +1 Danger and have an Enemy encounter if you fail.',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: 'escape-mines',
            name: 'Escape Mines (Goal)',
            description:
                '4-6: Escape Mines (4VP; Quest): The Enemy is trapped on Raaga and trying to escape. Enemy Action rolls have a -1 modifier. You may either:',
            information:
                'Trap Enemy: Make Prevent Action (add Engineer) in either the Tinclavic Mines or Deep Caves. Add +1 Danger and have an Enemy encounter if you fail. Create Force Barrier to Prevent Escape: Make Prevent Action (add Computers) in the Control Area. Add +1 Danger and have an Enemy encounter if you fail.',
            stats: null,
            skills: [],
        },
    ],
}

const A013: Adventure = {
    id: 13,
    tag: 'A013',
    title: 'Cornwall',
    year: 1792,
    tardis: 8,
    era: 'Regency Era',
    type: null,
    description:
        'You have landed on the coast of Cornwall in the late eighteenth century. It is late summer and the sun is dipping in the sky causing the sea to reflect a glorious sunset over the magnificent cliffs and beaches. As the waves crash against the rocky shore, you can just see the lamps of a small town in the distance.',
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 0,
    },
    special:
        'After completing their first Explore Action here, a Companion with History gains 1 Luck point. A TARDIS Character with History may choose to Relax as an Action here. Night will fall at the start of Turn 3 and last 3 full Turns. See also Special Events for Move Action rules. Windswept Coast: (Water, Exterior, Move 3) You walk across the undulating cliffs and paths that seem to go for miles, the sound of crashing waves against the rocks below. You may only complete Explore Actions (with +1 to the roll), Investigate Actions or Move Actions here. Encounter (D6, +1 to roll if Discover Phase, -1 to roll if Night): 0: Enemy encounter; 1: Enemy event; 2: Lost (Incident); 3: Incident; 4-5: None; 6+: Character event.',
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3', name: 'Entity' },
        { roll: '4', name: 'Temporal' },
        { roll: '5', name: 'Earth' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Tin Mine',
            move: 9,
            terrain: 'Dark',
            description:
                'The Cornish mines run deep under the cliffs and are incredibly rich in tin and copper. Add +1 to Investigate Actions here. Move rolls from here have a -1 penalty unless with a Miner. At the end of each Turn here, roll 1D6, on a roll of 1 there is a rock-fall - Characters here must then make a Brawn (10) roll to Move from this Location.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'Miners' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'Enemy event' },
                { roll: '6+', description: 'Plot event' },
            ],
        },
        {
            roll: '2',
            name: 'Tavern',
            move: 8,
            terrain: 'Interior',
            description:
                'You have found a local inn where the sounds of talking and laughing are mixed with the clink of glasses and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions and +1 to Relax Actions but you may not Investigate here.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1',
                    description:
                        'You get mixed up in a tavern brawl and are Attacked (Brawn 3)',
                },
                { roll: '2', description: 'Incident' },
                {
                    roll: '3+',
                    description:
                        'You can spend 1 Luck to meet a Wench or a random Character, or make a Charm 8 roll to have a Plot event (each once only)',
                },
            ],
        },
        {
            roll: '3',
            name: 'Farm',
            move: 9,
            terrain: 'Exterior',
            description:
                "A rustic old farmhouse surrounded by sheds and fields with an old plough sitting close to the gate. The bark of a dog can be heard from a barn. Add +1 to Investigate Actions here. If you make a Charm 7 roll you are invited inside by the farmer's wife – take an immediate Relax Action (Discover Phase) or Seek Information Action (Dilemma Phase).",
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Wench' },
                { roll: '2', description: 'Incident' },
                { roll: '3-4', description: 'No event' },
                { roll: '5-6', description: 'Farmer' },
            ],
        },
        {
            roll: '4',
            name: 'Harbour',
            move: 7,
            terrain: 'Water, Exterior',
            description:
                'Tall ships are moored in a bustling port as loud seagulls wheel overhead and the stench of oil and fish is overpowering. The harbour is busy any time of day or night, but it could be rough as it gets darker. Add +1 to Investigate or Seek Information Actions here.',
            encounter: 'D6 (-1 to roll if Night)',
            rolls: [
                {
                    roll: '0-1',
                    description:
                        'Ruffians (Make a Running 7 roll to escape or Attacked by Brawn 5)',
                },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Sea Captain' },
                { roll: '4', description: 'Fugitive' },
                { roll: '5', description: 'Merchant' },
                { roll: '6', description: 'Incident' },
            ],
        },
        {
            roll: '5',
            name: 'Manor House',
            move: 9,
            terrain: 'Interior',
            description:
                'A magnificent old house and residence of the local gentry that is set in beautiful tended grounds. Add +1 to Investigate Actions here.',
            encounter: 'D6 adding Diplomacy',
            rolls: [
                {
                    roll: '1-2',
                    description: 'Servants call Soldiers (-2 to Charm roll)',
                },
                { roll: '3', description: 'Nobody home - no event' },
                {
                    roll: '4',
                    description: 'Tea with the gentry – roll for Plot event',
                },
                { roll: '5', description: 'Meet Aristocrat' },
                {
                    roll: '6+',
                    description:
                        'Society Ball (Night only) - make Diplomacy 10 roll (add Charm) to gain 2 VP or discover locked attic (+2 Knowledge) or secret cellar (Enemy Lair – Defeat Phase only)',
                },
            ],
        },
        {
            roll: '6',
            name: 'Old Church',
            move: 8,
            terrain: 'Exterior',
            description:
                'An old country stone church, set on the cliffs, with stained glass windows and surrounded by a slightly-overgrown graveyard. Add +1 to Research (History) Actions here.',
            encounter: 'D6 (+1 if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                {
                    roll: '2',
                    description:
                        'Secret Passage - you may automatically Move to a random Location if you wish',
                },
                { roll: '3-4', description: 'No event' },
                {
                    roll: '5',
                    description:
                        'Dusty records - make a History 8 roll to gain +1 Knowledge',
                },
                { roll: '6+', description: 'Priest' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered washed up on the shore – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'Someone has been found murdered on a nearby beach and a corpse discovered. Roll 1D6 and if result is a 1, discard random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Missing Townsfolk',
            description:
                'Some people have been recently vanishing from the town in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck point if you have a native Character with you.',
        },
        {
            roll: '7',
            name: 'Cornish Legend',
            description:
                'You learn about a strange, mysterious legend of the area. Is it just fishwives tales or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
        },
        {
            roll: '8',
            name: 'Smuggling Ring',
            description:
                'A local gang of smugglers has been using the nearby port - could they be allied to the Enemy? Gain +1 Knowledge (+2 Knowledge if with native Character with History or Pilot). At the start of the Defeat Phase, add +1 Danger.',
        },
        {
            roll: '9',
            name: 'Lights in the Sky',
            description:
                'Strange lights have been seen by locals in the night sky across the ocean recently. Could it relate to something sinister? Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
        },
        {
            roll: '10',
            name: 'Mistaken Identity',
            description:
                'You discover that one of your Companions has been mistaken for someone of importance. Gain +2 to all Charm and Diplomacy rolls in this Adventure where Companion is present.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-3: Roll for random Location - gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (roll for Enemy if Discover Phase); 4-6: Smugglers Cave (Dark, Water, Move 9) - if you go there, you find a cave used by local smugglers to store their goods. Add +1 to Investigate Actions here. Encounter (D6): 1: Enemy Lair; 2: Enemy encounter; 3-4: Smugglers (as Soldiers but -3 to Charm roll and Capture 8); 5: Gain +1 Knowledge; 6: Gain +2 Knowledge but +1 Danger and +1 Enemy Action rolls.',
        },
    ],
    characters: [
        {
            roll: '2-3',
            name: 'Miners',
            description:
                'A group of rough Cornish miners. Make a Charm roll (add +2 if the Enemy revealed, -1 if in Tin Mine).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Hostile – make a Running 7 roll or become Captured (7) or Attacked (Brawn 5)',
                },
                { roll: '6-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'One miner becomes an Ally - roll for Plot event',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 2 },
            skills: ['Engineer'],
        },
        {
            roll: '4',
            name: 'Merchant',
            description:
                'A well-dressed harbour trader. Make a Charm roll (-1 per Stealth).',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'He accuses you of thievery and calls constables – see Soldiers with -1 to roll',
                },
                { roll: '5-6', description: 'No event' },
                {
                    roll: '7-8',
                    description:
                        'He knows some local gossip – roll for a Plot event',
                },
                {
                    roll: '9+',
                    description: 'He becomes an Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Diplomacy'],
        },
        {
            roll: '5',
            name: 'Wench',
            description:
                'A shrewd and feisty local girl who always knows some gossip. Make a Charm roll (-1 if in a Tavern).',
            rolls: [
                { roll: '2-4', description: 'No event' },
                { roll: '5-8', description: 'Gossip - roll for Plot event' },
                {
                    roll: '9+',
                    description: 'Becomes an Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Charm', 'Running', 'Stealth'],
        },
        {
            roll: '6',
            name: 'Rogue',
            description:
                'A gentleman of the road. Make a Charm roll (adding Stealth, +2 if you spend 1 Luck, but -1 if in a Tavern).',
            rolls: [
                { roll: '2-3', description: 'Lose 1 Luck' },
                { roll: '4-7', description: 'No event' },
                {
                    roll: '8-9',
                    description: 'Shares news - roll for Plot event',
                },
                {
                    roll: '10+',
                    description: 'Joins as Ally - roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
            skills: ['Stealth'],
        },
        {
            roll: '7',
            name: 'Soldiers',
            description:
                'A patrol of local guards block your path. Make a Charm roll (with -1 per Stealth).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Hostile – make Running 7 roll or become Captured (7) or Attacked (Brawn 5)',
                },
                { roll: '6-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'They become Allies (1D3+1 in number, each Brains 0, Brawn 2, Bravery 2) - roll for a Plot event (Discover Phase only)',
                },
            ],
        },
        {
            roll: '8',
            name: 'Aristocrat',
            description: 'Finely dressed and cultured. Make a Diplomacy roll.',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'Militia are called - see Soldiers (-2 to Charm roll)',
                },
                { roll: '7-8', description: 'No event' },
                { roll: '9-10', description: 'News - roll for Plot event' },
                {
                    roll: '11+',
                    description: 'Joins as Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Diplomacy', 'History'],
        },
        {
            roll: '9',
            name: 'Fugitive',
            description:
                'Someone who is avoiding the local militia. Ignore if with Soldiers, otherwise make a Charm roll.',
            rolls: [
                {
                    roll: '2',
                    description: 'Pickpocket - lose a Gadget or 2 Luck',
                },
                { roll: '3-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for Plot event' },
                {
                    roll: '10+',
                    description:
                        'The fugitive becomes your Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Running', 'Stealth'],
        },
        {
            roll: '10',
            name: 'Sea Captain',
            description: 'A retired military officer. Make a Diplomacy roll.',
            rolls: [
                { roll: '2-3', description: 'Challenged to a duel (Brawn 3)' },
                { roll: '4-6', description: 'No event' },
                {
                    roll: '7-8',
                    description: 'Shares news - roll for Plot event',
                },
                {
                    roll: '9+',
                    description: 'He becomes your Ally - roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 3, bravery: 3 },
            skills: ['History', 'Pilot'],
        },
        {
            roll: '11',
            name: 'Priest',
            description:
                'The local clergy of the parish. Make a Charm roll (adding History).',
            rolls: [
                {
                    roll: '2-3',
                    description:
                        'He is offended and calls the watch – see Soldiers',
                },
                { roll: '4-7', description: 'He tips his hat and leaves' },
                {
                    roll: '8-9',
                    description: 'He shares news – roll for Plot event',
                },
                {
                    roll: '10+',
                    description:
                        'He joins you as an Ally (+1 to Find Help Actions) - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 2 },
            skills: ['History'],
        },
        {
            roll: '12',
            name: 'Farmer',
            description:
                'Local peasant who has lived here all his life. Make a Charm roll.',
            rolls: [
                { roll: '2-4', description: 'Add +1 Danger' },
                { roll: '5-7', description: 'He hurries off' },
                { roll: '8-9', description: 'Gossip - roll for Plot event' },
                {
                    roll: '10+',
                    description: 'Becomes an Ally (+1 to Move Actions)',
                },
            ],
            stats: { brains: 0, brawn: 1, bravery: 1 },
            skills: ['Stealth'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'travelling-around-cornwall',
            name: 'Travelling Around Cornwall',
            description:
                'Due to the larger distances between Locations in rural Cornwall, the Move numbers for this Adventure are high and Move Actions have an additional -1 penalty if it is Night.',
            information:
                'You may pay 1 Luck point to automatically succeed at a Move Action to any Location for up to 4 Characters via coach and driver at any non-Exterior Location. You may also buy a horse for 1 Luck point that can carry up to 2 Characters and adds +3 to a Move Action (+2 to Evade options at Exterior Locations) for the Adventure.',
            stats: null,
            skills: [],
        },
    ],
}

const A014: Adventure = {
    id: 14,
    tag: 'A014',
    title: 'Dundra System',
    year: 5134,
    tardis: 10,
    era: 'Twilight Era',
    type: 'Space',
    description:
        "The TARDIS has landed on a large spaceship that looks like a freighter or survey vessel of some kind and is at least two galaxies away from Earth. The ship's corridors are dark and grimy and your footsteps echo loudly in narrow metal walkways. Computer screens scroll automatically as you explore. Is the ship deserted or is the crew just confining themselves to a smaller area?",
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 0,
    },
    special:
        'If you have any Ally, you may use scanners by spending 1 Luck to cancel your first Enemy Encounter and just reveal the Enemy. Ship Corridors: (Dark, Move 2) The corridors on the ship look almost identical and run on reduced lighting to save energy. You may only choose Explore or Move Actions here (+2 to Move Actions). If Captured here, roll for a new Location. If you have a Sonic Screwdriver you may pay 1 Luck to cancel a Dark keyword this Turn. Encounter (D6, +1 to roll if Discover Phase): 1: Enemy encounter; 2: Enemy event; 3: Incident; 4-5: None; 6: Character event; 7: Lost (Incident).',
    enemy: [
        { roll: '1', name: 'Temporal' },
        { roll: '2-3', name: 'Villain' },
        { roll: '4', name: 'Military' },
        { roll: '5-6', name: 'Criminal' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Cargo Bay',
            move: 8,
            terrain: 'Dark',
            description:
                'A small hangar filled with containers and where various equipment and supplies for the ship are stored. Add +1 to Investigate Actions here. You may spend 2 Luck (reduced by 1 for each Science here, min 1) to gain +1 Knowledge (once only).',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'No event' },
                { roll: '4', description: 'Character event' },
                {
                    roll: '5-6',
                    description:
                        'If you make an Aware 8 roll, gain +1 Knowledge',
                },
                { roll: '7', description: 'Servo-robots' },
            ],
        },
        {
            roll: '2',
            name: 'Science Laboratory',
            move: 7,
            terrain: null,
            description:
                'A small but well-equipped laboratory that is filled with sensitive and specialised monitoring sensors for collecting astronomical data. If a TARDIS Character with Science remains here for 1 Turn, they gain +1 Brains until end of the Adventure (non-cumulative). Add +1 to Research (Science) and Plan (Science) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1-2', description: 'Scientist' },
                { roll: '3-4', description: 'No event' },
                {
                    roll: '5-6',
                    description: 'Make a Science 8 roll to gain +1 Knowledge',
                },
            ],
        },
        {
            roll: '3',
            name: 'Maintenance Area',
            move: 7,
            terrain: null,
            description:
                'An area full of partly-constructed or repaired equipment. If a TARDIS Character with Engineer remains here for 1 Turn, they gain +1 Brains until end of the Adventure (non-cumulative). Add +1 to Research (Engineer) and Plan (Engineer) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1-2', description: 'Engineer' },
                { roll: '3-4', description: 'No event' },
                {
                    roll: '5',
                    description: 'Talia McDowell (Special Character)',
                },
                {
                    roll: '6',
                    description:
                        'If you make an Engineer 8 roll, gain +1 Knowledge or add Engineer to any Prevent Action rolls',
                },
            ],
        },
        {
            roll: '4',
            name: 'Crew Quarters',
            move: 7,
            terrain: null,
            description:
                'The cramped and basic quarters where the personnel aboard the ship try to relax. Add +1 to Seek Information Actions here. You may spend 1 Luck to have a Character event, spend 3 Luck to meet a Character of your choice (includes Special Characters, not Stowaway or Servo-robots) or spend 2 Luck to roll for a Plot event.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-4', description: 'No event' },
                { roll: '5+', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Control Deck',
            move: 7,
            terrain: null,
            description:
                'The bridge of the ship and where navigational operations are co-ordinated so that the data received is as accurate as possible. Add +1 to Prevent and Plan Actions here. If you make a Computers 8 roll as an Action, gain +1 Knowledge and cancel Dark at all Locations. If current Danger is 15+ you may spend 2 Luck to reduce Danger by 1.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'No event' },
                { roll: '3-4', description: 'Character event' },
                { roll: '5+', description: 'Captain' },
            ],
        },
        {
            roll: '6',
            name: 'Medical Laboratory',
            move: 7,
            terrain: null,
            description:
                'A fully-equipped bay for dealing with medical emergencies and analysing biological samples. If a Character is killed here, you may spend Luck equal to their Bravery to revive them (once only per Character). You may spend 1 Luck to gain a MedKit (Gadget) here. Add +1 to Research (Medicine) and Plan (Medicine) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1-2', description: 'Medic' },
                { roll: '3-4', description: 'No event' },
                { roll: '5', description: 'AX-L5 (Special Character)' },
                {
                    roll: '6',
                    description: 'Make a Medicine 8 roll to gain +1 Knowledge',
                },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Mysterious Escape Pod',
            description:
                'A small craft has been brought in and stored in the Cargo Bay. Gain +1 Knowledge if you Move there and make a Science 7 roll. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'Someone has been found murdered nearby and their corpse discovered. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Strange Illness',
            description:
                'An unusual virus is affecting the crew. At the end of each Turn roll 1D6 for each Human Character – on a roll of 1 they Move to Crew Quarters and can take no Action until you make a Medicine 8 roll as an Action there.',
        },
        {
            roll: '7',
            name: 'Communications Fault',
            description:
                'You learn that the ship has suffered a total communications blackout – you are cut off from any outside help. Gain +1 Knowledge. If you make a Computers 9 roll add +1 to Prevent Actions.',
        },
        {
            roll: '8',
            name: 'Abnormal Energy Readings',
            description:
                'The ship is picking up very strange data – could it be from the nearby star or is it from something hidden? If you make a Computers 9 roll, gain +1 Knowledge.',
        },
        {
            roll: '9',
            name: 'Sabotage',
            description:
                "You learn that the ship's systems are being deliberately harmed – who, or what, could be responsible? Take a -2 penalty on your next Charm roll unless you can make an Engineer 9 roll. Also gain +1 Knowledge if successful.",
        },
        {
            roll: '10',
            name: 'Alien Transmitter',
            description:
                'You discover an automatic beacon sending out what appears to be a homing signal. If you make a successful Engineer 7 roll, choose to gain +1 Knowledge or reduce Danger by -2.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'There have been strange readings from a small restricted area at the far end of the ship (Move 8). If you go there, to enter you must have a Captain Ally or make a Computers 10 roll to bypass the security locks. Once inside, you enter a small lab filled with very high-tech equipment. Add +2 to Investigate Actions here. Encounter (Aware roll): 2-4: Enemy Lair; 5-6: Enemy Encounter; 7: Brutal Death; 8: Enemy event; 9: Traitor (Incident); 10-11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
        },
    ],
    characters: [
        {
            roll: '2-3',
            name: 'Stowaway',
            description:
                'A small female alien who has been hiding from the crew joins you as an Ally. Take -1 to any Charm rolls in other Character encounters with the stowaway. Roll for Plot event.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Charm', 'Stealth'],
        },
        {
            roll: '4',
            name: 'Security Guards',
            description:
                "A team of ship's guards. Make a Charm roll (with -1 per Stealth but add +3 if Danger 10+).",
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Hostile – make a Running 7 roll or become Captured (7) or Attacked (Brawn 8)',
                },
                { roll: '6-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'The guards become your Allies (1D3+1 in number, each Brains 0, Brawn 2, Bravery 2)',
                },
            ],
        },
        {
            roll: '5',
            name: 'Medic',
            description:
                "A clever young physician who is worried about the crew's health. If you make a Charm 9 roll (add +2 if Danger 6+), the Medic becomes an Ally – roll for a Plot event.",
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Medicine'],
            infomation: '+1 to Move Actions to Medical Lab.',
        },
        {
            roll: '6',
            name: 'Engineer',
            description:
                'A talented technician that works on the ship. If you make a Charm 9 roll (add +2 if Danger 6+), the Engineer becomes an Ally - roll for a Plot event. You may also automatically Ally any Servo-robot you encounter.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Engineer', 'Running'],
        },
        {
            roll: '7-8',
            name: 'Scientist',
            description:
                'A bright laboratory analyst. If you make a Charm 10 roll (adding +2 if Danger 6+), the Scientist becomes an Ally – roll for a Plot event. The Scientist also gains +1 to Research (Science) Actions.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Science'],
        },
        {
            roll: '9',
            name: 'Captain',
            description:
                "Just reaching retirement, he's seen it all before. Make a Charm roll (add +2 if the Enemy is revealed).",
            rolls: [
                { roll: '2-5', description: 'Captured (7)' },
                {
                    roll: '6-9',
                    description: 'He is not convinced by you - event ends',
                },
                {
                    roll: '10+',
                    description:
                        'Joins as an Ally - roll for a Plot event. Can automatically Ally any Characters encountered.',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 3 },
            skills: ['Computers', 'Pilot'],
        },
        {
            roll: '10',
            name: 'Old or New Friends',
            description:
                'You may pay 2 Luck to meet Talia McDowell, AX-L5 or any Friend from the Twilight Era.',
        },
        {
            roll: '11-12',
            name: 'Servo-Robots',
            description:
                'Basic robots used for maintenance or menial jobs on the ship. Roll 1D3 for the number encountered. Roll 1D6.',
            rolls: [
                {
                    roll: '1-2',
                    description:
                        'The robots start an (Attack) Conflict but you may try to Evade with a Running 6 roll',
                },
                { roll: '3-4', description: 'They ignore you – event ends' },
                { roll: '5-6', description: 'One robot joins you as an Ally' },
            ],
            stats: { brains: 1, brawn: 2, bravery: 0 },
            skills: ['Engineer', 'Machine'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'talia-mcdowell',
            name: 'Talia McDowell',
            description:
                'You have met Talia McDowell – a young and slightly intense spacecraft engineer who is sometimes more at ease with her computers and tools than with people. Talia will join you as an Ally and is knowledgeable about what has been happening on the ship, so roll for a Plot event.',
            information:
                'You may also attempt to make a Charm (10) roll and if successful, Talia joins you as a Companion – gain 1 Luck.',
            stats: { brains: 3, brawn: 1, bravery: 2 },
            skills: ['Computers', 'Engineer', 'Pilot', 'Running'],
        },
        {
            id: 2,
            image: 'AX-L5',
            name: 'AX-L5',
            description:
                "You have met medical robot AX-L5, commonly referred to as 'Axle' by the crew of the ship. AX-L5 joins you as an Ally.",
            information:
                'AX-L5 gains +1 to Research (Medicine) Actions and +3 to a Move Action to the Medical Laboratory. Roll 1D6 for AX-L5 and if roll 4+, roll for a Plot event. You may also spend 1 Luck to meet Talia McDowell as she often spends a lot of time with Axle.',
            stats: { brains: 4, brawn: 1, bravery: 4 },
            skills: ['Computers', 'Machine', 'Medicine 2', 'Science'],
        },
    ],
}

const A015: Adventure = {
    id: 15,
    tag: 'A015',
    title: 'New York',
    year: 2022,
    tardis: 6,
    era: 'Post-Modern Era',
    type: null,
    description:
        'The TARDIS has landed in the streets of modern New York which is bustling with a myriad of tourists and shoppers from across the globe. Yellow taxi cabs drive along the packed roads passing familiar iconic landmarks such as the Empire State Building or Central Park. It looks so usual and ordinary, but not everything is as it seems and for someone, normal life might soon be changed forever...',
    stats: {
        danger: 0,
        knowledge: 6,
        vp: 1,
    },
    special:
        "Night will fall after 2D6 Turns and last for 4 Turns. If you have no Companion, you may spend 1 Luck on the first Character event to instead encounter Jane Danning (Special Character). Tour: If you visit 3 or more different Locations (excluding New York Streets) in Discover Phase, gain 1 Idea card and +1 VP. New York Streets: (Exterior, Move 2) You stroll along the packed streets of the city, avoiding the heavy traffic whilst enjoying the iconic surroundings of the immense skyscrapers of the 'Big Apple'. The sounds of car horns are mixed with the smell of hot dogs. Add +1 to Explore Actions but you may not Research here. You may spend 1 Luck point to jump on a New York bus, hire a yellow taxi or take the subway to gain +3 to a Move Action from here. Encounter (D6; -1 if Night): 0: Street Gang; 1-2: Incident; 3-4: No further event; 5-6: Character event.",
    enemy: [
        { roll: '1-2', name: 'Military' },
        { roll: '3-4', name: 'Chameleon' },
        { roll: '5', name: 'Criminal' },
        { roll: '6', name: 'Temporal' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Statue of Liberty',
            move: 8,
            terrain: 'Water, Exterior',
            description:
                'The amazing statue that stands in New York Harbour and the symbol of the city across the world. Gain 1 Luck (once only) if you have a Human Companion here. Add +1 to Investigate Actions here. If Enemy are Weeping Angels, add +1 Danger and to the number of Angels encountered.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                {
                    roll: '4-5',
                    description: 'Gain +1 Knowledge or roll for Plot event',
                },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '2',
            name: 'Grand Central Station',
            move: 7,
            terrain: null,
            description:
                'This incredibly lavish building forms the hub of the extensive underground rail network beneath New York and is busy almost any time of day and night. If Danger less than 10, you may spend 1 Luck to Move from here to any Location as an Action. At Night, roll 1D6 and on 1-3, this Location is Dark.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Plot event' },
                { roll: '5+', description: 'Character event' },
            ],
        },
        {
            roll: '3',
            name: 'Empire State Building',
            move: 7,
            terrain: 'Exterior',
            description:
                'One of the most recognisable buildings in the city and another iconic symbol of New York. Add +1 to Investigate Actions here. You may spend 1 Luck to either have a Character event or add +2 to a Move Action next turn. If the Enemy are Daleks, add +1 Danger and +1 to number of Daleks encountered.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Plot event' },
                { roll: '5', description: 'Character event' },
                { roll: '6+', description: 'Gain 1 Luck' },
            ],
        },
        {
            roll: '4',
            name: 'Central Park',
            move: 7,
            terrain: 'Exterior',
            description:
                'The huge and beautiful park that dominates most of Manhattan is where both New Yorkers and tourists flock throughout the year to picnic, walk or visit the Zoo. You may Relax as an Action here. You may spend 1 Luck to have a Character event.',
            encounter: 'D6 (+1 to roll if Discover Phase, -1 if Night)',
            rolls: [
                { roll: '0-1', description: 'Enemy encounter' },
                { roll: '2', description: 'Street Gang' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'None' },
                { roll: '6', description: 'Character event' },
                { roll: '7+', description: 'Plot event' },
            ],
        },
        {
            roll: '5',
            name: 'Broadway & Times Square',
            move: 7,
            terrain: 'Exterior',
            description:
                'Best shopping and entertainment in the Big Apple with incredible Broadway shows. You may Relax here as an Action. Add +1 to Seek Information Actions. If the Enemy are Autons, add +1 Danger and +1 to number encountered.',
            encounter: '2D6 (+2 to roll if Discover Phase)',
            rolls: [
                { roll: '2', description: 'Enemy Lair' },
                { roll: '3-4', description: 'Enemy encounter' },
                { roll: '5', description: 'Enemy event' },
                { roll: '6-7', description: 'None' },
                { roll: '8', description: 'Incident' },
                {
                    roll: '9',
                    description:
                        'Add +1 to Move Actions next Turn or +1 Luck if Night',
                },
                { roll: '10+', description: 'Character event' },
            ],
        },
        {
            roll: '6',
            name: 'National American Museum',
            move: 7,
            terrain: 'Museum',
            description:
                'Houses many rare, precious artefacts and artworks in numerous galleries. A Character with History is +1 Brains here and may Study with +1 to roll. Add +1 VP if Profit Goal. You may Seek Information here using History.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Plot event' },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Character event' },
                {
                    roll: '5-6',
                    description:
                        'Ancient relic - make a Science 7 roll and a History 7 roll and gain +1 Knowledge per success',
                },
                { roll: '7', description: 'Gain +1 Knowledge' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Important Package',
            description:
                'The Enemy is searching for an important package. Roll 1D6 for each Ally, on a result of 6, they have it – gain +1 Knowledge. Otherwise, Move to a random location and make an Aware 9 roll to gain +2 Knowledge.',
        },
        {
            roll: '5',
            name: 'Street Homicide',
            description:
                'Someone has been found murdered in a nearby alley and a corpse discovered. Roll 1D6 and if result is a 1, discard random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Alien Hoax',
            description:
                'You discover newspapers are reporting that alien ships have been seen in the sky but dismissing it as a hoax... If you have 10 Brains then reveal the Enemy.',
        },
        {
            roll: '7',
            name: 'News Report',
            description:
                'You catch the latest report from Trinity Wells on television – either all your TARDIS Characters gain Aware until the end of the Adventure OR gain +1 Knowledge.',
        },
        {
            roll: '8',
            name: 'Front',
            description:
                "You discover that a large and reputable organisation is really a front for the Enemy's secret plans. You may reveal the Enemy or gain +1 Knowledge. Add +1 to Seek Information Actions using Charm or Stealth.",
        },
        {
            roll: '9',
            name: 'Missing Persons',
            description:
                'Some people have been recently vanishing from the streets of New York in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
        },
        {
            roll: '10',
            name: 'High Alert',
            description:
                'The city is on maximum alert for some reason. Everyone is suspicious and nervous. Add +1 to Investigate Actions. Add +1 to the number of Cops encountered with -1 to Charm rolls.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-4: Roll for a random Location and gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (rolling for Enemy first if needed); 5-6: The Rockefeller Centre (Move 7), the tallest New York skyscraper and an incredible experience in events, bars and restaurants. Add +2 to Investigate Actions here. Add +1 to Enemy Action rolls here. Encounter (2D6): 2-3: Enemy Encounter (Lair); 4: Enemy encounter; 5: Enemy event; 6-7: None; 8-9: Gain 1 Luck or pay 1 Luck for +2 Knowledge; 10-12: Character event.',
        },
    ],
    characters: [
        {
            roll: '2-3',
            name: 'Street Gang',
            description:
                'A group of young shady-looking individuals. Make a Stealth roll (-1 if Night).',
            rolls: [
                { roll: '2-4', description: 'Attacked (Brawn 5)' },
                { roll: '5-6', description: 'Lose 2 Luck or 1 Gadget' },
                { roll: '7', description: 'Add +1 Danger' },
                { roll: '8', description: 'No event' },
                {
                    roll: '9-10',
                    description:
                        'Whispers from the shadows - pay 1 Luck for a Plot event',
                },
                {
                    roll: '11+',
                    description:
                        'One of the gang becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 1 },
            skills: ['Stealth'],
        },
        {
            roll: '4',
            name: 'Computer Expert',
            description:
                'A talented computer geek. If you make a Charm 9 roll (adding current Danger), the expert becomes your Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Computers'],
            infomation: '+1 to Research (Computers) Actions.',
        },
        {
            roll: '5',
            name: 'Cops',
            description:
                'A pair of New York cops takes an interest. Make a Charm roll (-1 per Stealth, +3 if Danger 12+).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Wanted for questioning – make Running 7 roll or Captured (6) or Attacked (Brawn 5)',
                },
                { roll: '6-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'The Cops become your Allies (+1 to Investigate, Move and Find Help Actions)',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
        },
        {
            roll: '6',
            name: 'Businessman',
            description:
                'A shrewd banker from Wall Street. Pay 1 Luck or make a Charm 10 roll for the businessman to join you as an Ally - roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Diplomacy'],
            infomation: '+1 to Seek Information Actions.',
        },
        {
            roll: '7',
            name: 'Tourist',
            description:
                'A young foreign student on their first visit to New York. If you pay 2 Luck, see Jane Danning (Special Character) instead. If not, make a Charm 7 roll for the tourist to join you as an Ally. The tourist may know something useful - pay 1 Luck to gain a Plot event.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Running'],
        },
        {
            roll: '8',
            name: 'Tour Guide',
            description:
                'A professional guide showing tourists around New York. If you make a Charm 10 roll (add current Danger), the guide becomes an Ally – roll for Plot event.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Charm', 'History'],
            infomation: '+1 to Move Actions here.',
        },
        {
            roll: '9',
            name: 'Reporter',
            description:
                'An intrepid journalist after a story. If you make Charm 8 roll, she becomes an Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Charm', 'Running'],
        },
        {
            roll: '10',
            name: 'Medic',
            description:
                'A handsome young medic from a New York hospital. If you make a Charm 9 roll (+2 if Enemy revealed), the medic becomes an Ally - roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Medicine'],
        },
        {
            roll: '11-12',
            name: 'Private Detective',
            description:
                'A private eye investigating a case. Make a Stealth roll.',
            rolls: [
                {
                    roll: '2-4',
                    description: 'Questioned at Gunpoint - +1 Danger',
                },
                { roll: '5-7', description: 'He evades you - no event' },
                {
                    roll: '8-9',
                    description:
                        'He may share information – pay 1 Luck to roll for Plot event',
                },
                {
                    roll: '10+',
                    description: 'Becomes Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 2 },
            skills: ['Stealth', 'Running'],
            infomation: '+1 to Investigate Actions.',
        },
    ],
    specials: [
        {
            id: 1,
            image: 'jane-danning',
            name: 'Jane Danning',
            description:
                'You have met Jane Danning – a straight-talking London city girl with a spiky sense of humour. Jane will join you as an Ally. Here on vacation, Jane knows something about what has been happening in New York recently, so roll for a Plot event.',
            information:
                'You may also attempt to make a Charm (9) roll and if successful, Jane joins you as a Companion – gain 1 Luck.',
            stats: { brains: 2, brawn: 2, bravery: 2 },
            skills: ['Aware', 'Charm', 'Running', 'Stealth'],
        },
    ],
}

const A016: Adventure = {
    id: 16,
    tag: 'A016',
    title: 'Rings of Akhaten',
    year: 456013,
    tardis: 10,
    era: 'Far Future Era',
    type: 'Holiday',
    description:
        "You have landed on Tiaanamat, a large asteroid that orbits the giant red Akhaten sun as part of the 'rings of Akhaten'. The asteroid has an exotic, bustling marketplace to a myriad of alien races and cultures that offers visitors anything from repulsor-vehicles to refreshments from across the galaxy. It is also the location of a very strange religious cult that chants an ancient and mysterious song...",
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 0,
    },
    special:
        'Gain 1 Luck point at start of Adventure if you have a Human Companion. Add +2 Danger if an Entity Enemy. Busy Streets: (Exterior, Move 3) You push your way through the crowded streets that are bathed in the warm red light of the giant sun above. Alien visitors from all parts of the galaxy scurry around you. Add +1 to Explore Actions. You may not take Investigate or Research Actions here. If Captured here, roll for new Location. Encounter (D6, +1 to roll if Discover Phase): 1: Enemy encounter; 2: Enemy event; 3: Incident; 4: Lost (Incident); 5+: Character event.',
    enemy: [
        { roll: '1', name: 'Gothic' },
        { roll: '2-3', name: 'Entity' },
        { roll: '4', name: 'Chameleon' },
        { roll: '5', name: 'Temporal' },
        { roll: '6', name: 'Villain' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Amphitheatre',
            move: 8,
            terrain: null,
            description:
                'The incredible structure that faces towards the red sun to celebrate all the festivals and ceremonies and which holds hundreds of visitors. Add +1 to Investigate and Seek information Actions here. You may not Explore here. If Festival of Offerings, you may pay 1 Luck to meet Merry Gejelh (Special Character).',
            encounter: 'D6 (add +2 if Festival of Offerings)',
            rolls: [
                { roll: '1-2', description: 'Vigil' },
                { roll: '3', description: 'Incident' },
                { roll: '4-5', description: 'Character event' },
                {
                    roll: '6',
                    description:
                        'Watch ancient ceremony – choose to gain 1 Luck or +1 Knowledge',
                },
            ],
        },
        {
            roll: '2',
            name: 'Temple of Akhaten',
            move: null,
            terrain: 'Pilot 9',
            description:
                'The massive pyramid structure contains a large, smoky temple that is dominated by a central throne. Slumped on the throne is a terrifying mummy. Add +1 to Investigate Actions here. You may Study (History) here. Charm, Diplomacy and Escape rolls have -1 penalty. Add +1 Danger if Entity Enemy or Resurrection Goal (+2 if both). You may spend 1 Luck to meet a High Priest.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Incident' },
                { roll: '2', description: 'None' },
                { roll: '3-4', description: 'Vigil' },
                { roll: '5', description: 'Chorister' },
                { roll: '6', description: 'Enemy encounter' },
            ],
        },
        {
            roll: '3',
            name: 'Tunnels',
            move: 9,
            terrain: 'Dark',
            description:
                'The tunnels beneath the streets are dark and rarely explored. Add +2 to Explore and Investigate Actions here.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-4', description: 'Lost (Incident)' },
                {
                    roll: '5',
                    description:
                        'Vigil (Discover phase only) or Enemy encounter',
                },
                {
                    roll: '6',
                    description:
                        'Rock-fall – random Character killed unless you spend 2 Luck',
                },
                { roll: '7-8', description: 'No event' },
                { roll: '9', description: 'Fugitive' },
                {
                    roll: '10',
                    description:
                        'Tunnel creature - Attacked (Brawn 8, Creature) unless you make a Running 8 roll',
                },
                {
                    roll: '11+',
                    description:
                        'Gain 2 Knowledge or spend 1 Luck to gain +2 to next Prevent Action',
                },
            ],
        },
        {
            roll: '4',
            name: 'Marketplace',
            move: 6,
            terrain: 'Exterior',
            description:
                'The market bustles with myriad of different alien races – from the Ultramancers to Pan-Babylonians. Add +1 to Investigate and Seek Information Actions here. You can spend 2 Luck to have a Character event of your choice, spend 1 Luck to roll for a Plot event, or discard a Gadget to gain Luck equal to its Cost.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'No event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'Alien Merchant' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Cantina',
            move: 7,
            terrain: null,
            description:
                'You have found a small cantina where the sounds of alien chattering is mixed with the strange smells of exotic vapours. Add +1 to (Charm) Seek Information Actions and Relax Actions. You may not Investigate here.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1',
                    description:
                        'Approached by a burly alien and Attacked (Brawn 3)',
                },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'Enemy event' },
                {
                    roll: '4+',
                    description:
                        'You can spend 1 Luck to meet an Alien Ambassador, Alien Visitor, Fugitive or Alien Merchant or attempt a Charm 8 roll to have a Plot event (each once only)',
                },
            ],
        },
        {
            roll: '6',
            name: 'Docking Bay',
            move: 8,
            terrain: null,
            description:
                'The hangars where visiting ships are docked until departure. Add +1 to Investigate Actions here. You may spend 2 Luck to buy a repulsor-bike that can carry 2 Characters and adds +2 to Move Actions, Pilot rolls and Evade options (using Pilot rather than Running) for the rest of Adventure.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Vigil' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'No event' },
                { roll: '5', description: 'Plot event' },
                { roll: '6', description: 'Alien Visitor' },
                { roll: '7', description: 'Character event' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Legend of Akhaten',
            description:
                'You learn about a strange legend of the Old God. Is it just superstition or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 9 roll).',
        },
        {
            roll: '5',
            name: 'Mysterious Runes',
            description:
                'You discover that strange symbols have been found carved on the rocks of the temple. If you make a History 8 roll, gain +2 Knowledge. If you make a History 10 roll, instead reveal the Enemy.',
        },
        {
            roll: '6',
            name: 'It Wakes',
            description:
                'At the temple of Akhaten, the ancient mummified corpse has stirred after centuries. Add +1 Danger. If you go there, gain +1 Knowledge (+2 Knowledge if you make a History 9 roll). When rolling for an Enemy, roll an Entity Enemy.',
        },
        {
            roll: '7',
            name: 'Festival of Offerings',
            description:
                'Tonight marks the start of a millennial ceremony - could it be linked to the Enemy plans? Gain +1 Knowledge (or +2 Knowledge if with a native Character). At the start of the Defeat Phase, add +1 Danger.',
        },
        {
            roll: '8',
            name: 'Prophecy',
            description:
                'You learn that a strange prophecy has been made by the priests of Akhaten. Gain +1 Knowledge if you make a Brains 12 roll (add Aware and History).',
        },
        {
            roll: '9',
            name: 'Under Suspicion',
            description:
                'Recent events place you under suspicion of nefarious activities or crimes. If you make either a Charm 10 roll or Diplomacy 9 roll, gain +1 Knowledge. If you fail you are Captured (8).',
        },
        {
            roll: '10',
            name: 'Mistaken Identity',
            description:
                'You discover that one of your Companions has been mistaken for someone of importance. Gain +2 to all Charm and Diplomacy rolls in this Adventure where Companion is present.',
        },
        {
            roll: '11-12',
            name: 'Disturbed Vault',
            description:
                'Strange activity surrounding the tomb of a long-dead Akhaten priest. If you go there (Dark, Move 9) then you find an ornately decorated stone chamber in the catacombs beneath the temple. Add +1 Danger. Add +2 to Investigate Actions here. -1 to Charm/Diplomacy rolls here. Encounter (Aware roll): 2-5: Enemy encounter; 6: Enemy event; 7: Mysterious Runes; 8: None; 9: Under Suspicion; 10-11: Gain +1 Knowledge; 12+: Gain +2 Knowledge but add +1 Danger.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Alien Ambassador',
            description:
                'Assigned here as a peace envoy. Make a Diplomacy roll (-1 per Stealth).',
            rolls: [
                {
                    roll: '2-4',
                    description: 'Accused of being a traitor – Capture (7)',
                },
                { roll: '5-6', description: 'No event' },
                {
                    roll: '7-8',
                    description:
                        'Knows of local events – roll for a Plot event',
                },
                {
                    roll: '9+',
                    description:
                        'Ambassador becomes an Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Diplomacy'],
        },
        {
            roll: '5',
            name: 'High Priest',
            description:
                'Devout to the Old God of Akhaten, but also a suspicious zealot. Make a Diplomacy roll (-3 if in a Temple, +3 if Enemy revealed).',
            rolls: [
                { roll: '2-7', description: 'You are Captured (8)' },
                { roll: '8-9', description: 'No further event' },
                {
                    roll: '10',
                    description: 'Informed of news - roll for a Plot event',
                },
                {
                    roll: '11+',
                    description: 'He becomes your Ally – roll for Plot event',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 3 },
            skills: ['Diplomacy', 'History'],
        },
        {
            roll: '6',
            name: 'Chorister',
            description:
                'A singer to the Old God dressed in long red robes. Make a Charm roll.',
            rolls: [
                { roll: '2-3', description: 'Guards called – see Vigil' },
                { roll: '4-6', description: 'No event' },
                {
                    roll: '7-8',
                    description:
                        'He pauses briefly to exchange news – roll for a Plot event',
                },
                {
                    roll: '9+',
                    description: 'He becomes your Ally – roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['History'],
            infomation: '+1 to Research (History) Actions.',
        },
        {
            roll: '7',
            name: 'Alien Visitor',
            description:
                'A short, green-skinned Lucanian, visiting this system for the first time. If you make a Charm 9 roll it becomes your Ally. The Lucanian may know something useful – if you pay 1 Luck, roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Pilot'],
        },
        {
            roll: '8',
            name: 'The Vigil',
            description:
                'A patrol of robotic Vigil guards (Special Characters) block your path.',
        },
        {
            roll: '9',
            name: 'Alien Merchant',
            description:
                'A species known for trade. Make a Charm roll (-1 per Stealth, discard a Gadget to gain bonus equal to Cost).',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'It accuses you of thievery and calls the Vigil (with -1 to roll)',
                },
                { roll: '5-6', description: 'No event' },
                {
                    roll: '7-8',
                    description: 'It knows some news – roll for Plot event',
                },
                {
                    roll: '9+',
                    description: 'It becomes an Ally - roll for Plot event',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 1 },
            skills: ['Diplomacy'],
            infomation: '+1 to Seek Information.',
        },
        {
            roll: '10',
            name: 'Fugitive',
            description:
                'Someone is avoiding the Vigil for unknown reasons. If it is the Festival of Offerings or you pay 1 Luck, it is Merry Gejelh (Special Character). Otherwise make a Charm roll.',
            rolls: [
                {
                    roll: '2-3',
                    description: 'Pickpocket - lose a Gadget or 2 Luck',
                },
                { roll: '4-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for Plot event' },
                {
                    roll: '10+',
                    description:
                        'Fugitive becomes your Ally – roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Stealth'],
        },
        {
            roll: '11-12',
            name: 'Alien Scholar',
            description:
                'A learned alien visiting Akhaten. Make a Science roll.',
            rolls: [
                { roll: '2-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for a Plot event' },
                {
                    roll: '10+',
                    description:
                        'The scholar becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 1 },
            skills: ['Medicine', 'Science'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'merry-gejelh',
            name: 'Merry Gejelh',
            description:
                'You have met Merry Gejelh, the young Queen of Years who sings as part of the religious festivals of Akhaten. Merry joins you as an Ally and will know about recent events on the Rings of Akhaten so roll for a Plot event. If it is the Festival of Offerings, Merry must go to the Amphitheatre on Turns 5-6 or lose 2 Luck and add +1 Danger.',
            information:
                'You may also attempt to make a Charm (10) roll and if successful, Merry joins you as a Companion – gain 1 Luck. Away from Akhaten however, Merry loses History 2.',
            stats: { brains: 2, brawn: 0, bravery: 2 },
            skills: ['Aware', 'Charm', 'History 2', 'Running', 'Stealth'],
        },
        {
            id: 2,
            image: 'the-vigil',
            name: 'The Vigil',
            description:
                'Robotic, masked aliens that ensure the traditions of the Old God are followed. If an Entity Enemy is revealed, the Vigil (Brawn 8) are Minions – either Evade (Running 8 or Stealth 8), Surrender (only if Danger 10 or less, Captured 8), start a (Capture) Conflict if Danger 8 or less, or an (Attack) Conflict if Danger 9+.',
            information:
                'If no Entity Enemy, make a Diplomacy roll (-1 per Stealth, -1 if Festival of Offerings): 0-7: Hostile – either Evade (Running 8 roll) or become Captured (7) or Attacked (Brawn 8); 8+: The Vigil stride past you with no further encounter.',
            stats: { brains: 0, brawn: 8, bravery: 0 },
            skills: ['Minion'],
        },
    ],
}

const A017: Adventure = {
    id: 17,
    tag: 'A017',
    title: 'Isle of Arran',
    year: 1972,
    tardis: 7,
    era: 'Modern Era',
    type: 'Holiday',
    description:
        'The TARDIS has landed close to the village of Lamlash on the Scottish island of Arran. It is an early spring morning and although the sun is shining weakly in the sky, there is still a fresh chill in the air and a beautiful dusting of snow on the mountains behind the village.',
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 0,
    },
    special:
        'Some Locations on the island can only be reached with a Pilot roll rather than a Move Action (roll again if a random Location result). You must also have hired or found a boat (see the Harbour Location). Night will fall at the start of Turn 10 and last 3 full Turns. Windswept Coast: (Water, Exterior, Move 3) You walk across the undulating hills and paths that seem to go for miles across the island, the sound of waves against the shore never far away. You may only complete Explore Actions (with +1 to the roll) or Move Actions here. Encounter (D6, +1 to roll if Discover Phase, -1 to roll if Night): 0: Enemy encounter; 1: Enemy event; 2: Lost (Incident); 3: Incident; 4-5: None; 6+: Character event.',
    enemy: [
        { roll: '1', name: 'Gothic' },
        { roll: '2', name: 'Earth' },
        { roll: '3', name: 'Entity' },
        { roll: '4', name: 'Temporal' },
        { roll: '5-6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Stone Circle',
            move: 9,
            terrain: 'Exterior',
            description:
                'An ancient monument that rests on a hill a few miles away from Lamlash and is tended by the villagers. Add +2 to Investigate Actions here. You may Study here. Take a -1 penalty to any Charm rolls with local Characters after visiting here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'Archaeologist' },
                { roll: '5', description: 'Local Gentry' },
                {
                    roll: '6',
                    description:
                        'Runes – gain +1 Knowledge if you make a History 8 roll',
                },
                { roll: '7', description: 'None' },
            ],
        },
        {
            roll: '2',
            name: 'Inn',
            move: 8,
            terrain: null,
            description:
                'A lovely local inn where the sounds of talking and laughing are mixed with the clink of glasses and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions and +1 to Relax Actions but you may not Investigate here.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Incident' },
                {
                    roll: '2+',
                    description:
                        'You can spend 1 Luck point to have a Character event, spend 2 Luck to meet Annie Harris (Special Character), or make a Charm 8 roll to have a Plot event (each once only)',
                },
            ],
        },
        {
            roll: '3',
            name: 'Farm',
            move: 9,
            terrain: 'Exterior',
            description:
                "A rustic old farmhouse surrounded by stables and sheds with a battered tractor sitting close to the gate. The bark of a dog can be heard from a barn. Add +1 to Investigate Actions here. If you make a Charm 7 roll, you are invited inside by the farmer's wife – make an immediate Relax Action (Discover Phase) or Seek Information (Charm) Action (Dilemma Phase).",
            encounter: 'D6',
            rolls: [
                { roll: '1-2', description: 'Incident' },
                { roll: '3-4', description: 'No event' },
                { roll: '5-6', description: 'Farmer' },
            ],
        },
        {
            roll: '4',
            name: 'Harbour',
            move: 7,
            terrain: 'Water, Exterior',
            description:
                "Fishing boats and other vessels are moored in a small but busy port. Loud seagulls wheel overhead as the local catch of the day is brought in. You may pay 2 Luck to hire a boat here or make a Stealth 9 roll to 'borrow' one (see Constable with -3 to Charm roll if you fail). Add +1 to Investigate or Seek Information Actions here.",
            encounter: 'D6 (-1 to roll if Night)',
            rolls: [
                { roll: '0-1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3-4', description: 'Boat Captain' },
                { roll: '5', description: 'Character event or Annie Harris' },
                { roll: '6', description: 'Incident' },
            ],
        },
        {
            roll: '5',
            name: 'Hidden Cove',
            move: null,
            terrain: 'Pilot 9, Water, Exterior',
            description:
                'A secluded beach and narrow cave a few miles along the coast from Lamlash. Add +1 to Investigate Actions here. You may Explore the cave as an Action (Dark) with +2 to the roll but add +1 to Enemy Action roll.',
            encounter: 'D6 adding Pilot',
            rolls: [
                {
                    roll: '1-2',
                    description:
                        'Choppy waters leave you stranded – Characters here may take no Action next Turn',
                },
                { roll: '3', description: 'Quiet cove - no event' },
                { roll: '4', description: 'Enemy encounter' },
                { roll: '5', description: 'Gain +1 Knowledge' },
                { roll: '6+', description: 'Enemy Lair (Defeat Phase only)' },
            ],
        },
        {
            roll: '6',
            name: 'Old Church',
            move: 8,
            terrain: null,
            description:
                'An old country stone church, set close to the shore, with stained glass windows and surrounded by a slightly-overgrown graveyard. Add +1 to Research (History) Actions here.',
            encounter: 'D6 (+1 if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                {
                    roll: '2',
                    description:
                        'Secret Passage – You may roll 1D6 and automatically Move to that Location next Turn if you wish',
                },
                { roll: '3-4', description: 'No event' },
                {
                    roll: '5',
                    description:
                        'Dusty records – make a History 8 roll to gain +1 Knowledge',
                },
                { roll: '6+', description: 'Vicar' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered washed up on the shore – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Brutal Death',
            description:
                'Someone has been found murdered on a nearby beach and a corpse discovered. Roll 1D6 and if result is a 1, discard random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Missing Villagers',
            description:
                'Some people have been recently vanishing from Lamlash in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck point if you have a native Character with you.',
        },
        {
            roll: '7',
            name: 'Island Legend',
            description:
                'You learn about a strange, mysterious legend of the island. Is it just old fishwives tales or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
        },
        {
            roll: '8',
            name: 'Smashed Boat',
            description:
                'A missing fishing boat has been discovered in the Harbour, but with no sign of the crew. If you go to the Harbour and make a Brains 10 roll (add Aware), gain +1 Knowledge (+2 Knowledge if with a native Character with Pilot).',
        },
        {
            roll: '9',
            name: 'Lights in the Sky',
            description:
                'Strange lights have been seen by locals in the night sky across the ocean recently. Could it relate to something sinister? Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
        },
        {
            roll: '10',
            name: 'Important Event',
            description:
                'An important celebration is due to happen soon on the island - could it be linked to the Enemy plans? Gain +1 Knowledge (or +2 Knowledge if with a native Character). At the start of the Defeat Phase, add +1 Danger.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-2: Roll for random Location - gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (roll for Enemy if Discover Phase); 3-6: Offshore Island (Water, Pilot 9) - if you go there, you find it has a strange, spiritual aura. Add +2 to Investigate or Research (History) Actions here. Encounter (D6): 1: Enemy Lair; 2: Enemy encounter; 3: No event; 4: Character event (-3 to Charm or Diplomacy rolls); 5: Gain +1 Knowledge; 6: Gain +2 Knowledge but +2 Danger and +1 to Enemy Action rolls.',
        },
    ],
    characters: [
        {
            roll: '2-3',
            name: 'Archaeologist',
            description:
                'A scientist who is investigating the Lamlash stone circle. If you make a Charm 9 roll (adding Science), the archaeologist becomes your Ally – see the Ancient Relic Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['History', 'Science'],
        },
        {
            roll: '4',
            name: 'Local Gentry',
            description:
                'Slightly odd Scottish gentleman. Make a Diplomacy roll.',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'Hidden secrets – add +1 Danger, -2 to Find Help Actions and he becomes a Minion',
                },
                { roll: '5-6', description: 'No event' },
                {
                    roll: '7-8',
                    description: 'Shares local gossip - roll for Plot event',
                },
                {
                    roll: '9+',
                    description:
                        'He joins you as an Ally – roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Diplomacy', 'History'],
        },
        {
            roll: '5',
            name: 'Barmaid',
            description:
                'A shrewd local girl who always knows some gossip. Make a Charm roll (-1 to roll at the Inn).',
            rolls: [
                { roll: '2-4', description: 'No event' },
                { roll: '5-8', description: 'Gossip – roll for a Plot event' },
                {
                    roll: '9+',
                    description: 'Becomes an Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Charm', 'Running', 'Stealth'],
        },
        {
            roll: '6',
            name: 'Constable',
            description:
                'A local bobby takes an interest in you. Make a Charm roll (-1 per Stealth, +3 if Danger 10+).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Wanted for questioning – make Running 7 roll or Captured (6)',
                },
                { roll: '6-9', description: 'He leaves with a nod to you' },
                {
                    roll: '10+',
                    description:
                        'He becomes an Ally (+1 to Investigate and Find Help Actions)',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
        },
        {
            roll: '7',
            name: 'Tourist',
            description:
                'A young backpacker on their first visit to the island. If you make a Charm 7 roll, the tourist joins you as an Ally. You may pay 1 Luck to roll for a Plot event.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Running'],
        },
        {
            roll: '8',
            name: 'Teacher',
            description:
                'A young teacher from the local village primary school. If you make a Charm 7 roll, she joins you as an Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Charm', 'History', 'Running'],
        },
        {
            roll: '9',
            name: 'Medic',
            description:
                'A handsome young medic from a small local practice. If you make a Charm 9 roll (+2 if Enemy revealed), the medic becomes an Ally - roll for Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Medicine'],
        },
        {
            roll: '10',
            name: 'Boat Captain',
            description:
                'A local fisherman who knows Arran well and has a boat in the Harbour (see Location). If you make a Charm 8 roll, he joins you as an Ally - roll for a Plot event.',
            stats: { brains: 1, brawn: 2, bravery: 2 },
            skills: ['Pilot'],
        },
        {
            roll: '11',
            name: 'Vicar',
            description:
                'The local clergy of the parish. Make a Charm roll (adding History).',
            rolls: [
                {
                    roll: '2-3',
                    description: 'He is offended and calls a Constable',
                },
                { roll: '4-7', description: 'He tips his hat and leaves' },
                {
                    roll: '8-9',
                    description: 'He shares news – roll for Plot event',
                },
                {
                    roll: '10+',
                    description:
                        'He joins you as an Ally (+1 to Find Help Actions) – roll for Plot event',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 2 },
            skills: ['History'],
        },
        {
            roll: '12',
            name: 'Child',
            description:
                'An eleven-year old who attends the local primary school. Make a Charm roll.',
            rolls: [
                {
                    roll: '2-4',
                    description: "He's scared and runs off – lose 1 Luck",
                },
                { roll: '5-6', description: 'No further event' },
                {
                    roll: '7-8',
                    description:
                        'You share some secrets – gain 1 Knowledge or roll for a Plot event',
                },
                {
                    roll: '9+',
                    description: 'Becomes your Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Stealth'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'annie-harris',
            name: 'Annie Harris',
            description:
                'You have met Annie Harris – an artist and designer who has given up hectic city life and opted for a more spiritual retreat. Annie is smart and observant but can be a little absent-minded at times. Annie will join you as an Ally. Recently relocated to Arran, Annie knows something about what has been happening on the island recently, so roll for a Plot event.',
            information:
                'You may also attempt to make a Charm (10) roll and if successful, Annie joins you as a Companion – gain 1 Luck.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Aware', 'Charm', 'Running'],
        },
    ],
}

const A018: Adventure = {
    id: 18,
    tag: 'A018',
    title: 'Dark Asteroid',
    year: null,
    tardis: null,
    era: null,
    type: 'Wilderness',
    description:
        'After using an energy boost from the TARDIS, you have left the known universe to land on a desolate, rocky asteroid, just large enough to support a thin atmosphere and light gravity. But as you land, the lights in the TARDIS suddenly go out, plunging the console room into darkness. Checking the controls, you discover that the TARDIS Energy matrix is completely drained...',
    stats: {
        danger: 1,
        knowledge: 5,
        vp: 0,
    },
    special:
        'Lose 1 Resources (if 0, lose 2 points from another TARDIS Quality). You may not take Actions in the TARDIS in this Adventure. Bleak Wasteland: (Dark, Exterior, Move 4) A cruel wind whips your hair and clothes as you trudge through the unforgiving landscape. The absence of stars in the night sky makes your journey difficult and treacherous. Explore Actions have a -1 penalty. You may not take Investigate or Research Actions here. If Captured here, roll for new Location. Encounter (D6, +1 to roll if Discover Phase): 1: Enemy encounter; 2: Enemy event; 3: Incident; 4: Lost (Incident); 5+: No event.',
    enemy: [
        { roll: '1-3', name: 'Entity' },
        { roll: '4-5', name: 'Temporal' },
        { roll: '6', name: 'Villain' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Junkyard',
            move: 7,
            terrain: 'Dark, Exterior',
            description:
                'The area is covered with the remains of crashed spacecraft and other junk. Add +2 to Move Actions to non-Exterior Locations. Add +1 to Investigate and Research (Engineer) Actions here (and if have Breakthrough result you may draw and play a Gadget card at no Cost).',
            encounter: 'D6 (+1 to roll if Discover phase, add Engineer)',
            rolls: [
                { roll: '1-2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'None' },
                { roll: '6', description: 'Character event' },
                {
                    roll: '7+',
                    description: 'Draw (and play at no Cost) a Gadget card',
                },
            ],
        },
        {
            roll: '2',
            name: 'Crashed Spacecraft',
            move: 8,
            terrain: 'Dark',
            description:
                'The massive infrastructure of a spaceship embedded in the surface of the asteroid like a huge, twisted metal skeleton. Add +1 to Explore and Investigate Actions here (adding Pilot to either). Add +1 to Enemy Action rolls if you have Characters here.',
            encounter: 'D6 (+1 to roll if Discover phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'No event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '3',
            name: 'Tunnels',
            move: 9,
            terrain: 'Dark',
            description:
                'The tunnels beneath the surface are dark, cramped and filled with the twisted remains of salvage. Add +1 to Explore and Investigate Actions here.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-3', description: 'Lost (Incident)' },
                { roll: '4', description: 'Enemy Lair' },
                { roll: '5', description: 'Enemy encounter' },
                {
                    roll: '6',
                    description:
                        'Tunnel support crumbles – random Character killed unless you spend 2 Luck',
                },
                { roll: '7-8', description: 'No event' },
                { roll: '9', description: 'Character event' },
                { roll: '10', description: 'Rat Creatures' },
                {
                    roll: '11+',
                    description:
                        'Gain 2 Knowledge or spend 1 Luck to gain +2 to next Prevent Action',
                },
            ],
        },
        {
            roll: '4',
            name: 'Mountains',
            move: 6,
            terrain: 'Dark, Exterior',
            description:
                'The ferocious wind howls in your ears as you climb across the narrow, rocky ledges. Add +1 to Move and Investigate Actions here but if you roll doubles, you slip on the ledge – roll 1D6 for each Character and on a result of 1 they are killed.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2-3', description: 'No event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'Character event' },
                {
                    roll: '6+',
                    description:
                        'Secret Tunnel – you may automatically Move to a random Location',
                },
            ],
        },
        {
            roll: '5',
            name: 'Ruins',
            move: 8,
            terrain: 'Dark',
            description:
                'A partly collapsed, ancient stone temple buried in the side of a ravine, with crumbling passages that twist downwards into the darkness. Add +1 to Investigate Actions here.',
            encounter: 'D6 adding Aware',
            rolls: [
                { roll: '1-2', description: 'Lost (Incident)' },
                { roll: '3', description: 'Abandoned – no event' },
                { roll: '4', description: 'Enemy Lair' },
                { roll: '5', description: 'Enemy encounter' },
                {
                    roll: '6',
                    description: 'Gain +1 Knowledge or roll for Plot event',
                },
                {
                    roll: '7+',
                    description:
                        'Gain +2 Knowledge but +1 Danger and +1 Enemy Action rolls whilst here',
                },
            ],
        },
        {
            roll: '6',
            name: 'Crashed Alien Vessel',
            move: 9,
            terrain: null,
            description:
                'An incredible ship of totally organic design with warm, vivid colours that gently pulsate as you explore it. Strange, but pleasant fluting music is mixed with an urgent throb that signifies the ship has been damaged. You may Study here as an Action using Science. Add +1 to Investigate and Research (Science) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy Event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'No event' },
                { roll: '5', description: 'Plot event' },
                { roll: '6', description: 'Alien Survivor' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Time Rift',
            description:
                'You learn that the asteroid inhabits a crack in Time. Add +1 Danger if a Temporal Enemy is revealed. Make a successful Brains 12 roll to gain +1 Knowledge (+2 Knowledge if Brains 15 roll).',
        },
        {
            roll: '5',
            name: 'Mysterious Runes',
            description:
                'You discover that strange symbols have been found carved on the rocks of the ruins. If you go there and make a History 8 roll, gain +2 Knowledge. If you make a History 10 roll, instead reveal the Enemy.',
        },
        {
            roll: '6',
            name: 'Drained Corpse',
            description:
                'You discover a mummified corpse that has been completely drained of all life-energy. Add +1 Danger. If you make a Medicine 9 roll, gain +1 Knowledge (+2 Knowledge if you also make a Science 9 roll).',
        },
        {
            roll: '7',
            name: 'Temporal Drain',
            description:
                'You discover that the asteroid has a strange effect on time machines such as a TARDIS. Lose 1 point from any TARDIS Quality but gain +1 Knowledge. Add +1 Danger if Entity Enemy later revealed in Adventure.',
        },
        {
            roll: '8',
            name: 'Energy Barrier',
            description:
                'You discover that an energy barrier has been created across a random Location. Gain +1 Knowledge but you may not go to that Location unless you also make an Engineer 9 roll (+1 per attempt).',
        },
        {
            roll: '9',
            name: 'Captive',
            description:
                'Someone or something important has been captured. If you Move to a random Location and make a Rescue 8 Action, roll 1D6: 1-2: Gain +1 Knowledge; 3-4: Character event; 5-6: Enemy encounter.',
        },
        {
            roll: '10',
            name: 'Time Lord Hypercube',
            description:
                'The glowing cube acts as a distress call. If you make an Aware 9 roll (where only Time Lords can add to roll), choose to gain +1 Knowledge, or encounter a Time Lord, or find a Dead TARDIS.',
        },
        {
            roll: '11-12',
            name: 'Dead TARDIS',
            description:
                'You discover the weak energy signature of a TARDIS. If you go there (Move 9) then you find it is almost dead. Add +1 Knowledge and +1 Danger. Add +2 to Investigate Actions here. Encounter (TARDIS roll): 2-4: Enemy encounter; 5: Enemy event; 6-8: No event; 9: Time Lord; 10: Draw a random TARDIS Gadget card; 11: Gain +1 Knowledge; 12+: Gain +2 Knowledge or +2 to a Prevent Action.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Survivor',
            description:
                'A badly wounded survivor from one of the crashed ships. Unless you make a Medicine 7 roll, the survivor dies – lose 1 Luck (or 2 Luck and roll for a Plot event). If treated, the survivor joins you as an Ally – roll for a Plot event. You may also pay 1 Luck for the survivor to be Idris (Special Character).',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Engineer', 'Pilot'],
        },
        {
            roll: '5',
            name: 'Psionic Cult',
            description:
                'Strange, robed figures approach you. Make an Aware roll (-2 if in Ruins, +2 if Enemy revealed).',
            rolls: [
                { roll: '2-7', description: 'You are Captured (9)' },
                { roll: '8-9', description: 'No further event' },
                {
                    roll: '10',
                    description: 'Informed of news - roll for a Plot event',
                },
                {
                    roll: '11+',
                    description:
                        'One of the cult becomes your Ally (may use Brains instead of Brawn in a Conflict) – roll for Plot event',
                },
            ],
            stats: { brains: 4, brawn: 1, bravery: 3 },
            skills: ['Aware'],
        },
        {
            roll: '6',
            name: 'Ood',
            description:
                "A well-meaning, alien telepathic servitor joins you as an Ally, communicating through his glowing orb. However, if the Enemy is, or revealed as, an Entity, the Ood's eyes glow green and it attacks (Brawn 3). You can Evade with a Running 7 roll.",
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Engineer'],
        },
        {
            roll: '7',
            name: 'Rat Scavengers',
            description:
                'You are attacked by a pack of large rats. Roll 1D6 +1 (or +3 if Dark) for the number of rats, each Brains 0, Brawn 1, Bravery 1 (Creature). You may try to Evade with a Running 9 roll (-2 to roll if Dark), or you must start a Conflict (Attack).',
        },
        {
            roll: '8',
            name: 'Idris',
            description:
                'A strange young woman (see Special Characters) runs into you.',
        },
        {
            roll: '9',
            name: 'Alien Survivor',
            description:
                'A gaseous alien being that glows with an inner light. Make a Charm roll (adding Aware).',
            rolls: [
                {
                    roll: '2-6',
                    description:
                        'You fail to make contact and the alien vanishes',
                },
                {
                    roll: '7-9',
                    description:
                        'The alien communicates with you – gain +1 Knowledge, it then vanishes',
                },
                {
                    roll: '10+',
                    description:
                        'The alien joins you as an Ally – gain +1 Knowledge',
                },
            ],
            stats: { brains: 3, brawn: 0, bravery: 1 },
            skills: ['Aware', 'History', 'Pilot'],
        },
        {
            roll: '10',
            name: 'Time Lord',
            description:
                'Badly wounded, the Time Lord will die unless you make a Medicine 7 roll. If treated, the Time Lord joins you as an Ally – gain +1 Knowledge.',
            stats: { brains: 4, brawn: 1, bravery: 2 },
            skills: ['Engineer', 'Science', 'TARDIS'],
        },
        {
            roll: '11-12',
            name: 'Alien Scholar',
            description:
                'A learned alien marooned on the asteroid. Make a Science roll.',
            rolls: [
                { roll: '2-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for a Plot event' },
                {
                    roll: '10+',
                    description:
                        'The scholar becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 1 },
            skills: ['Medicine', 'Science'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'idris',
            name: 'Idris',
            description:
                'You have met Idris, a strange yet captivating young woman who babbles constantly. Roll 1D6: 1: She runs away; 2-6: She joins you as a rather unusual Ally (but counts as a TARDIS Character) – roll for a Plot event.',
            information:
                "You may also add your TARDIS Quality total to Idris' Qualities (with max +3 to any one Quality). If Idris is an Ally, you realise that she contains the lost Energy Matrix of the TARDIS but can only contain the energy for 8 Turns. Unless you Defeat the Enemy in this time, Idris dies and the TARDIS is lost forever. If you Defeat the Enemy, gain +3 VP as the Energy matrix returns to the TARDIS and you have the chance to speak to your oldest friend.",
            stats: { brains: 4, brawn: 1, bravery: 4 },
            skills: ['Aware 2', 'Charm', 'Running', 'TARDIS 2'],
        },
        {
            id: 2,
            image: 'tardis-invaded',
            name: 'TARDIS Invaded',
            description:
                'Due to the strange, extra-dimensional properties of this asteroid and since the TARDIS Energy Matrix is lost, it means your ship is compromised and can now be invaded by unknown forces in this Adventure.',
            information:
                'Characters inside the TARDIS can now have Enemy encounters and be affected by Enemy events. If the Enemy is not Defeated in the Adventure however, the TARDIS Energy Matrix is lost forever and the game is over.',
            stats: null,
            skills: [],
        },
    ],
}

const A019: Adventure = {
    id: 19,
    tag: 'A019',
    title: 'Nottingham',
    year: 1190,
    tardis: 9,
    era: 'Medieval Era',
    type: null,
    description:
        'The TARDIS has landed at the edge of a huge forest that is filled with magnificent oak trees. It is a warm, late summer afternoon and a gentle sun baths the rural landscape in a golden glow. You can hear the gentle sound of a river nearby and the air is heady with the smell of woodland flowers. Away from the forest, rolling fields stretch into the distance where you can just see the turrets of a stone castle.',
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 0,
    },
    special:
        'Gain 1 Luck if you bring a female Companion with Charm or History here. Night falls at the start of Turn 2D6+1 and lasts 3 Turns. Sherwood Forest: (Exterior, Move 4) You stroll amongst the majestic English oaks that filter the warm sunshine, giving a welcome shade. Bird calls echo through the glades and the mossy rocks are vibrant green, but the forest can have an eerie feeling too. Add +1 to Explore Actions but may not Research here. Encounter: (D6, +1 if Discover Phase, -1 if Night): 0: Enemy encounter; 1: Enemy event; 2: Lost (Incident); 3: Incident; 4: None; 5: Character event; 6+: Outlaws.',
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3', name: 'Military' },
        { roll: '4', name: 'Entity' },
        { roll: '5', name: 'Villain' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Tavern',
            move: 8,
            terrain: null,
            description:
                'You have found a local inn where the sounds of talking and laughing are mixed with the clank of mugs and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions but you may not Investigate here.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1-2',
                    description: 'Tavern brawl - Attacked (Brawn 4)',
                },
                { roll: '3', description: 'Incident' },
                {
                    roll: '4-6',
                    description:
                        'You can spend 1 Luck to meet a Wench or random Character, or attempt a Charm 9 roll to roll for a Plot event (each once only)',
                },
            ],
        },
        {
            roll: '2',
            name: 'Forest River',
            move: 7,
            terrain: 'Water, Exterior',
            description:
                'You have found a wide and fast-flowing river that cuts through the forest. Getting across might prove difficult. Take a -2 penalty to Move Actions from here unless you make an Aware 9 roll or spend 1 Luck per Character (max 3). You may not Investigate here. Move 7 from Sherwood Forest only.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3-4', description: 'None' },
                { roll: '5', description: 'Outlaws' },
                {
                    roll: '6+',
                    description:
                        'Robin Hood (Special Character with -3 to Charm roll)',
                },
            ],
        },
        {
            roll: '3',
            name: 'Nottingham Castle',
            move: 8,
            terrain: null,
            description:
                'The stronghold in the centre of Nottingham with dungeons that are a grim reminder to anyone who opposes the Sheriff. Add +1 to Investigate, Plan or Seek Information (Stealth) Actions here. Escape or Rescue Actions have a -1 penalty here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy Encounter' },
                { roll: '3', description: 'Captured (9)' },
                { roll: '4', description: 'Guards (Brawn 7 if Attacked)' },
                { roll: '5', description: 'None' },
                { roll: '6+', description: 'Sheriff of Nottingham' },
            ],
        },
        {
            roll: '4',
            name: 'Village',
            move: 8,
            terrain: null,
            description:
                "A small collection of stone and thatched buildings clustered together and surrounded by fields and meadows for crops or animals. Smoke curls from a smith's brazier. Add +1 to Investigate or Seek Information Actions here. You may automatically Move to the Tavern without using an Action.",
            encounter: 'D6 (-1 if Night, +1 to roll if Discover Phase)',
            rolls: [
                { roll: '0-1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'None' },
                { roll: '5+', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Farm',
            move: 9,
            terrain: 'Exterior',
            description:
                'An old thatched house with a barn that is surrounded by tilled fields. A horse and plough are tied to a gate and the bark of a dog can be heard from nearby. Add +1 to Investigate Actions here. If you make a Charm 8 roll you are invited inside by the farmer – roll for a Plot event (Discover Phase) or take an immediate Seek Information Action (Dilemma Phase).',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Wench' },
                { roll: '2', description: 'Incident' },
                { roll: '3-4', description: 'None' },
                { roll: '5', description: 'Guards' },
                { roll: '6', description: 'Plot event' },
            ],
        },
        {
            roll: '6',
            name: 'Monastery',
            move: 8,
            terrain: null,
            description:
                'A beautiful stone building with shaded cloisters, a magnificent chapel and some lovely gardens tended by the monks. Add +1 to Research (History) Actions here. You may Study here but may not take Prevent Actions here unless specified by a Goal.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Friar' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'None' },
                {
                    roll: '5',
                    description:
                        'Study monastery records – make a History 8 roll to gain +1 Knowledge',
                },
                {
                    roll: '6',
                    description:
                        'Talk to head of the order – gain +1 Luck and roll for a Plot event',
                },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Massacre',
            description:
                'A nearby village has been burnt to the ground and all the villagers, men, women and children, brutally killed by some unknown force. Gain +1 Knowledge but lose 1 Luck if you have a native Ally.',
        },
        {
            roll: '6',
            name: 'Strange Behaviour',
            description:
                'You learn that the Sheriff of Nottingham is being even more cruel than usual. If you encounter the Sheriff of Nottingham and make an Aware 8 roll, either reveal the Enemy or gain +1 Knowledge.',
        },
        {
            roll: '7',
            name: 'Old Fable',
            description:
                'You learn about a strange, mysterious legend of Sherwood Forest. Is it just superstition or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 8 roll).',
        },
        {
            roll: '8',
            name: 'Archery Contest',
            description:
                'Due to happen soon at Nottingham Castle. If you go there, add +1 Danger but gain +1 Knowledge (or +2 Knowledge and gain 1 Luck if with Robin Hood). Whilst at the castle, add +1 to Enemy Action rolls.',
        },
        {
            roll: '9',
            name: 'Lights in the Sky',
            description:
                'Strange lights have been seen by locals in the night sky recently. Could it relate to something sinister? Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
        },
        {
            roll: '10',
            name: 'Poverty and Taxes',
            description:
                'You learn about the current dangerous political climate with local villagers in desperate poverty. Gain +1 Knowledge (or +2 Knowledge with a successful History 9 or Diplomacy 8 roll).',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-3: Roll for a random Location – gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (roll for Enemy if Discover Phase); 4-6: A cave deep in Sherwood (Dark, Move 8 from Sherwood Forest only) with an underground lake. Add +1 to Investigate Actions there but any Ally with Bravery 1 or less will not enter. Encounter (D6): 1-2: Enemy Lair (roll for Enemy if Discover Phase); 3: Enemy encounter; 4: None; 5: Old Fable; 6: Gain +2 Knowledge but +1 Danger and +1 Enemy Action rolls.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Merchant',
            description:
                'A well-dressed trader. Make a Charm roll (-1 per Stealth).',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'He accuses you of thievery and calls constables – see Guards with -1 to Charm roll',
                },
                { roll: '5-6', description: 'No event' },
                {
                    roll: '7-8',
                    description:
                        'He knows some local gossip – roll for a Plot event',
                },
                {
                    roll: '9+',
                    description: 'He becomes an Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Diplomacy'],
        },
        {
            roll: '5',
            name: 'Wench',
            description:
                'A shrewd and feisty local girl who always knows some gossip. Make a Charm roll (-1 if in a Tavern).',
            rolls: [
                { roll: '2-4', description: 'No event' },
                { roll: '5-8', description: 'Gossip – roll for Plot event' },
                {
                    roll: '9+',
                    description: 'Becomes an Ally – roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Charm', 'Stealth'],
        },
        {
            roll: '6',
            name: 'Sheriff of Nottingham',
            description:
                'The infamous local lord who dispenses his own cruel justice, with his guards. Make a Diplomacy roll (-1 per Stealth).',
            rolls: [
                {
                    roll: '2-8',
                    description:
                        'You are Attacked (Brawn 4+1D6) unless you Surrender (Captured 8 and taken to Nottingham Castle) or evade with a Running 9 roll',
                },
                { roll: '9-10', description: 'No event' },
                {
                    roll: '11+',
                    description: 'Make a Brains 12 roll to gain +1 Knowledge',
                },
            ],
        },
        {
            roll: '7',
            name: 'Guards',
            description:
                'A patrol of rough and aggressive soldiers block your path. Unless you make a Charm 9 roll (with -1 per Stealth) to confuse them, or a Running 7 roll to escape them, you become Captured (7) or are Attacked (Brawn 6).',
        },
        {
            roll: '8',
            name: 'Minstrel',
            description: 'A master of the lute. Make a Charm roll.',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        "He's a thief too – you lose 2 Luck, a Gadget or discard an Idea card",
                },
                { roll: '5-6', description: 'No event' },
                { roll: '7-8', description: 'Roll for Plot event' },
                { roll: '9+', description: 'Becomes your Ally' },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Charm', 'History', 'Stealth'],
        },
        {
            roll: '9',
            name: 'Outlaws',
            description:
                'A band of thieves on the run from the Sheriff. You may pay 2 Luck to have them led by Robin Hood (Special Character). If not, make a Charm roll (add Stealth).',
            rolls: [
                {
                    roll: '2-7',
                    description: 'Robbed - lose a Gadget or 2 Luck',
                },
                {
                    roll: '8-9',
                    description:
                        'The merry lads laugh and let you go - roll for Plot event',
                },
                {
                    roll: '10+',
                    description:
                        'Outlaw becomes an Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 2 },
            skills: ['Stealth'],
        },
        {
            roll: '10',
            name: 'Knight',
            description:
                'A veteran returned from the Crusades. Make a Diplomacy roll.',
            rolls: [
                {
                    roll: '2-3',
                    description: 'You are challenged to a duel (Brawn 3)',
                },
                { roll: '4-6', description: 'No event' },
                { roll: '7-8', description: 'Roll for Plot event' },
                { roll: '9+', description: 'He becomes your Ally' },
            ],
            stats: { brains: 1, brawn: 3, bravery: 3 },
            skills: ['Diplomacy', 'History'],
        },
        {
            roll: '11-12',
            name: 'Friar',
            description:
                'A learned man of herbs and potions. Make a Science roll.',
            rolls: [
                {
                    roll: '2-7',
                    description: 'He nods and passes by - no further event',
                },
                { roll: '8-9', description: 'Roll for a Plot event' },
                {
                    roll: '10+',
                    description: 'He becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 1 },
            skills: ['Medicine', 'Science'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'robin-hood',
            name: 'Robin Hood',
            description:
                '(Icon) You have met the Prince of Thieves himself, Robin Hood – Brains 2, Brawn 4, Bravery 4 (Charm 2, Running 2, Stealth 2). Gain 1 VP. Make a Charm roll (only female Characters add Charm, +3 if Enemy revealed): 2-5: The saucy rascal challenges you to a duel – start an (Attack) Conflict. If you lose, lose 1 Luck. If you win, he becomes your Ally; 6-8: He knows strange tales - roll a Plot event before he saunters away; 9+: Robin joins you as an Ally.',
            information:
                'If an Ally, roll for a Plot event and you may Move to the Outlaw Camp Location.',
            stats: { brains: 2, brawn: 4, bravery: 4 },
            skills: ['Charm', 'Running', 'Stealth'],
        },
        {
            id: 2,
            image: 'outlaw-camp',
            name: 'Outlaw Camp',
            description:
                '(Exterior, Move 9 from Sherwood Forest only with Robin Hood) You have found a narrow gully where Robin’s merry men hide deep within Sherwood Forest. Gain 1 Luck point (once only). Add +1 to Plan Actions here but you may not take Prevent Actions here. If all your Characters are here, -2 to Enemy Action rolls.',
            information:
                'If with Robin Hood, you gain (once only) 1D6+1 Outlaws as Allies, each Brains 0, Brawn 2, Bravery 2, Running, Stealth. You may also pay 1 Luck (each) to replace an OutlawAlly with: Little John (Brawn 4), Alan a’ Dale (add Charm) or Friar Tuck (add Medicine).',
            stats: null,
            skills: [],
        },
    ],
}

const A020: Adventure = {
    id: 20,
    tag: 'A020',
    title: 'Ood Sphere',
    year: 4228,
    tardis: 9,
    era: 'Twilight Era',
    type: 'Wilderness',
    description:
        'The TARDIS has landed on the frozen, icy world of the Ood. In the far distance are vast, snow covered mountains whilst two moons hang in the clear blue sky. Your breath steams in the bitter air that makes your skin tingle as you take in the incredible glaciers and beautiful ice-sculpted landscape.',
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 1,
    },
    special:
        'Night falls at the start of Turn 1D6+2, lasting 4 Turns. If at an Exterior Cold Location at start of a Turn, lose 1 Luck (2 Luck if Night) or kill a Human Character with Brawn 0 or 1. If you have a Character with Aware 2 or an Ood Ally, see Telepathic Field (Special Events). Snowy Tundra: (Cold, Exterior, Move 2) You trudge through the deep snow that covers the incredibly beautiful alien landscape. Gain 1 Luck point if you have a Human Companion (once only). You may only Explore or Move as Actions here. Encounter (D6, +1 to roll if Discover Phase): 1: Enemy encounter; 2: Enemy event; 3: Incident; 4: None; 5: Character event; 6: Lost (Incident); 7: Blizzard – Take a -2 penalty to Explore and Move Actions next turn, treating the Turn as Night.',
    enemy: [
        { roll: '1', name: 'Villain' },
        { roll: '2', name: 'Chameleon' },
        { roll: '3-4', name: 'Entity' },
        { roll: '5', name: 'Military' },
        { roll: '6', name: 'Criminal' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Snowy Mountains',
            move: 8,
            terrain: 'Cold, Exterior',
            description:
                'You have reached the imposing mountain range you saw earlier from afar and the keen wind grows ever bitter. Add +1 Danger if Night. Add +2 to Explore and Move Actions, but you cannot Investigate or Research here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy Event' },
                { roll: '3', description: 'Incident' },
                {
                    roll: '4',
                    description:
                        'Avalanche – roll 1D6 for each Character, on a result of 1 they are killed unless you lose 1 Luck',
                },
                { roll: '5-6', description: 'No event' },
                { roll: '7', description: 'Lost (Incident)' },
            ],
        },
        {
            roll: '2',
            name: 'Alien Glacier',
            move: 8,
            terrain: 'Cold, Exterior',
            description:
                'Huge sheets of rock and ice tower over you as you skirt the immense glacier. Even though it looks solid, your ears strain for any ominous sound. Add +1 to Investigate and Research (Science) Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy Event' },
                { roll: '3', description: 'Incident' },
                {
                    roll: '4',
                    description:
                        'Ice Creature Attacks (Brawn 4) unless you Evade with a Running 8 roll',
                },
                { roll: '5', description: 'Buried in the Ice' },
                { roll: '6', description: 'No event' },
                { roll: '7', description: 'Character event' },
            ],
        },
        {
            roll: '3',
            name: 'Ood City',
            move: 8,
            terrain: null,
            description:
                'An incredible structure of twisting rock and ice. You may Find Help here. Add +1 to Plan and Research Actions here. If a Character has Science and History, they may spend a Turn exploring Ood culture to gain 1 Luck point. You may spend 1 Luck to be given furs that protect against the Cold. If you have 3 Aware you may gain an Audience with Ood Elders (Special Event).',
            encounter: 'D6 adding Aware from non-Human Characters',
            rolls: [
                { roll: '1-2', description: 'No event' },
                { roll: '3-4', description: 'Ood' },
                { roll: '5', description: 'Ood Sigma' },
                { roll: '6+', description: 'Audience with Ood Elders' },
            ],
        },
        {
            roll: '4',
            name: 'Ice Caves',
            move: 8,
            terrain: 'Cold, Dark',
            description:
                'You discover the entrance to a huge system of caves where you find enormous frozen caverns. Add +2 to Investigate Actions and Enemy Action rolls here. Add +1 to Evade option rolls.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-4', description: 'Enemy encounter' },
                {
                    roll: '5',
                    description:
                        'Ice Creature Attacks (Brawn 4) unless Evade with a Running 8 roll',
                },
                { roll: '6', description: 'Enemy event' },
                { roll: '7', description: 'Frozen Ood' },
                { roll: '8', description: 'None' },
                { roll: '9', description: 'Character event' },
                {
                    roll: '10-11',
                    description:
                        'Ice collapses - kills random Character unless pay 2 Luck',
                },
                {
                    roll: '12+',
                    description: 'Tunnel – move to random Location',
                },
            ],
        },
        {
            roll: '5',
            name: 'Frozen River',
            move: 8,
            terrain: 'Cold, Exterior',
            description:
                "A wide icy river cuts across the landscape and you'll need to find somewhere to cross. Take a -2 penalty to Move Actions from here unless you make an Aware 9 roll or spend 1 Luck per Character (max 3). Add +1 to Explore Actions. You may not Investigate here.",
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                {
                    roll: '2',
                    description:
                        'Ice Creature Attacks (Brawn 4) unless Evade with a Running 8 roll',
                },
                { roll: '3', description: 'Incident' },
                { roll: '4-5', description: 'No event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '6',
            name: 'Thermal Springs',
            move: 9,
            terrain: 'Water, Exterior',
            description:
                'You feel the welcome warmth of steam that rises from natural geothermal springs. The hot pools surrounded by the ever-present ice are often thought to have healing properties. You may Relax as an Action here (Discover Phase only). Add +1 to Research (Medicine) Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4-5', description: 'No event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Ancient Relic',
            description:
                'A mysterious artefact has been discovered in the ice – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Frozen Ood',
            description:
                'You have found the corpse of an Ood, frozen in the tundra. If you have any Ood Allies, discard one. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Mysterious Runes',
            description:
                'You discover a set of strange symbols carved into the icy rock. If you make a History 8 roll, gain +2 Knowledge. If you make a History 10 roll, instead reveal the Enemy.',
        },
        {
            roll: '7',
            name: 'Disturbance in Telepathic Field',
            description:
                'You discover that the Circle has been broken. Gain +1 Knowledge. Any bonuses gained from the Telepathic Field (Special Events) are cancelled. Lose 1 Luck for each Character you control with Aware 2.',
        },
        {
            roll: '8',
            name: 'Geological Survey',
            description:
                'A geological report of the Ood sphere may provide some clues. If you make a Science 8 roll, gain +1 Knowledge (+2 Knowledge if you make a Science 10 roll).',
        },
        {
            roll: '9',
            name: 'Buried in the Ice',
            description:
                'You learn that something sinister has been discovered in the strata beneath the surface of the Ood Sphere. Make a successful Brains 10 roll to reveal the Enemy, or gain +1 Knowledge if you fail.',
        },
        {
            roll: '10',
            name: 'Strange Disease',
            description:
                'You learn that the Ood are falling ill. At the end of each Turn discard 1 Ood Ally until you make a Medicine 10 roll as an Action at the Ood City.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'There have been strange signals coming from an abandoned industrial facility several miles away (Exterior, Move 10). If you go there, you find a derelict compound filled with large containers and broken machinery. Add +1 to Investigate Actions. Encounter (Aware roll): 2-3: Enemy Lair; 4-5: Enemy encounter; 6: Enemy event; 7: Mercenaries; 8: None; 9: Frozen Ood; 10-11: Gain +1 Knowledge or +1 to Prevent Actions; 12+: Gain +2 Knowledge but add +1 Danger.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Ood Sigma',
            description:
                "Joins as an Ally, communicating using his orb. If Enemy is, or revealed as, an Entity, Sigma's eyes glow red and it attacks (Brawn 3, Minion). You can Evade with a Running 6 roll.",
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Aware', 'Diplomacy', 'Science'],
        },
        {
            roll: '5',
            name: 'Mercenaries',
            description:
                'A tough group of soldiers. Make a Charm roll (+1 if Enemy revealed, +1 if Danger 15+).',
            rolls: [
                {
                    roll: '2-8',
                    description:
                        'Hostile – make a Running 8 roll or become Captured (8) or Attacked (Brawn 10)',
                },
                {
                    roll: '9-10',
                    description:
                        'They question you but let you go – you may pay 1 Luck to gain +1 Knowledge',
                },
                {
                    roll: '11+',
                    description:
                        'They become uneasy Allies (1D3+1 in number; leader is Brains 1, Brawn 3, Bravery 3, others are Brains 0, Brawn 3, Bravery 2)',
                },
            ],
        },
        {
            roll: '6',
            name: 'Survivor',
            description:
                'Badly wounded survivor of an expedition. Unless you make a Medicine 7 roll, the survivor dies – lose 1 Luck. If treated, the survivor joins as an Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 2 },
            skills: ['Engineer or Pilot or Science'],
        },
        {
            roll: '7',
            name: 'Ood',
            description:
                'A group of 1D3 Ood join as Allies. If the Enemy is, or revealed as, an Entity, their eyes glow red and they attack (each Brawn 3, Minion). You can Evade with a Running 6 roll.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Aware'],
        },
        {
            roll: '8',
            name: 'Survey Team',
            description:
                'A small scientific expedition. Make a Charm roll (+2 if the Enemy is revealed).',
            rolls: [
                { roll: '2-5', description: 'Captured (7)' },
                {
                    roll: '6-9',
                    description:
                        'They are not convinced by you and leave - event ends but you may pay 1 Luck to roll for a Plot event',
                },
                {
                    roll: '10+',
                    description:
                        'They join you as Allies (roll 1D3+1 for number, each Brains 2, Brawn 2, Bravery 2, randomly select a skill from Engineer, Medicine, Pilot or Science). Add +1 to Move Actions. Roll for a Plot event or gain +1 Knowledge.',
                },
            ],
        },
        {
            roll: '9',
            name: 'Alien Scholar',
            description:
                'A learned alien visiting the Ood Sphere. Make a Science roll.',
            rolls: [
                { roll: '2-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for a Plot event' },
                {
                    roll: '10+',
                    description: 'Joins you as an Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 0, bravery: 1 },
            skills: ['Medicine', 'Science'],
        },
        {
            roll: '10',
            name: 'Mineralogist',
            description:
                'A reserved and rather cold individual. If you make a Charm 10 roll, the Mineralogist becomes an Ally. Roll for a Plot event. The Mineralogist is automatically selected in a Traitor Incident.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Science'],
        },
        {
            roll: '11-12',
            name: 'Sensorite Ambassadors',
            description:
                'These two, nervous aliens are visiting from the nearby planet of the Sense Sphere. If you make a Charm 9 roll, the ambassadors join you as Allies. Roll for a Plot event.',
            stats: { brains: 2, brawn: 0, bravery: 0 },
            skills: ['Aware', 'Science'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'telepathic-field',
            name: 'Telepathic Field',
            description:
                'The Ood Sphere has a strange telepathic field that can be felt by sensitive beings.',
            information:
                'Ood or Characters with Aware 2 gain +1 to Charm rolls with similar Characters, gain +1 to Move Actions and may use Aware to Seek Information in this Adventure.',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: 'audience-with-ood-elders',
            name: 'Audience with Ood Elders',
            description: 'You are brought before the Ood Council.',
            information:
                'Roll 1D6 (add Aware from non-Humans): 1-2: Unfortunately the Ood Elders have red eyes and you are immediately seized and imprisoned (Captured 9). Add +1 Danger. All Ood become Minions of the Enemy. 3-5: The Ood council listens politely and may be able to offer some advice. Roll 1D6 (add Aware from non-Humans) and if the result is 5+, then roll for a Plot event. 6: The Council decides to help. Roll for a Plot event and gain 1D3 Ood as Allies. 7+: The Council are troubled by bad dreams. Roll 1D6: 1-2: All Ood are -1 Bravery; 3-6: They have a very disturbing prophecy of the future - reveal the Enemy and roll 1D6: 1-3: Add +1 Danger; 4-6: Gain +1 Knowledge and Ood Sigma as an Ally.',
            stats: null,
            skills: [],
        },
    ],
}

const A021: Adventure = {
    id: 21,
    tag: 'A021',
    title: 'London',
    year: 1867,
    tardis: 8,
    era: 'Victorian Era',
    type: 'Holiday',
    description:
        'You have landed in Victorian London on Christmas Eve. White, powdery snow falls gently from the skies as you explore a busy market square. Everyone is in good spirits as they prepare for the festivities and a choir sings lovely carols on the corner of a nearby street. What could possibly spoil the moment...?',
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 1,
    },
    special:
        'See Special Events below for more details on Move Actions. After your first Explore or Relax Action, gain either 2 Luck or 1 Idea card. Night will fall after 2D6 Turns and last for 4 full Turns. London Streets: (Cold, Exterior, Move 3) You walk through the cold Victorian squares and streets, leaving footsteps in the fresh, crunchy snow that covers the cobbles. Add +1 to Explore Actions. You may not Research here. Encounter (D6, -1 to roll if Night and +1 if Discover Phase): 0: Enemy encounter; 1: Incident; 2: Heavy snow – Take a -1 penalty to Explore and Move Actions next turn; 3: None; 4: Street Urchin; 5+: Character event.',
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3', name: 'Entity' },
        { roll: '4-5', name: 'Temporal' },
        { roll: '6', name: 'Chameleon' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Tavern',
            move: 7,
            terrain: null,
            description:
                'You have found a local inn where the sounds of talking and laughing are mixed with the clink of glasses and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions but you may not Investigate here.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1',
                    description:
                        'You get mixed up in a tavern brawl and are Attacked (Brawn 3)',
                },
                { roll: '2', description: 'Incident' },
                {
                    roll: '3+',
                    description:
                        'You can spend 1 Luck point to meet a Wench or a random Character, or make a Charm 8 roll to have a Plot event (each once only)',
                },
            ],
        },
        {
            roll: '2',
            name: 'Music Hall Theatre',
            move: 8,
            terrain: null,
            description:
                'A grand music hall that welcomes impressive acts and memorable characters, both on and off the stage. Add +1 to Investigate and Seek Information Actions here. If it is Night you may remain here for a full turn with no other Action, you enjoy a performance at the Hall and gain 1 Luck point per TARDIS Character.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Incident' },
                {
                    roll: '2+',
                    description:
                        'You may spend 1 Luck point to have a Character event or 2 Luck to meet Charles Dickens (Special Character)',
                },
            ],
        },
        {
            roll: '3',
            name: 'Manor House',
            move: 10,
            terrain: null,
            description:
                'A magnificent residence on the outskirts of London owned by a rich gentleman. Add +1 to Investigate and Plan Actions here.',
            encounter: 'D6 adding Diplomacy or Stealth',
            rolls: [
                {
                    roll: '1',
                    description: 'Butler calls Constables (-2 to Charm roll)',
                },
                { roll: '2', description: 'Nobody at home - no event' },
                {
                    roll: '3-4',
                    description: 'Christmas drinks - roll for a Plot event',
                },
                { roll: '5', description: 'Gentleman' },
                {
                    roll: '6',
                    description: 'Charles Dickens (Special Character)',
                },
                {
                    roll: '7+',
                    description:
                        'Discover locked attic (gain +2 Knowledge) or secret cellar (Enemy Lair - Dilemma or Defeat Phase only)',
                },
            ],
        },
        {
            roll: '4',
            name: 'British Museum',
            move: 8,
            terrain: 'Museum',
            description:
                'Housing many rare, precious artefacts and artworks in display cases and galleries. A Character with History is +1 Brains here and may Study with +1 to roll. Add +1 VP if Profit Goal. Add +1 to Seek Information (History) Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Character event' },
                {
                    roll: '5-6',
                    description:
                        'Find ancient relic - make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success',
                },
                { roll: '7', description: 'Gain +1 Knowledge' },
            ],
        },
        {
            roll: '5',
            name: 'Church',
            move: 8,
            terrain: 'Cold',
            description:
                'An old stone church that looks unused and ill-kept, but you might find something useful inside, or perhaps in the old graveyard? Add +1 to Research (History) Actions here.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                {
                    roll: '2',
                    description:
                        'Secret Passage – You may automatically Move to a random Location',
                },
                { roll: '3', description: 'Undertaker' },
                { roll: '4', description: 'None' },
                {
                    roll: '5',
                    description:
                        'Examine gravestones – make a History 8 roll to gain +1 Knowledge',
                },
                {
                    roll: '6',
                    description:
                        'Talk to old vicar – gain +1 Luck and roll for a Plot event',
                },
            ],
        },
        {
            roll: '6',
            name: 'Factory',
            move: 9,
            terrain: null,
            description:
                'A huge smoke-belching factory behind securely locked gates. You must make a Charm 8 roll to enter (Stealth 8 roll if Night). Add +1 to Investigate or Research (Engineer) Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                {
                    roll: '1',
                    description: 'Enemy encounter (Lair if Danger 12+)',
                },
                { roll: '2', description: 'Enemy event' },
                {
                    roll: '3',
                    description: 'Constables (-2 to Charm roll, -3 if Night)',
                },
                { roll: '4', description: 'Businessman' },
                { roll: '5', description: 'None' },
                {
                    roll: '6',
                    description:
                        'Gain +2 Knowledge or +2 to any Research (Engineer) Action here',
                },
                { roll: '7', description: 'Plot event or gain +1 Knowledge' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Time Fissure',
            description:
                'You learn that this area of London lies across a crack in Time. Add +1 Danger if a Temporal Enemy is revealed. Make a successful Brains 12 roll to gain +1 Knowledge (+2 Knowledge if Brains 15 roll).',
        },
        {
            roll: '5',
            name: 'Foul Murder',
            description:
                'A body has been discovered in the snow nearby. Roll 1D6 and if result is a 1, discard a random Ally. Gain +1 Knowledge (or +2 Knowledge with a successful Medicine 7 roll).',
        },
        {
            roll: '6',
            name: 'Missing Children',
            description:
                'Some children have recently vanished from the streets of London in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
        },
        {
            roll: '7',
            name: 'Mysterious Strangers',
            description:
                'There have been reports of a pair of strangers in the local area. If you make an Aware 9 roll, reveal Enemy or gain +1 Knowledge. If you have an Ally, roll 1D6 and on a 1, discard Ally and have an Enemy encounter.',
        },
        {
            roll: '8',
            name: 'Important Package',
            description:
                'You discover that the Enemy is searching for an important document. Roll 1D6 for each Ally, on a result of 6, they have it – gain +2 Knowledge. If not, roll for a random Location and if Move there, gain +1 Knowledge.',
        },
        {
            roll: '9',
            name: 'Strange Theft',
            description:
                'You discover that something has been stolen from a nearby Location. Roll 1D6: 1-2: Manor House; 3-4: Factory; 5-6: British Museum. If you Move there and make an Aware 8 or Charm 8 roll, gain +1 Knowledge.',
        },
        {
            roll: '10',
            name: 'Odd Burial',
            description:
                "You discover that a recent service at a local church was very strange. If you go to the Church Location or Undertaker's Parlour and make an Aware 9 roll, either reveal the Enemy or gain +2 Knowledge.",
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                "You hear about strange events happening nearby. Roll 1D6: 1-3: Sewers (Dark, Water, Move 8) Miles of dank sewers run beneath London that could contain any number of hidden secrets. Add +2 to Explore or Investigate Actions here. Encounter (D6): 1-2: Enemy Lair; 3: Enemy encounter; 4: Lost (Incident); 5: Gain +1 Knowledge; 6: Gain +2 Knowledge but add +1 Danger. 4-6: Undertaker's Parlour (Move 9). You find a dark, creepy townhouse. Is anyone here? Allies with Bravery 1 will not enter. Add +1 to Investigate Actions here. Encounter (D6): 1: Enemy Lair; 2-3: Enemy encounter; 4: Odd Burial; 5: Undertaker; Gain +1 Knowledge; 6: Gain +1 Knowledge but add +1 to Enemy Action rolls here.",
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Businessman',
            description:
                'A wealthy factory owner. Make a Charm roll (-1 per Stealth).',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'He accuses you of thievery and calls Constables (with -1 to Charm roll)',
                },
                { roll: '5-7', description: 'No event' },
                {
                    roll: '8-9',
                    description:
                        'Knows some local gossip – roll for a Plot event',
                },
                {
                    roll: '10+',
                    description:
                        'Joins you as an Ally - roll for Plot event and he will pay once for a Hansom',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
        },
        {
            roll: '5',
            name: 'Wench',
            description:
                'A shrewd and feisty local girl who always knows some gossip. Make a Charm roll (-1 if in Tavern).',
            rolls: [
                { roll: '2-4', description: 'No event' },
                { roll: '5-8', description: 'Gossip – roll for Plot event' },
                {
                    roll: '9+',
                    description: 'Joins as an Ally - roll for Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 2 },
            skills: ['Aware', 'Charm', 'Running', 'Stealth'],
        },
        {
            roll: '6',
            name: 'Gentleman',
            description: 'Finely dressed and cultured. Make a Diplomacy roll.',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'Local police are called – see Constables (-2 to Charm roll)',
                },
                { roll: '5-6', description: 'No event' },
                { roll: '7-8', description: 'Roll for Plot event' },
                { roll: '9+', description: 'Becomes your Ally' },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Diplomacy', 'History'],
        },
        {
            roll: '7',
            name: 'Constables',
            description:
                'A pair of local bobbies take an interest in you. Make a Charm roll (-1 per Stealth, +3 if Danger 10+).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Wanted for questioning – make Running 7 roll or Captured (6)',
                },
                { roll: '6-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'They join you as Allies (+1 to Investigate and Find Help Actions)',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
            skills: ['Running'],
        },
        {
            roll: '8',
            name: 'Undertaker',
            description: 'Small and slightly odd gentleman. Make a Charm roll.',
            rolls: [
                { roll: '2-4', description: 'Minion – have Enemy encounter' },
                { roll: '5-7', description: 'No event' },
                { roll: '8', description: 'Odd Burial' },
                { roll: '9', description: 'Unusual Activity (Parlour)' },
                {
                    roll: '10+',
                    description: 'Becomes your Ally – roll Plot event',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 2 },
        },
        {
            roll: '9',
            name: 'Street Urchin',
            description:
                'Trying to avoid local authorities for unknown reasons. Ignore if with Constables, otherwise make a Stealth roll.',
            rolls: [
                {
                    roll: '2',
                    description: 'Pickpocket - lose a Gadget or 2 Luck',
                },
                { roll: '3-7', description: 'No further event' },
                { roll: '8-9', description: 'Roll for Plot event' },
                {
                    roll: '10+',
                    description:
                        'The Urchin becomes your Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Running', 'Stealth'],
        },
        {
            roll: '10',
            name: 'Maid',
            description:
                'The strangely perceptive maid who works for a local undertaker. She joins you as an Ally and adds +1 to Investigate Actions at Undertakers Location. Roll for a Plot event.',
            stats: { brains: 1, brawn: 0, bravery: 4 },
            skills: ['Aware', 'Charm', 'Running'],
        },
        {
            roll: '11-12',
            name: 'Old Friends',
            description:
                'You may pay 2 Luck to meet any Friend that is native to the Victorian Era.',
        },
    ],
    specials: [
        {
            id: 1,
            image: 'travelling-around-victorian-london',
            name: 'Travelling Around Victorian London',
            description:
                'Due to the heavy snow that falls over London during Christmas, the Move numbers for this Adventure are high and have an additional -1 penalty if it is Night.',
            information:
                'You may pay 1 Luck to automatically succeed at a Move Action to any Location for up to 4 Characters via Hansom cab. Each time you use a Hansom cab, roll 1D6 and on a 6, roll for a Plot event for any gossip from the driver.',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: 'charles-dickens',
            name: 'Charles Dickens',
            description:
                'You have met the famous author Charles Dickens. Gain 1 VP. Make a Charm roll: 2-5: Dickens is too busy writing a new book and brushes you off; 6-8: He knows about strange tales around London - roll for a Plot event; 9+: He joins you as an Ally and knows about some strange tales - roll for a Plot event.',
            information: '',
            stats: { brains: 4, brawn: 1, bravery: 2 },
            skills: ['Aware', 'Charm', 'History'],
        },
    ],
}

const A022: Adventure = {
    id: 22,
    tag: 'A022',
    title: 'Avallion',
    year: 0,
    tardis: 0,
    era: 'Medieval Era',
    type: 'Mission',
    description:
        'The TARDIS has crossed through a space/time portal and landed on Avallion, one of the supposed thirteen worlds where the legends of King Arthur and his many foes are a reality. Here, the lines between science and magic are blurred. Indeed, as you examine the gorgeous, almost mystical woodlands and view a grand castle in the far distance, you feel almost magical yourself...',
    stats: {
        danger: 1,
        knowledge: 5,
        vp: 1,
    },
    special:
        'Lose 1 Resources (or 2 points from another TARDIS Quality). Night falls at the start of Turn 1D6+2 and lasts 3 Turns. A Computers or Science roll here is made with a -1 penalty. Woods of Celadon: (Exterior, Move 4) You stroll amongst the tall, twisting trees that filter the bright sunshine to give a welcome shade. Bird calls echo through the woods and the air is sweet like honey, but the shadows are deep. Add +1 to Explore Actions but may not Research here. Encounter: (D6, +1 if Discover Phase, -1 if Night): 0: Wood Spirit – start a (Mind Control) Conflict (Brains 4); 1: Enemy encounter; 2: Enemy event; 3: Incident; 4-5: None; 6+: Character event.',
    enemy: [
        { roll: '1-2', name: 'Gothic' },
        { roll: '3-4', name: 'E028' },
        { roll: '5', name: 'Entity' },
        { roll: '6', name: 'Temporal' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Tavern',
            move: 8,
            terrain: null,
            description:
                'You have found a local inn where the sounds of talking and laughing are mixed with the clank of mugs and the inviting smells of hot food. Add +1 to (Charm) Seek Information Actions but you may not Investigate here.',
            encounter: 'D6',
            rolls: [
                {
                    roll: '1-2',
                    description:
                        'Tavern brawl - Attacked (Brawn 4) unless evade with a Running 8 roll',
                },
                { roll: '3', description: 'Incident' },
                {
                    roll: '4-6',
                    description:
                        'You can spend 1 Luck to have a Character event, or make a Charm 9 roll to have a Plot event (each once only)',
                },
            ],
        },
        {
            roll: '2',
            name: 'Lake of Avalon',
            move: 9,
            terrain: 'Water, Exterior',
            description:
                'You have found a wide and deep lake that stretches for leagues. Mist floats eerily across the water. Add +1 to Investigate and Seek Information Actions here. -1 to Move Actions from here unless you make an Aware 9 roll.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'None' },
                { roll: '5', description: 'Cloaked Traveller' },
                {
                    roll: '6+',
                    description:
                        'Lady of the Lake – Make a Brains 15 roll (add History) to gain +2 Knowledge or reveal the Enemy',
                },
            ],
        },
        {
            roll: '3',
            name: 'Camelot Castle',
            move: 8,
            terrain: null,
            description:
                'The magnificent castle that is the stronghold of King Arthur and is the heart of the realm with the Round Table as a symbol of chivalry. Gain +1 VP (once only). Add +1 to Investigate, Plan or Seek Information (Stealth) Actions here. Escape or Rescue Actions have a -1 penalty here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy event' },
                { roll: '2', description: 'Captured (9)' },
                { roll: '3', description: 'Knights (Brawn 7 if Attacked)' },
                { roll: '4', description: 'None' },
                { roll: '5', description: 'Character event' },
                { roll: '6+', description: 'King Arthur (Special Character)' },
            ],
        },
        {
            roll: '4',
            name: 'Fields of Camlann',
            move: 7,
            terrain: 'Exterior',
            description:
                'A large, flat plain with only a few twisted, broken trees - the tragic battlefield of armies past and present. Add +1 to Challenge and Prevent Actions here. Add +1 to the number of Troops encountered here. Running rolls in Evade options have a -1 penalty here. Gain 1 VP if you win an (Attack) Conflict here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1-2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'None' },
                { roll: '6-7', description: 'Knights' },
            ],
        },
        {
            roll: '5',
            name: 'Ice Caves',
            move: 9,
            terrain: 'Cold, Dark',
            description:
                'You discover the entrance to a huge cave system where you find enormous caverns of ice. Add +2 to Investigate Actions and Enemy Action rolls here. Add +1 to Evade option rolls.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-4', description: 'Enemy encounter' },
                {
                    roll: '5',
                    description:
                        'Dragon Guardian Attacks (Brawn 6) unless Evade with a Running 9 roll',
                },
                { roll: '6', description: 'Enemy event' },
                { roll: '7', description: 'Mystical Relic' },
                { roll: '8', description: 'None' },
                {
                    roll: '9',
                    description:
                        'Ice collapses - kills random Character unless pay 2 Luck',
                },
                { roll: '10-11', description: 'Witch' },
                { roll: '12+', description: 'Cloaked Traveller' },
            ],
        },
        {
            roll: '6',
            name: 'Temple of Baden',
            move: 9,
            terrain: 'Exterior',
            description:
                'An ancient stone circle of mystery and power. Add +1 to Investigate and Research (History) Actions here. You may Study here.',
            encounter: 'D6 (-1 to roll if Night, +1 to roll if Discover Phase)',
            rolls: [
                { roll: '0', description: 'Enemy Lair' },
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'Ancient Curse' },
                {
                    roll: '5',
                    description:
                        'Study mystical runes on the stones – make a History 8 roll to gain +1 Knowledge',
                },
                { roll: '6', description: 'Warrior Monks' },
                { roll: '7', description: 'Merlin (Special Character)' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Mystical Relic',
            description:
                'A mysterious artefact has been discovered – could it be important to the plans of the Enemy? Make a Science 7 roll and a History 7 roll, gaining +1 Knowledge per success. Add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Battlefield',
            description:
                'You learn that two armies have recently clashed and one side was almost completely massacred. Gain +1 Knowledge but lose 1 Luck if you have a native Ally.',
        },
        {
            roll: '6',
            name: 'Strange Technology',
            description:
                'You discover that this planet is a strange combination of technology and magic. You may replace your next Engineer roll with a History roll, or your next History roll with an Engineer roll.',
        },
        {
            roll: '7',
            name: 'Ancient Curse',
            description:
                'You learn a dark legend of this magical world. But is it just a tale, or might it have a connection to recent events? Gain +1 Knowledge (or +2 Knowledge with a successful History 9 roll). A random Ally has -1 Bravery next Turn.',
        },
        {
            roll: '8',
            name: 'Captive',
            description:
                'Someone or something important has been captured. If you Move to a random Location and make a Rescue 8 Action, roll 1D6: 1-2: Gain +1 Knowledge; 3-4: Character event; 5-6: Enemy encounter.',
        },
        {
            roll: '9',
            name: 'Temporal Displacement',
            description:
                'A visitor from another time has been seen in Avallion. Roll for a random Location - if you go there either have a Character event from a random Adventure (TM01) or pay 2 Luck to meet Merlin (Special Character).',
        },
        {
            roll: '10',
            name: 'Excalibur Lost',
            description:
                'You learn that the fabled sword has been stolen. Roll for a random Location - if you go there and make an Aware 9 roll gain +1 Knowledge and +2 to Audiences with King Arthur (Special Character).',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-3: Roll for a random Location – gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (roll for Enemy if Discover Phase); 4-6: A dimensional portal, far from Camelot (Move 11) that bridges realities. Add +1 to Investigate and Prevent Actions there. You may pay 2 Luck to roll for on TM01 and have a Character event from that Adventure. Encounter (D6): 1: Enemy Lair; 2-3: Enemy encounter; 4: None; 5: Warrior Monks; 6: Gain +2 Knowledge but add +1 Danger and +1 Enemy Action rolls.',
        },
    ],
    characters: [
        {
            roll: '2-4',
            name: 'Witch',
            description:
                'A sorceress. If in Discover Phase, see E028. Make a Charm roll (add History).',
            rolls: [
                {
                    roll: '2-8',
                    description:
                        'Hideous hag - start a (Terrify) Conflict (Bravery 4)',
                },
                {
                    roll: '9-10',
                    description:
                        'She imparts a riddle – roll for a Plot event if you make a Brains 12 roll',
                },
                {
                    roll: '11+',
                    description: 'She becomes an Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 3, brawn: 0, bravery: 4 },
            skills: ['Aware', 'History', 'Medicine', 'Stealth'],
        },
        {
            roll: '5',
            name: 'Knight Commander',
            description:
                "A brave knight of Arthur's army. Make a Diplomacy roll (add Charm of female Characters).",
            rolls: [
                {
                    roll: '2-3',
                    description: 'Challenged to a personal duel (Brawn 3)',
                },
                { roll: '4-6', description: 'Bows and leaves' },
                { roll: '7-8', description: 'Roll for Plot event' },
                {
                    roll: '9+',
                    description:
                        'Becomes your Ally – roll for Plot event. Will not Surrender.',
                },
            ],
            stats: { brains: 1, brawn: 3, bravery: 3 },
            skills: ['Charm', 'Diplomacy', 'History', 'Running'],
        },
        {
            roll: '6-7',
            name: 'Knights',
            description:
                "A patrol of S'rax knights block your path. Unless you make a Charm 9 roll (with -1 per Stealth) to confuse them, or a Running 7 roll to evade them, you become Captured (7) or are Attacked (Brawn 6).",
        },
        {
            roll: '8',
            name: 'Minstrel',
            description: 'A master of the lute. Make a Charm roll.',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        "He's a thief too – you lose 2 Luck, a Gadget or discard an Idea card",
                },
                { roll: '5-6', description: 'No event' },
                { roll: '7-8', description: 'Roll for Plot event' },
                { roll: '9+', description: 'Becomes your Ally' },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Charm', 'History', 'Stealth'],
        },
        {
            roll: '9',
            name: 'Warrior Monks',
            description:
                'A band of armed priests. Make a Diplomacy roll (add History).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Attacked (Brawn 5) unless you Evade (Running 8 roll) or Surrender (Captured 8)',
                },
                { roll: '6-9', description: 'The monks pass silently' },
                {
                    roll: '10',
                    description: 'They share news – roll for a Plot event',
                },
                {
                    roll: '11+',
                    description:
                        'A monk becomes an Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
            skills: ['History'],
        },
        {
            roll: '10',
            name: 'Princess',
            description:
                'A beautiful maiden of the court. If you make a Diplomacy 9 roll (+2 if Danger 10+) she becomes your Ally – roll for Plot event. Adds +1 to Audience roll with King Arthur.',
            stats: { brains: 1, brawn: 0, bravery: 2 },
            skills: ['Charm', 'Diplomacy'],
        },
        {
            roll: '11-12',
            name: 'Cloaked Traveller',
            description:
                'A mysterious, hooded figure. You may pay 2 Luck to meet Merlin (Special Character) or make an Aware roll.',
            rolls: [
                { roll: '2-8', description: 'He passes by - no event' },
                {
                    roll: '9-10',
                    description:
                        'The figure shares news - roll for a Plot event',
                },
                {
                    roll: '11+',
                    description:
                        'The traveller becomes your Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 3, brawn: 2, bravery: 3 },
            skills: ['Aware', 'History', 'Medicine'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'king-arthur',
            name: 'King Arthur',
            description:
                'You have met the famous Lord of Camelot with a retinue of soldiers. Gain 1 VP. Arthur is just and wise, but looks troubled and pensive.',
            information:
                'Evade: Roll 1D6: 1-4: The retinue pass by and event ends; 5-6: The soldiers attack (Brawn 7) unless you Surrender (Captured 9) or try to Evade using Running 7 rolls. Audience: Make a Diplomacy roll (+3 if with Merlin): 2-5: You unwittingly give insult and are Captured (9) at Camelot; 6-8: The King nods before departing and event ends; 9-10: You converse with the King – roll for Plot event; 11+: The King is convinced - gain 1 Luck, a Knight Ally (Brains 1, Brawn 3, Bravery 3, Diplomacy, History) - roll for a Plot event.',
            stats: null,
            skills: [],
        },
        {
            id: 2,
            image: 'merlin',
            name: 'Merlin',
            description:
                'You gaze in astonishment as a figure emerges from the shadows – it is Merlin, wizard and wise advisor to King Arthur... and one of your future regenerations! Draw a random Doctor card that shows one of your future regenerations (create a new regeneration if none) who joins you as an Ally (although naturally counts as a TARDIS Character and if killed, you lose the game). Gain 2 Luck and +2 Knowledge.',
            information:
                'If you Defeat the Enemy in this Adventure, the future Doctor gives you a cunning wink and leaves in his TARDIS, knowing that his past is in safe hands – gain 1 Luck point.',
            stats: null,
            skills: [],
        },
    ],
}

const A023: Adventure = {
    id: 23,
    tag: 'A023',
    title: 'Hollywood',
    year: 1955,
    tardis: 8,
    era: 'World War Era',
    type: 'Holiday',
    description:
        "The TARDIS has landed in Hollywood as the powerful movie studios are weakening and there's a new kid on the block with television. Sexier and younger movie stars are the iconic figures on the silver screen. Audiences listen to jazz or rock and roll music while rebellious teenagers take their Cadillacs to the new drive-in movies...",
    stats: {
        danger: 0,
        knowledge: 5,
        vp: 0,
    },
    special:
        'Gain 1 Luck if you bring a Companion or Friend with Charm 2 here. Night falls at the start of Turn 2D6 and lasts 3 Turns. Find Help Actions have a -1 penalty here. Tour: If you visit 3 or more different Locations (except Los Angeles Streets) in Discover Phase, gain 1 Idea card and +1 VP. Los Angeles Streets: (Exterior, Move 2) You stroll along the streets of the city, avoiding the traffic whilst enjoying the iconic surroundings that are overlooked by that famous sign on the hill. Everything here seems to be part of the movie industry in some way... Add +1 to Explore Actions here. You may spend 1 Luck point to hire a taxi to gain +3 to a Move Action from here. Encounter (D6): 1: Enemy event; 2: Incident; 3-4: No further event; 5-6: Character event.',
    enemy: [
        { roll: '1-2', name: 'Villain' },
        { roll: '3-4', name: 'Chameleon' },
        { roll: '5', name: 'Criminal' },
        { roll: '6', name: 'Temporal' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Film Studio',
            move: 8,
            terrain: null,
            description:
                'This is where the magic happens – but the secrets of the movies happens behind large gates. Unless with an Icon Ally, you must make a Charm 9 roll or Stealth 9 roll to enter. Add +1 to Investigate Actions here. You may spend 2 Luck to meet either Marilyn Monroe or Alfred Hitchcock (Special Characters).',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                { roll: '4-5', description: 'Plot event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '2',
            name: 'Beverly Hills',
            move: 8,
            terrain: 'Exterior',
            description:
                'This beautiful area of Los Angeles is home to the rich and famous and filled with incredibly lavish mansions that overlook the city. Add +1 to Investigate Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'Incident' },
                { roll: '5', description: 'None' },
                {
                    roll: '6-7',
                    description:
                        'Character event (If Night, roll 1D6 and on 1-3, you instead encounter Cops with -2 to Charm roll)',
                },
            ],
        },
        {
            roll: '3',
            name: 'Chinese Theatre',
            move: 8,
            terrain: null,
            description:
                "One of the most recognisable buildings in the city and an iconic symbol of Hollywood. From the Hollywood Walk of Fame to the movie premieres where the stars pull up in limousines, it's definitely a place to visit. Add +1 to Seek Information (Charm) Actions here. You may spend 1 Luck to have a Character event.",
            encounter: 'D6 (+1 to roll if Night)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                { roll: '4', description: 'Plot event' },
                {
                    roll: '5-7',
                    description:
                        'Character event (you may pay 2 Luck to meet Alfred Hitchcock)',
                },
            ],
        },
        {
            roll: '4',
            name: 'Lavish Nightclub',
            move: 7,
            terrain: 'Night only',
            description:
                'One of the biggest and most exclusive clubs in town – just about everyone who is anyone wants to be seen here. Unless with an Icon Ally, you must make a Charm 9 roll or spend 1 Luck to enter. Add +1 to Relax and Seek Information (Charm) Actions here. You may spend 2 Luck to meet Marilyn Monroe.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'None' },
                { roll: '5', description: 'Plot event' },
                { roll: '6+', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Sunset Boulevard',
            move: 7,
            terrain: 'Exterior',
            description:
                'The best shopping in LA with fashion from all over the world. But style does not come cheap. You may spend 1 Luck to add +2 to any Action in Discover Phase. Add +1 to Seek Information Actions here. If the Enemy are Autons, add +1 Danger and +1 to number encountered.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Incident' },
                { roll: '4', description: 'None' },
                { roll: '5', description: 'Plot event' },
                { roll: '6-7', description: 'Character event' },
            ],
        },
        {
            roll: '6',
            name: 'Vasquez Rocks',
            move: 9,
            terrain: 'Exterior, Wilderness',
            description:
                'Popular location for many movies from epic Westerns to cheap Science Fiction and is only a short drive north of Los Angeles. Do not add Running to Move rolls here. Gain 1 VP if you have an Enemy encounter here (once only). Add +1 to Challenge Actions here.',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1-2', description: 'Enemy encounter' },
                { roll: '3', description: 'Enemy event' },
                { roll: '4', description: 'None' },
                { roll: '5', description: 'Incident' },
                { roll: '6', description: 'Character event' },
                { roll: '7', description: 'Plot event' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-4',
            name: 'Oscar Ceremony',
            description:
                'Tonight Hollywood rolls out the red carpet - could it be important to the Enemy plans? Gain +1 Knowledge (or +2 Knowledge if with a native Character). At the start of the Defeat Phase, add +1 Danger.',
        },
        {
            roll: '5',
            name: 'Studio Accident',
            description:
                'A studio executive was killed by a falling arc lamp on the set of the latest Western movie. If you go to the Vasquez Rocks Location and make an Aware 9 roll, gain +2 Knowledge, but add +1 Danger.',
        },
        {
            roll: '6',
            name: 'Alien Hoax',
            description:
                'You discover newspapers are reporting that alien ships have been seen in the sky but dismissing it as a hoax... If you have 10 Brains then reveal the Enemy.',
        },
        {
            roll: '7',
            name: 'News Report',
            description:
                'You catch the latest report from the radio – either all your TARDIS Characters gain Aware until the end of the Adventure OR gain +1 Knowledge.',
        },
        {
            roll: '8',
            name: 'Front',
            description:
                "You discover that a large and reputable organisation is really a front for the Enemy's secret plans. You may reveal the Enemy or gain +1 Knowledge. Add +1 to Seek Information Actions using Charm or Stealth.",
        },
        {
            roll: '9',
            name: 'Missing Starlets',
            description:
                'Some aspiring actors have vanished from the streets of Los Angeles in mysterious circumstances. Gain +1 Knowledge. Also gain 1 Luck if you have a native Character with you.',
        },
        {
            roll: '10',
            name: 'Haunted Studio',
            description:
                'You learn that film crew believe Soundstage 6 to have a ghost. If you go to the Film Studio Location and make an Aware 9 roll, gain +1 Knowledge. Add +1 to Investigate Actions there.',
        },
        {
            roll: '11-12',
            name: 'Unusual Activity',
            description:
                'You hear about strange events happening nearby. Roll 1D6: 1-4: Roll for a random Location and gain +1 Knowledge if you go there, then roll 1D6 and if 1-2 see Enemy Lair (rolling for Enemy first if needed); 5-6: A Studio Backlot (Move 9) where old and standing sets from the movies are situated. Add +2 to Investigate Actions here. Add +1 to Enemy Action rolls here. Encounter (2D6, add Stealth): 2-3: Enemy Lair; 4: Enemy encounter; 5: Enemy event; 6-7: None; 8: Plot event; 9-10: Gain 1 Luck or pay 1 Luck for +2 Knowledge; 11+: Character event.',
        },
    ],
    characters: [
        {
            roll: '2-3',
            name: 'Hollywood Star',
            description:
                'A leading actor, or perhaps a famous director? If you pay 2 Luck you may instead meet Marilyn Monroe or Alfred Hitchcock (Special Characters). If not, make a Charm roll.',
            rolls: [
                { roll: '2-6', description: 'Brushed off by lackeys' },
                {
                    roll: '7-8',
                    description:
                        'They sign a quick autograph and depart – gain 1 Luck',
                },
                {
                    roll: '9-10',
                    description: 'Hollywood gossip – roll for a Plot event',
                },
                {
                    roll: '11+',
                    description:
                        'The star joins you as an Ally (+1 to Actions at Beverly Hills or Film Studio Locations). Roll for a Plot event.',
                },
            ],
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Charm'],
        },
        {
            roll: '4',
            name: 'Struggling Actor',
            description:
                'A young actor trying to break into the movie industry. If you make a Charm 9 roll (adding current Danger), the actor becomes your Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Running'],
        },
        {
            roll: '5',
            name: 'Cops',
            description:
                'A pair of stubborn LA cops takes an interest. Make a Charm roll (-1 per Stealth, +3 if Danger 12+).',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        'Wanted for questioning – make Running 7 roll or Captured (6) or Attacked (Brawn 5)',
                },
                { roll: '6-9', description: 'No further event' },
                {
                    roll: '10+',
                    description:
                        'The Cops become your Allies (+1 to Investigate, Move and Find Help Actions)',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 2 },
        },
        {
            roll: '6',
            name: 'Businessman',
            description:
                'A shrewd film producer. Pay 1 Luck or make a Charm 10 roll for the producer to join you as an Ally - roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Diplomacy'],
            infomation: '+1 to Seek Information Actions.',
        },
        {
            roll: '7',
            name: 'Tourist',
            description:
                'A young autograph hunter wanting to witness the magic of the movies. Make a Charm 7 roll for the tourist to become your Ally. You may pay 1 Luck to roll for a Plot event.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Charm', 'Running'],
        },
        {
            roll: '8',
            name: 'Tour Guide',
            description:
                'A professional guide showing tourists around Los Angeles. If you make a Charm 10 roll (add current Danger), the guide becomes an Ally – roll for Plot event.',
            stats: { brains: 1, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Charm', 'History'],
            infomation: '+1 to Move Actions here.',
        },
        {
            roll: '9',
            name: 'Reporter',
            description:
                'An intrepid journalist after a story. If you make Charm 8 roll, she becomes an Ally – roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Charm', 'Running'],
        },
        {
            roll: '10',
            name: 'Musician',
            description:
                'A handsome young musician from Chicago. If you make a Charm 8 roll he becomes an Ally - roll for a Plot event.',
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Charm'],
        },
        {
            roll: '11-12',
            name: 'Private Detective',
            description:
                'A private eye investigating a case. Make a Stealth roll.',
            rolls: [
                {
                    roll: '2-4',
                    description: 'Questioned at Gunpoint - +1 Danger',
                },
                { roll: '5-7', description: 'He evades you - no event' },
                {
                    roll: '8-9',
                    description:
                        'He may share information – pay 1 Luck to roll for Plot event',
                },
                {
                    roll: '10+',
                    description: 'Becomes your Ally - roll for a Plot event',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 2 },
            skills: ['Stealth', 'Running'],
            infomation: '+1 to Investigate Actions.',
        },
    ],
    specials: [
        {
            id: 1,
            image: 'marilyn-monroe',
            name: 'Marilyn Monroe',
            description:
                'You have met the very glamorous actress and model, Marilyn Monroe. Gain 1 VP. Make a Charm roll: 2-5: She is too busy making her new movie and jumps into a limo; 6-8: She gives you a dazzling smile and signs an autograph – gain 1 Luck; 9+: She takes a liking to you and joins you as an Ally. You may pay 1 Luck to roll for a Plot event.',
            information:
                'Marilyn Monroe is Brains 1, Brawn 0, Bravery 1 (Charm 2). Add +1 to Actions in Lavish Nightclub or Sunset Boulevard Locations.',
            stats: { brains: 1, brawn: 0, bravery: 1 },
            skills: ['Charm'],
        },
        {
            id: 2,
            image: 'alfred-hitchcock',
            name: 'Alfred Hitchcock',
            description:
                'You have met the famous film director Alfred Hitchcock. Gain 1 VP. Make a Charm roll: 2-7: He is too busy filming his new movie and brushes you off; 8-9: He shares some information – roll for a Plot event; 10+: He takes a liking to you and joins you as an Ally. Roll for a Plot event.',
            information:
                'Alfred Hitchcock is Brains 3, Brawn 0, Bravery 1 (History). Add +1 to Actions at the Film Studios or Chinese Theatre Locations.',
            stats: { brains: 3, brawn: 0, bravery: 1 },
            skills: ['History'],
        },
    ],
}

const A024: Adventure = {
    id: 24,
    tag: 'A024',
    title: 'The Puzzle Sphere',
    year: 5589,
    tardis: 10,
    era: 'Twilight Era',
    type: null,
    description:
        "Leaving the TARDIS, you see a giant ornate dome, its layers constantly shifting and revolving. There's an excited bustle of other people and beings around you – some human, others quite alien, all queuing up to the dome. This is the Puzzle Sphere of the Triolian Cyphers, a mystical feat of engineering turned galactic tourist attraction, filled with tricky challenges and devious traps. Do you have what it takes to escape or will you be locked inside forever...?",
    stats: {
        danger: 1,
        knowledge: 5,
        vp: 2,
    },
    special:
        'Some Locations require an Escape Location roll to leave, using Brains (use Escape bonuses, +1 to subsequent attempts) and also gain +1 Knowledge if successful. When leaving these Locations, roll randomly for new Location. Evade options remain in Location. When rolling for Goal, roll 1D6: 1-2: Trap for the Doctor (Special Goal); 3-6: Roll as normal. Sphere Entrance: (May not return here once you leave) You enter a large welcome room that is filled with an assortment of strange characters. A welcome robot is explaining the rules to the new players that are gathered there. Add +1 to Explore Actions. Encounter (D6): 1: Animatronic; 2: No event; 3: Incident; 4-5: Other Players; 6: Porcinoid Engineer.',
    enemy: [
        { roll: '1-2', name: 'Entity' },
        { roll: '3', name: 'Gothic' },
        { roll: '4', name: 'Chameleon' },
        { roll: '5-6', name: 'Villain' },
    ],
    locations: [
        {
            roll: '1',
            name: 'Amusements',
            move: 7,
            terrain: null,
            description:
                "A space to keep the players entertained and rested during their experience. There's a bar, a couple of games consoles, and holographic performers. You may Relax here. You may visit the little shop here – you may spend 1 Luck (once only) as an Action to draw a random Idea card.",
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Encounter' },
                { roll: '2', description: 'Incident' },
                { roll: '3', description: 'None' },
                { roll: '4+', description: 'Character Event (add +2 to roll)' },
            ],
        },
        {
            roll: '2',
            name: 'Inverted City',
            move: 8,
            terrain: 'Dark, Escape Location - Brains 14',
            description:
                'This place seems strange but oddly familiar. The dimensions are all wrong here, like an M.C. Escher drawing. Any Aware rolls have a -1 penalty here. Add +1 to Investigate Actions here. Once per Adventure you may pay 1 Luck to choose a Skill roll before rolling the dice. If you fail the roll, you instead succeed and vice versa.',
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy Encounter' },
                { roll: '2', description: 'Dark Hunter' },
                { roll: '3-4', description: 'Incident' },
                { roll: '5', description: 'Seasoned Adventurer' },
                { roll: '6', description: 'Plot event' },
            ],
        },
        {
            roll: '3',
            name: 'Junk Room',
            move: 9,
            terrain: 'Escape Location - Brains 12',
            description:
                'The game here is to escape by finding the correct object. As you search, you may roll 1D6 (before an Escape Location Action): 1-2: Nothing found; 3-4: A useful item adds +1 to your next Escape Location roll; 5-6: You may spend Luck to gain a Gadget card (once only).',
            encounter: 'D6 (+1 to roll if Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3-4', description: 'Plot event' },
                { roll: '5-6', description: 'Character event' },
                { roll: '7', description: 'Journal' },
            ],
        },
        {
            roll: '4',
            name: 'Locked Room',
            move: 9,
            terrain: 'Escape Location - Brains 15',
            description:
                "It's a trap. The doors slam quickly shut behind you and lock with resounding finality. You're in one of the Puzzle Sphere's famous and ingenious escape levels. Any Escape Actions (from being Captured) have a -1 penalty here. You may not Explore, Find Help or Seek Information here.",
            encounter: 'D6',
            rolls: [
                { roll: '1', description: 'Enemy encounter' },
                { roll: '2', description: 'Enemy event' },
                { roll: '3', description: 'Plot event' },
                { roll: '4-5', description: 'None' },
                { roll: '6', description: 'Character event' },
            ],
        },
        {
            roll: '5',
            name: 'Service Ducts',
            move: 9,
            terrain:
                'Dark, Escape Location – Brains 10, may roll 1D6 twice for possible Locations',
            description:
                'A series of shadowy and confusing criss-crossing maintenance tunnels, with secret access to all the puzzle rooms. Add +1 to Investigate Actions here. You may not Seek Information here.',
            encounter: 'D6 (+1 to roll in Discover Phase)',
            rolls: [
                { roll: '1', description: 'Enemy Lair' },
                { roll: '2', description: 'Enemy encounter' },
                { roll: '3', description: 'Incident' },
                { roll: '4-5', description: 'None' },
                { roll: '6+', description: 'Maintenance Staff' },
            ],
        },
        {
            roll: '6',
            name: 'Control Centre',
            move: 10,
            terrain: 'may not move here until the Dilemma Phase',
            description:
                'A huge power cell stands at the end of a corridor of computer banks and pods. If you make a Computers 8 roll, add +2 to any Move Action from here.',
            encounter: 'Aware roll',
            rolls: [
                { roll: '2-3', description: 'Enemy Lair' },
                { roll: '4', description: 'Enemy encounter' },
                { roll: '5', description: 'Enemy event' },
                { roll: '6', description: 'Incident' },
                { roll: '7', description: 'Maintenance Staff' },
                {
                    roll: '8-9',
                    description:
                        'Computer banks – choose a Character to gain +2 Brains until the end of Adventure (once only)',
                },
                { roll: '10', description: 'Gain +1 Knowledge' },
                { roll: '11+', description: 'Prison Vault' },
            ],
        },
    ],
    plots: [
        {
            roll: '2-3',
            name: 'Alien Blueprints',
            description:
                'Some diagrams may reveal the original purpose of the Puzzle Sphere: a prison – but for what? Make a History 7 roll to gain +1 Knowledge. On a roll of 11+ reveal the Enemy.',
        },
        {
            roll: '4',
            name: 'Disappearances',
            description:
                'There are rumours that players have been going missing from the Puzzle Sphere – gain +1 Knowledge and +1 to Charm rolls with Other Players.',
        },
        {
            roll: '5',
            name: 'Unusual Energy Readings',
            description:
                'You detect strange power fluctuations. Make a Science 8 roll to gain +1 Knowledge. If you make a Science 11 roll, see also Prison Vault.',
        },
        {
            roll: '6',
            name: 'New Story Launch',
            description:
                'A new series of puzzles and characters have drawn many more tourists than usual. But is there a sinister reason behind it? Gain +1 Knowledge (+2 Knowledge if with an Ally). Add +1 Danger in the Defeat Phase.',
        },
        {
            roll: '7-8',
            name: 'Malfunctioning Animatronic',
            description:
                "The robot characters are acting strangely – forgetting their lines and who they're meant to be. Has someone been tampering with the Sphere's systems? Make an Engineer 7 roll to gain +1 Knowledge.",
        },
        {
            roll: '9',
            name: 'Damaged Wall Panel',
            description:
                'Something has broken through the immaculately dressed sets of the Sphere – is it sabotage? Make an Engineer 9 roll to gain +1 Knowledge and find an entrance to Service Ducts - you may Move there automatically.',
        },
        {
            roll: '10',
            name: 'Journal',
            description:
                'You find a collection of maps and notes in an almost illegible scrawl - a record of an attempt to escape the Puzzle Sphere. If you make an Aware 8 roll, gain +1 Knowledge. You may add +1 to future rolls to determine Location.',
        },
        {
            roll: '11-12',
            name: 'Prison Vault',
            description:
                'Legends say there is something hidden at the very centre of the Puzzle Sphere. If you choose to go there (Move 9 with an Escape Location roll), you discover a time locked vault door, surrounded by monitoring equipment. Add +1 Danger. Add +3 to Investigate Actions here. Encounter (Aware roll, +2 if Discover Phase): 2-3: Enemy Encounter; 4-5: Enemy Event; 6-8: Alien Blueprints (Plot); 9: None; 10-11: Gain +1 Knowledge; 12+: +2 Knowledge, add +1 Danger. If Enemy is revealed here, also reveal Goal to be Trap for the Doctor (Special Goal).',
        },
    ],
    characters: [
        {
            roll: '2-3',
            name: 'Dark Hunter',
            description:
                "A rather unfriendly character with a deadly looking weapon stalks you. You may try to Evade with either a Running 7 roll or Stealth 9 roll, or instead roll 1D6: 1-3: It Attacks (Brawn 7); 4-6: It's an animatronic designed to scare you. Make a Bravery 12 roll and gain 1 Luck if you succeed. If you fail, start a (Capture) Conflict (Brawn 7).",
        },
        {
            roll: '4',
            name: 'Animatronic',
            description:
                'Robot with a holographic shell. Make a Computers roll.',
            rolls: [
                { roll: '2-6', description: 'No information' },
                {
                    roll: '7-11',
                    description:
                        'Gain +2 to next Escape Location roll or +1 Knowledge',
                },
                {
                    roll: '12+',
                    description:
                        'Joins you as an Ally – gain +1 Knowledge or +2 to next Escape Location roll',
                },
            ],
            stats: { brains: 2, brawn: 2, bravery: 2 },
            skills: ['Computers', 'Machine'],
        },
        {
            roll: '5',
            name: 'Maintenance Staff',
            description:
                'A Crespallion in a Puzzle Sphere uniform. Make a Charm roll (add +2 if Danger 12+).',
            rolls: [
                { roll: '2-6', description: 'They ignore you' },
                {
                    roll: '7-8',
                    description:
                        'They tell you of something which is worrying them - roll for Plot Event',
                },
                {
                    roll: '9-10',
                    description:
                        'They show you how to access the Service Ducts - you may choose to Move there automatically',
                },
                {
                    roll: '11+',
                    description:
                        'They join you as an Ally. You may choose to Move to Service Ducts automatically.',
                },
            ],
            stats: { brains: 1, brawn: 0, bravery: 1 },
        },
        {
            roll: '6-8',
            name: 'Other Players',
            description:
                'Another group of people hoping to beat the Puzzle Sphere. Make a Charm roll (-2 if you are already Allied with Other Players).',
            rolls: [
                {
                    roll: '2-3',
                    description:
                        'They do not trust you and disrupt your escape attempt – take a -1 penalty from next Escape Location roll',
                },
                { roll: '4-5', description: 'They ignore you' },
                {
                    roll: '6-8',
                    description:
                        'If not in Starting Room, they help you to escape – gain +1 to next Escape Location roll',
                },
                {
                    roll: '9+',
                    description:
                        'They join you as Allies (1D3 in number, each Brains 1, Brawn 1, Bravery 1)',
                },
            ],
        },
        {
            roll: '9',
            name: 'The Rogue',
            description:
                'A dark-clad man watches you, a blaster at his fingertips. Make an Aware roll.',
            rolls: [
                {
                    roll: '2-5',
                    description:
                        "There's a bounty on your head. Make a Stealth 9 roll or start a (Capture) Conflict (Brawn 4)",
                },
                {
                    roll: '6-8',
                    description: 'He has a warning - roll for a Plot event',
                },
                {
                    roll: '9+',
                    description:
                        'He joins you as an Ally (+1 to Escape Location rolls)',
                },
            ],
            stats: { brains: 1, brawn: 4, bravery: 2 },
            skills: ['Stealth'],
        },
        {
            roll: '10',
            name: 'Porcinoid Engineer',
            description: "An actor who's part of the game. Make a Charm roll.",
            rolls: [
                { roll: '2-3', description: 'He ignores you' },
                {
                    roll: '4-7',
                    description:
                        'He gives advice – gain +1 to next Escape Location roll',
                },
                {
                    roll: '8-10',
                    description:
                        'He tells you about unusual activity – gain +1 Knowledge or roll for a Plot event',
                },
                {
                    roll: '11+',
                    description: 'He becomes an Ally – roll for a Plot event',
                },
            ],
            stats: { brains: 1, brawn: 2, bravery: 1 },
            skills: ['Engineer'],
        },
        {
            roll: '11',
            name: 'Ood',
            description:
                'An independent and very dapper Ood. Make a Charm roll.',
            rolls: [
                {
                    roll: '2-4',
                    description:
                        'If the Enemy is an Entity, it Attacks (Brawn 3, Evade with Running 7 roll)',
                },
                {
                    roll: '5-7',
                    description:
                        'The Ood guides you through Location – gain +1 to next Escape Location roll',
                },
                {
                    roll: '8-10',
                    description: 'The Ood gives a clue – roll for Plot event',
                },
                { roll: '11+', description: 'Joins as an Ally' },
            ],
            stats: { brains: 2, brawn: 1, bravery: 1 },
            skills: ['Aware', 'Computers'],
        },
        {
            roll: '12',
            name: 'Seasoned Adventurer',
            description:
                "He's been here a long time and probably knows this place better than anyone, but may have lost his mind... Make a Charm roll.",
            rolls: [
                { roll: '2-4', description: 'Attacked (Brawn 2)' },
                { roll: '5-10', description: 'He wanders off' },
                {
                    roll: '11+',
                    description:
                        'He joins you as an Ally (+1 to Escape Location rolls). Roll for a Plot event.',
                },
            ],
            stats: { brains: 2, brawn: 1, bravery: 0 },
            skills: ['Stealth'],
        },
    ],
    specials: [
        {
            id: 1,
            image: 'trap-for-the-doctor',
            name: 'Trap for the Doctor',
            description:
                'The Enemy intends to use the Puzzle Sphere as a prison to trap you here. Add +1 Danger.',
            information:
                'Escape the Puzzle Sphere: You must gain 4 Knowledge and make an Escape Location roll to return to the TARDIS (Brains 19 roll). Have an Enemy Encounter any time you fail an Escape Location roll. Trap Enemy Inside: Make a Prevent Action in the Control Centre (add Computers or Engineer). Add +1 Danger and have an Enemy encounter if you fail.',
            stats: null,
            skills: [],
        },
    ],
}

export const adventureData: Adventure[] = [
    A001,
    A002,
    A003,
    A004,
    A005,
    A006,
    A007,
    A008,
    A009,
    A010,
    A011,
    A012,
    A013,
    A014,
    A015,
    A016,
    A017,
    A018,
    A019,
    A020,
    A021,
    A022,
    A023,
    A024,
]
