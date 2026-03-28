import type { Enemy } from '../types/EnemyType'

export const enemyData: Enemy[] = [
    {
        id: 1,
        tag: 'E001',
        title: 'The Weeping Angels',
        description:
            'The Weeping Angels appear to be angelic stone statues, but in reality are terrifying quantum creatures that can consume the potential energy of all they devour and can move in the blink of an eye.',
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
    },
    {
        id: 2,
        tag: 'E002',
        title: 'Dalek Invasion Force',
        description:
            'The Daleks are your sworn enemies and opposed Gallifrey in the Time War. Originally from Skaro, these mutated creatures of hate are carried inside armoured shells fitted with devastating weaponry.',
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
    },
    {
        id: 3,
        tag: 'E003',
        title: 'The Celestial Toymaker',
        description:
            'The Toymaker is a mysterious immortal who appears dressed as a Chinese mandarin. He is obsessed with playing deadly games, warping reality for his own amusement and kidnapping lesser species to torment for his fun.',
        stats: ['+1 Danger', 'Scheme 4', 'Entity'],
        encounter: {
            description:
                'Roll 1D6 (adding +1 if Goal revealed, +1 if Danger 16+):',
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
    },
    {
        id: 4,
        tag: 'E004',
        title: 'The Zygons',
        description:
            'The Zygons are malevolent shape-changing aliens with huge, domed heads and covered in sucker-like nodules. Cunning and ruthless, they have whispering, sibilant voices and their claws carry a deadly sting.',
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
    },
    {
        id: 5,
        tag: 'E005',
        title: 'The Mire',
        description:
            'Renowned and feared, the Mire have a reputation of being a deadly warrior race. Their heavy armour gives them the appearance of powerful robots, but the creature inside resembles sea lampreys with sharp teeth.',
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
    },
    {
        id: 6,
        tag: 'E006',
        title: 'Carrionites',
        description:
            'Carrionites are terrifying, ancient creatures that have long been banished into the eternal darkness and appear as witch-like hags. Discovering the old power of language, they can control humans with magic.',
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
    },
]
