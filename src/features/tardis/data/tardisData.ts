import type { Tardis } from '../types/TardisType'

export const tardisData: Tardis[] = [
    {
        tag: 'T000',
        title: 'The TARDIS',
        description: `
            <p>
                <em>
                    “What you are standing in, is a technological marvel. It is
                    science beyond magic. This is the gateway to everything that
                    ever was, or ever can be...”
                </em> - The 12th Doctor.
            </p>
            <p>
                Long ago, the Doctor borrowed his incredible ship so that he
                could explore the universe. It has been his constant companion
                ever since. Sometimes a little unreliable, it might not have
                always taken him to where he wanted to go – but always where he
                needed to be. The TARDIS is dimensionally transcendental or, as
                his companions always tell him, simply bigger on the inside -
                perhaps in more ways than one.
            </p>
            <p>
                The <strong>TARDIS Manual</strong> explains how to use the
                TARDIS in DWSSG3e, such as getting to Adventures, detailing
                events that can happen in the Time Vortex, or using the TARDIS
                in an Adventure. Each Doctor has (or will have through
                expansions) their own TARDIS section starting with T (with a
                newly created Doctor using T00) corresponding to their
                regeneration.
            </p>
        `,
    },
    {
        tag: 'T001',
        title: 'TARDIS Qualities',
        description: `
            <p>The TARDIS, just like any other Character, has 3 Qualities – <strong>Defence, Navigation and Resources</strong>. These Qualities typically have values between 1 and 4 and have a maximum value of 5. Unlike Character Qualities however, these values do not add to any 2D6 roll but are instead spent in various ways:</p>
            <ul>
                <li><strong>Defence:</strong> Each time the TARDIS receives Damage (perhaps through Vortex events or in an Adventure), reduce the Defence value by 1. If the TARDIS has a Defence of 0 and then receives more Damage, it is destroyed.</li>
                <li><strong>Navigation:</strong> Instead of making a TARDIS roll to reach an Adventure destination, or in an Adventure to Move to a Location, you may reduce Navigation by 1 to automatically succeed in the roll.</li>
                <li><strong>Resources:</strong> You may spend Resources any time the Doctor is inside the TARDIS to gain TARDIS Gadgets (T004).</li>
            </ul>
            <p>TARDIS starting Qualities are given on each Doctor’s TARDIS section and vary between regenerations - earlier Doctors have much less Navigation but far better Defence for example. If you have created your own Doctor, you may select values for your TARDIS Qualities (see T00).</p>
            <p>At the end of an Adventure (r012), you may spend 2 <strong>Luck</strong> points to gain +1 to any TARDIS Quality.</p>
        `,
    },
    {
        tag: 'T002',
        title: 'Piloting the TARDIS',
        description: `
            <p>The TARDIS can go anywhere in time and space so it’s important the Doctor knows how to pilot his craft.</p>
            <p>Between Adventures (and at the start of the game), you may try to set the controls of the TARDIS to reach a particular destination and Adventure, try to just reach a particular Era or type of destination such as a Holiday, or just let the TARDIS materialise wherever she wants and go to a random Adventure.</p>
            <p>Before you get to any destination however, roll 2D6 and if the result is 10+, then you first have a Vortex event (T003).</p>
            <ul>
                <li><strong>Eras:</strong> The 12 Eras are used to define a rough chronology to Adventures. As technology changes through time, the different Actions (r008) you can perform changes with the Era in which your Adventure takes place. Similarly, being captured in some Eras might be a lot rougher than others. The ‘default’ Era of present-day Earth is the Post Modern Era that spans years 2000 – 2030. A full list of Eras and their dates is given as part of the Temporal Destination Matrix (TM01).</li>
                <li><strong>Set the Controls:</strong> If you attempt to go to a particular destination, then consult the <strong>Adventure Book</strong> to find the TARDIS roll required. To go to a more general Era destination, see the Temporal Destination Matrix (TM01) for the required TARDIS roll and if successful, roll a D6 to find your specific Adventure destination that can then be found in the <strong>Adventure Book</strong>. All TARDIS rolls are made with a -1 penalty for each point of Damage on the TARDIS. If you fail the TARDIS roll to reach an exact destination by only 1, you still reach the Era but roll for an Adventure within the same Era (see TM01). If you fail the TARDIS roll to reach an exact destination by more than 1, or fail a TARDIS roll to reach an Era or Adventure on the Temporal Destination Matrix (TM01), the TARDIS brings you to somewhere unexpected - see Random Destinations. If at any time you roll a natural 2 on a TARDIS roll to reach any destination, see also V02.</li>
                <li><strong>Random Destinations:</strong> If you let the TARDIS land randomly, or failed to set the controls correctly so you don’t land where intended, then you must roll on the Random Vortex Destination Matrix (TM02). As the number of Adventures will continually be increased by expansions, both TM01 and TM02 will be regularly updated to include new Destinations and Adventures.</li>
            </ul>
        `,
    },
    {
        tag: 'T003',
        title: 'Vortex Events',
        description: `
            <p>Flying through the Time Vortex can be eventful and these are represented by Vortex events. Some Vortex Events, such as distress calls, might alter your destination. Other Vortex Events can deposit unexpected visitors in the console room or even cause damage to the TARDIS - so take care of your trusty ship and make repairs when you can!</p>
            <p>Roll 2D6 and consult the Vortex Event chart given in your Doctor’s TARDIS section.</p>
        `,
    },
    {
        tag: 'T004',
        title: 'TARDIS Gadgets',
        description: `
            <p>The TARDIS is capable of amazing things and has many different gadgets, resources and functions aboard. These are represented by TARDIS Gadget cards.</p>
            <p>There are 6 TARDIS Gadgets included in this Core Set and more will be included in future expansions.</p>
            <p>Each TARDIS Gadget card has a <strong>Resource</strong> cost as shown at the top left hand corner and some have a Doctor Icon in the lower left corner to indicate which Doctor can use them. You may purchase TARDIS Gadgets by spending <strong>Resources</strong> at the start of the game or at any time the Doctor is inside the TARDIS. Place the TARDIS Gadget on your TARDIS Mat.</p>
            <p>All TARDIS Gadgets normally remain on your TARDIS between Adventures unless otherwise specified. Unless stated, all TARDIS Gadgets are unique and you may not have or purchase duplicates.</p>
            <p>You may only have a maximum of 3 TARDIS Gadgets in your TARDIS. If you gain another, you must choose one to discard.</p>
        `,
    },
    {
        tag: 'T005',
        title: 'Actions in the TARDIS',
        description: `
            <p>If the TARDIS has taken Damage, or had any Malfunction (V02) you may try to repair it - either between Adventures (if you do not have a Vortex Event) or during the <strong>Discover</strong> Phase of an Adventure. To repair TARDIS Damage and increase your <strong>Defence</strong> by +1, you must make an Engineer 9 roll. You may not repair the TARDIS to increase <strong>Defence</strong> if it has not taken any Damage however. To repair other malfunctions requires a different Engineer roll as given in the Vortex event.</p>
            <p>During an Adventure, the only other Actions that can take place in the TARDIS is Research (with +1 to the roll and no Era restrictions on Skills) or to use the TARDIS to make a Move Action by making a TARDIS 8 roll. If the roll is failed, roll for a random Location in the Adventure. If the roll was failed by 4 or more however, the TARDIS takes Damage.</p>
        `,
    },
    {
        tag: 'T006',
        title: 'The TARDIS as an Adventure Location',
        description: `
            <p>The TARDIS counts as a separate Location in an Adventure. Characters inside the TARDIS cannot be affected by Incidents or Enemy events (although effects on the Adventure still occur) or have an Enemy encounter.</p>
            <p>In an Adventure, you may normally return to the TARDIS if you wish (and automatically return here when Adventure is over). To return to the TARDIS during an Adventure, the Doctor (or a Companion with a TARDIS Key Gadget) must simply return to the TARDIS current Location (usually the Landing Location).</p>
        `,
    },
    {
        tag: 'T007',
        title: 'TARDIS Quest events',
        description: `
            <p>Each TARDIS Sheet also lists several events (each starting with ‘Q’) that refer to Quests that a player may undertake. TARDIS Quests are specific to each Doctor to give added theme and storytelling possibilities.</p>
            <p>If you've already started a Quest, but Regenerate before completing it, the Quest remains active and must still be completed. You may not start the Quest associated with your new Regeneration until you complete your pending Quest. After you complete the Quest, you may start counting completed Adventures needed to start the Quest associated with your current Regeneration from your next completed Adventure.</p>
        `,
    },
    {
        tag: 'V01',
        title: 'All of Time and Space',
        description: `
            <p>Your Companion (randomly chosen if more than one) has decided that they want you to take them somewhere. Roll 1D6 below for their chosen destination. If you do not reach the destination listed, lose 1 <strong>Luck</strong> and if you gain a Companion in your next Adventure take -1 to the Companion Leaving roll. If you have no Companion, ignore this event.</p>
            <ol>
                <li>Your Companion wants a relaxing Holiday Adventure.</li>
                <li>Your Companion wants to return home (their native Adventure or Era).</li>
                <li>Your Companion wants to visit the future (later than their native Era).</li>
                <li>Your Companion wants to visit Earth’s Past (World War Era or earlier).</li>
                <li>Your Companion wants to visit an exotic alien planet.</li>
                <li>You argue with your Companion - when the TARDIS lands they immediately separate and Move to a random Location.</li>
            </ol>
        `,
    },
    {
        tag: 'V02',
        title: 'TARDIS Malfunction',
        description: `
            <p>There is a sudden flash from the TARDIS console followed by a whiff of burning circuitry. Roll 1D6:</p>
            <ol>
                <li>There is a huge flash as the power to the console overloads. Roll for a random destination to see where you land. The TARDIS takes Damage.</li>
                <li>You have run out of a vital element that powers the TARDIS. Until replaced, you have a -2 penalty to TARDIS rolls. To replace the element, you must visit an Adventure in the Colonial era or later and spend 1 <strong>Luck</strong>.</li>
                <li>A random TARDIS Gadget malfunctions and can no longer be used until repaired with an Engineer 10 roll. If you have no TARDIS Gadget lose either 1 <strong>Navigation</strong> or 1 <strong>Resources</strong> (if both 0, TARDIS takes Damage instead).</li>
                <li>Power circuit malfunction. The TARDIS takes Damage.</li>
                <li>A navigation circuit overloads on the console. Either lose 1 <strong>Navigation</strong> or take a -1 penalty to TARDIS rolls until it is repaired with an Engineer 9 roll.</li>
                <li>The console gives a very strange bleep. It doesn’t appear to have affected anything…</li>
            </ol>
        `,
    },
    {
        tag: 'V03',
        title: 'TARDIS Modifications',
        description: `
            <p>You may attempt to repair Damage to your TARDIS or a Malfunction (V02). If the TARDIS has no Damage or Malfunctions, you may tinker with the workings of your magnificent time ship by making a successful Engineer 9 roll and then rolling 1D6:</p>
            <ul>
                <li><strong>1:</strong> A new light comes on when the door opens! Roll 1D6: if 5+, gain 1 Resources.</li>
                <li><strong>2:</strong> You upgrade your TARDIS defence systems — add +1 Defence or repair 1 Damage to the TARDIS.</li>
                <li><strong>3:</strong> You upgrade the directional circuits — either gain 1 Navigation or gain +1 to rolls when you Set the Controls (T002).</li>
                <li><strong>4–5:</strong> You install a new TARDIS Gadget — pick a random TARDIS Gadget card and install it on your TARDIS Mat if possible.</li>
                <li><strong>6:</strong> You reconfigure TARDIS architecture — you may swap up to 3 points between Defence, Navigation and Resources.</li>
            </ul>
        `,
    },
    {
        tag: 'V04',
        title: 'TARDIS Locker',
        description: `
            <p>You manage to have a bit of a sort out of the TARDIS cupboards after what seems like a millennia. Shuffle all the non-TARDIS Gadget cards containing an Icon of your Doctor together with the Gadget cards that have no Doctor Icon. Draw 3 Gadget cards and choose 1 to keep, returning the other 2 to the deck.</p>
        `,
    },
    {
        tag: 'V05',
        title: 'Distress Call',
        description: `
            <p>The TARDIS picks up an emergency distress signal from somewhere close. You decide to respond. Roll 1D6:</p>
            <ul>
                <li><strong>1–2:</strong> See V12.</li>
                <li><strong>3:</strong> Select a random Space Adventure.</li>
                <li><strong>4–6:</strong> Select a random Adventure.</li>
            </ul>
            <p>Make a TARDIS 7 roll to get to the Adventure. If you fail, lose 1 Luck but arrive there anyway. When you start the Adventure, gain +1 Knowledge and you may Investigate as an Action but may not choose Relax or Study Actions. Your first Character event in the Adventure has a +2 bonus to any Charm or Diplomacy roll.</p>
        `,
    },
    {
        tag: 'V06',
        title: 'Energy Force',
        description: `
            <p>You are thrown off your feet as the TARDIS suddenly lurches from side to side, gripped by a powerful and mysterious energy force. Roll 1D6 and add current Defence. If the result is less than 5, the TARDIS takes Damage. Roll 1D6:</p>
            <ul>
                <li><strong>1:</strong> V017</li>
                <li><strong>2:</strong> V013</li>
                <li><strong>3:</strong> V018</li>
                <li><strong>4–6:</strong> Roll for a random Destination (TM02), then gain 1 Knowledge and add +1 Danger. You may immediately Investigate as an Action but may not choose Relax or Study Actions. When revealing the Enemy, if an Entity Enemy is possible, roll for that Enemy type on R018.</li>
            </ul>
        `,
    },
    {
        tag: 'V07',
        title: 'Unexpected Visitor',
        description: `
            <p>Your jaw drops as you look up from the console to find that something or someone unexpected has arrived in the TARDIS! Roll 1D6:</p>
            <ul>
                <li><strong>1:</strong> Donna Noble</li>
                <li><strong>2:</strong> Jack Harkness</li>
                <li><strong>3:</strong> River Song</li>
                <li><strong>4:</strong> Clara Oswald</li>
                <li><strong>5–6:</strong> See V014</li>
            </ul>
            <p>Place the Character card into play and gain 1 Luck point. You may use this Character in your next Adventure but they will leave at the end of it (with no other Companion leaving roll necessary — see R002). If you already have the same Character aboard the TARDIS, the new arrival is a duplicate from a parallel dimension — instead lose 1 Luck point.</p>
        `,
    },
    {
        tag: 'V08',
        title: 'Dimensional Jump',
        description: `
            <p>The TARDIS suddenly bucks beneath you and you tumble out of control as you encounter a powerful dimensional gateway. No matter how hard you try — it's pulling you in! Roll 1D6 and add current Defence. If the result is less than 6, see V02 and after resolving that event, roll for a Dimensional Adventure on TM01.</p>
        `,
    },
    {
        tag: 'V09',
        title: 'Heart of the TARDIS',
        description: `
            <p>Something has caused the console to open and dangerous, shimmering Temporal Vortex energy from the heart of the TARDIS to spill out! Roll 1D6:</p>
            <ul>
                <li><strong>1–2: Vortex Damage</strong> — The energy has caused a malfunction. See V02.</li>
                <li><strong>3: Vortex Confusion</strong> — A random Character aboard the TARDIS becomes -1 Brains and has -2 to any Skill rolls for the next 1D6 Turns.</li>
                <li><strong>4: Vortex Possession</strong> — A random Character in the TARDIS gains +1 to all Qualities and Aware for the next 1D6 Turns.</li>
                <li><strong>5: Vortex Attack</strong> — A random Character aboard the TARDIS may use the Vortex energy to add their Brains to their Brawn in a Conflict for the next 1D6 Turns.</li>
                <li><strong>6: Vortex Transfer</strong> — A random Character must give either a Skill or 1 point of any of their Qualities to another Character here. If you are alone, you are -1 to Qualities for 1D6 Turns.</li>
            </ul>
        `,
    },
    {
        tag: 'V10',
        title: 'Spacecraft',
        description: `
            <p>The TARDIS has encountered a huge spacecraft as it leaves the Time Vortex. Roll 1D6:</p>
            <ul>
                <li><strong>1–2:</strong> It is hostile and fires upon the TARDIS unless you make a Charm 8 roll. If fired upon, roll 1D6: 1–2: No effect; 3–4: There is a flash on the console — see V02; 5–6: The TARDIS is hit and Damaged. After encountering the spacecraft, you then reach your Adventure.</li>
                <li><strong>3:</strong> You have encountered a hostile Dalek fleet — roll 1D6: 1–4: Make a TARDIS 9 roll to dematerialise in time or the TARDIS is Damaged. In your next Adventure, if a Military Enemy is possible, the Enemy must be Daleks; 5–6: V017.</li>
                <li><strong>4–6:</strong> You land on the spacecraft — roll 1D6: 1: V018; 2–6: Roll for a Space Adventure on TM01.</li>
            </ul>
        `,
    },
    {
        tag: 'V11',
        title: 'Vortex Trouble',
        description: `
            <p>The TARDIS has encountered an anomaly in the Time Vortex. Roll 1D6:</p>
            <ul>
                <li><strong>1–2:</strong> You see a small craft or escape pod hurtling through the Vortex towards an unknown destination. If you choose to follow it, make a TARDIS 7 roll — if successful, roll for a random destination (TM02) and gain 1 Luck point. When you arrive, roll for a random Location. Gain +2 Knowledge if you then Move to that Location.</li>
                <li><strong>3–4:</strong> The TARDIS has jumped a time track. Your next Adventure gains Temporal and adds +1 Danger.</li>
                <li><strong>5–6:</strong> The TARDIS has become trapped in a chronic hysteresis loop and you must make a TARDIS 8 roll to escape (you may not use Navigation). Each time you fail, lose 1 Resources or 1 Luck point or the TARDIS takes Damage.</li>
            </ul>
        `,
    },
    {
        tag: 'V12',
        title: 'A Cry for Help',
        description: `
            <p>You receive a cry for help — either in the shape of a ghostly figure, a message, or perhaps an old friend needs you. Make a TARDIS roll with the required total to steer the TARDIS to the desired Adventure. If you fail, lose 1 Luck point. When you arrive, gain +1 Knowledge or add +1 VP to the Adventure. Roll 1D6:</p>
            <ul>
                <li><strong>1–2:</strong> It's from a Friend. If you have a Companion with a linked Friend card, the message is from them — choose an Adventure in their Era and put their Friend card into play when you arrive. If no Companion has a linked Friend card, use result 5 instead.</li>
                <li><strong>3:</strong> It's the space-time telegraph from UNIT (see A007). When you arrive, put either Kate Stewart or Osgood into play instead of your first Character event.</li>
                <li><strong>4:</strong> You are contacted by your old friend Madame Vastra (see A009). When you arrive, put Vastra into play instead of your first Character event.</li>
                <li><strong>5:</strong> The sender cannot be identified. Roll for a Random Destination (TM02) and when you arrive gain +3 to a Charm or Diplomacy roll on your first Character event with either of these Skills.</li>
                <li><strong>6:</strong> You receive a mysterious message from River Song that starts with 'Hello sweetie!' Roll for a Random Destination (TM02) and when you arrive put River Song into play instead of your first Character event.</li>
            </ul>
        `,
    },
    {
        tag: 'V013',
        title: 'Creation of the Earth',
        description: `
            <p>You have materialised in space at the time when the Earth is about to be created. Gases swirl around the primeval vista as gravity starts to pull matter together in an incredible scene of beauty and majesty. Gain 2 Luck points if you have a Human Companion, 1 Luck point if not.</p>
            <p>You must make a new TARDIS roll to reach your next destination, and you may decide to change it from your original choice. Add +1 to the TARDIS roll if the destination is Earth of any Era.</p>
        `,
    },
    {
        tag: 'V014',
        title: 'Time Crash',
        description: `
            <p>The TARDIS is thrown violently about and you hear the Cloister Bell toll as it predicts disaster — see V02 immediately. However, there is suddenly someone else standing around the console. It is one of your past incarnations!</p>
            <p>Draw a Doctor card at random from any that feature a previous regeneration. After a slight disagreement, you may use your previous incarnation to help with any TARDIS Damage or Malfunctions (see T005).</p>
            <p>You may spend 5 Luck points to have him stay with you for your next Adventure, or let him fade away back to long ago and gain 1D6 Luck points. If he stays and is killed, your time-line is shattered and you lose the game. If you Defeat the Enemy, the previous Doctor returns to his original time-line — gain 1 Luck point.</p>
        `,
    },
    {
        tag: 'V015',
        title: 'External Control',
        description: `
            <p>The readings on the console are very strange and the familiar hum of the TARDIS is slightly off-pitch. The TARDIS has been seized by an unknown force and directed somewhere.</p>
            <p>You may allow the manipulation and roll for a Random Destination (TM02, add +1 Danger on arrival), or try to pull free by making a TARDIS 9 roll (add current Defence but you may not use Navigation). If you fail, see V02 and after resolving, roll for a Random Destination (TM02, add +2 Danger on arrival). If you succeed, gain 2 Luck points.</p>
        `,
    },
    {
        tag: 'V016',
        title: 'Imposter',
        description: `
            <p>To your horror, you discover that one of your Companions is not real — replaced by an illusion, a robot duplicate or some other doppelganger. If you have no Companion, ignore this event.</p>
            <p>Roll 1D6:</p>
            <ul>
                <li><strong>1–3:</strong> The imposter begins an Attack Conflict</li>
                <li><strong>4–6:</strong> The imposter collapses without further incident.</li>
            </ul>
            <p>Then roll 1D6 to see how you can recover your Companion, who will be held in the Enemy Lair and must be Rescued with no Escape Actions possible:</p>
            <ul>
                <li><strong>1–3:</strong> Return to your most recent Adventure, considered to be the Defeat Phase with the same Enemy and Goal as before. Set Danger to 12 and Knowledge to 0.</li>
                <li><strong>4–6:</strong> Roll for a random Destination (TM02) and play an Adventure as normal with +1 Danger and +1 Knowledge.</li>
            </ul>
        `,
    },
    {
        tag: 'V017',
        title: 'The Crucible',
        description: `
            <p>You have landed on the enormous flagship in the centre of the Dalek fleet — the mighty Crucible. The TARDIS is trapped in a powerful force-field and when you emerge you are immediately surrounded by 1D3+1 Daleks (each Brains 1, Brawn 8, Bravery 3, Troop). You must evade the Daleks, escape into the Crucible and deactivate the force-field before the Daleks destroy the TARDIS.</p>
            <p>To evade the Daleks, make a Running 9 roll. If you fail, the Daleks surround you and take you to a cell — Captured (9). If Captured and you fail an Escape Action, roll 1D6: on a 1, you are exterminated and the game is over.</p>
            <p>If you Evade or Escape, you have fled into the Crucible. Make a Move 8 Action to find the force-field generator, then a Computers 10 roll as an Action to deactivate it, then another Move 8 Action to return to the TARDIS. Until you reach the TARDIS, roll 1D6 after each Action (adding +1 for each subsequent roll):</p>
            <ul>
                <li><strong>1–3:</strong> No encounter.</li>
                <li><strong>4–5:</strong> Encounter 1D3+1 Daleks (each Brains 1, Brawn 8, Bravery 3, Troop). Roll 1D6 — if the result is equal or less than the number of Daleks, they are led by the Supreme Red Dalek (Brains 5, Brawn 8, Bravery 5, Leader). You must Evade (Running 8) or Surrender (Captured 9). If Captured by the Supreme Dalek, choose to lose 2 Luck or 1 Idea card. On a failed Escape Action, roll 1D6: on a 1 (1–2 if Captured by the Supreme Dalek), you are exterminated and the game is over.</li>
                <li><strong>6–7:</strong> The Crucible has arrived in orbit somewhere. Roll for a Random Destination (TM02) with a Military Enemy option (roll again if none). Begin the Adventure in the Dilemma Phase, add +1 Danger and roll 1D6 for the Enemy:
                    <ul>
                        <li><strong>1–3:</strong> E002</li>
                        <li><strong>4–6:</strong> E015. Immediately encounter this Enemy. If you escape the Crucible, go to that Adventure immediately.</li>
                        <li>If you roll <strong>4–7</strong> here again, have an Enemy Encounter instead.</li>
                    </ul>
                </li>
                <li><strong>8+:</strong> The TARDIS is consumed by the nuclear furnace inside the heart of the Crucible. The game is over.</li>
            </ul>
        `,
    },
    {
        tag: 'V018',
        title: 'The Shadow Proclamation',
        description: `
            <p>You have landed at the Shadow Proclamation — a citadel of law enforcement floating amongst the stars, controlled by a mysterious albino race that often uses the Judoon as shock troops. Roll 1D6 for an encounter:</p>
            <ul>
                <li><strong>1–2:</strong> You are surrounded by 1D3+1 Judoon (each Brains 1, Brawn 5, Bravery 3, Troop). You may Surrender (Captured 8 with +1 to D6 roll on failed Escapes), start a Capture Conflict or Evade (Running 8).</li>
                <li><strong>3–6:</strong> You are brought before the Shadow Architect. Make a Diplomacy roll (add +2 if VP total 10+):
                    <ul>
                        <li><strong>2–4:</strong> You are imprisoned — Captured (9).</li>
                        <li><strong>5–7:</strong> After a frosty exchange, the Shadow Architect lets you depart in the TARDIS.</li>
                        <li><strong>8–10:</strong> She gives you advice — gain +1 Knowledge at the start of your next Adventure. If you have a Companion, roll 1D6: on 4+, gain 1 Luck point.</li>
                        <li><strong>11+:</strong> The Shadow Proclamation declares a common cause and wishes you to undertake a Mission. If you refuse, roll 1D6: 1–5: Captured (9); 6: The Architect lets you depart. If you accept, roll 1D6: on 4+, gain an Albino Ally (Brains 3, Brawn 0, Bravery 2, Aware 2, Medicine) for the Mission. Roll TM02 for a Random Adventure, gain +1 Knowledge on arrival. When an Enemy is revealed (roll again if Danger 0), add +1 Danger and +1 VP.</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Escaping the Shadow Proclamation:</strong> If Captured, after any failed Escape Action roll 1D6:</p>
            <ul>
                <li><strong>1:</strong> You are executed</li>
                <li><strong>2–3:</strong> Visited by the Shadow Architect (as above with -1 to Diplomacy)
                <li><strong>4–6:</strong> No additional event.</li>
            </ul>
            <p>If you Evade or Escape, make a Move 8 Action to reach the TARDIS and an Engineer 9 or Computers 9 roll to remove an energy barrier. If you fail either roll, roll 1D6: on 5+, have an encounter as above with -2 to any Diplomacy roll.</p>
        `,
    },
    {
        tag: 'V019',
        title: 'TARDIS Attacked',
        description: `
            <p>The TARDIS has come under attack by a powerful external force. If current Defence is 3+, the TARDIS takes Damage but you may ignore this event. Otherwise roll 1D6:</p>
            <ul>
                <li><strong>1–2:</strong> An old enemy wants revenge. Your most recent Enemy with Danger 2+ (if none, see E020) has brought you to a new place (roll TM02) to settle a score. Start the Adventure in the Dilemma Phase with +2 to Enemy Danger and +1 VP.</li>
                <li><strong>3–4:</strong> You have been directed somewhere and something is lying in wait. Roll for a Random Destination (TM02) and before choosing an Action, make an immediate Enemy Action roll (R009).</li>
                <li><strong>5–6:</strong> See V06.</li>
            </ul>
        `,
    },
    {
        tag: 'TM01',
        title: 'Temporal Destination Matrix',
        description: `
            <table>
                <thead>
                    <tr>
                        <td class="w-12"><strong>Era Destination</strong></td>
                        <td><strong>Code 1</strong></td>
                        <td><strong>Code 2</strong></td>
                        <td><strong>Code 3</strong></td>
                        <td><strong>Code 4</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Antiquity (up to 475 AD)</td>
                    <td>A011</td><td>A011</td><td>A011</td><td>A011</td>
                    </tr>
                    <tr>
                    <td>Medieval (476–1300)</td>
                    <td>A019</td><td>A019</td><td>A019</td><td>A019</td>
                    </tr>
                    <tr>
                    <td>Renaissance (1301–1600)</td>
                    <td>A004</td><td>A004</td><td>A004</td><td>A004</td>
                    </tr>
                    <tr>
                    <td>Regency (1601–1836)</td>
                    <td>A013</td><td>A013</td><td>A013</td><td>A013</td>
                    </tr>
                    <tr>
                    <td>Victorian (1837–1913)</td>
                    <td>A003</td><td>A009</td><td>A021</td><td>A021</td>
                    </tr>
                    <tr>
                    <td>World War (1914–1959)</td>
                    <td>A001</td><td>A023</td><td>A001</td><td>A023</td>
                    </tr>
                    <tr>
                    <td>Modern (1960–1999)</td>
                    <td>A017</td><td>A017</td><td>A017</td><td>A017</td>
                    </tr>
                    <tr>
                    <td>Post Modern (2000–2039)</td>
                    <td>A007</td><td>A015</td><td>A007</td><td>A015</td>
                    </tr>
                    <tr>
                    <td>Near Future (2040–2200)</td>
                    <td>A008</td><td>A008</td><td>A008</td><td>A008</td>
                    </tr>
                    <tr>
                    <td>Colonial (2201–3000)</td>
                    <td>A005</td><td>A006</td><td>A012</td><td>A012</td>
                    </tr>
                    <tr>
                    <td>Twilight (3001–6000)</td>
                    <td>A002</td><td>A010</td><td>A014</td><td>A020</td>
                    </tr>
                    <tr>
                    <td>Far Future (6000+)</td>
                    <td>A016</td><td>A016</td><td>A016</td><td>A016</td>
                    </tr>
                    <tr>
                    <td>Dimensional</td>
                    <td>A018</td><td>A022</td><td>A018</td><td>A022</td>
                    </tr>
                    <tr>
                    <td>Holiday</td>
                    <td>A001</td><td>A003</td><td>A016</td><td>A024</td>
                    </tr>
                    <tr>
                    <td>Space</td>
                    <td>A014</td><td>A024</td><td>A010</td><td>A010</td>
                    </tr>
                </tbody>
            </table>
        `,
    },
    {
        tag: 'TM02',
        title: 'Random Vortex Destination',
    },
    {
        tag: 'T00',
        title: 'The TARDIS',
        description: `
            <p>You stand at the console of the TARDIS, your trusty Time and Space machine, as it flies through the twisting miasma of the Time Vortex. A gentle hum fills the air as the glass pillar of lights and instruments rises and falls in front of you.</p>
            <p>You may try to set the controls for a particular destination or just let the TARDIS materialise wherever she wants (T002). Before you get to any destination however, roll 2D6. If the result is 10+, then you have an event in the Vortex (see below). If you have no event, you may try to repair the TARDIS if it has taken Damage (see T005).</p>
            <p>In an Adventure you can return to the TARDIS at any time (T006). At the end of an Adventure, automatically return to this section. After you have completed 3 Adventures, see Q00 below.</p>
            <p><strong>Defences:</strong> X &nbsp;&nbsp; <strong>Navigation:</strong> X &nbsp;&nbsp; <strong>Resources:</strong> X</p>
            <p><strong>Special Rules for a Created Doctor’s TARDIS:</strong><br />
            You must decide on starting values for your TARDIS Qualities. Each Quality starts at 1 and you have another 4 points to distribute as you wish, although you cannot add more than 3 to any single Quality.</p>
            <p>You begin the game by choosing a starting Companion — Caroline Fairfax, Jane Danning or Talia McDowell. Each has their own TARDIS Character card. You start the game with 5 Luck, 3 Idea cards and can choose Gadgets up to 3 Cost.</p>
            <p>Gain +1 to your TARDIS roll when you Set the Controls (T002) for the Renaissance Era (TM01).</p>
            <p><strong>Vortex Events:</strong><br />
            Something has interrupted your flight through the Vortex. Roll 2D6:</p>
            <ul>
                <li><strong>2:</strong> V18</li>
                <li><strong>3:</strong> V07</li>
                <li><strong>4:</strong> V10</li>
                <li><strong>5:</strong> V05</li>
                <li><strong>6:</strong> V03</li>
                <li><strong>7:</strong> V01</li>
                <li><strong>8:</strong> V02</li>
                <li><strong>9:</strong> V04</li>
                <li><strong>10:</strong> V06</li>
                <li><strong>11:</strong> V15</li>
                <li><strong>12:</strong> V11</li>
            </ul>
        `,
    },
    {
        tag: 'Q00',
        title: 'Lost Memory',
        description: `
            <p>As the TARDIS leaves its most recent destination, and you watch the glass rotor rise and fall, you begin to have a nagging feeling that you have forgotten something important. You can’t seem to remember what happened to you a while ago, with only fleeting images of bubbling chemicals contained in old flasks and glassware on shelves and tables of a dark, primitive laboratory. Why does a Renaissance city seem so familiar?</p>
            <p>Make a Brains 15 roll (add Aware from yourself and no other Character) and if successful, gain +1 VP and see <strong>Q00a</strong>. If you fail, make the roll again at the end of each Adventure (adding +1 per previous attempt) until you succeed.</p>
            <p><strong>Q00a. The Apothecary</strong><br />
            You suddenly realise that you spent some time on Earth during the Renaissance Era, posing as a harmless, if slightly eccentric, apothecary. But you have no idea why this happened or what you were doing there...? Perhaps you should return to see if any clues jog your memory?</p>
            <p>During the Discover Phase of your next Renaissance Era Adventure, you may attempt a Move 9 Action (add Aware) to find ‘your’ old shop. Once there, you may then search the shop by making an Aware 9 roll — gain +2 VP and see <strong>Q00b</strong> if successful. Use the Encounter line of the Location with lowest Move number whilst at the shop.</p>
            <p><strong>Q00b. The Fob-Watch</strong><br />
            (Gadget) You find an old watch covered in Gallifreyan symbols — what secrets does it hold? Start a (Mind Control) Conflict with the watch (Brains 4). If successful, gain 1 Luck point, but roll again at the end of each Adventure. If you fail, you succumb to its influence and the voices and memories come flooding back.</p>
            <p>You must create a new regeneration (r002) of your Doctor, but add 5 points for Qualities and choose 10 skills. You retain current Luck but gain +3 VP and see <strong>Q00c</strong>.</p>
            <p><strong>Q00c. The Enemy</strong><br />
            You now remember your true self but not how you originally lost your memories. You may install the watch into the TARDIS console and determine a Random Destination (TM02). When the Enemy is revealed, add an additional +2 to the D6 roll on r018.</p>
            <p>If you Defeat this Enemy then you have won the game. If you fail, lose 2 VP and have a -2 modifier on the Setback table (r015). Any further Adventure where you encounter an Enemy with this keyword will be against this specific Enemy with the same reward and penalties.</p>
        `,
    },
    {
        tag: 'T09',
        title: 'The TARDIS (Ninth Doctor)',
        description: `
            <p>You stand at the console of the TARDIS, your trusty Time and Space machine, as it flies through the twisting miasma of the Time Vortex. A gentle hum fills the air as the glass pillar of lights and instruments rises and falls in front of you.</p>
            <p>You may try to set the controls for a particular destination or just let the TARDIS materialise wherever she wants (T002). Before you get to any destination however, roll 2D6. If the result is 10+, then you have an event in the Vortex (see below). If you have no event, you may try to repair the TARDIS if it has taken Damage (see T005).</p>
            <p>In an Adventure you can return to the TARDIS at any time (T006). At the end of an Adventure, automatically return to this section. After you have completed 3 Adventures, see <strong>Q09</strong> below.</p>
            <p><strong>Defences:</strong> 4 &nbsp;&nbsp; <strong>Navigation:</strong> 2 &nbsp;&nbsp; <strong>Resources:</strong> 1</p>
            <p><strong>Special Rules for the Ninth Doctor’s TARDIS:</strong><br />
            You begin the game with Rose Tyler as a Companion. You may also choose to spend 3 Luck and have Jack Harkness as a Companion. Each has their own TARDIS Character card. If you do not start with Jack Harkness as a Companion, you may encounter him instead of a Character event in a World War Era or Twilight Era Adventure by spending 2 Luck (once only).</p>
            <p>You start the game with 5 Luck, 3 Idea cards and can choose Gadgets up to 3 Cost.</p>
            <p>Gain +1 to your TARDIS roll when you Set the Controls (T002) for a Space Destination (TM01).</p>
            <p><strong>Vortex Events:</strong><br />
            Something has interrupted your flight through the Vortex. Roll 2D6:</p>
            <ul>
                <li><strong>2:</strong> V18</li>
                <li><strong>3:</strong> V17</li>
                <li><strong>4:</strong> V10</li>
                <li><strong>5:</strong> V05</li>
                <li><strong>6:</strong> V03</li>
                <li><strong>7:</strong> V01</li>
                <li><strong>8:</strong> V02</li>
                <li><strong>9:</strong> V04</li>
                <li><strong>10:</strong> V06</li>
                <li><strong>11:</strong> V09</li>
                <li><strong>12:</strong> V11</li>
            </ul>
        `,
    },
    {
        tag: 'Q09',
        title: 'Bad Wolf',
        description: `
            <p>You suddenly realise that in your most recent adventures you have always heard two words – ‘bad wolf’. The phrase seems to be following you about. In further Adventures, any Plot event roll of 7, in addition to the stated effect in the Adventure, also has some connection to ‘bad wolf’...</p>
            <p>If you make an Aware 9 roll, gain +1 VP and see <strong>Q09a</strong> at the end of the Adventure. If you fail, make the roll again at the end of each Adventure (adding +1 per previous attempt) until you succeed.</p>
            <p><strong>Q09a. Messages from Other Times</strong><br />
            The occurrences of ‘Bad Wolf’ are now plainly obvious to you. There must be some connection, but what? In further Adventures, any Plot event roll of 11–12, in addition to stated effect in Adventure, also has some connection.</p>
            <p>If you visit this Location in Adventure, make a Brains 12 roll (add +1 for each previous attempt) to gain +1 VP and see <strong>Q09b</strong> at the end of the Adventure.</p>
            <p><strong>Q09b. Heart of the TARDIS</strong><br />
            As you travel through the Time Vortex, you reflect on ‘Bad Wolf’, and what it could mean, but suddenly notice that the TARDIS familiar hum is not quite right. What could be affecting her?</p>
            <p>Vortex events (T003) in the TARDIS now occur on a roll of 9+. However, instead of then rolling 2D6 for the Vortex event, automatically see V09, adding +2 to the roll. If you then roll 7+, lose 1 Luck point and see <strong>Q09c</strong> immediately.</p>
            <p><strong>Q09c. Transformation</strong><br />
            A panel on the TARDIS console suddenly shatters and an incandescent beam of Vortex energy leaps from it and into the body of your Companion (randomly selected, but if you have no Companion, roll again on V09) who is now shrouded in an unearthly glow.</p>
            <p>Slowly the glow fades except the eyes... Your Companion has now been transformed into the ‘Bad Wolf’. You know that a body cannot possibly contain so much energy but before you can do anything further, the TARDIS suddenly materialises and the doors open (see TM02 for Destination).</p>
            <p>Add +5 to all the Companion’s Qualities (+10 if Danger 10+). Each time they use their Qualities in a roll however, they must rest for a full Turn (2 Turns if Danger 10+) and can take no Action. At the end of the Adventure however, your Companion’s body fails and they are killed (lose 5 VP). You may prevent this by taking the Vortex Energy into yourself, but you must then regenerate (see r015 but gain 3 Luck for your sacrifice), whilst your Companion returns to normal.</p>
        `,
    },
    {
        tag: 'T10',
        title: 'The TARDIS (Tenth Doctor)',
        description: `
            <p>You stand at the console of the TARDIS, your trusty Time and Space machine, as it flies through the twisting miasma of the Time Vortex. A gentle hum fills the air as the glass pillar of lights and instruments rises and falls in front of you.</p>
            <p>You may try to set the controls for a particular destination or just let the TARDIS materialise wherever she wants (T002). Before you get to any destination however, roll 2D6. If the result is 10+, then you have an event in the Vortex (see below). If you have no event, you may try to repair the TARDIS if it has taken Damage (see T005).</p>
            <p>In an Adventure you can return to the TARDIS at any time (T006). At the end of an Adventure, automatically return to this section. After you have completed 4 Adventures, see <strong>Q10</strong> below.</p>
            <p><strong>Defences:</strong> 3 &nbsp;&nbsp; <strong>Navigation:</strong> 3 &nbsp;&nbsp; <strong>Resources:</strong> 1</p>
            <p><strong>Special Rules for the Tenth Doctor’s TARDIS:</strong><br />
            You begin the game with either Martha Jones or Donna Noble as a Companion. Each has a TARDIS Character card. If not a starting Companion, you may encounter Martha Jones or Donna Noble instead of a Character event in a Post Modern Era Adventure by spending 2 Luck (once only).</p>
            <p>You start the game with 5 Luck, 3 Idea cards and Gadgets up to 3 Cost.</p>
            <p>Gain +1 to your TARDIS roll when you Set the Controls (T002) for a Holiday Destination (TM01).</p>
            <p><strong>Vortex Events:</strong><br />
            Something has interrupted your flight through the Vortex. Roll 2D6:</p>
            <ul>
                <li><strong>2:</strong> V18</li>
                <li><strong>3:</strong> V17</li>
                <li><strong>4:</strong> V10</li>
                <li><strong>5:</strong> V05</li>
                <li><strong>6:</strong> V03</li>
                <li><strong>7:</strong> V01</li>
                <li><strong>8:</strong> V02</li>
                <li><strong>9:</strong> V04</li>
                <li><strong>10:</strong> V06</li>
                <li><strong>11:</strong> V14</li>
                <li><strong>12:</strong> V11</li>
            </ul>
        `,
    },
    {
        tag: 'Q10',
        title: 'Cryptic Prophecy',
        description: `
            <p>As you were about to leave in the TARDIS from your last Adventure, one of your Allies looks at you strangely and tells you that ‘he will knock four times...’ What could this possibly mean?</p>
            <p>Lose 1 Luck point. If you ever meet a Character with Aware 2, lose 1 Luck point as the prophecy is repeated. Vortex events (T003) now occur on a roll of 9+. However, instead of rolling 2D6 for the Vortex event, automatically see <strong>Q10a</strong>.</p>
            <p><strong>Q10a. Mysterious Summons</strong><br />
            Your mind is touched by the Ood, reaching out across time as they are troubled by bad dreams. Something is returning from the darkness...</p>
            <p>You must visit the Ood Sphere (A020) and reach the Ood City Location where you must gain an Audience with Ood Elders (Special Event) and achieve a result of 7+. If you visit any other Adventure before going to the Ood Sphere, you must lose 1 Luck point each time. If you gain a 7+ with your Audience, gain 1 VP and see <strong>Q10b</strong> instead of rolling on the table there.</p>
            <p><strong>Q10b. The End of Time</strong><br />
            Something vast is stirring in the dark. The Ood have gained the power to see through time as time is bleeding. Shapes of things once lost are moving through the veil, and events threaten to destroy the future, the present, and the past.</p>
            <p>Randomly select a Dalek or Time Lord Enemy with Danger 3 that you previously Defeated (if none, use E002). Roll for a Random Destination (TM02) where Enemy can be encountered. When you go there, add +3 Danger but start Adventure in Dilemma Phase. When the Goal is revealed, see below instead. If you do not Defeat the Enemy, the game is over.</p>
            <p><strong>Gallifrey Rises (Time Lord Enemy) (9VP; Apocalypse):</strong> The Time Lord is attempting to resurrect Gallifrey from the ashes of the Time War. The Time Lord and any Minions are +1 to all Qualities. You may either:
                <ul>
                    <li>Persuade Time Lord: Win a (Brainwash) Conflict against the Time Lord (counting only Brains from the Doctor).</li>
                    <li>Prevent Materialisation: Move to TARDIS and make a Prevent Action (add TARDIS). Add +1 Danger and lose 1 from TARDIS Defence if you fail.</li>
                </ul>
            </p>
            <p><strong>Gallifrey Falls (Dalek Enemy) (9VP; Apocalypse):</strong> The Daleks are attempting to revisit the Time War and eradicate Gallifrey from all planes of existence – this time the Daleks will be victorious! Daleks are +1 to all Qualities. You may either:
                <ul>
                    <li>Hide Gallifrey in Time Pocket: Make a Brains 15 roll (only Time Lords can add to total). Then Move to TARDIS and make a Prevent Action (add TARDIS). Add +1 Danger and lose 1 from TARDIS Defence if you fail.</li>
                    <li>Destroy Dalek Command: Make a Prevent Action (add Engineer) at the Dalek Lair. If you succeed, any Character without Running is killed. If you fail, add +1 Danger and have an Enemy encounter.</li>
                </ul>
            </p>
        `,
    },
    {
        tag: 'T11',
        title: 'The TARDIS (Eleventh Doctor)',
        description: `
            <p>You stand at the console of the TARDIS, your trusty Time and Space machine, as it flies through the twisting miasma of the Time Vortex. A gentle hum fills the air as the glass pillar of lights and instruments rises and falls in front of you.</p>
            <p>You may try to set the controls for a particular destination or just let the TARDIS materialise wherever she wants (T002). Before you get to any destination however, roll 2D6. If the result is 10+, then you have an event in the Vortex (see below). If you have no event, you may try to repair the TARDIS if it has taken Damage (see T005).</p>
            <p>In an Adventure you can return to the TARDIS at any time (T006). At the end of an Adventure, automatically return to this section. After you have completed 2 Adventures, see <strong>Q11</strong> below.</p>
            <p><strong>Defences:</strong> 2 &nbsp;&nbsp; <strong>Navigation:</strong> 4 &nbsp;&nbsp; <strong>Resources:</strong> 1</p>
            <p><strong>Special Rules for the Eleventh Doctor’s TARDIS:</strong><br />
            You begin the game with Amy Pond as a Companion. You may also spend 2 Luck to have Rory Williams as a Companion. If you do not start with Rory Williams as a Companion, you may encounter him instead of a Character event in a Post Modern Era Adventure by spending 2 Luck.</p>
            <p>You start the game with 5 Luck, 3 Idea cards and Gadgets up to 3 Cost.</p>
            <p>Gain +1 to your TARDIS roll when you Set the Controls (T002) for a non-Earth Destination (TM01).</p>
            <p><strong>Vortex Events:</strong><br />
            Something has interrupted your flight through the Vortex. Roll 2D6:</p>
            <ul>
                <li><strong>2:</strong> V16</li>
                <li><strong>3:</strong> V07</li>
                <li><strong>4:</strong> V10</li>
                <li><strong>5:</strong> V05</li>
                <li><strong>6:</strong> V03</li>
                <li><strong>7:</strong> V01</li>
                <li><strong>8:</strong> V02</li>
                <li><strong>9:</strong> V04</li>
                <li><strong>10:</strong> V06</li>
                <li><strong>11:</strong> V12</li>
                <li><strong>12:</strong> V11</li>
            </ul>
        `,
    },
    {
        tag: 'Q11',
        title: 'Cracks in Time',
        description: `
            <p>As the TARDIS leaves its most recent destination, you look up at the scanner and see a jagged crack imposed upon the screen. The glass isn’t broken, so what could it mean?</p>
            <p>On subsequent Adventures, the first time you roll for an Incident, you instead witness a ‘crack in time’ at a Location. Add +1 Danger (+2 Danger if a Temporal Enemy has been revealed). You must make a Brains 15 roll (add Aware, but only the Doctor can contribute, +1 per previous Adventure where you discovered a crack) and if successful, gain +1 VP and see <strong>Q11a</strong>. If you fail, repeat the process in the next Adventure.</p>
            <p><strong>Q11a. The Cracks Widen</strong><br />
            By now, you have realised that something very powerful has caused the skin of the universe to split. This could mean the destruction of all reality! You have to find the cause before it’s too late...</p>
            <p>Continue to roll for Cracks as in Q11 but now choose to add +2 Danger (+3 if a Temporal Enemy) or kill 1 Character present. Make a Brains 20 roll (same conditions as Q11) and if successful you discover a jagged piece of the TARDIS door sign within a Crack. You realise that the destruction of the TARDIS is causing the Cracks – gain +1 VP and see <strong>Q11b</strong>.</p>
            <p><strong>Q11b. The Painting</strong><br />
            After returning to the TARDIS, you receive a distress call – see V12. When you meet the sender of the message, you are given a painting by your old friend Vincent van Gogh, called ‘The Pandorica Opens’ that shows the TARDIS being destroyed. Looking closer at the painting, you discover space-time co-ordinates.</p>
            <p>Immediately lose 1D3 Luck. After completing the current Adventure (continuing Q11a Crack roll), roll for Random Destination (TM02 but Adventure must have a Temporal enemy on the Enemy line – roll again if none). If the painting was given to you by a Friend, they will go with you. When you reach destination, gain +2 VP and see <strong>Q11c</strong>.</p>
            <p><strong>Q11c. The Pandorica is Destroyed</strong><br />
            Begin Adventure normally but add +3 Danger and roll one last time on Q11a. When rolling for an Enemy, roll on the Temporal Enemy line (r018) and when the Goal is revealed, use the Goal here:</p>
            <ul>
                <li><strong>Destroy TARDIS (8VP; Apocalypse):</strong> The Enemy, having named the TARDIS ‘the Pandorica’ after an ancient legend, is attempting to destroy it! If you lose the Adventure then you lose the game. You must return to the TARDIS and then:</li>
                <ul>
                    <li>Lure Enemy into Time Loop: Add +2 Danger. Make a TARDIS 9 roll to prepare the ship. Lose 1 Defence if you fail. Then win an (Outwit) Conflict against the Enemy. Kill a Character if you fail.</li>
                </ul>
            </ul>
        `,
    },
    {
        tag: 'T12',
        title: 'The TARDIS (Twelfth Doctor)',
        description: `
            <p>You stand at the console of the TARDIS, your trusty Time and Space machine, as it flies through the twisting miasma of the Time Vortex. A gentle hum fills the air as the glass pillar of lights and instruments rises and falls in front of you.</p>
            <p>You may try to set the controls for a particular destination or just let the TARDIS materialise wherever she wants (T002). Before you get to any destination however, roll 2D6. If the result is 10+, then you have an event in the Vortex (see below). If you have no event, you may try to repair the TARDIS if it has taken Damage (see T005).</p>
            <p>In an Adventure you can return to the TARDIS at any time (T006). At the end of an Adventure, automatically return to this section. After you have completed 4 Adventures, see <strong>Q12</strong> below.</p>
            <p><strong>Defences:</strong> 2 &nbsp;&nbsp; <strong>Navigation:</strong> 3 &nbsp;&nbsp; <strong>Resources:</strong> 2</p>
            <p><strong>Special Rules for the Twelfth Doctor’s TARDIS:</strong><br />
            You begin the game with either Clara Oswald or Bill Potts as a Companion. Each has a TARDIS Character card. If not a starting Companion, you may encounter Clara Oswald or Bill Potts instead of a Character event in a Post Modern Era Adventure by spending 2 Luck (once only).</p>
            <p>You start the game with 5 Luck, 3 Idea cards and can choose Gadgets up to 3 Cost.</p>
            <p>Gain +1 to your TARDIS roll when you Set the Controls (T002) for the Post Modern Era (TM01).</p>
            <p><strong>Vortex Events:</strong><br />
            Something has interrupted your flight through the Vortex. Roll 2D6:</p>
            <ul>
                <li><strong>2:</strong> V19</li>
                <li><strong>3:</strong> V12</li>
                <li><strong>4:</strong> V10</li>
                <li><strong>5:</strong> V05</li>
                <li><strong>6:</strong> V03</li>
                <li><strong>7:</strong> V01</li>
                <li><strong>8:</strong> V02</li>
                <li><strong>9:</strong> V04</li>
                <li><strong>10:</strong> V06</li>
                <li><strong>11:</strong> V14</li>
                <li><strong>12:</strong> V11</li>
            </ul>
        `,
    },
    {
        tag: 'Q12',
        title: 'A Call for Aid',
        description: `
            <p>As the TARDIS leaves its most recent destination, you are surprised to see the scanner spring to life and the face of one of your most dangerous foes revealed – Missy. Even more surprising is that she is asking for your help! Her latest desperate scheme has backfired and she is being held captive.</p>
            <p>You must roll for a random destination (TM02) and when you arrive there perform a successful Rescue Action at the Location with the highest Move number. Then gain 1 VP and see <strong>Q12a</strong>.</p>
            <p><strong>Q12a. Time Vault</strong><br />
            Having rescued Missy (see E032 for Qualities and Skills), she joins as an Ally (but counts as a TARDIS Character) for the rest of the Adventure, helping you to Defeat the Enemy here. At the end of the Adventure, Missy pledges to change her ways and stop her evil plans. Not quite trusting her goodwill yet, you decide to build a Time Vault, an ancient Gallifreyan prison. This costs 3 Resources of your TARDIS (you must try to pay cost by using Luck if not enough Resources). After building the Vault, gain 2 VP and see <strong>Q12b</strong>.</p>
            <p><strong>Q12b. On Guard</strong><br />
            You must now guard the Vault between your Adventures and build a rapport with Missy as she atones for her past crimes and you ensure her pledges are genuine. However it is unwise to keep the Time Vault within your TARDIS, due to possible interstitial anomalies, so you must choose a suitable planet (with 0 Danger) where the vault can be left.</p>
            <p>When you have done this and left the Vault there, you may return to the vault after each Adventure (add +1 to TARDIS roll to get there). Roll 1D6: On a result of 2+ you need not have an Adventure where the Vault is located (unless you wish to). If you don’t have an Adventure (or before it starts if you do), you may spend 1 Luck to visit Missy in the Vault and make a Charm roll (using Charm from only the Doctor and adding +1 per previous visit):</p>
            <ul>
                <li><strong>2-7:</strong> Missy is still in contemplation – no further result</li>
                <li><strong>8-11:</strong> Missy offers help and advice – add +2 to one Brains or Skill (using a Skill which Miss has – see E032) roll in your next Adventure</li>
                <li><strong>12+:</strong> Missy is redeemed – gain +3 VP and see <strong>Q12c</strong></li>
            </ul>
            <p>Note that if you roll E032 as an Enemy in any Adventure, Missy has escaped from the Time Vault, all her empty promises forgotten. Lose 3 VP and you cannot progress further in Q12. Take a -1 penalty in any Encounter option rolls with Missy.</p>
            <p><strong>Q12c. Redemption</strong><br />
            Missy has apparently turned aside from her old ways and wants to stand with you as old friends once more - she joins you as a Companion. Gain 1 Luck point but take a -1 penalty for her and other Companions on Companion Leaving rolls whilst she is with you. If she stays as your Companion for 3 further Adventures, gain +3 VP.</p>
        `,
    },
]
