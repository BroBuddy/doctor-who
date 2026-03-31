import type { Enemy } from '../types/EnemyType'

const E001: Enemy = {
    id: 1,
    tag: 'E001',
    title: 'The Weeping Angels',
    description:
        'The Weeping Angels appear to be angelic stone statues, but in reality are terrifying quantum creatures that can consume the potential energy of all they devour and can move in the blink of an eye.',
    special: null,
    stats: ['+1 Danger', 'Scheme 4', 'Gothic', 'Temporal'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 8-15; +2 if Danger 16+) for number of Angels encountered each Brains 1, Brawn 3, Bravery 3 (Troop, +1 to Qualities at Dark Locations). If you are not at a Dark Location and have more Aware than number of Angels, they are quantum locked as statues, their faces hidden. Make an Aware 9 roll to gain +1 Knowledge and encounter ends. If the Angels are not quantum locked, choose from:',
        table: [
            {
                name: 'Evade',
                description:
                    'You must make a Running 10 roll to escape. If you fail, choose another option with -1 to the roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way past the Angels. If you fail, start a Conflict (Terrify) with -1 to the roll.',
            },
            {
                name: 'Conflict (Terrify)',
                description:
                    'As the lights flicker, the Angels get closer, baring their fangs and with sharp talons stretching out...',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Regeneration',
            vp: 5,
            type: 'Resurrection',
            description:
                'The Weeping Angels are slowly feeding off raw energies from a nearby Time Rift (roll for random Location of Rift). If Danger is 18+, Weeping Angels are +1 to all Qualities. You may either:',
            options: [
                {
                    name: 'Cut Energy Source',
                    description:
                        'Take a Prevent Action (adding Aware and Science) at the Rift. Add +1 Danger if you fail.',
                },
                {
                    name: 'Alter Energy Frequency',
                    description:
                        'Take a Prevent Action (add Engineer) at the Rift. Add +1 to Angel Qualities if you fail.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Escape Prison',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Angels are trying to escape from dimensional containment (roll for random Location of prison dimensional Gate). If Danger is 16+, add +1 to number of Angels encountered. You may either:',
            options: [
                {
                    name: 'Rebuild the Prison',
                    description:
                        'Make a Science 10 roll, adding any Aware to research the dimensional co-ordinates. Then take a Prevent Action (add Science) at the Angel Mausoleum (Lair) or the Gate Location. Add +1 Danger if you fail.',
                },
                {
                    name: 'Trick the Angels',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict against the Angels. If you fail, add +2 Danger and start a (Terrify) Conflict with the Angels.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Steal TARDIS',
            vp: 4,
            type: 'Capture',
            description:
                'The Weeping Angels are attempting to steal the TARDIS to ravage all of Time! If you lose this Adventure then you lose the game. You must return to the TARDIS and then may either:',
            options: [
                {
                    name: 'Create Force Barrier',
                    description:
                        'Add +1 Danger. Take a Prevent Action (add Engineer and TARDIS). Add +1 Danger if you fail.',
                },
                {
                    name: 'Lure Angels into Trap',
                    description:
                        'Add +2 Danger. Gain 1 Knowledge then win an (Outwit) Conflict (add TARDIS) against the Angels. Gain 5VP if you succeed. Discard a Character if you fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1',
            name: 'Fear',
            description:
                'A random Human Ally with Bravery less than 2 is overcome with dread. You must have a TARDIS Character make a successful Bravery 9 roll as an Action next turn or pay 1 Luck, or you must discard the Ally.',
        },
        {
            roll: '2',
            name: 'Eyes of an Angel',
            description:
                'Random Human Character with Aware has looked into the eyes of an Angel. If an Ally, they become an Angel and discarded - add +1 Danger. A Companion must make a Bravery 9 roll at the end of each Turn (other TARDIS Characters add +1 and Charm to roll) or become an Angel (+2 Danger and +1 to number of Angels encountered). If Defeat Angels, Companion no longer affected.',
        },
        {
            roll: '3-4',
            name: 'Blink',
            description:
                'In the next encounter with the Angels, one of your Characters loses Aware.',
        },
        {
            roll: '5',
            name: 'Attacked in the Darkness',
            description:
                'If any of your Characters are at a Dark Location, they must have an immediate encounter with the Weeping Angels. Characters are -1 Bravery for the encounter.',
        },
        {
            roll: '6',
            name: 'Consume Potential',
            description:
                'If the Angels have killed a Character, all Weeping Angels are +1 to all Qualities.',
        },
    ],
    lair: {
        name: 'Angel Mausoleum',
        tags: ['Dark Location', 'Move 8'],
        description:
            'You have discovered a huge stone cavern that stretches back into darkness, and a cold, eerie mist covers the rocky floor. You realise with dread that the cavern contains dozens of apparently hibernating Weeping Angels... Gain +1 Knowledge (once in Adventure) but Characters with Bravery 1 or less must flee the cavern in terror. Roll 1D6 - on a 1-3 (1-4 if Danger 11+) immediately encounter the Weeping Angels (with +2 to number of Angels encountered). Add +2 to Rescue Actions here but any Evade options have a -1 penalty. Add +1 to Enemy Action roll (+2 if Resurrection Goal) each turn.',
    },
}

const E002: Enemy = {
    id: 2,
    tag: 'E002',
    title: 'Dalek Invasion Force',
    description:
        'The Daleks are your sworn enemies and opposed Gallifrey in the Time War. Originally from Skaro, these mutated creatures of hate are carried inside armoured shells fitted with devastating weaponry.',
    special: null,
    stats: ['+3 Danger', 'Scheme 6', 'Military'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 8-15; +2 if Danger 16+) for number of Daleks encountered each Brains 1, Brawn 8, Bravery 3 (Troop). Roll a further 1D6 (+1 if at a Lair, +1 if Danger 12+, +1 if there are 3+ Daleks here) - if result is 5+, the Daleks are with the Supreme Dalek (Brains 5, Brawn 8, Bravery 5, Leader). Choose from:',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Daleks glide towards you, their gun sticks aiming as they chant “Exterminate!”...',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Dalek Supreme here): 1-4: The Daleks start an (Attack) Conflict; 5: Captured (8); 6+: Taken to a Dalek Saucer (Lair – Captured 9). If captured by Supreme Dalek, choose to lose 3 Luck OR add +1 Danger.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 9 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Daleks and escape. If you fail, choose to Surrender or start a Conflict (Attack).',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Invasion',
            vp: 6,
            type: 'Invasion',
            description:
                'The Daleks plan to invade and turn the planet into a new base. If Danger 16+, add +2 to number of Daleks encountered. If on Earth and you do not Defeat the Daleks, -2 to the Setback roll. You may either:',
            options: [
                {
                    name: 'Destroy Homing Beacon',
                    description:
                        'Roll a random Location for Beacon. Move to Beacon and take a Prevent Action (add Engineer). If you fail, add +1 Danger and have a Dalek encounter.',
                },
                {
                    name: 'Create Energy Shield',
                    description:
                        'You must Move to any 3 Locations and make a Brains 12 roll (add Computers and Engineer) at each Location. Add +1 Danger each time you fail a roll.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Purification',
            vp: 7,
            type: 'Apocalypse',
            description:
                'The Daleks intend to create a deadly plague. At the start of each Turn if Danger 18+, roll 1D6 for each Human Character - on a 1 they are killed unless you spend Luck equal to their Brawn. You may either:',
            options: [
                {
                    name: 'Reverse Engineer Plague',
                    description:
                        'Make a Science 10 or Medicine 9 roll to research plague. Then take a Prevent Action (add Medicine) in Saucer (Lair) or where you can Research (Science). If you fail, discard a Human Ally and add +1 Danger.',
                },
                {
                    name: 'Destroy Command Saucer',
                    description:
                        'Get aboard the Dalek Saucer (Lair) and take a Prevent Action (add Computers). If you fail, add +2 Danger and have a Dalek encounter.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Mine Resources',
            vp: 6,
            type: 'Quest',
            description:
                'The Daleks are creating a slave force to steal mineral resources here. If Captured by Daleks, at the start of a Turn, roll 2D6 (add number of captives) - if result is 10+, add +1 Danger. You may either:',
            options: [
                {
                    name: 'Create Slave Revolt',
                    description:
                        'You must have at least 3 Allies and then take a Prevent Action (add number of Allies) at Dalek Saucer (Lair). If you fail, discard an Ally and add +1 Danger.',
                },
                {
                    name: 'Destroy Mining Base',
                    description:
                        'Roll a random Location for Base (same Action/Encounter modifiers as Dalek Saucer). Move to Base then take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Daleks.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Exterminate',
            description:
                'In next Dalek encounter, add +1 to each Dalek Brawn and you may not choose the Surrender option.',
        },
        {
            roll: '3',
            name: 'Bomb',
            description:
                'Roll for random Location. At the start of a Turn roll 2D6 with +1 to successive rolls. If result 10+ the bomb explodes killing all Characters there, cancels Location text and adds +2 Danger. You may defuse the bomb with Engineer 9 roll as an Action.',
        },
        {
            roll: '4',
            name: 'Hostages',
            description:
                'If you have any captured Characters then you must Surrender to the Daleks (see Encounter) by the end of next Turn or the captives will be killed.',
        },
        {
            roll: '5-6',
            name: 'Saucer Laser Fire',
            description:
                'A Dalek Saucer strafes a random Exterior Location and any Characters there will be killed unless you spend 2 Luck per Character (you may opt to save only some Characters).',
        },
    ],
    lair: {
        name: 'Dalek Saucer',
        tags: ['Location', 'Move 9'],
        description:
            'A ship of terrifying firepower and devastation. Add +1 Danger (once per Adventure). Add +1 to number of Daleks encountered and +2 to Rescue Actions. To get aboard requires a Stealth 9 roll, encountering Daleks if you fail. You can sabotage the Saucer with a Computers 10 roll as an Action. If successful add +1 to Prevent Actions (+2 if Goal is Invasion). If you fail, have Dalek encounter. To escape the Saucer, you must make both a Stealth 8 roll and a Computers 8 roll to find and operate a Transmat. If you fail, encounter Daleks (-2 to Surrender option).',
    },
}

const E003: Enemy = {
    id: 3,
    tag: 'E003',
    title: 'The Celestial Toymaker',
    description:
        'The Toymaker is a mysterious immortal who appears dressed as a Chinese mandarin. He is obsessed with playing deadly games, warping reality for his own amusement and kidnapping lesser species to torment for his fun.',
    special: null,
    stats: ['+1 Danger', 'Scheme 4', 'Entity'],
    encounter: {
        description: 'Roll 1D6 (adding +1 if Goal revealed, +1 if Danger 16+):',
        table: [
            {
                name: '1-2: Toymaker Servants',
                description:
                    'You encounter 1D3+1 servants of the Toymaker – clowns, dolls or playing cards (each Brains 1, Brawn 1, Bravery 1, Minion). You may Evade (Running 8) or Hide (Stealth 8). If you fail, then either start an (Attack) Conflict or join them in a game and an (Outwit) Conflict (Characters that lose are also frozen for the Adventure).',
            },
            {
                name: '3-4: Greater Servant',
                description:
                    'You encounter a dangerous servant of the Toymaker who has been granted slightly more autonomy (Brains 2, Brawn 2, Bravery 2, Minion). You may Evade (Running 9) or accept their challenge in a game with an (Outwit) Conflict (with -2 to roll as the servant cheats). Characters losing the (Outwit) Conflict are transported to the Celestial Toyroom (Lair).',
            },
            {
                name: '5-6: The Toymaker',
                description:
                    'You encounter the smiling Toymaker (Brains 6, Brawn 2, Bravery 5, Leader). If in Dilemma Phase, the Toymaker laughs and snaps his fingers – roll for an Enemy event and encounter ends (you may pay 1 Luck to reveal the Goal as the Toymaker cannot resist gloating). If in Defeat Phase, roll 1D6 for the Conflict: 1-2: Outwit; 3-4: Trap; 5-6: Mind Control.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Hunt the Doctor',
            vp: 5,
            type: 'Capture',
            description:
                'The Toymaker is seeking revenge! Random Character selection will always target the Doctor. If you do not Defeat the Toymaker then you are trapped forever in his realm - the game is over. You may either:',
            options: [
                {
                    name: 'The Trilogic Game',
                    description:
                        'You must make 3 consecutive successful Brains (12) rolls as Actions with no other Character being able to add Brains. Each time you succeed, add +1 to your next Brains roll. If you fail, -1 to next roll.',
                },
                {
                    name: 'Battle of Wits',
                    description:
                        'Gain 1 Knowledge then win an (Outwit) Conflict against the Toymaker (do not roll for Conflict type in encounter but only the Doctor can use Brains for the roll). Transported to Celestial Toyroom (Lair) if fail.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Find New Toys',
            vp: 4,
            type: 'Capture',
            description:
                'The Toymaker wants to add new toys to his collection. Each time a Character enters the Celestial Toyroom (Lair), add +1 Danger. Escape rolls from the Toyroom have a -1 penalty. You may either:',
            options: [
                {
                    name: 'Recover Humanity',
                    description:
                        'Make a Charm 9 roll (-1 per frozen Character). Add +1 Danger and an Enemy encounter if fail.',
                },
                {
                    name: 'Build Psychic Inhibitor',
                    description:
                        'Build with an Engineer 10 roll (-1 per frozen Character) then reach the Celestial Toyroom (Lair).',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'For Amusement',
            vp: 4,
            type: 'Capture',
            description:
                'The Toymaker is bored and wishes to play more deadly games. If Danger is 12+ then add +1 to all Qualities of the Toymaker’s Minions. You must reach the Celestial Toyroom (Lair) then may either:',
            options: [
                {
                    name: 'Win the Games',
                    description:
                        'Take a Prevent Action (add +1 for each successful Play Games Action). Add +1 Danger if you fail.',
                },
                {
                    name: 'Destroy Dimension',
                    description:
                        'Gain 3 Knowledge then win a (Mind Control) Conflict with the Toymaker.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1',
            name: 'Intangible',
            description:
                'The Toymaker renders your Character with highest Brains intangible for 1D6 Turns. Character may not take Actions or add Brawn or Bravery to Conflict.',
        },
        {
            roll: '2-3',
            name: 'Kidnap',
            description:
                'The Toymaker has kidnapped a random Character and placed them in his own dimensional realm – see The Celestial Toyroom (Lair).',
        },
        {
            roll: '4',
            name: 'Puzzle',
            description:
                'The Toymaker has presented you with a fiendish puzzle. The Doctor must make a Brains 10 roll as an Action before any further Actions.',
        },
        {
            roll: '5-6',
            name: 'New Toy',
            description:
                'The Toymaker has decided that your Companion will make an excellent toy for his collection. Choose random Companion and start (Mind Control) Conflict.',
        },
    ],
    lair: {
        name: 'The Celestial Toyroom',
        tags: ['Location', 'Aware 8'],
        description:
            'You have been transported to the realm of the Toymaker where he intends you to stay forever, playing games for his amusement. At least until he gets bored... Being inside this realm counts as Captured (12), although each Turn as an Action you may Play Games with the various Toys the Toymaker has as his servants. To do this, select a random Quality and make a Quality (10) roll (adding Aware). If you succeed, roll 1D6 and on a 1-3, you must roll for success again as the Toys cheat! If you succeed a second time, add +2 to Escape rolls (cumulative). If you fail, choose to add +1 Danger or freeze a Character. You may not Rescue any Characters from the Toyroom. Whilst you have Characters trapped inside the Playroom, add +1 to Enemy Action rolls. If you Escape the Toyroom, add +1 to Prevent Actions (+2 if the Doctor escaped from there) and reveal the Goal.',
    },
}

const E004: Enemy = {
    id: 4,
    tag: 'E004',
    title: 'The Zygons',
    description:
        'The Zygons are malevolent shape-changing aliens with huge, domed heads and covered in sucker-like nodules. Cunning and ruthless, they have whispering, sibilant voices and their claws carry a deadly sting.',
    special: null,
    stats: ['+1 Danger', 'Scheme 5', 'Chameleon'],
    encounter: {
        description:
            'Roll 1D3 for number of Zygons encountered (add +1 if Danger 12+), each Brains 1, Brawn 4, Bravery 3 (Troop). Also roll 2D6 and if the result is lower than current Danger, then one Zygon is instead a Zygon Warlord (Brains 3, Brawn 4, Bravery 4, Leader). Zygons are +1 Qualities at Water Locations. Choose from options below:',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Zygons hiss in anger and advance towards you, their claws raised ready to sting...',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Zygon Warlord here): 1-3: Zygons start (Attack) Conflict; 4-5: Captured (8); 6+: Taken to Zygon Ship (Lair – Captured 9). If captured by Warlord, add +1 Danger but reveal Goal as Warlord cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Zygons and escape. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Hunt Fugitive',
            vp: 4,
            type: 'Capture',
            description:
                'The Zygons are trying to locate a fugitive Zygon that wishes to live in peace. If you ever encounter a lone Zygon, roll 1D6 and on 4-6, it is the fugitive who becomes your Ally with a Charm 8 roll. You may either:',
            options: [
                {
                    name: 'Find Fugitive',
                    description:
                        'You must make an Aware 9 roll to have a lone Zygon encounter at any Location then Ally the Zygon and return to the TARDIS. Add +1 Danger each time you fail the Aware roll.',
                },
                {
                    name: 'Trick the Zygons',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict in a Zygon encounter with a Zygon Warlord. If you fail, add +1 Danger and are Captured (9) at the Zygon Ship (Lair).',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Transmit Invasion Signal',
            vp: 6,
            type: 'Invasion',
            description:
                'The Zygons wish to send a signal to their invasion fleet to colonise and dominate the planet (roll for random Location of transmitter). If Danger 16+, add +2 to number of Zygons encountered. You may either:',
            options: [
                {
                    name: 'Destroy Transmitter',
                    description:
                        'Move to transmitter and take a Prevent Action (add Engineer). Add +1 Danger if you fail.',
                },
                {
                    name: 'Create False Signal',
                    description:
                        'You must make a Computers 11 roll to research Zygon frequencies and then take a Prevent Action (add Computers) at the transmitter Location. Add +1 Danger and have a Zygon encounter if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Change Atmosphere',
            vp: 7,
            type: 'Apocalypse',
            description:
                'The Zygons are attempting to change the atmosphere here so it resembles their own home planet. If Danger 16+, all Human Characters are -1 to Qualities, Zygons are +1 Brawn. You may either:',
            options: [
                {
                    name: 'Create Atmospheric Stabiliser',
                    description:
                        'You must make a Brains 15 roll (add Science) to analyse the atmospheric changes. Then take a Prevent Action (add Science) where you can Research (Science). Add +1 Danger each time you fail.',
                },
                {
                    name: 'Sabotage Emitter Node',
                    description:
                        'You must sneak aboard Zygon Ship (Lair) with a Stealth (9) roll, encountering Zygons if you fail. Once aboard, take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Zygons.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Zygon Copy',
            description:
                'Roll 1D6 for each Human Character in a random group. If the result is a 1, then Character is revealed to be a Zygon – have an encounter. If Character is a Companion then the real Companion is instead Captured (9) at their Lair.',
        },
        {
            roll: '3-4',
            name: 'Skarasen',
            description:
                'A massive, armoured cyborg dinosaur of frightening power and ferocity. A random group of Characters must make a Running 8 roll to escape from the Skarasen. If you fail, choose a Character in the group to be killed.',
        },
        {
            roll: '5',
            name: 'Infiltration',
            description:
                'Zygons have infiltrated authorities – you may not use Find Help Actions.',
        },
        {
            roll: '6',
            name: 'Surveillance Device',
            description:
                'The Zygons have planted a bug! Lose 1 Luck or add +2 to next Enemy Action roll or +1 Danger.',
        },
    ],
    lair: {
        name: 'Zygon Ship',
        tags: ['Location', 'Move 8'],
        description:
            'You discover a Zygon ship built using organic crystallography. Gain +1 Knowledge (unless captives). Evade encounter options have a -1 penalty. Add +1 to number of Zygons encountered. You may also Explore Ship as an Action (2D6): 2-4: Captured (9); 5-7: Encounter Zygons; 8-9: Discover body-print chamber – rescue any Captured Characters and you may sabotage device with a Science 9 roll to gain +1 to Prevent Actions; 10: Discover life support - sabotage with a successful Medicine 9 roll to make Zygons -1 to all Qualities for next 1D3+1 Turns; 11+: Zygon control room - add +2 to Challenge or Prevent Actions. Have a Zygon encounter (including a Warlord).',
    },
}

const E005: Enemy = {
    id: 5,
    tag: 'E005',
    title: 'The Mire',
    description:
        'Renowned and feared, the Mire have a reputation of being a deadly warrior race. Their heavy armour gives them the appearance of powerful robots, but the creature inside resembles sea lampreys with sharp teeth.',
    special: null,
    stats: ['+0 Danger', 'Scheme 5', 'Military'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 10-15; +2 if Danger 16+) for number of Mire you encounter, each Brains 1, Brawn 6, Bravery 3 (Troop). Roll a further 1D6 (+1 if at their Ship, +1 if Danger 12+, +1 if there are 3+ Mire) - if result 5+, the Mire are led by Commander Taal (Brains 3, Brawn 5, Bravery 3, Leader). Choose from the options below:',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Mire march towards you, their blasters charged and raised...',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Taal here or Capture Goal): 1-4: Mire start an (Attack) Conflict; 5: Captured (8); 6+: Taken to Mire Ship (Lair – Captured 8). If captured by Taal, +1 Danger but roll for Goal event as Taal cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Mire and escape. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Invasion',
            vp: 6,
            type: 'Invasion',
            description:
                'The Mire plan to invade the planet and turn it into a new base for their conquest of the galaxy. If Danger 16+, add +1 to number of Mire encountered. You may either:',
            options: [
                {
                    name: 'Destroy Homing Beacon',
                    description:
                        'Roll a random Location of beacon. If at beacon, take a Prevent Action (add Engineer). If you fail, add +1 Danger and have a Mire encounter.',
                },
                {
                    name: 'Create Energy Shield',
                    description:
                        'You must Move to any 3 Locations and in each take a Prevent Action (add Computers and Engineer). Add +1 Danger each time you fail a roll.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Obtain Technology',
            vp: 5,
            type: 'Quest',
            description:
                'The Mire are attempting to steal technology to upgrade their systems and power. If Danger 16+, take a -1 penalty to Engineer Skill rolls and Mire have +1 to the Qualities. You may either:',
            options: [
                {
                    name: 'Trap the Mire',
                    description:
                        'You must have an encounter with the Mire that includes Taal, and have a successful (Capture) Conflict. If you fail, add +1 Danger and are Captured (9) aboard the Mire Ship (Lair).',
                },
                {
                    name: 'Use Technology Against the Mire',
                    description:
                        'You must make a Computers 9 roll to analyse the systems. Then take a Prevent Action (add Engineer) at a Location where you can Research (Engineer). Add +1 Danger if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Harvest Population',
            vp: 6,
            type: 'Capture',
            description:
                'The Mire wish to cull the local population and liquefy the bodies, feeding off the chemicals within. All (Attack) Conflicts are now (Drain Life-Force). You may either:',
            options: [
                {
                    name: 'Trick the Mire',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict in a Mire encounter that includes Taal. If you fail, add +1 Danger and are Captured (8).',
                },
                {
                    name: 'Contaminate Chemical Vats',
                    description:
                        'Sneak aboard Mire Ship (Lair) with a Stealth (8) roll, encountering the Mire if you fail. Once aboard, take a Prevent Action (add Science). If you fail, add +1 Danger and encounter Mire.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1',
            name: 'Tracking Device',
            description:
                'Add +1 to Enemy Action rolls and -1 to all Evade options for the rest of the Adventure (once per Adventure).',
        },
        {
            roll: '2',
            name: 'Mire Beam In',
            description:
                'Have an immediate Enemy encounter with the Mire but with a -1 penalty to any Quality or Skill roll in the encounter due to surprise.',
        },
        {
            roll: '3',
            name: 'Hostages',
            description:
                'If you have any captured Characters then you must Surrender to the Mire (see Encounter) by the end of next Turn or the captives will be killed.',
        },
        {
            roll: '4-5',
            name: 'Dominate Population',
            description:
                'Find Help Actions or rolls to Ally Characters have -1 penalty.',
        },
        {
            roll: '6',
            name: 'Holographic Imager',
            description:
                'The Mire often use holographic camouflage for disguise. Add +2 Brains to Commander Taal. If you have an encounter with Taal and are successful with an (Outwit) Conflict, you may steal the Imager and use it in Conflicts.',
        },
    ],
    lair: {
        name: 'Mire Ship',
        tags: ['Location', 'Move 9'],
        description:
            'Full of huge chemical vats and dark, steam-filled corridors. Add +1 Danger (once only), +1 to number of Mire encountered here and +2 to Rescue Actions. You can sabotage the Ship with a Computers 9 roll as an Action, gaining +1 to Prevent Actions (+2 if Goal is Invasion). If fail, have Mire encounter with -2 to Surrender option. To escape the Ship, you must make both a Stealth 8 roll and a Computers 8 roll to find and operate a Transmat. If you fail, encounter Mire (-2 to Surrender option).',
    },
}

const E006: Enemy = {
    id: 6,
    tag: 'E006',
    title: 'Carrionites',
    description:
        'Carrionites are terrifying, ancient creatures that have long been banished into the eternal darkness and appear as witch-like hags. Discovering the old power of language, they can control humans with magic.',
    special: null,
    stats: ['+0 Danger', 'Scheme 4', 'Earth', 'Gothic'],
    encounter: {
        description:
            'Roll 1D3 for number of Carrionites encountered – each Brains 3, Brawn 3, Bravery 3. Roll a further 1D6 (+1 if Danger 8-15; +2 if Danger 16+, +1 if at Lair) and if result is 4+, one of the Carrionites is instead Lilith (Brains 4, Brawn 3, Bravery 3, Leader). Carrionites are +1 to Qualities at Night. Choose from the options below:',
        table: [
            {
                name: 'Conflict (Terrify)',
                description:
                    'The Carrionites advance towards you cackling with terrifying laughter. Any Human Allies with Bravery 1 or less must each roll 1D6 and on a 1-3 are so terrified that they cannot add their Bravery to Conflict total.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 to roll if Lilith here): 1-3: The Carrionites start a (Terrify) Conflict. 4-5: You are Captured (8); 6: Transported to their Cavern (Lair – Captured 9). If captured by Lilith, roll for a Goal as she cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'The Carrionites can fly so you can try to escape (Running 9 roll) or hide (Stealth 9 roll). If you fail, choose another option with -1 to the roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to trick the Carrionites. If you fail, choose another option with -1 to any Quality or Skill roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Escape Prison',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Carrionites are trying to help other Carrionites escape from dimensional containment. If Danger 16+, add +1 to number of Carrionites encountered. You may either:',
            options: [
                {
                    name: 'Rebuild the Prison',
                    description:
                        'Make a Science 10 roll (add Aware) to research the dimensional co-ordinates. Then take a Prevent Action (adding Science) at a random Location. Add +1 Danger if you fail.',
                },
                {
                    name: 'Invoke Counter-Spell',
                    description:
                        'Gain 3 Knowledge then win (Outwit) Conflict (+2 if author Ally) in a Carrionite encounter.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Rewrite History',
            vp: 6,
            type: 'Meddling',
            description:
                'The Carrionites want to recreate Earth in their own image. If rolling an Enemy Event, instead roll 1D6 for each Human Character - on a 1, they vanish (only reappearing if you Defeat the Carrionites). You may either:',
            options: [
                {
                    name: 'Create Temporal Shield',
                    description:
                        'Return to TARDIS and take Prevent Action (add Science and TARDIS). Add +1 Danger if fail.',
                },
                {
                    name: 'Trick the Carrionites',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict (add History) in a Carrionite encounter with Lilith.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Wake the Devil',
            vp: 6,
            type: 'Resurrection',
            description:
                'You discover that the Carrionites are trying to resurrect an ancient evil into existence from a dimensional Portal (random Location). If Danger 16+, Carrionites are +1 to all Qualities. You may either:',
            options: [
                {
                    name: 'Study Legends',
                    description:
                        'Make History 10 roll (add Aware) to study, then take a Prevent Action (add History) at the Portal.',
                },
                {
                    name: 'Destroy Portal',
                    description:
                        'Take a Prevent Action (add Science) at the Portal. If you fail, +1 Danger and encounter Carrionites.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Charmed',
            description:
                'Lilith uses her seductive charms on one of your male Allies – roll 1D6: 1-3: He is killed; 4-6: He is controlled and acts as her agent.',
        },
        {
            roll: '3',
            name: 'Naming Spell',
            description:
                'Lilith knows the name of one of your unique Allies or Companion (roll randomly if more than one) who may not take any Action next Turn.',
        },
        {
            roll: '4',
            name: 'Crystal Ball',
            description:
                'Lose 1 Luck point or 1 Knowledge or add +2 to next Enemy Action roll.',
        },
        {
            roll: '5',
            name: 'Voodoo Doll',
            description:
                'Lilith manages to gain some hairs from the Doctor’s head into a tiny doll. In encounters with her, reduce the Doctors’ Qualities by -1.',
        },
        {
            roll: '6',
            name: 'Ceremony of Power',
            description:
                'Lilith uses her spell book – Carrionites are +1 to all Qualities (once per Adventure).',
        },
    ],
    lair: {
        name: 'Cavern of the Witch',
        tags: ['Dark Location', 'Move 9'],
        description:
            'A damp cavern with ancient enchantments scratched with blood upon the cracked stone. Gain +1 Knowledge (unless here as captives). Roll 1D6 and on a 1-3 (1-4 if Danger 11+) immediately encounter Carrionites (+1 to number encountered). Inside the cavern, add +1 to Rescue Actions, -1 to Stealth rolls and +1 to Enemy Action rolls. You may search the cavern as an Action - roll 2D6: 2-5: Trip magical defences, immobilizing Characters. Make an Escape (8) Action or Captured (9); 6-8: Discovered by Carrionites (+1 to number encountered); 9: Discover cauldron and may study contents with a Science 10 roll as an Action to gain +2 Knowledge or reveal Goal; 10: Discover crystal ball - you may smash it with Brawn 10 roll to either have -1 on Enemy Action rolls or reveal Goal; 11+: Enter inner sanctum - gain +2 Knowledge or if Goal revealed you may take an immediate Prevent Action with +2 to roll.',
    },
}

const E007: Enemy = {
    id: 7,
    tag: 'E007',
    title: 'The Fendahl',
    description:
        'The Fendahl is a gestalt organism with a core and twelve Fendahleen – huge and terrifying caterpillar creatures with long tentacles around a slavering, sucker mouth. The Fendahl is death...',
    special: null,
    stats: ['+1 Danger', 'Scheme 4', 'Gothic', 'Temporal'],
    encounter: {
        description:
            'The number of Fendahleen encountered (each Brains 0, Brawn 4, Bravery 4, Creature) depends on Danger: 0–10: 1 Fendahleen; 11–15: 2 Fendahleen; 16+: 3 Fendahleen. Fendahleen are +1 to Qualities at Night.',
        table: [
            {
                name: 'Conflict (Drain Life-force)',
                description:
                    'The Fendahleen slithers towards you with a terrifying sucking, gobbling sound. Human Allies with Bravery 1 or less must roll 1D6 and on a 1–3 are so terrified that they cannot add their Brawn.',
            },
            {
                name: 'Evade',
                description:
                    'Fendahleen can exert control over their victims to invoke paralysis. To evade a Fendahleen, each non-Machine Character must make a Bravery 9 roll. Characters failing the roll must start a Conflict (above). If only some Characters succeed, you may leave the Characters behind to have the Conflict alone or remain with them.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Create Fendahleen',
            vp: 6,
            type: 'Apocalypse',
            description:
                'The Fendahl is trying to create all twelve Fendahleen to feed on the life-force of the entire planet. If Captured, at the start of each Turn, roll 1D6 for each Captured Character – if result is 1, Character is killed and add +1 Danger. If Danger 16+, add +1 to number of Fendahleen encountered.',
            options: [
                {
                    name: 'Attack Fendahleen',
                    description:
                        'Make a History 10 roll (add Science) to research that salt can be used against Fendahleen. If successful, add +5 to total Brawn. Have an Enemy encounter and win an Attack Conflict. Add +1 Danger if fail.',
                },
                {
                    name: 'Create Explosion',
                    description:
                        'Make a Brains 15 roll (add Computers in Modern Era or later) at a non Exterior Location. If fail, add +1 Danger. If succeed, roll 1D6 for each TARDIS Character (add Running). If the result is 1–2, Character is killed.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Control Humanity',
            vp: 5,
            type: 'Capture',
            description:
                'The Fendahl wants to enslave the local population. Conflicts with Fendahleen become (Dominate). Captured Characters with Bravery 1 or less may not take Escape Actions.',
            options: [
                {
                    name: 'Break Conditioning',
                    description:
                        'Move to Fendahl Lair and then take a Prevent Action (add +1 per Character with Bravery 4+ or Aware 2). Add +1 Danger (+2 Danger if 3 or more Captured Characters) and encounter Fendahleen if you fail.',
                },
                {
                    name: 'Create Psychic Shield',
                    description:
                        'Construct device with an Engineer 10 roll (add +2 if Character has Aware 2) then take a Prevent Action (add +2 if Character has Aware 2) at a Location where you can Research (Engineer). If you fail, add +1 Danger and encounter Fendahleen.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Awakening',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Fendahl is using a skull inscribed with a pentagram to try to resurrect itself back into existence. If Danger 16+, add +1 to all Fendahl Skull and Fendahleen Qualities.',
            options: [
                {
                    name: 'Study Legends',
                    description:
                        'Make History 10 roll (add Aware) to research legends, then take a Prevent Action (add History).',
                },
                {
                    name: 'Steal and Destroy Skull',
                    description:
                        'Move to Fendahl Lair and make a Stealth 9 roll to steal Skull. If you fail, add +1 Danger and encounter Fendahleen. Return to TARDIS and make a TARDIS 8 roll to find a supernova – TARDIS Damaged if fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Possession',
            description:
                'The Fendahl skull (counts as Brains 5) attempts to possess a random Character – start a (Mind Control) Conflict involving only the selected Character.',
        },
        {
            roll: '3',
            name: 'Sacrifice',
            description:
                'The servants of the Fendahl sacrifice a Character to their mistress. If you have any Captured Characters, choose 1 to be killed. Add +1 Danger.',
        },
        {
            roll: '4',
            name: 'Psychic Attack',
            description:
                'The Fendahl skull (counts as Bravery 5) begins a psychic attack on a random Character – start a (Terrify) Conflict involving only the selected Character.',
        },
        {
            roll: '5',
            name: 'Coven',
            description:
                'You encounter Minion servants of the Fendahl – choose to Evade (Running 7 roll), Surrender (Captured 8) or you are Attacked (Brawn 5).',
        },
        {
            roll: '6',
            name: 'Secret Ceremony',
            description:
                'The Fendahl skull and all Fendahleen are +2 Qualities next turn (cumulative with other modifiers).',
        },
    ],
    lair: {
        name: 'Sanctum of the Fendahl',
        tags: ['Location', 'Move 9'],
        description:
            'The underground temple has a stone altar and a huge pentagram drawn on the floor. Black candles flicker casting dark shadows about the walls and stone pillars. Gain +1 Knowledge (unless captives). Add +1 Danger if an Apocalypse or Resurrection Goal. Roll 1D6 – on a 1–3 (1–4 if Danger 12+) encounter Fendahleen (+1 to number encountered). Inside Sanctum, add +2 to Rescue Actions. Stealth and Escape rolls have a -1 penalty. Add +1 to Enemy Action rolls whilst here. A Fendahl Skull is +1 Qualities here.',
    },
}

const E008: Enemy = {
    id: 8,
    tag: 'E008',
    title: 'The Ice Warriors',
    description:
        'The Ice Warriors are a militaristic, reptilian race originally from Mars. They are intelligent, powerful and ruthless, and yet maintain a code of honour having joined the Galactic Federation.',
    special: null,
    stats: ['+1 Danger', 'Scheme 5', 'Military'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 12+) for the number of Warriors encountered (each Brains 1, Brawn 6, Bravery 3, Troop). Roll a further 1D6 (+1 if at their Ship, +1 if Danger 12+) – if the result is 5+, the Warriors are led by an Ice Lord (Brains 3, Brawn 6, Bravery 4, Leader). Martians are +1 Qualities at Cold Locations.',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Ice Warriors stride towards you, their sonic guns raised.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Ice Lord here): 1–3: Warriors start an (Attack) Conflict; 4–5: Captured (8); 6+: Taken to Martian Ship (Lair – Captured 9). If captured by Ice Lord, add +1 Danger but roll for a Goal as he cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 7 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Warriors and escape. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Military Conquest',
            vp: 6,
            type: 'Invasion',
            description:
                'The Ice Warriors plan to invade the planet as a new base for their conquest of the galaxy. If Danger 16+, add +1 to number of Warriors encountered.',
            options: [
                {
                    name: 'Destroy Homing Beacon',
                    description:
                        'Roll a random Location of beacon. Move there with a Running 8 roll and then take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Ice Warriors.',
                },
                {
                    name: 'Create Energy Shield',
                    description:
                        'Move to any 3 Locations and take a Prevent Action (add Computers and Engineer) in each.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Eradicate Atmosphere',
            vp: 7,
            type: 'Apocalypse',
            description:
                'The Ice Warriors are using seed pods to change the atmosphere of the planet to resemble Mars. If Danger 16+, Human Characters are -1 to Qualities and Enemies are +1 Brawn.',
            options: [
                {
                    name: 'Destroy Seed Pods',
                    description:
                        'Make a Brains 15 roll (add Science) to analyse seeds then take a Prevent Action (add Science) aboard Martian Ship (Lair) or at a Location where you can Research (Science).',
                },
                {
                    name: 'Sabotage Emitter Node',
                    description:
                        'Sneak aboard the Martian Ship (Lair) with a Stealth 9 roll, encountering Ice Warriors if you fail. Once aboard, take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Ice Warriors.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Awaken Hive',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Ice Warriors wish to awaken a Hive containing an army of sleeping Warriors protecting a legendary Martian Lord. If Danger 16+, add +1 to number of Ice Warriors encountered.',
            options: [
                {
                    name: 'Reactivate Hibernation System',
                    description:
                        'Make a Move 8 Action to reach Hive then take a Prevent Action (add Computers). If you fail, add +1 Danger and encounter Ice Warriors (with an Ice Lord).',
                },
                {
                    name: 'Appeal to Honour',
                    description:
                        'Make a Move 8 Action to reach Hive and encounter Ice Warriors (and an Ice Lord with +1 Qualities). Make a successful (Outwit) Conflict (add Diplomacy). If you fail, +1 Danger and Captured (9).',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1',
            name: 'Sonic Cannon',
            description:
                'The Warriors make a sonic attack on a random Location. If you have any Characters there, they are killed unless you spend 2 Luck per Character.',
        },
        {
            roll: '2',
            name: 'Empress Iraxa',
            description:
                "Leading the Ice Warriors is Empress Iraxa (Brains 4, Brawn 7, Bravery 5, Leader). Although ruthless, Iraxa is honourable. Add the 'Appeal to Honour' option (see Awaken Hive Goal) to any Goal and substitute her for an Ice Lord.",
        },
        {
            roll: '3',
            name: 'Traitor',
            description:
                'A random Ally is revealed to be working for the Ice Warriors. Discard Ally and choose: Group becomes Captured (8), lose 3 Luck, or add +2 Danger.',
        },
        {
            roll: '4',
            name: 'Awakening',
            description:
                'Add +1 to the number of Ice Warriors encountered (once only). Add +1 Danger if a Resurrection Goal.',
        },
        {
            roll: '5-6',
            name: 'Code of Honour',
            description:
                'Ice Warriors have a moral code. Add Diplomacy to any (Outwit) Conflict roll and Surrender option.',
        },
    ],
    lair: {
        name: 'Martian Ship',
        tags: ['Location', 'Move 9'],
        description:
            'A Martian ship is a hybrid of advanced technology fused with an organic shell, armed with weapons of awesome firepower. Gain +1 Knowledge (if not a captive) and roll 1D6 – on a 1–3 immediately encounter Ice Warriors (add +1 to the number, each is +1 Brawn due to advanced sonic rifles). Gain +1 to Rescue Actions here. If you have Computers 2 or Engineer 2, you can sabotage environment controls so Ice Warriors are -2 to Qualities (Ice Lords are -1). Add +2 to any Prevent or (Outwit) Conflict rolls. At the end of each Turn roll 1D6 – if the result is 4+ then the Warriors discover your sabotage and their Qualities return to normal.',
    },
}

const E009: Enemy = {
    id: 9,
    tag: 'E009',
    title: 'Terileptils',
    description:
        'The Terileptils are a space-faring reptilian species, covered in brightly-coloured scales, with clawed flippers, wide mouths full of sharp teeth and fish-like tails. They are known for their love of art, beauty... and war.',
    special: null,
    stats: ['+0 Danger', 'Scheme 5', 'Criminal'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 12+) for the number of Terileptils encountered (each Brains 1, Brawn 4, Bravery 2, Troop). Roll a further 1D6 (+1 if at their Pod, +1 if Danger 12+) – if the result is 4+, one of the Terileptils is a Leader (Brains 3, Brawn 5, Bravery 3, Leader).',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Terileptils advance towards you with their guns raised.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Leader here): 1–3: Terileptils start an (Attack) Conflict; 4–5: Captured (8); 6+: Taken to Terileptil Pod (Lair – Captured 8). If captured by a Leader, add +1 Danger and roll for a Goal as it cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 7 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Terileptils and escape. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Manufacture Plague',
            vp: 6,
            type: 'Experiments',
            description:
                'The Terileptils intend to develop and release a deadly virus to wipe out the native population. If Danger 16+, roll 1D6 for each Ally – on a roll of 1 the Ally is killed.',
            options: [
                {
                    name: 'Destroy Plague Carriers',
                    description:
                        'Move to 3 random Locations and in each make a Brawn 12 roll (add Stealth). Add +1 Danger each time you fail a roll.',
                },
                {
                    name: 'Develop Cure',
                    description:
                        'Make a Brains 15 roll (add Medicine) to analyse virus then take a Prevent Action (add Medicine) at any Location where you can Research (Medicine).',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Eradicate Atmosphere',
            vp: 6,
            type: 'Apocalypse',
            description:
                'The Terileptils are using Soliton Gas to alter the atmosphere of the planet to resemble their own. If Danger 16+, Human Characters are -1 to Qualities and Terileptils are +1 Brawn.',
            options: [
                {
                    name: 'Restore Atmosphere',
                    description:
                        'Make a Brains 15 roll (add Science) to analyse gas then take a Prevent Action (add Science) at any Location where you can Research (Science).',
                },
                {
                    name: 'Sabotage Gas Generators',
                    description:
                        'Sneak inside the Terileptil Pod (Lair) with a Stealth 9 roll, encountering Terileptils if you fail. Once aboard, take a Prevent Action (add Science). If you fail, add +1 Danger and encounter Terileptils.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Escape Justice',
            vp: 4,
            type: 'Quest',
            description:
                'These Terileptils are desperate criminals trying to avoid being caught by unknown hunters. Each Terileptil is +1 to all Qualities but you only ever encounter 1 Android.',
            options: [
                {
                    name: 'Destroy Pod',
                    description:
                        'Sneak inside the Terileptil Pod (Lair) with a Stealth 9 roll, encountering Terileptils if you fail. Once aboard, take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Terileptils (with Leader).',
                },
                {
                    name: 'Convince Terileptils',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict (add Diplomacy) in a Terileptil encounter with a Leader. If you fail, also add +1 Danger and become Captured (9).',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-3',
            name: 'Androids',
            description:
                'You encounter 1D3 Terileptil Androids (each Brains 1, Brawn 4, Bravery 4, Machine, Minion), covered in semi-precious jewels. Often disguised on less advanced worlds – if Regency Era or earlier, roll 1D6: on a 1–3, native Allies must make a Bravery 8 roll or must try to Evade with Running 7 or Stealth 8. You may start an (Attack) Conflict or Surrender – roll 1D6: 1–2: Attacked; 3–6: Captured (8).',
        },
        {
            roll: '4-6',
            name: 'Control Bracelets',
            description:
                'Terileptils use these on prisoners and to enslave the local population. Captured Characters with Brains 1 or less may not attempt Escape Actions unless with another Character of Brains 3+. If you currently have no Captured Characters, either add +1 Danger or roll for a Character event and start an (Attack) Conflict. The Characters encountered become Allies if you win the Conflict.',
        },
    ],
    lair: {
        name: 'Terileptil Pod',
        tags: ['Location', 'Move 9'],
        description:
            'Dim green light creates shadows across the pod that is filled with wisps of Soliton gas. Gain +1 Knowledge (if not a captive) and roll 1D6 – on a 1–3 immediately encounter Terileptils (add +1 to the number, each +1 Brawn due to the Soliton gas here). Gain +1 to Rescue Actions here. If you make a Science 10 roll, you can disable the Soliton generator so Terileptils are -1 to Qualities here. Add +2 to any Prevent or (Outwit) Conflict rolls. At the end of each Turn roll 1D6 – if result 4+ then Terileptils repair the generator and return to normal.',
    },
}

const E010: Enemy = {
    id: 10,
    tag: 'E010',
    title: 'Sontaran Commander',
    description:
        'The Sontarans are a blood-thirsty clone species that exist only to engage in battle – normally against their enemies, the Rutans. You have encountered only a lone Sontaran commander, sent as a scout here.',
    special:
        'The Sontaran Commander will have reached his Goal if Danger total is 15 rather than 20.',
    stats: ['+1 Danger', 'Scheme 4', 'Military'],
    encounter: {
        description:
            'The Sontaran Commander is Brains 4, Brawn 5, Bravery 4, Leader.',
        table: [
            {
                name: 'Conflict',
                description:
                    "If Danger 6 or less, the Sontaran attempts a (Capture) Conflict; if Danger 7+, the Commander instead starts an (Attack) Conflict. In an (Attack) Conflict, you may spend X Luck and roll 1D6 adding X. If the result is 6+, you have struck the Sontaran's probic vent and automatically win the Conflict.",
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Danger 6 or less): 1–3: Sontaran starts an (Attack) Conflict; 4–5: Captured (8); 6+: Taken to the Sontaran Scout Craft (Lair – Captured 8). Add +1 Danger and roll for a Goal as the Sontaran cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Sontaran and escape. If you fail, choose to Surrender or start a different Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Evaluate Tactical Position',
            vp: 3,
            type: 'Invasion',
            description:
                'The Sontaran is completing a survey to determine strategic location and possibilities of future invasion. If the Adventure is on Earth, add +1 Danger.',
            options: [
                {
                    name: 'Brinkmanship',
                    description:
                        'Gain 1 Knowledge then win an (Outwit) Conflict against the Sontaran. Add +1 Danger and start an (Attack) Conflict if you fail.',
                },
                {
                    name: 'Challenge Sontaran to Duel',
                    description:
                        'Win an (Attack) Conflict against the Sontaran with only 1 Character.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Evaluate Species',
            vp: 4,
            type: 'Experiments',
            description:
                'The Sontaran is experimenting on the local population to determine their strength and resistance. Add +1 Danger each time a Character is Captured or killed. If you roll a Capture Incident, you must kill 1 Character instead of rolling the D6.',
            options: [
                {
                    name: 'Challenge Sontaran to Duel',
                    description:
                        'Win an (Attack) Conflict against the Sontaran with only 1 Character.',
                },
                {
                    name: 'Lure Sontaran into Trap',
                    description:
                        'Rescue any Captured Characters then win a (Trap) Conflict against the Sontaran. Add +1 Danger if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Repair Scout Craft',
            vp: 3,
            type: 'Quest',
            description:
                'The Sontaran is trying to repair his ship which was damaged when he crashed here. Add +1 Danger if a Character with Engineer is Captured.',
            options: [
                {
                    name: 'Destroy Scout Craft',
                    description:
                        'Move to the Scout Craft (Lair) and once there, take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Sontaran.',
                },
                {
                    name: 'Convince Sontaran to Leave Peacefully',
                    description:
                        'Gain 1 Knowledge then win an (Outwit) Conflict against the Sontaran (add Diplomacy and Engineer). Add +1 Danger and become Captured (8) if you fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Robot Surveyor',
            description:
                'You encounter a Sontaran Scavenger robot (Brains 1, Brawn 5, Bravery 4, Machine, Minion). You may Surrender (roll 1D6: 1–2: Robot attacks; 3–6: Captured 8), Evade with a Running 8 roll, or start a (Capture) Conflict.',
        },
        {
            roll: '3',
            name: 'Heavy Weapons',
            description: 'Add +1 to Sontaran Brawn (cumulative).',
        },
        {
            roll: '4',
            name: 'Dominate Population',
            description:
                'Find Help Actions or rolls to Ally Characters have a -2 penalty.',
        },
        {
            roll: '5',
            name: 'Hostages',
            description:
                'If you have any Captured Characters then you must Surrender to the Sontaran (see Encounter) by the end of next Turn or the captives will be killed.',
        },
        {
            roll: '6',
            name: 'Tracking Device',
            description:
                'Add +1 to Enemy Action rolls and -1 to all Evade options for the rest of the Adventure (once only).',
        },
    ],
    lair: {
        name: 'Sontaran Scout Craft',
        tags: ['Location', 'Move 9'],
        description:
            'A typical Sontaran spherical pod. Gain +1 Knowledge (if not a captive) and +1 Danger (both once only). Roll 1D6 – 1–4: Encounter Sontaran; 5–6: Enemy event. Gain +1 to Rescue Actions here. Add +1 to Enemy Action rolls here. If you make a Stealth 8 roll and then an Engineer 11 roll, you can reverse the polarity of the Sontaran recharge facility. If Danger is then 12 or less, this will Defeat the Sontaran after 2 full Turns. If you fail either roll, add +1 Danger and start an (Attack) Conflict.',
    },
}

const E011: Enemy = {
    id: 11,
    tag: 'E011',
    title: 'The Rani',
    description:
        'The Rani is a dangerous renegade, exiled from Gallifrey. She is not interested in universal conquest but prefers to conduct her dangerous experiments and use enslaved native species with little or no remorse.',
    special: null,
    stats: ['+2 Danger', 'Scheme 5', 'Time Lord'],
    encounter: {
        description:
            'The Rani is Brains 5, Brawn 2, Bravery 4 (Leader) and accompanied by 1D3 hypnotically controlled slaves (each Brains 0, Brawn 2, Bravery 3, Minion).',
        table: [
            {
                name: 'Conflict',
                description:
                    'If Danger 10 or less, the Rani attempts a (Capture) Conflict; if Danger 11+, the Rani instead starts an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Danger 10 or less): 1–2: The Rani starts an (Attack) Conflict; 3–5: Captured (8); 6+: Captured (9), add +1 Danger and roll a further 1D6 – on a result of 4+, roll for a Goal as the Rani cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way out of trouble. If you fail, choose to Surrender or start a different Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Create Time Manipulator',
            vp: 7,
            type: 'Apocalypse',
            description:
                'The Rani is creating an organic brain capable of altering time through the universe. Each Turn, if you roll doubles on an Enemy Action roll, add +1 Danger.',
            options: [
                {
                    name: 'Create Stable Time-Field',
                    description:
                        'Return to TARDIS and make a TARDIS 10 roll. Add +1 Danger and TARDIS Damaged if fail.',
                },
                {
                    name: 'Link Time Lord Brain',
                    description:
                        'Gain 3 Knowledge then win a (Brainwash) Conflict against the Rani using only 1 Time Lord Character. If you fail, add +2 Danger.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Harvest Brain Fluid',
            vp: 5,
            type: 'Experiments',
            description:
                'The Rani is seeking to extract certain chemicals from the human brain, the absence of which causes extreme violence and uncontrolled temper. All Charm and Diplomacy rolls in Character events have a -1 penalty. All Minions have +1 Brawn.',
            options: [
                {
                    name: 'Retrieve Fluid',
                    description:
                        "Make a successful Rescue (10) Action, either at a random Location or at the Rani's TARDIS (Lair).",
                },
                {
                    name: 'Create Serum Counter-agent',
                    description:
                        'Make a Science 10 or Medicine 9 roll to research the fluid. Then take a Prevent Action (add Medicine and Science) where you can Research (Medicine/Science). If you fail, add +1 Danger.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Collect Specimens',
            vp: 4,
            type: 'Capture',
            description:
                'The Rani is trying to collect specimens for her latest experiments, possibly even people. Add +1 Danger and +1 VP to Goal if an Icon Character is Captured.',
            options: [
                {
                    name: 'Rescue and Release Specimens',
                    description:
                        "Make a successful Rescue (9) Action, either at a random Location or at the Rani's TARDIS (Lair), then make a successful Prevent Action. If you fail, add +1 Danger and encounter the Rani.",
                },
                {
                    name: 'Convince Rani to Abandon Plan',
                    description:
                        'Have an encounter with the Rani and make a successful Prevent Action (add Diplomacy). If you fail, add +1 Danger and become Captured (8).',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Disguise',
            description:
                'The Rani has disguised herself amongst the local population. Add +1 Danger (+2 Danger if the Adventure has a female Icon Character). Add +2 to next Enemy Action roll.',
        },
        {
            roll: '3',
            name: 'Parasitic Control',
            description:
                "Roll 1D6 for each Ally. On a result of 1, the Ally is controlled by the Rani's mind parasite. Choose: add +1 Danger or Characters with Ally are Captured (8).",
        },
        {
            roll: '4',
            name: 'Control Population',
            description:
                'Add +1 to the number of Minions encountered with the Rani.',
        },
        {
            roll: '5',
            name: 'Hidden Mine',
            description:
                'If you have Characters at an Exterior Location, roll 1D6 – on a result of 1, choose a Character to be killed unless you spend 3 Luck.',
        },
        {
            roll: '6',
            name: 'Surveillance Device',
            description:
                'The Rani has installed monitors. Lose 1 Luck or add +2 to next Enemy Action roll or +1 Danger.',
        },
    ],
    lair: {
        name: 'TARDIS',
        tags: ['Location', 'Move 10'],
        description:
            "A very advanced model with chameleon circuit. Add +1 Danger (once). Roll 1D6 – 1–4: Encounter the Rani (-1 to any Conflict roll); 5–6: Enemy event. You may attempt access with a Brains 12 roll (only Time Lords can contribute but add TARDIS) to gain +2 Knowledge and +1 to Challenge and Rescue Actions here. Add +2 to Enemy Action rolls whilst here. If you fail the roll, you are caught by the Rani's defence systems – Captured (9). Inside the TARDIS, you may attempt sabotage with an Engineer 10 roll (add TARDIS) to gain +2 to next Prevent Action.",
    },
}

const E012: Enemy = {
    id: 12,
    tag: 'E012',
    title: 'Entombed Cybermen',
    description:
        'The ruthless Cybermen have replaced their organs and limbs with incredibly strong, mechanical versions. They have also enhanced their brains by totally removing the weakness of emotions such as pain and fear.',
    special: null,
    stats: ['+2 Danger', 'Scheme 4', 'Military'],
    encounter: {
        description:
            'Cancel Encounter if the result of Enemy Action roll in Discover Phase, otherwise roll 1D3 (+1 if Danger 14+, -1 if Dilemma Phase) for number of Cybermen encountered (each Brains 2, Brawn 7, Bravery 4, Machine, Troop). Roll a further 1D6 (+2 if in Tomb, +1 if Danger 14+) – if result 5+, the Cybermen are led by the Cybercontroller (Brains 4, Brawn 8, Bravery 4, Leader, Machine).',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Cybermen march towards you, their arms outstretched.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Cybercontroller here): 1–3: The Cybermen start an (Attack) Conflict; 4–5: Captured (8); 6+: Taken to the Cyber-Tomb (Lair – Captured 9). If captured by the Cybercontroller, add +1 Danger.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way out of trouble. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Reborn',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Cybermen are slowly awakening from their icy tomb. Enemy Action rolls have -1 to roll and -1 to number of Cybermen encountered. You need to Move to Tomb (Lair) and then choose an option.',
            options: [
                {
                    name: 'Seal Tomb Entrance',
                    description:
                        'Roll 11+ on a Find Help Action to gain explosives, then make a Prevent Action (add Engineer). Add +1 Danger if you fail.',
                },
                {
                    name: 'Flood Tomb with Molten Ice',
                    description:
                        'Make a Science 12 roll then a Running 8 roll to escape. Add +1 Danger if you fail the Science roll. Choose a Character to be killed if you fail the Running roll but Cybermen are still Defeated.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Repair Activation Circuit',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Cybermen are attempting to repair their hibernation control unit. If the Doctor is Captured, add +1 Danger. You need to Move to Tomb (Lair) and then choose an option.',
            options: [
                {
                    name: 'Destroy Circuit',
                    description:
                        'Make a Prevent Action (add Computers). Add +1 Danger and encounter Cybermen if you fail.',
                },
                {
                    name: 'Flood Tomb with Molten Ice',
                    description:
                        'Make a Science 12 roll then a Running 8 roll to escape. Add +1 Danger if you fail the Science roll. Choose a Character to be killed if you fail the Running roll but Cybermen are still Defeated.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Excavate Collapsed Tomb',
            vp: 5,
            type: 'Quest',
            description:
                'The Cybermen are trying to unearth a lost tomb. A roll of 6+ in a Surrender option is counted as a 4–5 result. Take a -2 penalty to a roll attempting to enter Tomb (Lair).',
            options: [
                {
                    name: 'Seal Tomb Entrance',
                    description:
                        'Roll 11+ on a Find Help Action to gain explosives, then make a Prevent Action (add Engineer) at the Tomb (Lair). Add +1 Danger and encounter Cybermen if you fail.',
                },
                {
                    name: 'Trap Cybermen Inside Tomb',
                    description:
                        'Have a successful (Outwit) Conflict with the Cybercontroller inside Tomb (Lair).',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-3',
            name: 'Cybermats',
            description:
                "You encounter 1D3 Cybermats, bizarre 'pets' of the Cybermen (each Brains 0, Brawn 3, Bravery 4, Machine). Unless you make an Engineer 10 roll to disable them or a Running 8 roll to Evade, start an (Attack) Conflict.",
        },
        {
            roll: '4',
            name: 'Control Population',
            description:
                'An Ally (lowest Bravery – choose if tie) has been controlled by a hypnotic signal from the Cybermen – see Traitor Incident.',
        },
        {
            roll: '5-6',
            name: 'Cyber-Conversion',
            description:
                'A random Captured Human Character has been converted into a Cyberman and killed. Add +1 Danger and +1 to number of Cybermen encountered.',
        },
    ],
    lair: {
        name: 'Cyber-Tomb',
        tags: ['Location', 'Move 9'],
        description:
            'The Cybermen often built icy tombs to hold their forces until they are needed for conquest. Gain +1 Knowledge and add +1 Danger (once in Adventure). Unless brought here as captive, you must either make a Brains 12 roll (add Computers) or a Brawn 15 roll to enter. If you fail, roll 1D6 and on a 1, the doors were electrified – choose 1 Character to be killed or lose 3 Luck points. Inside the tomb, gain +1 to Rescue Actions. Add +1 to number of Cybermen encountered, all Cybercontroller Qualities and Enemy Action rolls whilst here. You may also attempt to reactivate hibernation controls – make a Computers 10 roll to reduce Danger by -3. Encounter Cybermen if you fail (with -1 to any Evade or Surrender options).',
    },
}

const E013: Enemy = {
    id: 13,
    tag: 'E013',
    title: 'Silurian Soldier',
    description:
        'The Silurians are reptiles that were once the rulers of Earth millions of years ago. They now wish to reclaim their planet. You have encountered only a lone Silurian soldier awakened from hibernation.',
    special:
        'The Silurian soldier will have reached her Goal if Danger total is 16 rather than 20. She may only be encountered in Earth Adventures (roll again if otherwise).',
    stats: ['+0 Danger', 'Scheme 4', 'Earth', 'Military'],
    encounter: {
        description: 'The Silurian Soldier is Brains 3, Brawn 4, Bravery 4.',
        table: [
            {
                name: 'Conflict',
                description:
                    "If Danger 7 or less, the Silurian attempts a (Capture) Conflict; if Danger 8+, the Silurian instead starts an (Attack) Conflict. In an (Attack) Conflict, roll 1D6 and on a result of 1, select a Character to be struck by the Silurian's poison tongue. Regardless of the outcome, the Character will die after X full Turns (where X is Character's Bravery) unless you make a Medicine 10 roll or Defeat the Silurian.",
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Danger 7 or less): 1–2: Silurian starts an (Attack) Conflict; 3–5: Captured (8); 6+: Taken to the Silurian Cave (Lair – Captured 8). Add +1 Danger.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 9 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Silurian and escape. If you fail, choose to Surrender or start a different Conflict.',
            },
            {
                name: 'Broker Peace',
                description:
                    '(Defeat Phase only) Make a Diplomacy 10 roll (-2 if you have had an (Attack) Conflict with the Silurian in the Adventure, -1 for each Human Troop with you). If you succeed, you Defeat the Silurian and gain an additional 2 VP. If you fail, choose to Evade, Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Destroy Settlement',
            vp: 4,
            type: 'Apocalypse',
            description:
                'The Silurian intends to detonate explosives to destroy a nearby habitation. You must discard 2 Allies or Move to 3 random Locations to warn locals. You may then either Broker Peace (see Encounter) or choose an option below.',
            options: [
                {
                    name: 'Defuse Explosives',
                    description:
                        'Make an Aware 9 roll when you Move to a Location with Move number 4+ to find explosives. If you fail, you must Move to a new Location. If you succeed, take a Prevent Action (add Bravery) to defuse explosives.',
                },
                {
                    name: 'Broker Peace',
                    description:
                        'See Broker Peace option in Encounter section.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Release Poison',
            vp: 4,
            type: 'Experiments',
            description:
                'The Silurian is planning to release a vat of crimson venom into the local water supply. After 3 full Turns, add +2 Danger. You may either Broker Peace (see Encounter) or choose an option below.',
            options: [
                {
                    name: 'Create Anti-Toxin',
                    description:
                        'Make a Science 10 or Medicine 9 roll to research the venom. Then take a Prevent Action (add Medicine and Science) at Lair or at any Water Location. If you fail, add +1 Danger.',
                },
                {
                    name: 'Broker Peace',
                    description:
                        'See Broker Peace option in Encounter section.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Repair Hibernation Controls',
            vp: 4,
            type: 'Resurrection',
            description:
                'The Silurian is trying to revive more of her race to retake the Earth. Add +1 Danger if a Character with Engineer is Captured. You may either Broker Peace (see Encounter) or choose an option below.',
            options: [
                {
                    name: 'Seal Hibernation Chamber',
                    description:
                        'Roll 11+ on a Find Help Action to gain explosives, then make a Prevent Action (add Engineer) at the Silurian Cave (Lair). Add +1 Danger and encounter Silurian if you fail.',
                },
                {
                    name: 'Broker Peace',
                    description:
                        'See Broker Peace option in Encounter section.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Raptor Pet',
            description:
                'Encounter a savage raptor (Brains 0, Brawn 6, Bravery 4, Creature). You may Evade (Running 10) or must start an (Attack) Conflict. In subsequent Silurian Encounters roll 1D6 and on 1–2, the raptor is with the Silurian.',
        },
        {
            roll: '3',
            name: 'Silurian Hand Weapon',
            description: 'Add +1 to Silurian Brawn (once per Adventure).',
        },
        {
            roll: '4',
            name: 'Pit Trap',
            description:
                'A random Character at an Exterior Location has fallen into a Silurian pit and must make a Brawn 9 roll to escape. Whilst in the pit, add +2 to the Enemy Action roll with an Enemy encounter always applied to the trapped Character (who may not Evade).',
        },
        {
            roll: '5-6',
            name: 'Hostage',
            description:
                'A local child tried to befriend the Silurian but is now held at the Silurian Cave (Lair) and must be Rescued (9) before the Silurian can be Defeated. If rescued, the child joins you as an Ally (Brains 1, Brawn 0, Bravery 1, Stealth) and adds +2 to any Broker Peace Diplomacy roll.',
        },
    ],
    lair: {
        name: 'Silurian Cave',
        tags: ['Dark', 'Location', 'Move 9'],
        description:
            'A damp dark cavern that twists deeper underground. Gain +1 Knowledge (if not a captive) and +1 Danger (both once only). Gain +1 to Prevent, Challenge and Rescue Actions here but -1 to Escape Actions. Add +1 to Enemy Action rolls whilst Characters are here. Add +1 to Stealth rolls but -1 to Evade options. Encounter (Aware roll): 2–4: Lost (Incident); 5: No event; 6: Rock-fall – a random Character is killed unless you spend 2 Luck; 7–8: Encounter Silurian; 9–10: Enemy event; 11+: Gain 2 Knowledge or spend 1 Luck to gain +4 to next Prevent Action.',
    },
}

const E014: Enemy = {
    id: 14,
    tag: 'E014',
    title: 'Judoon Mercenaries',
    description:
        'The Judoon are used as police by the Shadow Proclamation, but some have found employment as brutal mercenaries for darker powers. These Judoon are led by Major Teska, a battle-scarred veteran of several galactic wars and conflicts. Teska commands total loyalty from his Judoon troops who know that failure would mean their instant death.',
    special:
        'The Judoon mercenaries will have reached their Goal if Danger total is 18.',
    stats: ['+0 Danger', 'Scheme 4', 'Criminal'],
    encounter: {
        description:
            'Roll 1D3+1 (+1 if Danger 10+) for number of Judoon encountered (each Brains 1, Brawn 5, Bravery 3, Troop). Roll a further 1D6 (+1 if Danger 8+, +1 if there are 3+ Judoon) – if result 4+, the Judoon are led by Major Teska (Brains 3, Brawn 6, Bravery 4, Leader). Judoon Troops are +1 Bravery if led by Teska.',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Judoon march towards you, their blasters raised.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Teska here or Capture Goal): 1–2: Judoon start an (Attack) Conflict; 3–5: Captured (8); 6+: Taken to Judoon Ship (Lair – Captured 9). If captured by Teska, +1 Danger but roll a Goal event as he cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Judoon and escape. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Slavers',
            vp: 5,
            type: 'Capture',
            description:
                'The Judoon wish to capture the local population and sell them into slavery. If Captured by Judoon, at the start of a Turn roll 2D6 (add number of captives) – if result is 10+, add +1 Danger.',
            options: [
                {
                    name: 'Lead Slave Revolt',
                    description:
                        'You must have at least 3 Allies and then take a Prevent Action (add number of Allies) at Judoon Ship (Lair). If you fail, discard an Ally and add +1 Danger.',
                },
                {
                    name: 'Trap Judoon',
                    description:
                        'You must have an encounter with the Judoon that includes Teska, and win a (Capture) Conflict. If you fail, add +1 Danger and are Captured (9) aboard the Judoon Ship (Lair).',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Steal Artefact',
            vp: 4,
            type: 'Profit',
            description:
                'The Judoon are attempting to steal a precious artefact to sell to the highest bidder. If Danger 12+, add +1 to Enemy Action rolls.',
            options: [
                {
                    name: 'Create Duplicate to Trick Judoon',
                    description:
                        'Make an Engineer 9 roll to create a duplicate. You must then encounter Judoon with Teska and have a successful (Outwit) Conflict. If you fail, add an extra +1 Danger and are Captured (8).',
                },
                {
                    name: 'Steal Artefact First',
                    description:
                        'You must Move to the Location with the highest Move number (or a Special Location) and make a Stealth 9 roll to steal the artefact. Add +1 Danger and encounter Judoon if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Hunt Fugitive',
            vp: 4,
            type: 'Capture',
            description:
                'The Judoon are tracking a disguised alien fugitive hiding here. Roll 1D6 for each Character you encounter – on a roll of 1 it is the fugitive. Add +1 Danger and +2 Danger if Captured.',
            options: [
                {
                    name: 'Trick the Judoon',
                    description:
                        'Gain 1 Knowledge then win an (Outwit) Conflict in a Judoon encounter that includes Teska. If you fail, add +1 Danger and you are Captured (8).',
                },
                {
                    name: 'Escape with Fugitive',
                    description:
                        'Return to TARDIS with the fugitive. If you need to find the fugitive, make an Aware 9 roll when you Move to a Location with Move number 4+. If you fail, add +1 Danger and you must Move to a new Location.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Tracking Device',
            description:
                'Add +1 to Enemy Action rolls, +1 Danger and -1 to all Evade options for the rest of the Adventure (once per Adventure).',
        },
        {
            roll: '3',
            name: 'Judoon Beam In',
            description:
                'Have an immediate Enemy encounter with the Judoon but with a -1 penalty to any Quality or Skill roll in the encounter due to surprise.',
        },
        {
            roll: '4',
            name: 'Hostages',
            description:
                'If there are any Captured Characters then you must Surrender to the Judoon (see Encounter) by the end of next Turn or the captives will be killed.',
        },
        {
            roll: '5-6',
            name: 'Heavy Weapons',
            description: 'Add +1 to Judoon Brawn (once per Adventure).',
        },
    ],
    lair: {
        name: 'Judoon Ship',
        tags: ['Location', 'Move 9'],
        description:
            'The ship is very advanced technology, full of weaponry and secure capture cells. Add +1 Danger (once only). Add +1 to number of Judoon encountered here. Add +2 to Rescue Actions. Escape Actions have a -2 penalty here. You can sabotage the Ship with a Computers 10 roll as an Action, gaining +2 to Prevent Actions. If you fail, have a Judoon encounter with -2 to Surrender option. To escape the Ship, you must make both a Stealth 8 roll and a Computers 8 roll to find and operate a Transmat. If you fail, encounter Judoon (-2 to Surrender option).',
    },
}

const E015: Enemy = {
    id: 15,
    tag: 'E015',
    title: 'Davros',
    description:
        'The crippled scientist that created the Daleks, Davros is one of your oldest and mostly deadly foes. A brilliant, twisted genius aiming to see the Daleks as the superior life form in the Universe!',
    special: null,
    stats: ['+3 Danger', 'Scheme 6', 'Dalek', 'Villain'],
    encounter: {
        description:
            'Davros is Brains 5, Brawn 3, Bravery 4 (Leader). Roll 1D6 (+1 if Danger 11+) and if the result is 4+, Davros is accompanied by his personal guard of 1D3 Daleks (each Brains 1, Brawn 8, Bravery 3, Troop). Roll 1D6 and on 1–3, you may not choose an (Outwit) Conflict.',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    "Electrical charge leaps from Davros' outstretched arm.",
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (-1 if Danger 12+): 0–2: Davros attacks – see Conflict; 3–5: Captured (9); 6+: Taken to Dalek Hatching Tanks (Lair – Captured 9). If Captured, add +1 Danger and roll for a Goal as he cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 9 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to outwit Davros and escape. If the Doctor is here alone, he may add Science as part of the debate. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Enhance Dalek Race',
            vp: 6,
            type: 'Experiments',
            description:
                'Davros is attempting to create new Dalek mutations to once more make them the supreme beings in the universe. If Danger 16+, Daleks are +1 to all Qualities.',
            options: [
                {
                    name: 'Destroy Hatching Tanks',
                    description:
                        'Roll 11+ on a Find Help Action to gain explosives, then make a Prevent Action (add Engineer) at the Hatching Tanks (Lair). Add +1 Danger and encounter Davros if you fail.',
                },
                {
                    name: 'Introduce Genetic Flaw',
                    description:
                        'Move to Hatching Tanks (Lair), then roll 9+ on a Research (Science) Action to analyse Dalek genetic material. Then make a Prevent Action (add Science). Add +1 Danger and encounter Davros if you fail.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Destroy Reality',
            vp: 9,
            type: 'Apocalypse',
            description:
                'Davros is about to commit the ultimate genocide – the destruction of reality! People, planets and stars are to become dust. If you do not Defeat Davros, the game is over.',
            options: [
                {
                    name: 'Reverse Reality Bomb',
                    description:
                        'Make a Brains 15 roll (Time Lords only) to research the theory. Then take a Prevent Action (add Science) at Lair or where you can Research (Science). If you fail, discard any Character and add +1 Danger.',
                },
                {
                    name: 'Sabotage Emitter Node',
                    description:
                        'Sneak aboard a Dalek Saucer (see E002 Lair) with a Stealth 9 roll, encountering Daleks if you fail. Once aboard, take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Daleks.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Siphon Artron Energy',
            vp: 6,
            type: 'Capture',
            description:
                'Davros wants to siphon regeneration energy from a Time Lord — preferably the Doctor! Each Turn a Time Lord remains Captured, add +1 Danger. Danger cannot exceed 19 unless a Time Lord is Captured. Add +1 to Surrender options. If you are Captured and lose the Adventure, the game is over.',
            options: [
                {
                    name: 'Contaminate Energy Supply',
                    description:
                        'You must have the Doctor Captured and then make a Prevent Action (add Bravery). If you fail, lose 1 Luck and add +1 Danger.',
                },
                {
                    name: 'Reverse Energy Flow',
                    description:
                        'Take a Prevent Action (add Science) at either the Hatching Tanks (Lair) or where you have previously made a Rescue Action. Add +1 Danger and to Dalek/Davros Qualities if you fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Colony Sarff',
            description:
                'Mysterious alien servant. Sarff is Brains 3, Brawn 4, Bravery 3 (Minion). Choose to Evade (Running 9 or Stealth 9), Surrender (Captured 8) or start a (Trap) or (Outwit) Conflict. Sarff will be with Davros in future encounters in this Adventure.',
        },
        {
            roll: '3-4',
            name: 'Tactical Genius',
            description:
                'Davros is a superb strategist and can plan for all eventualities. Choose to add +2 Danger or lose 2 Luck or discard 2 Idea cards.',
        },
        {
            roll: '5-6',
            name: 'Hostages',
            description:
                'If you have any Captured Characters then roll 1D6 and see the Capture Incident: 1–3: Interrogated; 4–6: Marked for Execution.',
        },
    ],
    lair: {
        name: 'Dalek Hatching Tanks',
        tags: ['Location', 'Move 9'],
        description:
            'Eerie blue and red lighting illuminates tanks of horrific mutated creatures that pulse with an audible electronic heartbeat. Add +1 Danger or +2 Danger if Experiments Goal (either once per Adventure only). Gain +1 Knowledge (once only). You can sabotage the Hatching Tanks with a Science 10 roll as an Action — if successful add +2 to Prevent Actions (+3 if Goal is Experiments). If you fail, encounter Davros. Encounter (D6): 1–2: Encounter Davros and Daleks; 3: Dalek Mutant Attack (Brawn 2, Creature); 4: No event; 5–6: Make Science 9 roll to gain +1 Knowledge.',
    },
}

const E016: Enemy = {
    id: 16,
    tag: 'E016',
    title: 'Meralda',
    description:
        'Dr Elizabeth Meralda is a beautiful but totally cold and ruthless genetic scientist who will stop at nothing in completing her terrifying experiments to create new and enhanced life-forms.',
    special:
        'Meralda will have reached her Goal if Danger total is 16 rather than 20.',
    stats: ['+0 Danger', 'Scheme 4', 'Villain'],
    encounter: {
        description:
            'Meralda is Brains 4, Brawn 2, Bravery 4 (Leader) and with 1D3-1 enhanced Ogrons (each Brains 1, Brawn 4, Bravery 2, Minion, Troop).',
        table: [
            {
                name: 'Conflict',
                description:
                    'Not possible if Meralda alone. If with Ogrons and Danger is 8 or less, she starts a (Capture) Conflict; if Danger 9+, Meralda starts an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Meralda alone): 1–2: Meralda starts an (Attack) Conflict; 3–5: Captured (8); 6+: Captured (9) and taken to laboratory (Lair). Add +1 Danger and roll 1D6 – on result of 3+, roll for Goal as she cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Automatically successful if Meralda alone. If she is with Ogrons, make either a Running 9 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way out of trouble. If you fail, choose to Surrender or start a different Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Create Slave Race',
            vp: 5,
            type: 'Experiments/Profit',
            description:
                'Meralda is trying to genetically engineer a species that can then be sold as a slave race. After each Enemy Action roll, add extra +1 Danger if a Plotting result.',
            options: [
                {
                    name: 'Rescue and Release Specimens',
                    description:
                        "Make a successful Rescue (9) Action at Meralda's Genetics Laboratory (Lair), then make a successful Prevent Action (add Science). If you fail, add +1 Danger and encounter Meralda.",
                },
                {
                    name: 'Convince Meralda of Moral Rights',
                    description:
                        'Have an encounter with Meralda and win an (Outwit) Conflict (add Diplomacy). If you fail, add +1 Danger and become Captured (8).',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Atavistic Mutations',
            vp: 5,
            type: 'Experiments',
            description:
                'Meralda has been conducting experiments on the local wildlife to make them larger and more aggressive. All Creatures are +1 Brawn.',
            options: [
                {
                    name: 'Capture Specimens',
                    description:
                        'Make a successful (Capture) Conflict against a Mutation (see Lair encounter) in 3 random Locations. If you fail a Conflict roll, select a Character to be killed.',
                },
                {
                    name: 'Release Serum Counter-agent',
                    description:
                        'Make a Science 10 roll to research properties. Then take a Prevent Action (add Science) at any Exterior Location. If you fail, add +1 Danger.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Hunt Failed Prototype',
            vp: 4,
            type: 'Capture',
            description:
                'Meralda is attempting to capture an experimental prototype creature that has escaped from her laboratories. Find the fugitive by making an Aware 9 roll at a Location (only one roll per Location). Roll 1D6 for each Quality of fugitive (Running, Stealth). Add +2 to Enemy Action rolls when with fugitive.',
            options: [
                {
                    name: 'Reverse Engineer Mutation',
                    description:
                        'Get a Breakthrough result in a Research (Science) Action. Gain +1 VP if you succeed.',
                },
                {
                    name: 'Escape with Prototype',
                    description:
                        'Return to the TARDIS. You may not Surrender in Encounters with Meralda.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Ogrons',
            description:
                'You encounter 1D3+1 enhanced Ogrons (each Brains 1, Brawn 4, Bravery 2, Minion). See Encounter options above.',
        },
        {
            roll: '3-4',
            name: 'Parasitic Control',
            description:
                'Roll 1D6 for each Ally. On a result of 1, the Ally is controlled by a mind parasite developed by Meralda. Discard Ally and choose to add +2 Danger or all Characters with Ally are Captured (8).',
        },
        {
            roll: '5-6',
            name: 'Experimental Subject',
            description:
                'If you have a Captured Character, Meralda uses them as a test subject. Select Character to be killed unless you spend Luck equal to their Bravery.',
        },
    ],
    lair: {
        name: 'Genetics Laboratory',
        tags: ['Location', 'Move 9'],
        description:
            'Dim, eerie lighting does not quite hide the failed experiments that line the walls and the disgusting things that bubble in jars. Add +1 Danger or +2 Danger if Experiments Goal (either only once per Adventure). Gain +1 Knowledge (once only). You can sabotage the laboratory with a Science 10 roll as an Action — if successful add +2 to Prevent Actions (+3 if Goal is Experiments). If you fail, encounter Meralda. Encounter (D6): 1–2: Encounter Meralda; 3: Mutation Attacks (Brawn 3, Creature); 4: None; 5–6: Make Science 9 roll to gain +1 Knowledge or +1 to a Prevent action.',
    },
}

const E017: Enemy = {
    id: 17,
    tag: 'E017',
    title: 'Autons',
    description:
        'The Autons are plastic mannequins animated by the Nestene Consciousness. The Consciousness is a shapeless intelligence with an affinity for plastic, conquering planets to devour their chemicals and resources.',
    special: null,
    stats: ['+1 Danger', 'Scheme 4', 'Chameleon'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 9–15, +2 if Danger 16+) for number of Autons encountered (each Brains 0, Brawn 5, Bravery 4, Troop).',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Auton wrists drop away to reveal deadly energy weapons.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Doctor here): 1–2: The Autons attack – see Conflict; 3–4: Captured (8); 5–6+: Captured (9) and taken to the Nestene (Lair).',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 7 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Auton Invasion',
            vp: 6,
            type: 'Invasion',
            description:
                'The Nestene plan to invade and turn the planet into a new base. If Danger 16+, add +2 to number of Autons encountered. If on Earth and you do not Defeat Autons, -1 to the Setback roll.',
            options: [
                {
                    name: 'Destroy Nestene Transmitter',
                    description:
                        'Roll a random Location for transmitter. If at transmitter Location, take a Prevent Action (add Engineer). If you fail, add +1 Danger and have an Auton encounter.',
                },
                {
                    name: 'Create Warp Shunt',
                    description:
                        'You must Move to any 2 Locations and make a Brains 12 roll (add Computers and Engineer) at each Location. Add +1 Danger each time you fail a roll.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Release Chemical Pollution',
            vp: 6,
            type: 'Apocalypse',
            description:
                'The Nestene intend to release highly toxic micro-plastic pollution into the atmosphere or water supply. If Danger 16+, add +1 Danger at the end of each Turn.',
            options: [
                {
                    name: 'Prevent Release of Toxin',
                    description:
                        'You must sneak into Nestene Lair with a Stealth 9 roll, encountering Autons if you fail. Once in Lair, take a Prevent Action (add Science). If you fail, add +1 Danger and encounter Nestene.',
                },
                {
                    name: 'Create Dispersing Counter-agent',
                    description:
                        'Make a Science 10 roll as an Action to research properties. Then take a Prevent Action (add Science) at a Water Location or where you can Research (Science). If you fail, add +1 Danger.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Infiltrate with Replicas',
            vp: 5,
            type: 'Invasion',
            description:
                'The Nestene plan replacing key personnel with facsimile Autons prior to invasion. Roll new Goal if Wilderness. If you have Infiltration or Auton Replica events, also add +1 Danger.',
            options: [
                {
                    name: 'Expose Replicas',
                    description:
                        'Roll for a random Location and automatically encounter an Auton Replica there (Enemy event). Then take a Prevent Action (add Diplomacy) at any Location where you can Find Help. If you fail, add +1 Danger.',
                },
                {
                    name: 'Build UHF Transmitter',
                    description:
                        'Make an Engineer 9 roll to build transmitter then go to Nestene Lair and start an (Attack) Conflict with Nestene and 1D3+1 Autons (Nestene is Brawn 2, each Auton is Brawn 1). Defeat Nestene if you succeed.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1',
            name: 'Infiltration',
            description:
                'Auton facsimiles have infiltrated the authorities – add +1 Danger and you may not choose Find Help Actions.',
        },
        {
            roll: '2-3',
            name: 'Auton Replica',
            description:
                'You encounter a perfect Auton facsimile (Brains 2, Brawn 5, Bravery 4, Troop). Roll 1D6 for each Human Character here — on a roll of 1, they are revealed to be the replica (a Companion revealed to be a replica is then Captured 9 at the Nestene Lair). See Encounter options above.',
        },
        {
            roll: '4-5',
            name: 'Plastic Danger',
            description:
                'An innocent-looking everyday plastic object has been animated by the Nestene — roll 1D6 for a random group: 1–3: Captured (8); 4–6: Attacked (Brawn 3).',
        },
        {
            roll: '6',
            name: 'Nestene Energy Unit',
            description:
                'You have found a small, glowing receptacle of Nestene Consciousness. Add +1 to Prevent Actions but if Captured, lose unit, add +2 Danger and the Nestene is +1 to all Qualities.',
        },
    ],
    lair: {
        name: 'The Nestene',
        tags: ['Location', 'Move 9'],
        description:
            'You have found or been brought to the Nestene (Brains 5, Brawn 7, Bravery 4, Leader), a writhing, bubbling mass of living plastic. Gain +1 Knowledge and add +1 Danger (once only). Add +1 to Rescue Actions here. If Captured, an Enemy Encounter means you encounter the Nestene (roll below). If not Captured, you can sabotage the Lair with a Science 10 roll as an Action — if successful, add +2 to Prevent Actions. If you fail, add +1 Danger and encounter the Nestene. Encounter Nestene (Diplomacy roll): 2–6: Attacked by Nestene and 1D3 Autons (each Brawn 5); 7–9: Add +1 Danger and reveal Goal; 10–11: Start (Outwit) Conflict, Defeating Nestene if successful; 12+: Invoke Shadow Proclamation and Defeat Nestene (+1 VP).',
    },
}

const E018: Enemy = {
    id: 18,
    tag: 'E018',
    title: 'Rutan Scout',
    description:
        'The Rutans are a ruthless amphibian species that resemble giant jellyfish. The Rutans are harsh military conquerors and constantly at war with the Sontarans. You have encountered a lone Rutan scout.',
    special:
        'The Rutan scout will have reached its Goal if Danger total is 15.',
    stats: ['+1 Danger', 'Scheme 4', 'Chameleon', 'Military'],
    encounter: {
        description:
            'The Rutan is Brains 4, Brawn 5, Bravery 3, Leader (+1 Qualities at Water Locations).',
        table: [
            {
                name: 'Conflict (Attack)',
                description: 'Electrical discharge crackles about the Rutan.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Danger 8 or less): 1–4: Rutan starts an (Attack) Conflict; 5+: Taken to the Rutan Scout Craft (Lair – Captured 8). Add +1 Danger and roll 1D6 – on a 4+, reveal a Goal as the Rutan cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 7 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Rutan and escape. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Evaluate Tactical Position',
            vp: 3,
            type: 'Invasion',
            description:
                'The Rutan is determining the strategic location for possibilities of future invasion. If the Adventure is on Earth, add +1 Danger.',
            options: [
                {
                    name: 'Brinkmanship',
                    description:
                        'Gain 1 Knowledge then win an (Outwit) Conflict against the Rutan. Add +1 Danger and start an (Attack) Conflict if you fail.',
                },
                {
                    name: 'Destroy Homing Beacon',
                    description:
                        'Find Beacon by making an Aware 9 roll at a Location (only one roll per Location). Take a Prevent Action (add Engineer). Add +1 Danger and encounter Rutan if you fail.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Evaluate Species',
            vp: 4,
            type: 'Experiments',
            description:
                'The Rutan is gathering data on the local population to determine their strength and resistance. Add +1 Danger each time a Character is Captured or killed.',
            options: [
                {
                    name: 'Destroy Scout Craft',
                    description:
                        'Find and sneak inside the Rutan Scout Craft (Lair) with a Stealth 9 roll, encountering Rutan if you fail. Once inside, take a Prevent Action (add Engineer). Add +1 Danger and encounter Rutan if you fail.',
                },
                {
                    name: 'Lure Rutan into Trap',
                    description:
                        'Rescue any Captured Characters then win a (Trap) Conflict against the Rutan. Add +1 Danger if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Repair Scout Craft',
            vp: 3,
            type: 'Quest',
            description:
                'The Rutan is trying to repair its ship which was damaged when it crashed here. Add +1 Danger if a Character with Engineer is Captured.',
            options: [
                {
                    name: 'Destroy Scout Craft',
                    description:
                        'Find and sneak inside the Rutan Scout Craft (Lair) with a Stealth 9 roll, encountering Rutan if you fail. Once inside, take a Prevent Action (add Engineer). Add +1 Danger and encounter Rutan if you fail.',
                },
                {
                    name: 'Convince Rutan to Leave Peacefully',
                    description:
                        'Have a Rutan encounter and take a Prevent Action (add +2 if Brawn 10+). If you fail, add +1 Danger and become Captured (8).',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Chameleon Factor',
            description:
                'Rutans have the ability to assume other forms. Roll 1D6 for each native or Human Character here — on a roll of 1, they are revealed to be the Rutan in a shimmering green glow (a Companion revealed to be the Rutan is then Captured (9) at the Rutan Scout Craft). See Encounter options above.',
        },
        {
            roll: '3-4',
            name: 'Autopsy',
            description:
                'The Rutan has attacked — discard a native Ally. Add +1 to Rutan Brains and +1 Danger if Experiments Goal (both cumulative).',
        },
        {
            roll: '5-6',
            name: 'Atmospheric Control',
            description:
                'Rutan ships can manipulate weather conditions to produce fog. All Move Actions have a -1 penalty if moving to or from an Exterior Location (-2 if both Locations are Exterior).',
        },
    ],
    lair: {
        name: 'Rutan Scout Craft',
        tags: ['Location', 'Move 10'],
        description:
            "The small but powerful craft has advanced cloaking technology to hide it from lesser species. Gain +1 Knowledge (if not a captive) and +1 Danger (both once only). Roll 1D6 – 1–3: Encounter Rutan; 4–6: Enemy event. Gain +1 to Rescue Actions here. Add +1 to Enemy Action rolls whilst here. If you make a Stealth 8 roll and then an Engineer 11 roll, you can scramble the craft's systems to reduce Danger by -2 and the Rutan has -1 to all Qualities. If you fail either roll, add +1 Danger and start an (Attack) Conflict with the Rutan.",
    },
}

const E019: Enemy = {
    id: 19,
    tag: 'E019',
    title: 'The Jassra',
    description:
        'The Jassra) is an elemental force created by an ancient civilisation that wanted to distil all their negative emotions and banish them from their world. Unfortunately, their hatred and fear were so strong that the emotions developed into a bestial, evil creature with a face that is contorted in abject fear. The Jassra exists only to hurt and destroy.',
    special: null,
    stats: ['+1 Danger', 'Scheme 4', 'Entity', 'Gothic'],
    encounter: {
        description:
            'The Jassra is Brains 6, Brawn 6, Bravery 6, Leader. If Danger 12+, it is with 1D3 Ghouls (see Enemy events).',
        table: [
            {
                name: 'Conflict',
                description:
                    'The Jassra gives a cruel laugh. If Danger 9 or less, the Jassra attempts a (Mind Control) Conflict but if Danger 10+, it instead starts a (Terrify) Conflict. Roll 1D6 for each Human Ally with Bravery 1 - on 1-3 they are so terrified that they cannot add their Bravery to Conflict total.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way past the Jassra. If you fail, start a different Conflict.',
            },
            {
                name: 'Evade',
                description:
                    'Make a Running 7 roll to escape (Running 9 if Ghouls present), but the Jassra has mesmeric power – any Human Characters with Bravery 1 or less cannot add Running to the roll. If you fail, start a Conflict with -1 to roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Escape Prison',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Jassra is trying to escape from dimensional containment. If Danger 16+, the Jassra gains +1 to all Qualities.',
            options: [
                {
                    name: 'Rebuild the Prison',
                    description:
                        'Make a Science 10 roll (add Aware) to research dimensional co-ordinates. Then take a Prevent Action (add Science) at a random Location. Add +1 Danger if you fail.',
                },
                {
                    name: 'Banishment',
                    description:
                        'Gain 4 Knowledge (2 Knowledge if you have 2 History) then win an (Outwit) Conflict with the Jassra.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Manufacture Plague',
            vp: 6,
            type: 'Apocalypse',
            description:
                'The Jassra intends to release a deadly virus that will wipe out the native population. If Danger 16+, roll 1D6 for each Human Ally - on a roll of 1 the Ally is killed.',
            options: [
                {
                    name: 'Capture Plague Carriers',
                    description:
                        'Move to 3 random Locations and in each make a Brawn 12 roll (add Stealth). Encounter Ghouls (Enemy Events) each time you fail a roll.',
                },
                {
                    name: 'Develop Cure',
                    description:
                        'Make a Brains 15 roll (add Medicine) to analyse virus then take a Prevent Action (add Medicine) at any Location where you can Research (Medicine).',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Wake the Devil',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Jassra is attempting to resurrect itself from a dimensional Portal (random Location). If Danger 16+, the Jassra gains +1 to all Qualities.',
            options: [
                {
                    name: 'Study Legends',
                    description:
                        'Make History 10 roll (add Aware) to study, then take a Prevent Action (add History) at Portal.',
                },
                {
                    name: 'Destroy Portal',
                    description:
                        'Take Prevent Action (add Science) at Portal. If you fail, +1 Danger and encounter the Jassra.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-3',
            name: 'Jassran Ghouls',
            description:
                'Horrific servants of the Jassra with huge white eyes, grey skin, sharp talons and dripping fangs. The Ghouls prey on human flesh. If they kill their prey, the bacteria carried by the Ghouls cause their victims to become Ghouls themselves. Roll 1D3 for the number of Ghouls encountered (add +1 if Danger 8+), each Brains 0, Brawn 4, Bravery 4 (Creature, Minion). You must Evade (Running 9) or start an (Attack) Conflict. If you lose, roll 1D6 for each Human Character – on a roll of 1, they contract the disease and become a Ghoul (add +1 to number of Ghouls in subsequent encounters). If you do not Defeat the Jassra, they are killed (lose VP if a Companion).',
        },
        {
            roll: '4-5',
            name: 'Burning Rune',
            description:
                'You discover a psychic burning rune projected by the Jassra. If you make a Brains 15 roll and have 2 History then gain +1 Knowledge. If you fail, start a (Mind Control) Conflict against the Jassra.',
        },
        {
            roll: '6',
            name: 'Ceremony of Power',
            description:
                'Choose that the Jassra and all Ghouls are +1 to Qualities or add +3 to next Enemy Action roll.',
        },
    ],
    lair: {
        name: 'Ceremonial Cavern',
        tags: ['Dark', 'Move 9'],
        description:
            'The damp underground cavern has a stone altar and a huge pentagram drawn on the floor. Gain +1 Knowledge (unless here as captives). Roll 1D6 and on a 1-3 (1-4 if Danger 12+) immediately encounter the Jassra (+1 to number of Ghouls). Inside the cavern, add +1 to Rescue Actions, -1 to Stealth rolls, +1 to Enemy Action rolls. The Jassra is +1 to all Qualities here. Encounter (Stealth): 2-8: Encounter the Jassra; 9: Discover runes – if you make a Brain 15 roll, gain +2 Knowledge or reveal Goal; 10+: Discover Jassran artefact - if Goal revealed take an immediate Prevent Action with +2 to roll.',
    },
}

const E020: Enemy = {
    id: 20,
    tag: 'E020',
    title: 'The Silence',
    description:
        'The Silence are a sinister race with the ability to discharge electricity. They also have telepathic powers that enable them to edit the memory of anyone who sees them. They could already be in control...',
    special: null,
    stats: ['+2 Danger', 'Scheme 6', 'Chameleon', 'Gothic'],
    encounter: {
        description:
            'Roll 1D3 for the number of Silence you encounter – each Brains 3, Brawn 6, Bravery 3 (Troop). If you make an Aware 8 roll, choose from the options below normally. If you fail, roll 1D6 (add +2 if Danger 15+): 1-5: Encounter ends - either add +1 Danger or lose 1 Luck point; 6+: Start an (Attack) Conflict. After an Enemy encounter (except at a Lair), unless you have 3 Aware and 12 Brains, you forget the Silence. The Adventure returns to Discover Phase as if Enemy is yet to be revealed - lose 2 Knowledge. If you remember the Silence, you may try an Engineer 10 roll as an Action to make a nano-recorder that allows Characters to automatically remember the Silence.',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Silence raise clawed hands that discharge electricity.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Doctor here): 1-2: The Silence start an (Attack) Conflict; 3-4: Captured (8); 5-6+: Captured (9) and taken to Silence Ship (Lair).',
            },
            {
                name: 'Evade',
                description:
                    'Make a Running 8 roll to escape. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Silence and escape. If you fail, choose another option with -2 to the roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Accelerate Technology',
            vp: 5,
            type: 'Meddling',
            description:
                'The Silence are attempting to influence technological development for their own purpose. If on Earth and you do not Defeat the Silence, -2 to the Setback roll.',
            options: [
                {
                    name: 'Destroy Silence Ship',
                    description:
                        'Sneak inside the Silence Ship (Lair) with a Stealth 9 roll, encountering Silence if you fail. Once inside, take a Prevent Action (add Computers). If you fail, add +1 Danger and encounter Silence.',
                },
                {
                    name: 'Counter Meddling',
                    description:
                        'Move to any 2 Locations where you can Research and make a Brains 15 roll (add Engineer and History) at each Location. Add +1 Danger each time you fail a roll.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Destroy the TARDIS',
            vp: 5,
            type: 'Capture',
            description:
                'The Silence perceive the TARDIS as a threat and wish to destroy it. If you do not Defeat the Silence, the TARDIS is destroyed and the game is over. You must return to the TARDIS and then may either:',
            options: [
                {
                    name: 'Increase TARDIS Force-field',
                    description:
                        'Add +1 Danger. Take a Prevent Action (add Engineer and TARDIS). Add +1 Danger or lose 1 Defence if you fail.',
                },
                {
                    name: 'Lure Silence into Trap',
                    description:
                        'Add +2 Danger. Win an (Outwit) Conflict (add TARDIS) against the Silence. Gain 6 VP if you succeed. Discard a Character if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Infiltrate Society',
            vp: 6,
            type: 'Invasion',
            description:
                'The Silence have influenced key personnel so that they are pawns prior to invasion. Roll new Goal if Wilderness. If you have Infiltration as an Enemy event, also add +1 Danger.',
            options: [
                {
                    name: 'Expose the Silence',
                    description:
                        'Win an (Outwit) Conflict against the Silence. Then take a Prevent Action (add Diplomacy) at any Location where you can Find Help. If you fail, add +1 Danger.',
                },
                {
                    name: 'Transmit Warning Message',
                    description:
                        'Make an Engineer 9 roll to build transmitter, then have a Silence encounter. After the encounter, take a Prevent Action (add Computers). If you fail, add +1 Danger and encounter Silence.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Infiltration',
            description:
                'The Silence has infiltrated the highest authorities – add +1 Danger and you may not choose a Find Help Action.',
        },
        {
            roll: '3-4',
            name: 'Silence Nest',
            description:
                'You encounter a group of inert Silence. Unless you make a Stealth 9 roll, have a Silence encounter, adding +2 to number encountered, but each is Brawn 5.',
        },
        {
            roll: '5-6',
            name: 'Keeping Count',
            description:
                'You discover marks on your hand. If you make an Aware 8 roll you realise you have encountered the Silence. Gain Aware in Silence encounters.',
        },
    ],
    lair: {
        name: 'Silence Ship',
        tags: ['Move 9'],
        description:
            "Only sterile, white lights pierce the darkness. Gain +1 Knowledge and add +1 Danger (once only). Add +1 to Rescue Actions and +2 to Seek Information (Stealth or Computers) here. Roll 1D6 and on 1-3 (1-4 if Danger 10+) have immediate Silence encounter. In the ship, you may also attempt to sabotage the central console with a successful Engineer 10 or Computers 9 roll. If you fail, encounter Silence immediately. If successful, the Silence's communications have been disabled - subtract 1 from the number of Silence encountered in all future encounters and gain +1 to all Conflict rolls.",
    },
}

const E021: Enemy = {
    id: 21,
    tag: 'E021',
    title: 'The Graske',
    description:
        'The Graske is a small and ugly alien with greedy yellow eyes and sharp fangs. Usually very sly and tricky, a Graske can exert some telepathic control over its victims and is often used by other races.',
    special: 'The Graske will complete its Goal when Danger reaches 15.',
    stats: ['+0 Danger', 'Scheme 3', 'Criminal', 'Villain'],
    encounter: {
        description: 'A Graske is Brains 3, Brawn 2, Bravery 2 (Minion).',
        table: [
            {
                name: 'Conflict',
                description:
                    'If Danger less than 8 the Graske tries to mesmerise you to start a (Mind Control) Conflict (gaining +2 Brains for the Conflict); if Danger 9+, the Graske produces a stubby blaster (+2 Brawn) and starts an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6: 1-2: The Graske attacks – see Conflict (Mind Control or Attack); 3-4: Captured (8); 5-6+: Captured (10) and imprisoned in a Stasis Chamber (Lair).',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Graske and escape. If you fail, choose another option with -2 to the roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Steal Precious Artefact',
            vp: 4,
            type: 'Profit',
            description:
                'The Graske is attempting to steal a valuable treasure. Add an additional +1 Danger on a Plotting result of an Enemy Action roll.',
            options: [
                {
                    name: 'Trap the Graske',
                    description:
                        'Gain 1 Knowledge then win a (Capture) Conflict against the Graske. Even if you succeed however, roll 1D6 and on a 1-2, the Graske escapes and you must have another encounter with it.',
                },
                {
                    name: 'Outwit the Graske',
                    description:
                        'Gain 1 Knowledge then win an (Outwit) Conflict against the Graske. Even if you succeed however, roll 1D6 and on a 1, the Graske escapes, add +1 Danger and you must have another encounter with it.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Slavery',
            vp: 5,
            type: 'Capture',
            description:
                'The Graske is kidnapping the local population and intending to sell them into slavery. Add +1 Danger each time a Character is captured (+2 if an Icon).',
            options: [
                {
                    name: 'Release Slaves',
                    description:
                        'Roll 1D6 for Location of slaves: 1-4: Location in Adventure with highest Move number; 5-6: Graske Stasis Chamber. Once there, take a Rescue (10) Action (add Stealth). If fail, add +1 Danger and encounter Graske.',
                },
                {
                    name: 'Organise Slave Revolt',
                    description:
                        'Move to Graske Stasis Chamber (Lair) and take a Rescue (9) Action (add Stealth). Encounter the Graske if you fail. Then take a Prevent Action (add Diplomacy). If you fail, add +1 Danger.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Replace Population',
            vp: 5,
            type: 'Capture',
            description:
                'The Graske plan replacing personnel with Changelings prior to the invasion of another race. Roll a new Goal if Wilderness. If you have a Changeling Enemy event, also add +1 Danger.',
            options: [
                {
                    name: 'Expose Changelings',
                    description:
                        'Move to a Location where you can have a Character event as an Encounter, then take a Prevent Action (add Diplomacy). If you fail, add +1 Danger.',
                },
                {
                    name: 'Revive Stasis Pods',
                    description:
                        'Move to Graske Stasis Chamber (Lair) and activate 3 Stasis Pods. If you fail a Computers roll, when you roll for an Encounter in the Lair, take a -1 penalty to the Stealth roll for each pod already opened.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Groske',
            description:
                'A small group of blue Groske are trying to apprehend the Graske – gain 1D3+1 Groske Allies – each Brains 2, Brawn 1, Bravery 2 (Stealth). Gain +1 Knowledge.',
        },
        {
            roll: '3-4',
            name: 'Minion',
            description:
                'You discover the Graske is serving another alien. In your next Adventure, add +1 Danger and +1 Scheme (+2 to each if you do not Defeat the Graske).',
        },
        {
            roll: '5',
            name: 'Changeling',
            description:
                'One of your Human Allies is a Graske Changeling – discard Ally and roll 1D6 – on a 1-3 you encounter the Graske with -1 to any Conflict roll.',
        },
        {
            roll: '6',
            name: 'Graske Determination',
            description: "Add +1 to all the Graske's Qualities (cumulative).",
        },
    ],
    lair: {
        name: 'Graske Stasis Chamber',
        tags: ['Move 9'],
        description:
            'The vast chamber is where the Graske keeps all its captives in large stasis pods. Gain +1 Knowledge and add +1 Danger (once only). Add +1 to Rescue Actions here. Characters must make separate Escape Actions and may not be chosen if total Qualities is less than 6. If not Captured, you can open the pods with a Computers 10 roll (add Medicine) as an Action. If successful, have a Character event (with +3 to a Charm or Diplomacy roll). If you fail, add +1 Danger and encounter the Graske. Encounter (Stealth roll): 2-4: Attacked by escaped Slitheen (Brawn 6) unless Evade with Running 9; 5-6: Encounter Graske; 7: Enemy event; 8-9: None; 10: Gain +1 Knowledge; 11+: Gain +2 Knowledge or reveal Goal or gain +1 to Prevent Actions.',
    },
}

const E022: Enemy = {
    id: 22,
    tag: 'E022',
    title: 'The Fae',
    description:
        'The Fae are ancient creatures from the dawn of time that look like glowing faeries with gossamer wings. But if confronted by any interfering adults, the real demonic pixies soon become apparent.',
    special:
        'The Fae are only encountered on Earth – roll for a new Enemy if Adventure not on Earth. The Fae will reach their Goal when Danger reaches 16.',
    stats: ['+0 Danger', 'Scheme 4', 'Earth', 'Gothic'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 6-11; +2 if Danger 12+; +1 if Night) for number of Fae encountered each Brains 3, Brawn 3, Bravery 3 (Troop).',
        table: [
            {
                name: 'Conflict',
                description:
                    'The Fae fly towards you with their outstretched claws. If Danger is 8 or less, start a (Terrify) Conflict. If Danger is 9+, instead start an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6: 1-3: The Fae laugh gleefully and swoop towards you – start a Conflict (see above); 4-6: Captured (9) and taken to the Faery Ring (Lair).',
            },
            {
                name: 'Evade',
                description:
                    'The Fae can fly swiftly - make a Running 10 roll to escape. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way past – add History to roll. If you fail, choose another option with -1 to roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Fulfil Prophecy',
            vp: 5,
            type: 'Capture',
            description:
                'The Fae are attempting to replace a chosen child with a changeling and fulfil an ancient legend. Add +1 Danger if you have any Legend or Runes Plot event.',
            options: [
                {
                    name: 'Trick the Fae',
                    description:
                        'Gain 3 Knowledge (1 Knowledge if you have 2 History) then win an (Outwit) Conflict against the Fae. If you fail, add an extra +1 Danger and are Captured (9) at the Faery Ring (Lair).',
                },
                {
                    name: 'Rescue Chosen One',
                    description:
                        'You must Move to the Faery Ring (Lair) and make a Rescue (9) Action, encountering the Fae if you fail. You must then take a Prevent Action (add Aware) there.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Escape Faery Ring',
            vp: 5,
            type: 'Resurrection',
            description:
                'The Fae are attempting to release more of their kind from another dimension. Add +1 Danger if you have any Legend Plot event. If Danger 12+, add +1 to number of Fae encountered.',
            options: [
                {
                    name: 'Seal Dimensional Gate',
                    description:
                        'Make a Science 10 roll (add Aware) to research the dimensional co-ordinates. Then take a Prevent Action (add Aware) at the Faery Ring (Lair). Add +1 Danger if you fail.',
                },
                {
                    name: 'Trap the Fae',
                    description:
                        'You must encounter the Fae at the Faery Ring (Lair) and have a successful (Capture) Conflict. If you fail, add +1 Danger and are Captured (9).',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Wake Fae Queen',
            vp: 5,
            type: 'Resurrection',
            description:
                'The Fae are attempting to revive an ancient Fae Queen from hibernation. Add +1 Danger if you have any Legend or Runes Plot event. If Danger 12+, add +1 to Fae Qualities.',
            options: [
                {
                    name: 'Invoke Counter-spell',
                    description:
                        'Make a History 10 roll (add Aware) to study the legends at any Location where you can Research (History). Then win an (Outwit) Conflict against the Fae.',
                },
                {
                    name: 'Destroy Portal',
                    description:
                        'Take a Prevent Action (add Aware or History) at the Faery Ring (Lair). If you fail, add +1 Danger and encounter the Fae.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1',
            name: 'Changeling',
            description:
                'A Human Ally is a Fae Changeling – discard Ally and roll 1D6 – on a 1-3 you encounter the Fae with -1 to any Conflict roll. Add +1 Danger if Capture Goal.',
        },
        {
            roll: '2-3',
            name: 'Chosen One',
            description:
                'Taken by the Fae and held at the Faery Ring (Lair). Must be Rescued (9) before the Fae can be Defeated. Add +1 Danger if Capture Goal. If rescued, the child joins you as an Ally (Brains 1, Brawn 0, Bravery 1, Aware 2, Stealth).',
        },
        {
            roll: '4-5',
            name: 'Bad Weather',
            description:
                'The Fae can control the elements - Human Characters at Exterior Locations must make a Brawn 9 roll (add Bravery) or take no Action next Turn.',
        },
        {
            roll: '6',
            name: 'Secret Ceremony',
            description:
                'The Fae are +1 to all Qualities next Turn (2 Turns if Night).',
        },
    ],
    lair: {
        name: 'Faery Ring',
        tags: ['Exterior', 'Move 9'],
        description:
            'The Fae often use Faery rings to build their powers or to cross the dimensions. Gain +1 Knowledge and add +1 Danger (once only). Add +1 to Rescue and Research (History) Actions here and +1 to Prevent Actions if Night. If you encounter the Fae here, add +2 to number and you may not choose to Surrender. Encounter (Stealth roll): 2-5: Encounter Fae; 6: Enemy event; 7: The Ring is silent – no event; 8: Character event; 9-10: Discover Fae runes – gain +1 Knowledge or reveal Goal; 11+: Observe secret Fae ritual - gain +2 Knowledge or +2 to Prevent Actions.',
    },
}

const E023: Enemy = {
    id: 23,
    tag: 'E023',
    title: 'Sea Devils',
    description:
        "Sea Devils are marine reptiles that were, along with their Silurian 'cousins', once the rulers of Earth millions of years ago. They have now awakened from hibernation and wish to reclaim their planet.",
    special:
        'Sea Devils can only be encountered on Earth (roll again if otherwise).',
    stats: ['+1 Danger', 'Scheme 4', 'Earth', 'Military'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger 12+) for the number of Sea Devils encountered, each Brains 1, Brawn 5, Bravery 2 (Troop). Roll a further 1D6 (+1 if at a Lair, +1 if Danger 12+) - if result is 5+, the Sea Devils are led by a Sea Devil Elder (Brains 3, Brawn 5, Bravery 3, Leader). Sea Devils are +1 Qualities at Water Locations.',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Sea Devils raise their heat guns and advance towards you...',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Danger 10 or less, +1 if a Sea Devil Elder here): 1-2: Sea Devils start an (Attack) Conflict; 3-5: Captured (8); 6+: Taken to the Hibernation Chamber (Lair – Captured 8). Add +1 Danger.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'Confuse the Sea Devils to escape. If you fail, choose to Surrender (-1 to roll) or start (Attack) Conflict.',
            },
            {
                name: 'Broker Peace',
                description:
                    '(Defeat Phase only) Make a Diplomacy 10 roll (-2 penalty if you have had an (Attack) Conflict with the Sea Devils in the Adventure and -1 for each Human Troop with you). If you succeed, you Defeat the Sea Devils and gain an additional 2 VP. If you fail, choose to Evade, Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Destroy Settlement',
            vp: 5,
            type: 'Invasion',
            description:
                'The Sea Devils intend to emerge from the water to destroy a nearby habitation. You must either discard 2 Allies or Move to 3 Locations to warn locals. You may then either Broker Peace (above) or:',
            options: [
                {
                    name: 'Defuse Explosives',
                    description:
                        'Make an Aware 9 roll when you Move to a Location with Move number 4+ to find explosives. If you fail, you must Move to a new Location. If succeed, take a Prevent Action (add Bravery) to defuse explosives.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Awakening',
            vp: 5,
            type: 'Resurrection',
            description:
                'The Sea Devils are slowly waking from hibernation. Enemy Action rolls and number of Sea Devils encountered (min 1) have a -1 modifier. You may either Broker Peace (above) or:',
            options: [
                {
                    name: 'Destroy Reactivation Circuit',
                    description:
                        'Move to the Hibernation Chamber (Lair) and then take a Prevent Action (add Computers). Add +1 Danger and encounter Sea Devils if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Repair Hibernation Controls',
            vp: 5,
            type: 'Resurrection',
            description:
                'The Sea Devils are trying to revive more of their race to retake the Earth. Add +1 Danger if a Character with Engineer is Captured. You may either Broker Peace (above) or:',
            options: [
                {
                    name: 'Seal Hibernation Chamber',
                    description:
                        'Roll 11+ on a Find Help Action to gain explosives, then make a Prevent Action (add Engineer) at the Hibernation Chamber (Lair). Add +1 Danger and encounter Sea Devils if you fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Myrka',
            description:
                'A ferocious underwater creature bred as a devastating, bio-engineered weapon. A random group of Characters must make a Running 7 roll (-2 to roll at a Water Location) to escape. If you fail, choose a Character in the group to be killed.',
        },
        {
            roll: '3-4',
            name: 'Sea Devils Awakened',
            description:
                'More warriors have been revived. Add +1 to the number of Sea Devils encountered (cumulative, max +3).',
        },
        {
            roll: '5-6',
            name: 'Sea Devil Corpse',
            description:
                'You discover the body of a Sea Devil, killed by locals. Add +1 Danger and take a -2 penalty to any Broker Peace option (once only).',
        },
    ],
    lair: {
        name: 'Sea Devil Hibernation Chamber',
        tags: ['Water', 'Move 9'],
        description:
            'A water-filled cavern on the sea bed where the reptiles are being revived after centuries of hibernation. Gain +1 Knowledge (if not a captive) and +1 Danger (both once only). Gain +1 to Rescue Actions here, but -1 to Escape Actions. Add +1 to Enemy Action rolls whilst Characters are here. Add +1 to Stealth rolls. Add +1 to number of Sea Devils encountered. You can try to sabotage the equipment that is waking the Sea Devils from hibernation. If you make an Engineer 9 roll as an Action, the Sea Devils are woken sluggish and -1 to all Qualities for the next 1D3 Turns, gain +1 to Prevent Actions if a Resurrection Goal. In the Defeat Phase, if you have Computers or a Sonic Screwdriver, you may try to sabotage the reactivation chamber. Make an Engineer 10 roll as an Action. If successful, Characters here must have Running or roll 1D6 - if they roll 1-2 they are killed in the explosion (and any Captured Characters in Lair). Sea Devils are Defeated but gain no VP for Adventure.',
    },
}

const E024: Enemy = {
    id: 24,
    tag: 'E024',
    title: 'The Master',
    description:
        'The Master was once your oldest friend, but is now your bitter nemesis and another renegade, exiled from Gallifrey. The Master has forged many nefarious schemes to achieve his goals, both by himself and in twisted alliances with other alien life-forms.',
    special: null,
    stats: ['+3 Danger', 'Scheme 6', 'Time Lord'],
    encounter: {
        description:
            'The Master is Brains 6, Brawn 3, Bravery 4 (Aware, Charm, Computers, Engineer, Running, Science, Stealth, TARDIS, Leader). If a single Human Character encounters the Master, roll 1D6 – on a 1-3, before they can choose an option, the Master attempts to hypnotize them – start a (Mind Control) Conflict. If you roll 4-6, or other Characters encounter the Master, choose from options below:',
        table: [
            {
                name: 'Conflict',
                description:
                    'Roll 1D6 – on a 1-3, the Master has his tissue compression device which adds +3 Brawn. If Danger is 15 or less, the Master attempts a (Capture) Conflict. If Danger is 16+, the Master instead starts an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Danger 12 or less): 1-2: The Master starts an (Attack) Conflict; 3-5: Captured (8); 6+: Captured (9), add +1 Danger and roll a further 1D6 – on a result of 4+, roll for a Goal as the Master cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way out of trouble. If you fail, choose to Surrender or start a different Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Alien Allies',
            vp: 2,
            type: 'Power',
            description:
                'The Master has allied himself with another Enemy - roll on Adventure for a new Enemy, add their Danger, then roll for a Goal. The Master becomes a Minion for that Enemy. When you have an Enemy encounter roll 1D6: 1-2: The Master; 3-4: Enemy (Enemy sheet); 5-6: Enemy with the Master. At the end of each Turn, roll 1D6, add Enemy Danger to current Danger. If result 15+ they decide the Master is expendable and become Enemy for the Adventure. The Master becomes your Ally and you must Prevent Enemy Goal.',
            options: [
                {
                    name: 'Convince the Master',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict against the Master using only the Doctor.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Incite War',
            vp: 6,
            type: 'Power',
            description:
                'The Master is attempting to start a war between opposing sides – be it factions or planets. All Find Help Actions and Diplomacy rolls have a -1 penalty. You must discard an Ally with Diplomacy.',
            options: [
                {
                    name: 'Broker Peace',
                    description:
                        'Move to a Location where you can Find Help and take a Prevent Action (add Diplomacy but with -1 for each Troop with you). If you fail, add +1 Danger.',
                },
                {
                    name: 'Reveal the Master',
                    description:
                        'Move to a Location where you can Find Help and win an (Outwit) Conflict against the Master.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Seek Powerful Artefact',
            vp: 6,
            type: 'Quest',
            description:
                'The Master is attempting to locate a powerful ancient artefact with which he can rule the galaxy. Add +1 Danger and +1VP to Goal if not on Earth.',
            options: [
                {
                    name: 'Create Duplicate to Trick The Master',
                    description:
                        'Make an Engineer 9 roll as an Action to create duplicate. You must then win an (Outwit) Conflict against the Master. If you fail, add an extra +1 Danger and are Captured (8).',
                },
                {
                    name: 'Steal Artefact First',
                    description:
                        'You must Move to the Location with highest Move number (or a Special Location) and make a Stealth 9 roll to steal the artefact. Add +1 Danger and encounter the Master if you fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Clever Alias',
            description:
                'The Master has adopted a new persona to integrate amongst the local population. Add +1 Danger. Add +2 to next Enemy Action roll.',
        },
        {
            roll: '3-4',
            name: 'Ally Hypnotised',
            description:
                "Roll 1D6 for each Ally - on a result of 1, the Ally is controlled by the Master's dominating will. Choose to add +2 Danger or all Characters with this Ally are Captured (8). Discard Ally.",
        },
        {
            roll: '5-6',
            name: 'Ally Killed',
            description:
                'You find the shrunken corpse of one of your Allies – discard an Ally. If you have no Allies, lose 2 Luck.',
        },
    ],
    lair: {
        name: 'TARDIS',
        tags: ['Move 10'],
        description:
            "A more advanced model with chameleon circuit. Add +1 Danger (once). Roll 1D6: 1-4: Encounter the Master (-1 to any Conflict roll); 5-6: Enemy event. You may attempt access with a Brains 12 roll (only Time Lords can contribute but add TARDIS), to gain +2 Knowledge and +1 to Challenge and Rescue Actions here. Add +2 to Enemy Action rolls whilst here. If you fail the roll however, you are caught by the Master's defence system – Captured (9). Inside the TARDIS, you may attempt sabotage with an Engineer 10 roll (add TARDIS) to gain +2 to next Prevent Action.",
    },
}

const E025: Enemy = {
    id: 25,
    tag: 'E025',
    title: 'The Great Intelligence',
    description:
        'The Great Intelligence is an entity from another dimension that was exiled to ours and condemned to hover between the stars without physical form, possessing the minds of human pawns.',
    special:
        'Servants of the Intelligence are Yeti if Adventure is on Earth, or Wilderness Adventure, Spoon-heads if otherwise – see Servants of the Intelligence below. The Intelligence does not have a Lair – have an Enemy encounter if a Lair is referenced.',
    stats: ['+1 Danger', 'Scheme 5', 'Entity', 'Temporal'],
    encounter: {
        description:
            'If Danger less than 12, you instead encounter Servants of the Intelligence (below). If Danger 12+, you encounter the Great Intelligence (Brains 7, Brawn 0, Bravery 5, Leader) with 1D6-2 Servants.',
        table: [
            {
                name: 'Conflict',
                description:
                    'Roll 1D6 (add +4 if no Servants here): 1-2: Attack; 3-4: Capture; 5-8: Mind Control; 9-10: Outwit.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if no Servants here): 1-2: The Great Intelligence starts a Conflict (above); 3-5: Captured (8); 6+: Captured (9), add +1 Danger and roll for a Goal as the Great Intelligence cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'If Servants are here, see Servants of the Intelligence with -2 to Running rolls. If no Servants here you must make a Bravery 12 roll to fight off the Great Intelligence and escape. If you fail, choose another option with -1 to roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Invasion',
            vp: 6,
            type: 'Invasion',
            description:
                'The Intelligence plans to invade the planet. If Danger 12+, add +1 to number of Servants encountered. If on Earth and you do not Defeat the Intelligence, take -1 penalty to the Setback roll.',
            options: [
                {
                    name: 'Destroy Control Node',
                    description:
                        'Roll a random Location for Node. If at Node Location, take a Prevent Action (add Engineer). If you fail, add +1 Danger and have an Enemy encounter.',
                },
                {
                    name: 'Banishment',
                    description:
                        'Gain 4 Knowledge (2 Knowledge if have 2 Aware) then win an (Outwit) Conflict with the Intelligence.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Web of Fear',
            vp: 6,
            type: 'Apocalypse',
            description:
                'The Intelligence intends to use a web to destroy all life here. If Danger 10+, roll 1D6 for each Human Ally - on a roll of 1 the Ally is killed.',
            options: [
                {
                    name: 'Destroy Fungal Web (Yeti)',
                    description:
                        'Move to 3 random Locations and in each make a Science 10 roll (add Running, max +3) as an Action. Roll 1D6 each time you fail a roll: 1: Kill 1 Character; 2-4: Add +1 Danger; 5-6: Encounter Yeti.',
                },
                {
                    name: 'Create Computer Virus (Spoon-heads)',
                    description:
                        'Make a Prevent Action (add Computers) at any Location where you can Research (Computers). If you fail, add +1 Danger and Spoon-heads gain +1 Brains (cumulative).',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Attain Material Form',
            vp: 6,
            type: 'Resurrection',
            description:
                'The Intelligence is attempting to achieve corporeal existence through an astral portal. Roll a random Location for Portal. If Danger 16+, the Intelligence gains +1 to all Qualities.',
            options: [
                {
                    name: 'Break Psychic Link',
                    description:
                        'Gain 3 Knowledge then win a (Mind Control) Conflict (add Aware) against the Intelligence.',
                },
                {
                    name: 'Destroy Portal',
                    description:
                        'Take a Prevent Action (+2 if Brawn 12+) at Portal. If you fail, have an Enemy encounter.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Under Siege',
            description:
                'If Danger less than 10, add +1 Danger. If Danger 10+, your Location is surrounded by Servants of the Intelligence. If you wish to make a Move Action you must make a successful Stealth 9 roll or have an Enemy encounter.',
        },
        {
            roll: '3-4',
            name: 'Control Node',
            description:
                'You discover either a computer interface (if not on Earth) or a pyramid of silver spheres (if on Earth). By making a Computers 9 roll or Engineer 9 roll respectively, you can gain control of 1 Servant when encountered.',
        },
        {
            roll: '5-6',
            name: 'Mind Domination',
            description:
                'The Great Intelligence begins a (Mind Control) Conflict against a random Character.',
        },
    ],
    lair: {
        name: 'Servants of the Intelligence',
        tags: [],
        description:
            'Yeti: Huge creatures covered in brown and grey fur with enormous claws, but in reality robotic slaves controlled by a silver sphere in their chest. Roll 1D3 (+1 if Defeat Phase) for number of Yeti encountered (each Brains 0, Brawn 7, Bravery 5, Machine, Troop). You may start an (Attack) Conflict (Troops have -1 Brawn as their weapons have little effect) or try to Evade with a Running 8 roll. If you win a Conflict, you may pay 1 Luck point to gain a control sphere (see Control Node in Enemy events above). Spoon-heads: Mobile wi-fi servers that look like human replicas and can upload a victims’ consciousness to the Great Intelligence. Roll 1D3 for number encountered, each Brains 4, Brawn 1, Bravery 5 (Machine). Unless you make a Computers 8 roll (with -1 to roll per Spoon-head) to hack them (gaining +1 Knowledge if successful), or Evade them with a Running 7 roll, they start a (Mind Control) Conflict. Add +1 Danger if a Character with Brains 3+ is uploaded. If you fail to Defeat the Great Intelligence, uploaded Companions are treated as killed (-5 VP).',
    },
}

const E026: Enemy = {
    id: 26,
    tag: 'E026',
    title: 'The Gelth',
    description:
        'The Gelth are gaseous, ethereal alien creatures from another dimension since their home planet was destroyed in the Time War. But are the refugees benign or hostile?',
    special:
        'If you have a Character with Aware 2, you may perform a Séance as an Action (see below). If you have an Enemy encounter during the Dilemma Phase, you instead encounter Animated Corpses (see Enemy events). The Gelth do not have a Lair – have an Enemy encounter if a Lair is referenced.',
    stats: ['+0 Danger', 'Scheme 6', 'Gothic', 'Temporal'],
    encounter: {
        description:
            'Roll 1D3+1 (add +1 if Danger 16+) for the number of malignant Gelth wraiths that materialise before you, each Brains 2, Brawn 0, Bravery 4 (Troop).',
        table: [
            {
                name: 'Conflict (Terrify)',
                description:
                    'The Gelth swoop towards you their eyes glowing with hatred. Any Human Allies with Bravery 1 or less must each roll 1D6 and on a 1-3 are so terrified that they cannot add their Bravery to Conflict total.',
            },
            {
                name: 'Evade',
                description:
                    'The Gelth are incredibly swift, so make a Running 8 roll to escape. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to trick the Gelth. If you fail, choose another option with -1 to any Quality or Skill roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'The Dead Shall Walk',
            vp: 5,
            type: 'Invasion',
            description:
                'The Gelth plan to possess and control the bodies of the dead and then use them to invade. If Danger 12+, add +1 to number of Animated Corpses encountered.',
            options: [
                {
                    name: 'Draw Gelth Out',
                    description:
                        'Make a Science 9 roll at Location with highest Move number (select if tie) to encounter Animated Corpses and start and win a (Trap) Conflict. If you fail Science roll, add +1 Danger.',
                },
                {
                    name: 'Trick the Gelth',
                    description:
                        'Gain 3 Knowledge (1 Knowledge if a Character has Aware 2) then win an (Outwit) Conflict against the Gelth. If you fail, add +1 Danger and start an immediate (Terrify) Conflict with the Gelth.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Escape Dimension',
            vp: 5,
            type: 'Resurrection',
            description:
                'The Gelth are attempting to aid the remainder of their race to escape from dimensional containment. If Danger 16+, add +1 to number of Gelth encountered.',
            options: [
                {
                    name: 'Rebuild the Prison',
                    description:
                        'Make a Science 10 roll (add Aware) to research the dimensional co-ordinates. Then take a Prevent Action (adding Science) at a random Location. Add +1 Danger if you fail.',
                },
                {
                    name: 'Trap Gelth in Gas Pipes',
                    description:
                        'Make a Prevent Action (add Running) at Location with highest Move number (select if tie). If you succeed, roll 1D6 for each Character without Running and on a result of 1 they are killed in explosion.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Attain Material Form',
            vp: 4,
            type: 'Resurrection',
            description:
                'The Gelth are attempting to achieve corporeal existence through an astral portal. Roll a random Location for Portal. If Danger 16+, the Gelth gain +1 to all Qualities.',
            options: [
                {
                    name: 'Break Psychic Link',
                    description:
                        'Gain 4 Knowledge (2 Knowledge if a Character has Aware 2) and at Portal, either: start and win a (Mind Control) Conflict with the Gelth or kill a Character with Aware 2 (with no VP loss).',
                },
                {
                    name: 'Destroy Portal',
                    description:
                        'Take a Prevent Action (add Aware) at Portal. If you fail, have an Enemy encounter.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Conduit',
            description:
                'A Human Character you control is possessed by the Gelth. Character with most Aware (choose if tie) becomes a Minion and is frozen. Add +1 Danger.',
        },
        {
            roll: '3-4',
            name: 'Animated Corpses',
            description:
                'You have encountered 1D6 animated corpses, possessed by the Gelth, each Brains 1, Brawn 3, Bravery 3. Unless you can Evade with a Running 7 roll, you must start an (Attack) Conflict. If you lose the Conflict, add +1 to the number of corpses in subsequent encounters.',
        },
        {
            roll: '5-6',
            name: 'Time Rift',
            description:
                'The area has a rip in the very fabric of time. Gelth gain +1 to all Qualities (once only).',
        },
    ],
    lair: {
        name: 'Special Action: Séance',
        tags: [],
        description:
            '(Dilemma Phase) You attempt to perform a Séance to communicate with the Gelth. You must have at least 4 Characters. Make an Aware roll: 2-7: The Gelth plead for your help – unless you make a Brains 12 roll (-1 per Human Character here), choose to lose 1 Knowledge or add +1 Danger; 8-10: Nothing is coming through except random phantasmagoria – no result; 11-13: Voices from beyond the grave – gain +1 Knowledge; 14+: The Gelth speak – reveal Goal or gain +2 Knowledge but roll 1D6: 1-2: The Gelth true forms revealed in flames – encounter the Gelth; 3-4: Add +1 Danger; 5-6:No other result.',
    },
}

const E027: Enemy = {
    id: 27,
    tag: 'E027',
    title: 'Joseph Denham III',
    description:
        'Joseph Denham is a billionaire robotics mogul and director of the company that broadcasts the interstellar communication networks. A genius in robotics, he is also a criminal mastermind who has blackmailed governments.',
    special:
        'Denham will have reached his Goal if Danger total is 16 rather than 20. Any Computers or Engineer Skill rolls have a -1 penalty in Adventure.',
    stats: ['+0 Danger', 'Scheme 4', 'Criminal', 'Villain'],
    encounter: {
        description:
            "Denham is Brains 4, Brawn 2, Bravery 3 (Leader) and with 1D3 robotic drones, each Brains 0, Brawn 2, Bravery 4 (Machine, Troop). Roll 1D6 and if 4-6, replace a drone with Denham's Android Bodyguard (see Enemy event).",
        table: [
            {
                name: 'Conflict',
                description:
                    'If Danger is 8 or less, Denham starts a (Capture) Conflict; if Danger 9+, Denham starts an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Danger less than 8): 1-2: Denham starts an (Attack) Conflict; 3-5: Captured (8); 6+: Captured (9) and taken to factory (Lair). Add +1 Danger and roll 1D6 - on a result of 4+, roll for Goal as he cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape or a Stealth 9 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way out of trouble. If you fail, choose to Surrender or start a different Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Create Robotic Army',
            vp: 5,
            type: 'Experiments',
            description:
                'Denham is attempting to increase and enhance the robotic drones at his disposal to build his strength. Add +1 to the number of Machine Troops encountered.',
            options: [
                {
                    name: 'Destroy Android Factory',
                    description:
                        "Get inside Denham's Android Factory (Lair), then make a successful Prevent Action (add Computers or Engineer). If you fail, add +1 Danger and encounter Denham.",
                },
                {
                    name: 'Create Computer Virus',
                    description:
                        'Gain a Breakthrough (12+) result on Research (Computers) Action. If you fail, add +1 Danger and you cannot repeat this option.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Escape Justice',
            vp: 4,
            type: 'Quest',
            description:
                'Denham is trying to evade the law for his former schemes and is on the run. When rolling for an Enemy encounter, he is accompanied only by his android bodyguard on a roll of 4-6.',
            options: [
                {
                    name: 'Trap Denham',
                    description:
                        'Gain 2 Knowledge then win a (Trap) Conflict against Denham. If you fail, add +1 Danger and you become Captured (9).',
                },
                {
                    name: 'Trick Denham',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict against Denham. If you fail, add +1 Danger and start an immediate (Attack) Conflict.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Control Media Network',
            vp: 4,
            type: 'Profit',
            description:
                'Denham is attempting to expand his control over computer communications across the planet. Post Modern Era or later – roll for a different Goal if not.',
            options: [
                {
                    name: 'Destroy Control Node',
                    description:
                        'Roll a random Location of Node. If at Node, take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Denham.',
                },
                {
                    name: "Expose Denham's True Nature",
                    description:
                        'Take a Prevent Action (add Computers and Diplomacy) at any Location where you can Find Help and Research (Computers). Add +1 Danger if you fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Android Bodyguard',
            description:
                "You encounter Denham's personal android guard – Brains 3, Brawn 6, Bravery 5 (Machine, Minion). See above for Encounter options.",
        },
        {
            roll: '3-4',
            name: 'Upgraded Systems',
            description:
                "Roll 1D6 and apply to all of Denham's Machine Characters for Adventure (cumulative): 1: +1 Brains; 2: +1 Brawn; 3: +1 Bravery; 4: Add +1 to Running total needed in Evade option; 5: Add +1 to Capture number; 6: +2 Brawn.",
        },
        {
            roll: '5-6',
            name: 'Experimental Subject',
            description:
                'If you have a Captured Character, Denham uses them as a test subject. Select Character to be killed unless you spend Luck equal to their Bravery.',
        },
    ],
    lair: {
        name: 'Android Factory',
        tags: ['Move 9'],
        description:
            'A huge robotics factory where Denham constructs his army of mechanical servants. Add +1 Danger or +2 Danger if Experiments Goal (either once per Adventure). To enter, make a Computers 9 roll and if successful gain +1 Knowledge (once only). If you fail, encounter 1D6 robotic drones (see above). Add +1 to Rescue and Research (Engineer) Actions here. If you are captured here, all Escape Actions have a -1 penalty. Add +1 to number of drones encountered with Denham. You can sabotage the factory with an Engineer 10 roll as an Action. If successful add +1 to Prevent Actions (+2 if Goal is Experiments). If you fail, encounter Denham.',
    },
}

const E028: Enemy = {
    id: 28,
    tag: 'E028',
    title: 'Morgaine',
    description:
        'Morgaine is an evil sorceress from a parallel universe who seeks power and domination either through military force or the dark mystical arts. Incredibly cunning, ruthless and manipulative, Morgaine is also brave, passionate and possesses a twisted sense of honour.',
    special: null,
    stats: ['+2 Danger', 'Scheme 5', 'Earth', 'Military'],
    encounter: {
        description:
            "You have encountered 1D6 (+1 if Danger 12+) S'rax knights, each Brains 1, Brawn 3, Bravery 3 (Troop). Also roll 2D6 and if result is lower than current Danger, then one knight is instead Mordred, Morgaine's errant son (Brains 3, Brawn 4, Bravery 3). Roll a further 1D6 (+1 if Danger 12+, +1 if at Lair) and if result is 4+, they are led by Morgaine (Brains 4, Brawn 6, Bravery 5, Leader).",
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    "Morgaine's forces raise their swords in honour and then charge to attack you.",
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Morgaine here): 1-3: The knights start (Attack) Conflict; 4-5: Captured (8); 6+: Captured (9) and taken to Castle (Lair). Add +1 Danger and roll 1D6 – on result 4+, roll for a Goal as Morgaine cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape or a Stealth 9 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way out of trouble. If you fail, choose to Surrender or start a different Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Conquest',
            vp: 6,
            type: 'Invasion',
            description:
                'Morgaine wants to rule this land – either by force or by guile – and will let nothing stand in her way. Add +1 to the number of Enemy Troops encountered.',
            options: [
                {
                    name: 'Our Last Battlefield',
                    description:
                        "Have 3 Enemy encounters and win 3 (Attack) Conflicts against Morgaine's forces. If you lose an (Attack) Conflict, add +1 Danger per loss.",
                },
                {
                    name: 'Parley Truce',
                    description:
                        'Gain 4 Knowledge (2 Knowledge if you have 2 Characters with Bravery 4+) then win an (Outwit) Conflict (add Diplomacy) against Morgaine. If you fail, also add +1 Danger and start an (Attack) Conflict.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Quest for Excalibur',
            vp: 5,
            type: 'Quest',
            description:
                "Morgaine searches for King Arthur's legendary sword Excalibur, believing the sword to be a key to greater power. If Danger 12+, add +1 to Enemy Action rolls.",
            options: [
                {
                    name: 'Create Duplicate Sword',
                    description:
                        'Make a History 10 roll (add Engineer) as an Action to create duplicate. You must then win an (Outwit) Conflict against Morgaine. If you fail, add an extra +1 Danger and are Captured (8).',
                },
                {
                    name: 'Retrieve Excalibur First',
                    description:
                        'You must Move to a Water or Caves Location and make an Aware 12 roll (add +1 per Character with Bravery 3+) to find Excalibur. Add +1 Danger and encounter Morgaine if you fail.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Release the Destroyer',
            vp: 7,
            type: 'Apocalypse',
            description:
                'Morgaine wishes to free the demon and destroy this world. Add +1 Danger each time you encounter the Destroyer (Enemy event).',
            options: [
                {
                    name: 'Bind the Destroyer in Silver',
                    description:
                        "Sneak into the Castle of the S'rax (Lair) and pay 2 Luck to encounter the Destroyer (Enemy event below), then win an (Outwit) Conflict against it.",
                },
                {
                    name: 'Appeal to Honour',
                    description:
                        'A Character must make a Bravery 10 roll as an Action. Then win an (Outwit) Conflict (add Diplomacy) against Morgaine. If you fail, also add +1 Danger and become Captured (9).',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'The Destroyer',
            description:
                "If Danger 15+, you encounter Morgaine's trapped demon - the eater of worlds - Brains 5, Brawn 12, Bravery 5 (Minion). See above for Encounter options (may not Surrender) add +1 Danger if fail to Outwit or Evade the Destroyer.",
        },
        {
            roll: '3-4',
            name: 'Crystal Ball',
            description:
                "Morgaine's powers means she has foreknowledge. Lose 1 Knowledge or add +2 to next Enemy Action roll or -3 to your next Evade option roll.",
        },
        {
            roll: '5-6',
            name: 'Under Siege',
            description:
                "If Danger 10+, you are surrounded by Morgaine's forces. To make a Move Action you must make a Stealth 9 roll, having an Enemy encounter if you fail.",
        },
    ],
    lair: {
        name: "Castle of the S'rax",
        tags: ['Move 9'],
        description:
            'A fortress steeped in black magic where Morgaine weaves her enchantments. Add +1 Danger (once per Adventure). Make a Stealth 9 roll to enter and gain +1 Knowledge if successful (once only). If you fail, have an Enemy encounter, adding +1 to number of knights encountered. Morgaine is +1 to all Qualities here. Add +1 to Rescue and Seek Information (Stealth) Actions here. Escape Actions have a -1 penalty here. Add +1 to Enemy Action rolls while you have Characters here. Encounter (D6): 1-2: Enemy encounter; 3: Enemy event; 4-5: None; 6: Character event.',
    },
}

const E029: Enemy = {
    id: 29,
    tag: 'E029',
    title: 'The Slitheen',
    description:
        'The Slitheen are large green aliens with long arms and claws that come from the planet Raxacoricofallapatorius. The Slitheen also masquerade as humans by using skin suits. However, they must use matter compressors to do so, and as a result, often emit foul smelling gas!',
    special: null,
    stats: ['+1 Danger', 'Scheme 5', 'Chameleon', 'Criminal'],
    encounter: {
        description:
            'Roll 1D3 for number of Slitheen encountered (add +1 if Danger 12+), each Brains 2, Brawn 5, Bravery 2 (Troop).',
        table: [
            {
                name: 'Conflict (Attack)',
                description:
                    'The Slitheen giggle with laughter as they advance towards you...',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Danger 8 or less): 1-3: The Slitheen start an (Attack) Conflict; 4-5: Captured (8); 6+: Taken to Slitheen Lodge (Lair) – Captured (9). Roll 1D6 and if 5-6, add +1 Danger but reveal Goal as Slitheen gloat over you.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 9 roll to escape, or a Stealth 9 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Slitheen and escape. If you fail, choose to Surrender or start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Hunt Fugitive',
            vp: 4,
            type: 'Capture',
            description:
                'The Slitheen are trying to find a fugitive Slitheen who swindled them. If you encounter a lone Slitheen, roll 1D6 and on 4-6, it is the fugitive who becomes your Ally with a Charm 9 roll.',
            options: [
                {
                    name: 'Find Fugitive',
                    description:
                        'You must make an Aware 9 roll to have a lone Slitheen encounter at any Location. You must Ally the Slitheen and return to the TARDIS. Add +1 Danger each time you fail the Aware roll.',
                },
                {
                    name: 'Trick the Slitheen',
                    description:
                        'Gain 2 Knowledge or have a Slitheen Ally. Then win an (Outwit) Conflict against the Slitheen. If you fail, add +1 Danger and are Captured (9) at the Slitheen Lodge (Lair).',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Escape Justice',
            vp: 4,
            type: 'Quest',
            description:
                'The Slitheen are trying to evade the law for their former crimes and are on the run. All Slitheen are +1 to all Qualities.',
            options: [
                {
                    name: 'Trap the Slitheen',
                    description:
                        'Gain 1 Knowledge then win a (Trap) Conflict against the Slitheen. If you fail, add +1 Danger and become Captured (9).',
                },
                {
                    name: 'Trick the Slitheen',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict against the Slitheen. If you fail, add +1 Danger and start an immediate (Attack) Conflict.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Fire Sale',
            vp: 7,
            type: 'Apocalypse',
            description:
                'The Slitheen are attempting to create a nuclear explosion so that they can sell the energy to power spacecraft. If Danger reaches 16+, add +1 Danger (once only).',
            options: [
                {
                    name: 'Alter Missile Trajectory',
                    description:
                        'You must make a Brains 15 roll (add Pilot) to analyse co-ordinates. Then take a Prevent Action (add Computers) at a Location where you can Research (Computers). Add +1 Danger each time you fail.',
                },
                {
                    name: 'Sabotage Nuclear Trigger',
                    description:
                        'Sneak inside the Slitheen Lodge (Lair) with a Stealth (9) roll, encountering Slitheen if you fail. Once inside, take a Prevent Action (add Engineer). If you fail, add +1 Danger and encounter Slitheen.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Slitheen Unzipped',
            description:
                'Roll 1D6 for each Human Character in a random group. If the result is a 1, then Character is revealed to be a Slitheen – have an Enemy encounter. If Character is a Companion then the real Companion is instead Captured (9) in Lair.',
        },
        {
            roll: '3-4',
            name: 'The Hunt',
            description:
                'A Slitheen tradition. If you have any Human captives then they are released to be pursued by hungry Slitheen. They must make a Running 9 or Stealth 9 roll or start an (Attack) Conflict with 1D3 Slitheen (each Brawn 5).',
        },
        {
            roll: '5-6',
            name: 'Slitheen Master Criminal',
            description:
                'A Slitheen has infiltrated authorities – you may not use Find Help Actions. Add +2 Brains (Leader) to a Slitheen in any Enemy encounter.',
        },
    ],
    lair: {
        name: 'Slitheen Lodge',
        tags: ['Move 9'],
        description:
            'A Lodge is a safe-house and hideout for Slitheen criminals. Gain +1 Knowledge (unless here as captives). Roll 1D6: 1-2: No event; 3-4: Add +1 Danger; 5-6: Encounter Slitheen - add +1 to number of Slitheen encountered and Evade encounter options have a -1 penalty. Add +1 to Challenge and Rescue Actions here. You may search the Lodge as an Action (Stealth roll): 2-4: Captured (9); 5-7: Encounter Slitheen; 8-9: Discover Slitheen skinsuits – you can cancel a Slitheen Unzipped Enemy event; 10: Discover evidence – reveal Goal, adding Profit and +1 VP to Goal; 11+: Slitheen Lodge Database - add +2 to Challenge or Prevent Actions next Turn but have an immediate Slitheen encounter.',
    },
}

const E030: Enemy = {
    id: 30,
    tag: 'E030',
    title: 'The Dark Ocean Mob',
    description:
        "Native to an unknown planet's ocean depths, the thugs of the Dark Ocean Mob are notorious criminals who look like angler fish floating in specially designed environment suits. Selfish, cunning, and armed with spear guns, they scour the universe for profit – no matter who gets in their way.",
    special: null,
    stats: ['+0 Danger', 'Scheme 4', 'Criminal'],
    encounter: {
        description:
            'Roll 1D3 (+1 if Danger is 15+) for number of henchmen encountered, each Brains 2, Brawn 3, Bravery 2, Minion, Troop. Roll another 1D6 (+1 if at Lair, +1 if Danger 12+) and if result is 4+, one is a Mob Boss (Brains 4, Brawn 3, Bravery 3, Leader). If with a Boss, henchmen are +1 Bravery. All gain +1 Brawn if at a Water Location and +1 to the Quality in a Conflict if the Location is Dark.',
        table: [
            {
                name: 'Conflict',
                description:
                    'If Danger 10 or less, they start a (Capture) Conflict. If Danger is 11+, they start an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Danger 8 or less): 1-2: Henchmen start an (Attack) Conflict; 3-5: Captured (8); 6+: Taken to Spacecraft (Lair) – Captured (9). If captured by a Mob Boss, add +1 Danger.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 7 roll (9 if at Water Location) to escape, or Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to turn the gangsters against each other (may only attempt if 2+ enemies encountered). If you fail and Danger 11 or less then roll as Surrender. If Danger is 12+, start an (Attack) Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Steal Artefact',
            vp: 5,
            type: 'Profit',
            description:
                'To boost their reputation and wealth as galactic crime lords, the Dark Ocean Mob are planning to pull off a heist.',
            options: [
                {
                    name: 'Turn Traitors',
                    description:
                        'Turn henchmen against each other. Win a (Brainwash) Conflict against the henchmen when with a Mob Boss. If you fail, frozen Character is instead Captured (9).',
                },
                {
                    name: 'Steal the Artefact First',
                    description:
                        'At the Location with the highest Move value or a Special Location, make a Stealth 9 roll to steal the artefact. If you fail, add +1 Danger and have an Enemy encounter.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Kidnap Target',
            vp: 4,
            type: 'Capture',
            description:
                "The Mob have been hired to locate an important individual. If you encountered a Special Character, they are the mob's target.",
            options: [
                {
                    name: 'Rescue the Target',
                    description:
                        'Locate them with an Aware 8 roll when you move to a Location, then make a Diplomacy 7 roll or Charm 9 roll to convince them to come with you. You must then return to the TARDIS.',
                },
                {
                    name: 'Bargain with the Mob',
                    description:
                        'Convince them there is more profit somewhere else. Gain 2 Knowledge (1 Knowledge if 2 Stealth) then win an (Outwit) Conflict against a Mob Boss. Add +1 Danger if you fail and become Captured (8).',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Escape Justice',
            vp: 4,
            type: 'Quest',
            description:
                'After a job went wrong, the Mob have been lying low, waiting for an opportunity to leave the system. Gain +2 to Find Help Actions.',
            options: [
                {
                    name: 'Lure Into Trap',
                    description:
                        'Win a (Trap) Conflict against the Henchmen when accompanied by the Mob Boss.',
                },
                {
                    name: 'Sabotage Engines',
                    description:
                        'Sneak aboard Mob Spacecraft with a Stealth 9 roll, having an Enemy encounter if you fail. Once aboard, make an Engineer 10 roll as an Action. Add +1 Danger if you fail.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Decoy',
            description:
                "You've been tricked. Start a (Trap) Conflict (Brains 8).",
        },
        {
            roll: '3',
            name: 'Bribe Authorities',
            description:
                'Add +1 Danger. All Find Help rolls now have a -3 penalty.',
        },
        {
            roll: '4',
            name: 'Petty Crime',
            description:
                'The gang have committed a robbery. Add +1 Danger if Profit Goal, -1 Danger if Quest Goal. Add +1 to all Enemy Brawn (once per Adventure).',
        },
        {
            roll: '5-6',
            name: 'Backstabbing',
            description:
                'Reduce number of Enemies in next encounter by -1 (minimum 1). If this happens 3 or more times in the Adventure, the gangsters have all turned on each other; you may gain +3 to Prevent Actions, but add +1 Danger each time.',
        },
    ],
    lair: {
        name: 'Mob Spacecraft',
        tags: ['Dark', 'Move 9'],
        description:
            'A stylish submersible spacecraft but in a state of disrepair. It is filled with tanks of murky dark water. Locked boxes and cages line the cargo hold. Gain +1 Knowledge (if not captive). Add +1 to number of henchmen in Enemy Encounters here, where one will always be the Mob Boss. Gain +1 to Rescue Actions here. You may also attempt to sabotage their protective suit control systems by making an Engineer 10 roll as an Action to reduce all Enemy Brawn by -2. At the end of each turn, roll 1D6. If 4+, this sabotage is undone.',
    },
}

const E031: Enemy = {
    id: 31,
    tag: 'E031',
    title: 'Osyris the Chronovore',
    description:
        'Osyris is a Chronovore, an amoral energy creature that lives in the Vortex and feeds on Time. Osyris is a particularly vicious Chronovore that is bored with her existence and wishes to dominate lesser races.',
    special: null,
    stats: ['+1 Danger', 'Scheme 6', 'Entity', 'Temporal'],
    encounter: {
        description:
            'In the Dilemma Phase, roll 1D6: 1-4: Roll for Enemy event instead; 5-6: Encounter Osyris. In Defeat Phase, you automatically encounter Osyris. (Brains 8, Brawn 8, Bravery 8, Leader) and choose from options below. In Defeat Phase, you automatically encounter Osyris.',
        table: [
            {
                name: 'Conflict',
                description:
                    'You must choose a single Character present as a Champion and then roll 1D6, starting the Conflict indicated: 1-2: Attack; 3-4: Mind Control; 5-6: Drain Life-force.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Danger 10 or less): 1-2: Osyris starts a Conflict (above); 3-5: Captured (8); 6+: Captured (9) at the Temple of Osyris (Lair) - add +1 Danger and roll for a Goal as the Chronovore cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make a Running 9 roll to escape, but Osyris is so terrifying that any Human Characters with Bravery 1 or less cannot add Running to the roll. If you fail, start a (Drain Life Force) Conflict with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way past the Chronovore. If you fail, choose a different option with -1 to the roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Escape Prison',
            vp: 6,
            type: 'Resurrection',
            description:
                'Osyris is trying to escape from her dimensional containment. If Danger 16+, Osyris gains +1 to all Qualities.',
            options: [
                {
                    name: 'Rebuild the Prison',
                    description:
                        'Make a Science 10 roll (add Aware) to research the dimensional co-ordinates. Then take a Prevent Action (adding Science) at a random Location. Add +1 Danger if you fail.',
                },
                {
                    name: 'Banishment',
                    description:
                        'Gain 4 Knowledge (2 Knowledge if you have 2 History) then win an (Outwit) Conflict with Osyris.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Manufacture Plague',
            vp: 6,
            type: 'Apocalypse',
            description:
                'Osyris intends to release a deadly virus that will wipe out the entire native population. If Danger 16+, roll 1D6 for each Human Ally - on a roll of 1 the Ally is killed.',
            options: [
                {
                    name: 'Capture Plague Carriers',
                    description:
                        'Move to 3 random Locations and in each make a Brawn 12 roll (add Stealth). Encounter Serpent Men (Enemy Events) each time you fail a roll.',
                },
                {
                    name: 'Develop Cure',
                    description:
                        'Make a Brains 15 roll (add Medicine) to analyse virus then take a Prevent Action (add Medicine) at any Location where you can Research (Medicine).',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Attain Material Form',
            vp: 6,
            type: 'Resurrection',
            description:
                'Osyris is attempting to achieve corporeal existence through an astral portal. Roll a random Location for Portal. If Danger 16+, Osyris gains +1 to all Qualities.',
            options: [
                {
                    name: 'Break Psychic Link',
                    description:
                        'Gain 5 Knowledge (2 Knowledge if have 2 Aware) then win (Mind Control) Conflict with Osyris.',
                },
                {
                    name: 'Destroy Portal',
                    description:
                        'Take a Prevent Action (+2 if Brawn 12+) at Portal. If you fail, have an Enemy encounter.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Serpent Men',
            description:
                'Horrific servants of Osyris with the heads of giant cobras. Roll 1D3 for number of Serpent Men encountered (add +1 if Danger 8+), each Brains 0, Brawn 4, Bravery 4 (Creature, Minion, Troop). Evade (Running 9 roll) or start an (Attack) Conflict.',
        },
        {
            roll: '3-4',
            name: 'Elemental Forces',
            description:
                'Osyris commands the very elements. If any Characters are at an Exterior Location, roll 1D6 per Location, adding +2 if a Wilderness: 1-3: Take -2 penalty to any Move or Explore Action next turn; 4-5: Lost (Incident); 6+: Character Trapped (see Companion Trapped Incident and apply to random Character in group).',
        },
        {
            roll: '5-6',
            name: 'Temporal Tsunami',
            description:
                'Choose one of your Characters – a Machine is destroyed; a Time Lord is -2 to all Qualities; all other Characters are frozen for the rest of the Adventure. If you Defeat Osyris, TARDIS Characters affected by the tsunami are returned to full attributes/unfrozen. If you lose, the effect is permanent.',
        },
    ],
    lair: {
        name: 'Temple of Osyris',
        tags: ['Move 9'],
        description:
            'An ancient stone temple, now being restored through the power of Osyris. Gain +1 Knowledge (unless here as captives). Roll 1D6 and on a 1-3 (1-4 if Danger 12+) immediately encounter Serpent Men (see Events, add +1 to number encountered). Inside the temple, add +1 to Rescue Actions, -1 to Stealth rolls, +1 to Enemy Action rolls. Osyris is +1 to all Qualities here. Encounter (Stealth): 2-4: Encounter Osyris; 5-6: Enemy event; 7-8: Temple is empty; 9: Discover ancient hieroglyphs – if you make a Brain 15 roll, gain +2 Knowledge or reveal Goal; 10+: Discover crumbling stone tablet – reveal Goal or if Goal already revealed, take an immediate Prevent Action with +2 to roll.',
    },
}

const E032: Enemy = {
    id: 32,
    tag: 'E032',
    title: 'Missy',
    description:
        "Your oldest friend and most terrible nemesis has regenerated again – this time into The Mistress, or 'Missy' for short. Although the arrogance and cunning remain as ever, there could be the just the merest hint of empathy and regret in her, alongside psychotic madness...",
    special:
        "Missy does not have a Lair – have normal Enemy encounter instead. Due to Missy's insanity, you must see Missy's Mind (Special Rule) before each encounter.",
    stats: ['+3 Danger', 'Scheme 6', 'Time Lord'],
    encounter: {
        description:
            'Missy is Brains 6, Brawn 3, Bravery 4 (Aware, Charm, Computers, Engineer, Running, Science, Stealth, TARDIS, Leader). If a single Character (except the Doctor) encounters Missy, roll 1D6: On a 1-2, before they can choose an option, she attempts to kill them – start an (Attack) Conflict. If you roll 3-6, or other Characters encounter Missy, choose from options below:',
        table: [
            {
                name: 'Conflict',
                description:
                    'Roll 1D6 – on a 1-3, Missy has an alien energy weapon which adds +2 Brawn. If Danger is 15 or less, she attempts a (Capture) Conflict. If Danger is 16+, Missy instead starts an (Attack) Conflict.',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+2 if Danger 10 or less): 1-2: Missy starts an (Attack) Conflict; 3-5: Captured (8); 6+: Captured (9), add +1 Danger and roll a further 1D6 – on a result of 4+, roll for a Goal as Missy cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make either a Running 8 roll to escape, or a Stealth 8 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to bluff your way out of trouble. If you fail, choose to Surrender or start a different Conflict.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Alien Allies',
            vp: 2,
            type: 'Power',
            description:
                'Missy has allied herself with another Enemy - roll on Adventure for a new Enemy, add their Danger, then roll for a Goal. Missy becomes a Minion for that Enemy. When you have an Enemy encounter roll 1D6: 1-2: Missy (above); 3-4: Enemy (Enemy sheet); 5-6: Enemy with Missy. At the end of each Turn, roll 1D6, add Enemy Danger to current Danger. If result 15+ they decide Missy is expendable and become Enemy for the Adventure. Missy then becomes your Ally and you must Prevent Enemy Goal.',
            options: [
                {
                    name: 'Convince Missy',
                    description:
                        'Gain 2 Knowledge then win an (Outwit) Conflict against Missy using only the Doctor.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Hunt the Doctor',
            vp: 5,
            type: 'Capture',
            description:
                'Missy is seeking revenge against you. Random Character selection will always target the Doctor. If you do not Defeat Missy then you are killed - the game is over.',
            options: [
                {
                    name: 'Escape in the TARDIS',
                    description:
                        'Return TARDIS Characters to TARDIS Landing Location and make a TARDIS 9 roll to remove traps that Missy has set around it. You only gain 2 VP. If you fail the roll, add +1 Danger and encounter Missy.',
                },
                {
                    name: 'Trick Missy',
                    description:
                        'Win an (Outwit) Conflict against Missy. If you fail, add +1 Danger and start a (Capture) Conflict.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Escape Justice',
            vp: 5,
            type: 'Quest',
            description:
                'Missy is trying to evade the Shadow Proclamation and is on the run. She is +1 to all Qualities. If you are the 12th Doctor and you Defeat Missy, you may see Q12a.',
            options: [
                {
                    name: 'Trap Missy',
                    description:
                        'Win a (Trap) Conflict against Missy. If you fail, add +1 Danger and become Captured (9).',
                },
                {
                    name: 'Trick Missy',
                    description:
                        'Win an (Outwit) Conflict against Missy. If you fail, add +1 Danger and start an (Attack) Conflict.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Hostages',
            description:
                'If you have any captured Characters then you must Surrender to Missy (see Encounter) by the end of next Turn or the captives will be killed.',
        },
        {
            roll: '3-4',
            name: 'Taunted',
            description:
                'Missy loves to taunt the Doctor. Choose to either add +1 Danger or the Doctor must take a Challenge Action next Turn with +1 to the roll.',
        },
        {
            roll: '5-6',
            name: 'Ally Killed',
            description:
                'You find the burnt remains of one of your Allies – discard an Ally. If you have no Allies, lose 2 Luck.',
        },
    ],
    lair: {
        name: 'Missy’s Mind',
        tags: [],
        description:
            'Missy is capricious and her mood can change suddenly. Roll 1D6 (+1 if Danger 10+): 1: Wistful: The Doctor is +1 Brains in a Conflict this turn. A lone Character Conflict will be (Capture) rather than (Attack). 2-4: Impulsive: Roll 1D6 again: 1-2: Chatty – gain +1 Knowledge; 3-4: Evasive – the encounter ends; 5-6: Combative - you must Evade or start an (Attack) Conflict. 5: Bored: if you Evade, Missy will not bother to chase you and the encounter ends. 6-7: Angry: You cannot start an (Outwit) Conflict in this encounter. If you choose to Surrender, have a -2 penalty to D6 roll.',
    },
}

const E033: Enemy = {
    id: 33,
    tag: 'E033',
    title: 'Demoreans',
    description:
        'The Demoreans are reptilian aliens that feed off temporal energy from Time Paradoxes. Demoreans often try to influence important human leaders to create the paradoxes that feed them and either attack with psychic energy blasts or escape using Time Rifts.',
    special:
        'Demoreans are +1 to Qualities if you have a Temporal event in Adventure.',
    stats: ['+1 Danger', 'Scheme 5', 'Earth', 'Temporal'],
    encounter: {
        description:
            'Roll 1D3 for the number of Demoreans you encounter - each Brains 3, Brawn 3, Bravery 3 (Troop). Roll a further 1D6 (+1 if at their Lair, +1 if Danger 11+) - if the result is 4+, then one of the Demoreans is a Priest (Brains 4, Brawn 5, Bravery 4, Leader).',
        table: [
            {
                name: 'Conflict (Mind Control)',
                description:
                    'The eyes of the Demoreans glow with an intense light...',
            },
            {
                name: 'Surrender',
                description:
                    'Roll 1D6 (+1 if Danger 12+): 1-2: The Demoreans start a (Mind Control) Conflict; 3-4: Captured (8); 5-6+: Captured (9) and taken to Demorean Time Pod. If captured by a Priest, roll for a Goal as it cannot resist gloating.',
            },
            {
                name: 'Evade',
                description:
                    'Make a Running 8 roll to escape or a Stealth 9 roll to hide. If you fail, choose another option with -1 to roll.',
            },
            {
                name: 'Conflict (Outwit)',
                description:
                    'You try to confuse the Demoreans and escape. If you fail, choose another option with -1 to the roll.',
            },
        ],
    },
    goals: [
        {
            roll: '1-2',
            name: 'Cause Time Paradox',
            vp: 5,
            type: 'Meddling',
            description:
                'The Demoreans are attempting to create a Time Paradox changing established events. If on Earth and you do not Defeat the Demoreans, take a -2 penalty to the Setback roll.',
            options: [
                {
                    name: 'Destroy Demorean Time Pod',
                    description:
                        'Sneak inside the Pod Ship (Lair) with a Stealth 9 roll, encountering Demoreans if you fail. Once inside, take a Prevent Action (add Computers). If you fail, add +1 Danger and encounter Demoreans.',
                },
                {
                    name: 'Counter Meddling',
                    description:
                        'Move to any 2 Locations where you can Research and make a Brains 15 roll (add History) at each Location. Add +1 Danger each time you fail a roll.',
                },
            ],
        },
        {
            roll: '3-4',
            name: 'Create Time Rifts',
            vp: 6,
            type: 'Experiments',
            description:
                'The Demoreans are creating more Time Rifts, jagged temporal holes, to amplify any Paradoxes they create. If Danger 15+, Demoreans are +1 to all Qualities.',
            options: [
                {
                    name: 'Use the TARDIS to Close Rifts',
                    description:
                        'Add +1 Danger. Return to the TARDIS and then take a Prevent Action (add Engineer and TARDIS). Add +1 Danger or lose 1 Defence if you fail.',
                },
                {
                    name: 'Close Individual Rifts',
                    description:
                        'You must Move to 3 random Locations and make a Brains 12 roll (add Engineer and Science) at each Location. Add +1 Danger each time you fail a roll.',
                },
            ],
        },
        {
            roll: '5-6',
            name: 'Infiltrate Society',
            vp: 5,
            type: 'Meddling',
            description:
                'The Demoreans have influenced key personnel so they are pawns prior to creating paradoxes. Roll new Goal if Wilderness. If you have Infiltration as an Enemy event, also add +1 Danger.',
            options: [
                {
                    name: 'Expose Demoreans',
                    description:
                        'Win an (Outwit) Conflict against the Demoreans with a Demorean Priest. Then take a Prevent Action (add Diplomacy) at any Location where you can Find Help. If you fail, add +1 Danger.',
                },
                {
                    name: 'Convince Population',
                    description:
                        'Gain 2 Knowledge and have at least 3 Allies. Then take a Prevent Action (add Diplomacy) at any Location where you can Find Help. If you fail, add +1 Danger and encounter Demoreans.',
                },
            ],
        },
    ],
    events: [
        {
            roll: '1-2',
            name: 'Infiltration',
            description:
                'The Demoreans have infiltrated the highest authorities here. Add +1 Danger and you may not choose a Find Help Action.',
        },
        {
            roll: '3-4',
            name: 'Rift Key',
            description:
                'You find a gadget that controls Demorean Time Rifts. Gain +1 Knowledge and add +1 to any Prevent Actions in this Adventure.',
        },
        {
            roll: '5-6',
            name: 'New Time Rift',
            description:
                '(Temporal) Add +1 Danger (+2 if Experiments Goal). Roll 1D6: 1-2: Encounter Demoreans (+1 to number encountered); 3-6: Gain +1 Knowledge if you make a Science 9 roll.',
        },
    ],
    lair: {
        name: 'Demorean Time-Pod',
        tags: ['Move 9'],
        description:
            "A small pod capable of time-jumps. Gain +1 Knowledge and add +1 Danger (once only). Add +1 to Rescue Actions and +1 to Seek Information (Stealth or Computers) here. Roll 1D6 - on 1-3 (1-4 if Danger 9+) have immediate Demorean encounter. In the pod, you may also attempt to sabotage the controls with a successful Engineer 11 or Computers 10 roll. If you fail, encounter Demoreans immediately. If successful, the Demorean's Rifts have been disabled - add +1 to all Prevent Actions here (+2 if an Experiments Goal). Subtract 1 from the number of Demoreans in all future encounters.",
    },
}

export const enemyData: Enemy[] = [
    E001,
    E002,
    E003,
    E004,
    E005,
    E006,
    E007,
    E008,
    E009,
    E010,
    E011,
    E012,
    E013,
    E014,
    E015,
    E016,
    E017,
    E018,
    E019,
    E020,
    E021,
    E022,
    E023,
    E024,
    E025,
    E026,
    E027,
    E028,
    E029,
    E030,
    E031,
    E032,
    E033,
]
