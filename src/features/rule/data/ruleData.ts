import type { Rule } from '../types/RuleType'

export const ruleData: Rule[] = [
    {
        tag: 'R001',
        title: 'Characters and Concepts',
        description: `
            <p>All Characters in DWSSG3e including the Doctor, Companions, Allies and Enemies are described using 3 Qualities and up to 12 different Skills. Special Keywords are used for some Characters or Enemies, and TARDIS Characters (the Doctor and his Companions) also have various Abilities that can help you succeed in Adventures.</p>
            <p><strong>Qualities:</strong> Each Character has a Brains, Brawn and Bravery value. These are rated numerically, with higher numbers being better and a human average of 1. A Quality of 2 is above average and 3 is gifted. The Doctor typically has Brains 5. The dreaded Daleks might have a Brawn of 8.</p>
            <p><strong>Skills:</strong> Characters also have Skills which are useful throughout the game. Characters may have 2 or 3 (max) in a Skill, such as Diplomacy 2 or Charm 3. There are 12 different Skills: Aware, Charm, Computers, Diplomacy, Engineer, History, Medicine, Pilot, Running, Science, Stealth, TARDIS.</p>
            <p><strong>Quality and Skill Rolls:</strong> Any Quality or Skill roll uses 2D6 to equal or exceed a target number for a success, such as History 9 or Brains 12. Roll 2D6 and either count all matching Skills your group has, or total the Quality of the Characters involved. If the total equals or exceeds the target number, you have succeeded. Sometimes an event will only allow you to add your personal Skills or Qualities as the Doctor.</p>
            <p><em>Example: The Eleventh Doctor and Amy Pond are trying to Evade the Weeping Angels. The target number is Running 10. Both have Running as a Skill, so they add +2 to the 2D6 roll, needing an 8 to succeed.</em></p>
            <p><strong>Keywords:</strong> Some Characters have keywords such as Leader or UNIT, referenced by Adventures, Enemies or on cards.</p>
            <p><strong>Abilities:</strong> Some Characters, especially TARDIS Characters or Allies, have abilities that help in Adventures, such as adding +1 to certain Actions. Using the Ability of a TARDIS Character often requires spending Luck points.</p>
            <p><strong>Allies:</strong> If a Character joins you as an Ally, note their Qualities, Skills and Keywords. Other Characters may simply go on their way unless they join you. All Characters are Human unless otherwise noted. If gender is unclear, roll 1D6: 1-3 Male, 4-6 Female.</p>
            <p><strong>Luck:</strong> You start with 5 Luck points, used to re-roll dice after a failed Quality or Skill roll or an Action result. Lose 1 Luck point and roll again — you may not spend another if you still dislike the result. Luck points are gained through events, gaining Companions and Defeating Enemies.</p>
            <p><strong>Victory Points:</strong> You gain VP for successfully Defeating Enemies in Adventures. Each Enemy Goal has VP shown next to it. Bonus VP can be gained in other ways, such as meeting Historical Icons. Gaining VP makes Adventures more difficult. If you gain 30 VP, you have won the game.</p>
            <p><strong>Tokens:</strong> Luck and VP need tokens to track current totals on your TARDIS Mat. Other tokens track TARDIS Qualities, Turns, Danger and Knowledge totals during Adventures.</p>
            <p><strong>Cards:</strong> The Doctor, Companions and Friends all have Character cards showing their Qualities, Skills and Abilities. Each Gadget also has a card, as does the deck of Idea cards.</p>
            <p><strong>Dice:</strong> Rolling dice is abbreviated to 'roll 1D6' or 'roll 2D6'. 1D3 is simply a 1D6 roll halved (round up).</p>
        `,
    },
    {
        tag: 'R002',
        title: 'TARDIS Characters and Friends',
        description: `
            <p>A TARDIS Character is either the Doctor or any brave Companion who travels through Time and Space in the TARDIS. Friends are semi-regular Characters that the Doctor encounters but who are not quite Companions, such as River Song.</p>
            <p><strong>The Doctor:</strong> You play DWSSG3e as the Doctor, a Time Lord of Gallifrey. The Core Set features the 9th–12th Doctors as Character cards, with other Doctors in future expansions. Each card details Qualities, Skills and Abilities along with a famous quote. It is recommended that new players start with one of these Doctors.</p>
            <p><em>Example: The 12th Doctor may spend 2 Luck points to add +2 to any Quality when involved in a Conflict.</em></p>
            <p><strong>Creating the Doctor:</strong> If you prefer not to play as an existing Doctor, you may create your own incarnation. You have base Brains 4, Brawn 1 and Bravery 3, plus 4 extra points to distribute — no more than 2 to any one Quality. Then choose any 8 Skills (particularly useful: Aware, Charm, Running and Stealth). You may choose one Skill twice. Then choose one Ability (see R017).</p>
            <p><em>Example: Add 2 to Brains, 1 to Brawn and 1 to Bravery for Brains 6, Brawn 2 and Bravery 4. Choose Aware, Engineer 2, History, Running, Science, Stealth and TARDIS.</em></p>
            <p><strong>Companions:</strong> These are the special people who join you in your Adventures aboard the TARDIS, such as Clara Oswald, Donna Noble or Bill Potts. The Core Set provides two Companions for each of the 9th–12th Doctors. Each Companion card details Qualities, Skills, Abilities and their native Era where they can be encountered (see R004). If you created your own Doctor, 3 new Companions are provided to start with.</p>
            <p>You may encounter Companions in Adventures. Sometimes they join you willingly, but often the Doctor must make a Charm roll to convince them — other Characters cannot add their Charm to this roll. Gaining Companions normally gains Luck points.</p>
            <p>Companions do not stay permanently. After each Adventure, roll 1D6. If you roll less than the number of Companions with you, one leaves randomly. If this happens, roll another 1D6 — if the result is greater than the number of Companions still with you, gain 1D3 Luck points for a tearful farewell. You may also voluntarily let Companions leave.</p>
            <p><strong>Friends:</strong> Friends are identified by a Friend Icon and have the same information as Companions — Qualities, Skills and Abilities. They are only encountered in certain Adventures (no spoilers…). Place Friend cards into play when instructed and remove them when the Adventure ends. Some Friends can only enter play if you have a certain Companion or other Friend already in play — for example, Wilf Mott requires Donna Noble.</p>
            <p><strong>Cheat Death:</strong> TARDIS Characters are harder to kill than normal Allies. Whenever a Companion would be killed, you may have a random Ally be killed instead. Whenever the Doctor would be killed, you may have a random Companion or Ally be killed instead (lose 3 VP if a Companion is killed). You may also spend 3 Luck points to prevent any TARDIS Character from being killed.</p>
        `,
    },
    {
        tag: 'R003',
        title: 'Idea Cards',
        description: `
            <p>These cards represent the various ideas, plans and quirks that the Doctor uses to defeat his enemies. There are 30 Idea cards in this Core Set — 3 for each Doctor (9th–12th, shown by the Doctor Icon) and 18 generic ones (with no Doctor Icon). Each Idea card has a Luck Cost to play, shown by the upper left green circle icon.</p>
            <p>At the start of the game, construct your 12 card Idea deck from all generic Idea cards plus the cards that correspond to your Doctor. If playing a created Doctor (see R002), construct your deck from generic Idea cards only. Shuffle the deck and draw 3 random Idea cards for your starting Adventure.</p>
            <p>Idea cards may be played at any time in an Adventure as long as you can meet the Luck cost. Most are one use only and are then discarded, but some attach to the Doctor and remain until the end of the Adventure.</p>
            <p>If you have less than 3 Idea cards between Adventures, you may draw a new one. You may also spend 1 VP to gain a new Idea card (one only) at the end of a successful Adventure. You may never have more than 5 Idea cards in your hand at any time. You may also discard an Idea card at any time to gain 1 Luck point.</p>
            <p>You may add new Idea cards to your deck after Adventures (see R012).</p>
        `,
    },
    {
        tag: 'R004',
        title: 'The TARDIS',
        description: `
            <p>Your amazing craft that takes you through Time and Space is where you start and end Adventures. Details of how the TARDIS is piloted are given in the TARDIS Manual, which shows how to reach the various Adventures. Each Doctor also has a separate TARDIS section starting with 'T' that matches their regeneration (so T09 is the Ninth Doctor's TARDIS section).</p>
            <p>The TARDIS, like other Characters, has 3 Qualities — Defense, Navigation and Resources — tracked on your TARDIS Mat. Piloting the TARDIS requires a successful TARDIS Skill roll against the TARDIS number given in the Adventure booklet. Each Adventure has an Era. Some Eras, such as the Post Modern Era, are easier to reach with lower TARDIS numbers than more exotic destinations.</p>
            <p>You may choose to reach somewhere specific or let the TARDIS decide on a random Adventure or Era. When flying through the Time Vortex between Adventures, you may have a Vortex Event — some alter your destination, others deposit unexpected visitors in the console room or cause damage to the TARDIS. Make repairs when you can (see TARDIS Manual for details).</p>
        `,
    },
    {
        tag: 'R005',
        title: 'Gadgets',
        description: `
            <p>Gadget cards represent devices either carried by the Doctor (Sonic Screwdriver icon) or systems aboard the TARDIS (TARDIS console icon). Each Gadget card has a Luck cost to purchase shown at the top left. Some also have a Doctor Icon indicating which Doctor can use them. Gadgets do not cost Luck to use — only to purchase.</p>
            <p>At the start of the game you may choose up to 3 Cost in Gadgets. You may also spend TARDIS Resources to buy TARDIS Gadgets (see TARDIS Manual) and spend Luck points to gain new Gadgets after completing a successful Adventure (R012).</p>
            <p>You may gain devices in Adventures, but unless they have the 'Gadget' keyword they are lost at the end of that Adventure. Gadgets including all TARDIS Gadgets normally remain between Adventures. The Doctor may only carry up to 3 Gadgets, and the TARDIS may only have 3 TARDIS Gadgets. A Companion cannot normally carry any Gadgets unless otherwise noted. Excess Gadgets must be discarded immediately. Unless stated, Gadgets are not unique — you may have duplicates but may only use one at a time.</p>
        `,
    },
    {
        tag: 'R006',
        title: 'Adventures',
        description: `
            <p>Adventures in the Adventure Booklet tell you where the TARDIS has landed — Earth, a massive spaceship, a far-distant planet, the Dalek home-planet of Skaro or other amazing destinations throughout Time and Space. Each Adventure has a TARDIS number, a date, an Era, optional keywords such as Holiday or Wilderness, a Danger modifier (normally 0–2), a Knowledge total (normally about 5) and a Victory Point bonus for successful completion.</p>
            <p>Each Adventure is represented by 2 sheets listing all Locations you can visit, possible Enemies, Characters you meet, Plots you discover and some special events, rules or Characters.</p>
            <p><strong>Eras:</strong> DWSSG3e uses 12 different Eras to define a rough chronology. The Actions available change with the Era — you can't Research with a computer in the Regency Era, for example. The default Era of present-day Earth is the Post Modern Era (2000–2030). The Modern Era spans 1960–1999, with several Eras both before and after, from Antiquity up to the Far Future. Some Adventures have no defined Era, such as Dimensional Adventures or those set on Gallifrey — these specify what Actions and rules apply.</p>
            <p><strong>Danger and Knowledge:</strong> Both are tracked on your TARDIS Mat throughout an Adventure.</p>
            <ul>
                <li><strong>Danger</strong> represents how threatening the situation is. It increases via events and conditions and automatically by 1 at the end of each Turn. If Danger ever reaches 20, the Enemy has completed their Goal — you lose the Adventure and take a Setback (see R015).</li>
                <li><strong>Knowledge</strong> starts at 0 and is gained from Plot events, Characters and other sources. Gaining Knowledge first reveals the Enemy, then their Goal.</li>
            </ul>
            <p><strong>Enemy:</strong> Each Adventure has an Enemy line used when the Enemy is revealed. You use the keyword to roll on the Enemy tables (R018) to determine the exact Enemy.</p>
            <p><strong>Locations:</strong> Each Adventure contains Locations you can visit, such as a castle, a spaceship bridge or a London landmark. Locations may have keywords like Exterior or Dark, a Move number as the target for a Move Action, modifiers to Actions and often an Encounter roll resolved after your Actions (R008). The usual Landing Location is the first one listed. Some Adventures require a 1D6 roll for a random Landing Location.</p>
            <p><strong>Groups of Characters:</strong> Characters may separate into two or more groups. When 2 groups are at the same Location they may regroup. You may only choose to separate when you have at least 1 TARDIS Character in each group. If forced to separate randomly, some groups may have no TARDIS Characters.</p>
            <p><strong>Adventure Phases:</strong> An Adventure is split into 3 distinct Phases.</p>
            <ul>
                <li><strong>Discover Phase:</strong> Discover the identity of the Enemy by having an Enemy encounter, a 'reveal Enemy' result, or gaining enough Knowledge. When revealed, roll 1D6 on the Enemy line to determine the exact Enemy, add any Danger noted on the Enemy sheet and reduce Knowledge to 0.</li>
                <li><strong>Dilemma Phase:</strong> Discover the Enemy plan by gaining Knowledge equal to the Scheme value on the Enemy sheet, or via a 'reveal Goal' result. When revealed, roll 1D6 for the specific Goal and reduce Knowledge to 0. Plot Events in this Phase grant +1 Knowledge instead.</li>
                <li><strong>Defeat Phase:</strong> Stop the Enemy reaching their Goal. Each Goal details two possible ways to stop the Enemy. Plot Events in this Phase grant +1 Knowledge, which may help complete a Goal or discover an Enemy Lair (see R007).</li>
            </ul>
            <p>If you complete the Goal requirements before Danger reaches 20, you Defeat the Enemy and win the Adventure. If not, you have been Defeated — see Winning and Losing below.</p>
            <p><strong>Turn Sequence:</strong> When the TARDIS lands, set the initial Danger value, Knowledge to 0 and the Turn counter to 1. Place a marker on the Discover Phase box. Each Turn:</p>
            <ul>
                <li>Choose and resolve Player Action(s) for your TARDIS Crew.</li>
                <li>Roll and resolve any Encounters at Locations.</li>
                <li>Roll for Enemy Action.</li>
                <li>Add +1 to current Danger.</li>
            </ul>
            <p><strong>Night in Adventures:</strong> Some Adventures feature Night rules that alter Exterior Location encounters, modify rolls or change rules. At Night, Exterior Locations become Dark (+1 to Stealth rolls). All Human Characters must spend 1 Turn resting and take no Action or be -1 to all Qualities until the end of the Adventure. When Night falls and how long it lasts is detailed on the Adventure sheet.</p>
            <p><strong>Winning and Losing Adventures:</strong></p>
            <ul>
                <li><strong>If you win:</strong> Gain Victory Points given by the Goal — Apocalypse Goals gain more VP than Capture Goals. Some Adventures also have bonus VP. See Ending Adventures (R012).</li>
                <li><strong>If you lose:</strong> Roll 2D6 on the Setback table (R015), with modifiers based on the Goal type and the Danger bonus of the Enemy.</li>
            </ul>
        `,
    },
    {
        tag: 'R007',
        title: 'Enemies',
        description: `
            <p>You will encounter many Characters on your travels but also deadly Enemies — both old and new, from the dreaded Daleks to the Master. All have entries beginning with 'E' in the Enemy booklet. At the start of an Adventure you do not know what Enemy you face — the objective of the Discover Phase is to reveal them by gaining Knowledge.</p>
            <p>All Enemies have a Danger value added to the current Danger when revealed, indicating how hard they are to Defeat. Daleks with +3 Danger are much tougher than most — beware! Once revealed, all further Enemy encounters in that Adventure are with the same Enemy.</p>
            <p><strong>Keywords:</strong> The exact Enemy is determined through keywords such as Military, Entity or Gothic. Once you have the keyword from the Adventure, roll on the Enemy table (R018). As Enemies are added in future expansions, this table will be revised.</p>
            <p><strong>Encounters:</strong> All Enemies have an Encounter section indicating how many Enemies you have met (rolled again each encounter), their Qualities and several options such as Conflicts (R008), Evade or Surrender — each resolved with a dice roll.</p>
            <p><strong>Evade Enemies:</strong> If you successfully Evade using Running and are not at an Exterior Location, your Characters go to the Location with the lowest Move number. If you roll doubles in a successful Running roll, your Characters separate into two random groups and go to two different Locations.</p>
            <p>If you successfully Evade using Stealth by at least 2, you may as an Action next turn follow the Enemy to their Lair. You may then choose to enter the Lair or not.</p>
            <p><strong>Plots & Schemes:</strong> Once the Enemy is revealed and the Adventure enters the Dilemma Phase, your Knowledge resets to 0. Gain Knowledge equal to the Scheme value on the Enemy sheet to discover the Goal. You can also discover it through Enemy encounters — often if captured and a Leader gloats over their plans.</p>
            <p><strong>Goals:</strong> A Goal is what the Enemy is trying to achieve — invading a planet, meddling with time or resurrecting an ancient evil. Each Enemy usually has 3 different potential Goals, each with a type such as Invasion or Meddling and a VP value. Once revealed, roll 1D6 on the Enemy sheet to determine which Goal applies. Each Goal has two options to stop it, normally via Quality or Skill rolls, gaining Knowledge or making Prevent Actions. You may choose either option and swap freely. Complete the Goal conditions before Danger reaches 20 to win.</p>
            <p><strong>Enemy Events:</strong> Each Enemy sheet has a list of events resolved with a D6 roll, accessed through Location Encounters, the Enemy Action roll (R009) or an Incident (R011). If an Enemy event is required but the Enemy is not yet revealed, you have an Incident instead.</p>
            <p><strong>Lairs:</strong> A Lair is a special Location on the Enemy sheet — a base, ship or secret place where the Enemy makes their plans. You cannot reach a Lair with a normal Move Action. It must be discovered by being Captured, an Encounter specifying a Lair, through a Goal, a Stealth Evade follow, or by losing 2 Knowledge (Dilemma or Defeat Phase only). Going to a Lair can be dangerous but may also provide ways to Defeat the Enemy.</p>
            <p><strong>Unique Enemies:</strong> Enemies with a specific name, such as Davros or Missy, are Unique. Even if 'killed' during an Adventure, Unique Enemies rarely stay dead — if encountered later they are assumed to have escaped and live again.</p>
            <p><strong>Leaders, Troops & Minions:</strong> These keywords define different Enemy types. Leaders such as Davros are often more dangerous, sometimes Unique and almost always gloat. Troops are soldiers such as the average Dalek or Sontaran. Minions are guards or servant races like Ogrons.</p>
        `,
    },
    {
        tag: 'R008',
        title: 'Actions in Adventures',
        description: `
            <p>Actions are the heart of DWSSG3e. Through Actions you Explore the environment, Investigate the Enemy's plans, Find Help and ultimately Prevent the Enemy reaching their Goal. Different Actions are available at different Phases, and some such as Relax or Research have restrictions in certain Eras or Locations. Captured Characters may only choose Escape. For Actions available in the TARDIS, see T005.</p>
            <p>Each Turn, select an Action for each group and roll 2D6 on the corresponding Action table (R014), adding bonuses or modifiers. Escape, Move and Rescue have no table but still require a 2D6 roll. All Actions must be chosen before any are resolved.</p>
            <p><strong>Available Actions by Phase:</strong></p>
            <ul>
                <li><strong>Discover Phase:</strong> Relax, Study, Explore, Investigate</li>
                <li><strong>Dilemma Phase:</strong> Seek Information, Research, Find Help, Challenge</li>
                <li><strong>Defeat Phase:</strong> Research, Plan, Find Help, Challenge, Prevent</li>
                <li><strong>All Phases:</strong> Move, Escape, Rescue</li>
            </ul>
            <p><strong>Challenge (Dilemma/Defeat):</strong> Confront the Enemy directly to learn more about their plans or stop them. May only be chosen if the Enemy has an Outwit Conflict option and only using Characters with Bravery 3+. Add modifiers as shown on the Challenge Action Table. This is a risky Action that adds to Danger in the Dilemma Phase.</p>
            <p><strong>Escape (Captured Characters):</strong> Roll 2D6 and add modifiers — a Sonic Screwdriver may give a bonus, an Enemy Lair a penalty. Each successive Escape Action gains a cumulative +1 modifier. If you roll a natural 2, the attempt fails and you must roll for a Capture Incident (R011). If you equal or exceed the Capture number, all Characters captured together escape. They may then stay at the current Location or Move to the Location with the lowest Move number. Captured Characters cannot choose other Actions and do not roll for Encounters.</p>
            <p><strong>Explore (Discover):</strong> Step out of the TARDIS and explore the area. Add +1 if you have a native Character with you. If you roll doubles, resolve the result on the Explore table, then Characters are randomly split into two groups — the smaller group moves to a random Location.</p>
            <p><strong>Find Help (Dilemma/Defeat):</strong> Get help finding information to reveal the Enemy Goal or gain local support for the final confrontation. Especially important when combat or high Quality totals are needed for a Prevent Action. Cannot be chosen at a Wilderness Location or inside an Enemy Lair. Add modifiers from the Find Help table based on Skills and your Adventure.</p>
            <p><strong>Investigate (Discover):</strong> Find out more about what is happening to reveal the Enemy. May only be chosen if you have at least 2 Knowledge or have had a Plot event. Add bonuses for various Skills as shown on the Investigate table. If you roll doubles, add +2 to the Enemy Action roll this Turn.</p>
            <p><strong>Move (Any):</strong> Move to a Location or regroup separated Characters. Each Location has a Move number — roll 2D6 adding Running. Modifiers: +1 with a native Character, +1 per previous attempt, +2 if previously visited, -1 if moving from a Dark Location. Characters Move as a group and do not roll individually.</p>
            <p><strong>Plan (Defeat):</strong> Increase your chances of Defeating the Enemy by gaining Quality boosts or new Skills to fulfill Goal conditions. Choose the Quality or Skill needed, then roll on the Plan Action table adding modifiers. Skills and Quality boosts are assigned to a Character in the group but last only until the end of the Adventure.</p>
            <p><strong>Prevent (Defeat):</strong> Actively attempt to stop the Enemy completing their objective. Tied to the Goal on the Enemy sheet — may not be chosen unless stated on the Goal, and may only take place at an Enemy Lair or a Location indicated on the Goal. Add modifiers as shown on the Goal plus +1 per previous Prevent Action taken in the Adventure.</p>
            <p><strong>Relax (Discover):</strong> Take in sights, go shopping or kick back and enjoy yourselves. May only be chosen at an Adventure with the Holiday keyword and before having a Plot event. Add +1 with a native Companion (not cumulative with multiple native Companions). If you roll doubles, gain an Idea card (R003).</p>
            <p><strong>Research (Dilemma/Defeat):</strong> Gain information about the Enemy Goal using a specific Skill. Choose from Computers, Engineer, History, Medicine or Science — limited by the Adventure Era. Add +1 per chosen Skill (max +3). You may not Research Computers or History in a Wilderness Adventure or Location.</p>
            <p><strong>Rescue (Captured Characters):</strong> If at least one Character is free, attempt to Rescue captured Characters. Rescuers must be at the same Location as the captives. Roll 2D6 adding Stealth Skills plus modifiers from Gadgets or Locations. If the result equals or exceeds the Capture number, all captives are rescued. If you roll 4 or less, have an immediate Enemy encounter — in the Discover Phase, the rescuers are instead captured too. Always resolve Rescue before Escape if both are attempted in the same Turn.</p>
            <p><strong>Seek Information (Dilemma):</strong> Similar to Investigate but using a specific Skill. Only one Skill per group per Turn. Skills available depend on the Adventure Era — only Stealth may be used in a Wilderness Adventure or Location. Add +1 per chosen Skill (max +3). If you roll doubles, the Enemy Action roll this Turn will result in an Enemy Encounter.</p>
            <p><strong>Study (Discover):</strong> Indulge in a period of study at a Museum or place of knowledge. Only available before you have Plot events. Add modifiers for various Skills depending on Era and Location. If you roll doubles, gain 1VP.</p>
        `,
    },
    {
        tag: 'R009',
        title: 'Enemy Action Rolls',
        description: `
            <p>Your Enemies also get to take Actions every Turn. The Enemy Action roll represents the Enemy furthering their plans, patrolling Locations and attempting to capture or exterminate you. It also includes random events — helpful and problematic — such as being separated from Companions or receiving unexpected help.</p>
            <p>An Enemy Action roll takes place every Turn after all Actions and Encounters are resolved. Roll 2D6 and consult the table below depending on the current Phase:</p>
            <table class="text-sm">
                <thead>
                    <tr>
                        <td class="w-4"><strong>Roll</strong></td>
                        <td><strong>Discover Phase</strong></td>
                        <td><strong>Dilemma Phase</strong></td>
                        <td><strong>Defeat Phase</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>Incident</td>
                        <td>Incident</td>
                        <td>Incident</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Incident</td>
                        <td>Incident</td>
                        <td>Nothing</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Incident</td>
                        <td>Nothing</td>
                        <td>Nothing</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nothing</td>
                        <td>Nothing</td>
                        <td>Plotting (+1 Danger)</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Nothing</td>
                        <td>Plotting (+1 Danger)</td>
                        <td>Enemy event</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Nothing</td>
                        <td>Enemy event</td>
                        <td>Enemy event</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Plotting (+1 Danger)</td>
                        <td>Enemy event</td>
                        <td>Enemy encounter</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Plotting (+1 Danger)</td>
                        <td>Enemy encounter</td>
                        <td>Enemy encounter</td>
                    </tr>
                    <tr>
                        <td>10–12</td>
                        <td>Enemy encounter</td>
                        <td>Enemy encounter</td>
                        <td>Enemy encounter</td>
                    </tr>
                </tbody>
            </table>
            <p>The Adventure Phase changes immediately when conditions are met — keep track of the current Phase when rolling. Incidents are explained in R011. Enemy encounters and events are given in the Enemy Booklet.</p>
            <ul>
                <li>If an Enemy event is required during the Discover Phase, you have an Incident instead.</li>
                <li>If an Enemy encounter occurs in the Discover Phase, the Enemy is automatically revealed and then encountered.</li>
                <li>If Characters are separated, randomly select which group has the Enemy encounter — ignoring Captured Characters.</li>
                <li>If ALL Characters are Captured, ignore the Enemy encounter and have a Capture Incident instead (R011).</li>
                <li>Characters inside the TARDIS cannot be targeted by an Enemy encounter unless noted on the Enemy sheet.</li>
                <li>A 'Nothing' result means no further event this Turn.</li>
                <li>Danger from 'Plotting' is in addition to the usual +1 Danger at the end of each Turn.</li>
            </ul>
        `,
    },
    {
        tag: 'R010',
        title: 'Conflicts',
        description: `
            <p>When the Doctor and Companions encounter Enemies or hostile Characters, a Conflict can start. Conflicts are varied — the Cybermen might start an Attack Conflict, the Great Intelligence a Mind Control Conflict, or the Weeping Angels a Terrify Conflict. There are 9 different Conflict types.</p>
            <p>Each Conflict is resolved with a 2D6 roll, matching a Quality total of the Enemy against a Quality total of your Characters. The target number is 7, modified by the difference between your Characters' Quality total and the Enemy Quality total. A natural 2 is always a failure, a natural 12 always a success. A Luck point may always be used to re-roll a Conflict.</p>
            <table class="text-sm">
                <thead>
                    <tr>
                        <td><strong>Conflict Type</strong></td>
                        <td><strong>Quality (Enemy / Player)</strong></td>
                        <td><strong>Player Fails (6 or less)</strong></td>
                        <td><strong>Player Succeeds (7+)</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Attack</td>
                        <td>Brawn v Brawn</td>
                        <td>1 Character is killed (2 if 10+ Brawn difference)</td>
                        <td>Choose -1 Danger OR gain 1 Luck</td>
                    </tr>
                    <tr>
                        <td>Brainwash</td>
                        <td>Bravery v Brains</td>
                        <td>Character with lowest Brains is frozen</td>
                        <td>Choose +1 Knowledge OR gain 1 Luck</td>
                    </tr>
                    <tr>
                        <td>Capture</td>
                        <td>Brawn v Brains</td>
                        <td>All Characters become Captured (8 if no number given)</td>
                        <td>Gain 1 Luck</td>
                    </tr>
                    <tr>
                        <td>Dominate</td>
                        <td>Brawn v Bravery</td>
                        <td>+1 Danger OR discard Ally with lowest Bravery</td>
                        <td>Choose -1 Danger OR gain 1 Luck</td>
                    </tr>
                    <tr>
                        <td>Drain Life-force</td>
                        <td>Bravery v Brawn</td>
                        <td>Character with lowest Bravery is killed</td>
                        <td>Choose -1 Danger OR gain 1 Luck</td>
                    </tr>
                    <tr>
                        <td>Mind Control</td>
                        <td>Brains v Bravery</td>
                        <td>Character with lowest Bravery is frozen</td>
                        <td>Choose +1 Knowledge OR gain 1 Luck</td>
                    </tr>
                    <tr>
                        <td>Outwit*</td>
                        <td>Brains v Brains</td>
                        <td>-1 Knowledge (and +1 Danger if Leader present)</td>
                        <td>+1 Knowledge OR +1 to Prevent Actions OR (if Leader present) pay 1 Luck to reveal the Goal</td>
                    </tr>
                    <tr>
                        <td>Terrify</td>
                        <td>Bravery v Bravery</td>
                        <td>Character with lowest Bravery is killed</td>
                        <td>Choose -1 Danger OR gain 1 Luck</td>
                    </tr>
                    <tr>
                        <td>Trap</td>
                        <td>Brains v Brawn</td>
                        <td>All Characters become Captured (8 if no number given)</td>
                        <td>Gain 1 Luck</td>
                    </tr>
                </tbody>
            </table>
            <p><em>* In an Outwit Conflict only TARDIS Characters, Friends and Special Characters can add their Brains. There is also a -1 penalty per previous Outwit attempt in the Adventure.</em></p>
            <p>A <strong>frozen</strong> Character cannot take Actions, adds no Qualities or Skills to rolls and takes no further part in the Adventure. If the Enemy is Defeated, the frozen Character returns to normal. If the Enemy is not Defeated in the Adventure, the frozen Character is killed.</p>
            <p><strong>Example 1:</strong> The Ninth Doctor (Brawn 2) and Rose Tyler (Brawn 1) encounter a Dalek (Brawn 8) — an Attack Conflict. Their combined Brawn of 3 vs the Dalek's 8 gives a modifier of -5, meaning only a natural 12 wins. With 2 Daleks (Brawn 16), the modifier becomes -13 and since it exceeds 10, both Characters would be killed.</p>
            <p><strong>Example 2:</strong> Amy Pond and 2 soldiers (total Bravery 6) face 2 Weeping Angels (total Bravery 6) — a Terrify Conflict. With equal Bravery the modifier is 0, so 7+ succeeds. At a Dark Location each Angel's Bravery becomes 4 (total 8), giving a -2 penalty and requiring 9+ to succeed.</p>
        `,
    },
    {
        tag: 'R011',
        title: 'Incidents',
        description: `
            <p>Random Incidents can affect the course of your Adventures — the Doctor and Companions being separated or captured, the actions of Allies, or pure chance. An Incident may be triggered by a Location Encounter, an Action table or an Enemy Action roll. When this happens, roll 2D6 on the table below for the current Phase and apply the result.</p>
            <table class="text-sm">
                <thead>
                    <tr>
                        <td class="w-4"><strong>2D6</strong></td>
                        <td><strong>Discover</strong></td>
                        <td><strong>Dilemma</strong></td>
                        <td><strong>Defeat</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2–3</td>
                        <td>Companion Trapped*</td>
                        <td>Traitor</td>
                        <td>Complications</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>What Have You Done?</td>
                        <td>Lost</td>
                        <td>Traitor</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Complications</td>
                        <td>Companion Captured*</td>
                        <td>Companion Captured*</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Lost</td>
                        <td>Complications</td>
                        <td>Separated</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Rumours</td>
                        <td>Separated</td>
                        <td>Capture Incident</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Separated</td>
                        <td>Companion Investigates*</td>
                        <td>Enemy Encounter</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Companion Investigates*</td>
                        <td>Capture Incident</td>
                        <td>Enemy Event</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Someone In Danger</td>
                        <td>Enemy Plan Disrupted</td>
                        <td>Unexpected Help</td>
                    </tr>
                    <tr>
                        <td>11–12</td>
                        <td>TARDIS Blocked</td>
                        <td>Unexpected Help</td>
                        <td>Enemy Plan Disrupted</td>
                    </tr>
                </tbody>
            </table>
            <p><em>* If you have no Companion, there is no Incident this Turn.</em></p>
            <p><strong>Capture Incident:</strong> If no Characters are captured there is no Incident. Otherwise roll 1D6:</p>
            <ol>
                <li><strong>Guarded:</strong> Add +1 to the Capture number of any Captured Characters.</li>
                <li><strong>Interrogation:</strong> Add +X Danger where X = 3 minus the captured Character's Bravery (random if more than one captive, minimum 0).</li>
                <li><strong>Fellow Prisoner:</strong> Roll for a Character event who becomes an Ally if possible. Add +1 to Escape Actions due to their help.</li>
                <li><strong>Enslaved:</strong> At the start of each Turn whilst captured, roll 2D6 adding the number of captured Characters. On 10+, add +1 Danger.</li>
                <li><strong>Marked for Execution:</strong> At the start of each Turn whilst Captured, roll 1D6 for each captured Character. On a 1, that Character is killed.</li>
                <li><strong>Lair:</strong> If captured by an Enemy, the Character is moved to the Enemy Lair if possible.</li>
            </ol>
            <p><strong>Companion Captured:</strong> A random Companion is captured. Roll 1D6: 1–3 captured at Enemy Lair, 4–6 captured at a random Location. If no Capture number is given, use Captured (8) or (9) at a Lair.</p>
            <p><strong>Companion Investigates:</strong> Place a random Companion alone at a random new Location and gain +1 Knowledge. Apply any Enemy Action result this Turn to that Companion.</p>
            <p><strong>Companion Trapped:</strong> A random Companion is trapped and can take no Action (and has no Encounters) until other Characters at the same Location make a Brawn 9 roll as an Action.</p>
            <p><strong>Complications:</strong> In the Discover or Dilemma Phase, you need +2 Knowledge to reveal the Enemy or Goal. In the Defeat Phase, all Prevent Action rolls have a -1 penalty.</p>
            <p><strong>Enemy Plans Disrupted:</strong> The Enemy's plans have gone awry — reduce Danger by 2.</p>
            <p><strong>Lost:</strong> A random group at an Exterior, Cave or Corridor Location with no native Character becomes Lost and cannot complete Actions until making a Brains (add Aware) 10 roll as an Action (+1 per subsequent roll) or other Characters regroup with them.</p>
            <p><strong>Rumours:</strong> You have heard vague clues about something strange. You may Investigate as an Action next Turn. If you could already Investigate, roll for a Plot event instead.</p>
            <p><strong>Separated:</strong> Select a group with 2 or more TARDIS Characters and split them (and any Allies) into two random groups. Place one group at a new Location. If none qualify, no further event.</p>
            <p><strong>Someone In Danger:</strong> Roll for a Character event (but do not resolve), then reveal the Enemy and have an Encounter. At the end of the encounter, the Character joins you as an Ally if possible.</p>
            <p><strong>TARDIS Blocked:</strong> Something has blocked the TARDIS doors — you cannot enter unless you make a Brawn 10 roll as an Action at the TARDIS Location.</p>
            <p><strong>Traitor:</strong> A random Ally is revealed to be working against you and joins the Enemy as a Minion. Discard the Ally and choose: Group becomes Captured (8) OR lose 3 Luck OR add +2 Danger.</p>
            <p><strong>Unexpected Help:</strong> Spend 1 Luck for a random Character event, 3 Luck to choose a Character event, or 2 Luck to encounter a Friend native to this Adventure at the Doctor's Location.</p>
            <p><strong>What Have You Done?</strong> Sometimes allies do stupid things — add +2 Danger if you have a Companion or Ally with Brains 1 or less.</p>
        `,
    },
    {
        tag: 'R012',
        title: 'Ending Adventures',
        description: `
            <p>An Adventure finishes by either successfully Defeating the Enemy and winning, or losing by Danger reaching 20 and the Enemy completing their plan. You also lose the game if you are killed.</p>
            <p><strong>Winning an Adventure:</strong> Gain Victory Points as shown on the Enemy Goal, plus any Adventure bonus VP. If you now have 30 VP you have won the game! Otherwise return to the TARDIS and journey onwards (see TARDIS Manual). Any separated or captured Companions are returned to you. Check for a Companion Leaving roll (R002), draw an Idea card if you have fewer than 3 (R003), then spend VP and Luck as shown below.</p>
            <p><strong>Losing an Adventure:</strong> Roll 2D6 on the Setback table (R015). If this does not end the game, return to the TARDIS and journey onwards. Any separated or captured Companions are returned to you. Check for a Companion Leaving roll (R002), then spend any existing VP and Luck as shown below.</p>
            <p><strong>Using Victory Points after Adventures:</strong></p>
            <ul>
                <li>Spend 1 VP (only) to gain a new Idea card (R003).</li>
                <li>Spend up to 2 VP to gain 3 Luck per VP spent.</li>
            </ul>
            <p><strong>Using Luck Points after Adventures:</strong></p>
            <ul>
                <li><strong>Increasing Qualities:</strong> Costs Luck equal to three times the desired value. Example: 6 Luck to increase Brawn 1 to 2, 9 Luck to increase Brains 2 to 3.</li>
                <li><strong>Increasing Skills:</strong> Gaining a new Skill costs 5 Luck. Increasing an existing Skill costs 8 Luck (1 to 2) or 12 Luck (2 to 3). You may never have more than 3 in any Skill.</li>
                <li><strong>Personalities and Abilities:</strong> Boost TARDIS Characters by purchasing Personalities for Companions (R016) and Abilities for the Doctor (R017).</li>
                <li><strong>Gain Gadget:</strong> Spend Luck equal to the Cost of the Gadget card.</li>
                <li><strong>Increasing TARDIS Qualities:</strong> See T001 in the TARDIS Manual.</li>
                <li><strong>Adding Idea cards to deck:</strong> Spend 1 Luck to choose a new generic Idea card and shuffle your Idea deck.</li>
            </ul>
        `,
    },
    {
        tag: 'R013',
        title: 'Skill and Keyword Descriptions',
        description: `
            <p>A complete list of Skills and Keywords for Characters, Enemies and Adventures is given below.</p>
            <p><strong>Skills</strong></p>
            <ul>
                <li><strong>Aware:</strong> The ability to notice things or be aware of travelling through Space and Time. Used when choosing to Investigate or noticing something hidden. An important Skill for the Doctor and Companions.</li>
                <li><strong>Charm:</strong> Represents appeal, charm and good looks. Possessed by almost all incarnations of the Doctor and most Companions. Very important for talking to Characters and convincing Companions to join you.</li>
                <li><strong>Computers:</strong> The ability to operate, gain information from and sabotage a computer. Can be added when Seeking Information as an Action.</li>
                <li><strong>Diplomacy:</strong> Knowledge of how government works and how to handle sensitive conflicts between different sides. An important leader like Harriet Jones might be Diplomacy 2.</li>
                <li><strong>Engineer:</strong> Covers everything from starting starship engines to taking apart machines to building a device to capture a dinosaur. A very useful Skill usually possessed by the Doctor.</li>
                <li><strong>History:</strong> Covers Earth History, Galactic History and all things ancient. You may be required to make a History roll to determine the meaning of mysterious runes.</li>
                <li><strong>Medicine:</strong> The ability to heal wounds, treat infections and know about all things medical. Characters like Martha Jones or Rory Williams will have Medicine.</li>
                <li><strong>Pilot:</strong> The ability to drive a vehicle well — from land rovers to space shuttles. Does not affect flying the TARDIS. Used to escape a chase or operate a rocket.</li>
                <li><strong>Running:</strong> A hugely useful Skill as Adventures always involve a huge amount of Running. Used to evade Enemies and almost mandatory for the Doctor and Companions.</li>
                <li><strong>Science:</strong> Covers all areas of chemistry, temporal physics and alien biology. Used to help Research Actions and can be added to Prevent Actions to stop various Goals. The Doctor nearly always has Science.</li>
                <li><strong>Stealth:</strong> Used to hide from Enemies in an encounter or sneak into their Lair. Gains a +1 bonus at Dark Locations.</li>
                <li><strong>TARDIS:</strong> The ability to fly the TARDIS through the Time Vortex. Possessed by River Song and most incarnations of the Doctor. Only Time Lords can choose this Skill.</li>
            </ul>
            <p><strong>Keywords — Characters</strong></p>
            <ul>
                <li><strong>Creature:</strong> Usually unintelligent denizens of dark caves and impenetrable jungles throughout the universe — from giant rats to Mandrels.</li>
                <li><strong>Icon:</strong> Important historical figures such as Charles Dickens, William Shakespeare or Queen Victoria. Usually grants 1 VP when met. If an Icon Ally is killed, lose Luck equal to the number of Skills they possess. An Icon can never become a Companion.</li>
                <li><strong>Leader:</strong> Signifies rank and command of Characters and Enemies such as the Supreme Dalek or an Ice Lord. Leaders usually have higher Qualities and may have special rules as indicated on Enemy sheets. A Leader is sometimes, but not always, Unique.</li>
                <li><strong>Machine:</strong> A keyword for certain Characters such as K9 or Enemies such as Cybermen. A Machine Character is sometimes not affected by certain Conflicts such as Mind Control.</li>
                <li><strong>Minion:</strong> A servant of the Enemy, which might not be the same species — such as Robomen or the Ogrons used by the Daleks. A Minion is usually subservient but can rebel.</li>
                <li><strong>Troop:</strong> Standard Enemy soldiers, guards or aliens such as the average Dalek or Cyberman.</li>
                <li><strong>UNIT:</strong> The top secret organisation that fights alien invasions, currently led by Kate Stewart. Both Kate and Osgood are Friend cards with the UNIT keyword.</li>
            </ul>
            <p><strong>Keywords — Adventures</strong></p>
            <ul>
                <li><strong>Cold:</strong> Freezing arctic conditions — such as the ice caves of Svartos. Ice Warriors gain a bonus at Cold Locations or Adventures.</li>
                <li><strong>Dark:</strong> Locations such as caves or spooky cellars. Add +1 to Stealth rolls but -1 to Move rolls. Some Enemies such as Weeping Angels gain a bonus in Dark places.</li>
                <li><strong>Exterior:</strong> Any Location that is not enclosed, such as the surface of a planet. Open to the elements and becomes Dark when it is Night. A non-Exterior Location is by default an Interior Location.</li>
                <li><strong>Holiday:</strong> A place where you can Relax as an Action — such as Argolis, the Midnight Resort or the romantic city of Venice.</li>
                <li><strong>Museum:</strong> A place to Study as an Action, such as the Library Planet or the Delirium Archive. May also have special rules for Plot events.</li>
                <li><strong>Night:</strong> When Night falls, all Exterior Locations gain the Dark keyword. Human Characters must rest for 1 Turn or suffer penalties to Qualities (R006). Other modifiers apply as detailed on Adventures and Enemies.</li>
                <li><strong>Water:</strong> Adventures or Locations at coastal locations or near large bodies of water. Some Enemies such as Sea Devils gain a bonus at Water Locations.</li>
                <li><strong>Wilderness:</strong> Planets and Locations with very little sign of civilisation — such as the jungle planet of Eden or the frozen Ood Sphere. You may not Find Help, and Research and Seek Information Actions have restricted Skills.</li>
            </ul>
            <p><strong>Keywords — Enemy</strong></p>
            <ul>
                <li><strong>Chameleon:</strong> Shape-changers with a natural ability (such as Zygons) or technology (such as Autons) to disguise their true appearance and infiltrate humans.</li>
                <li><strong>Criminal:</strong> Enemies escaping from justice whose Goals are often motivated by profit or power — such as Cessair of Diplos or the Slitheen. May have Troops or Minions.</li>
                <li><strong>Earth:</strong> Enemies such as Silurians or Sea Devils with an affinity for planet Earth, sometimes only encountered there.</li>
                <li><strong>Entity:</strong> Shapeless forms that manifest physical existence through servants — such as the Great Intelligence or Celestial Toymaker.</li>
                <li><strong>Gothic:</strong> Enemies easily mistaken for supernatural creatures from horror — such as Weeping Angels and Carrionites.</li>
                <li><strong>Military:</strong> Enemies like the Sontarans or Daleks with invasion and conquest most prevalent in their Goals. Military foes often have Troops.</li>
                <li><strong>Temporal:</strong> Enemies with an affinity or connection with time and time travel — such as the Fendahl, Chronovores and Reapers.</li>
                <li><strong>Time Lord:</strong> A rogue from Gallifrey such as the Master or the Rani. A Time Lord Enemy can be very dangerous with the most difficult Goals to overcome.</li>
                <li><strong>Villain:</strong> A singular Enemy such as Sharaz Jek, Cassandra or the Graske, as opposed to a specific race. Villains often gain aid from Minions.</li>
            </ul>
        `,
    },
    {
        tag: 'R014',
        title: 'Action Tables',
        description: '',
    },
    {
        tag: 'R015',
        title: 'Setback Table',
        description: `
            <p>Even the Doctor cannot always win and must suffer some consequence — minor or devastating. If you lose an Adventure, roll 2D6 on the table below before checking if a Companion Leaves (R002). You may NOT use Luck to re-roll on the Setback Table.</p>
            <p><strong>Modifiers:</strong> -1 if the Enemy had +1 Danger, -2 if +2 Danger or greater. -1 if the Goal had 6 VP, -2 if 7 VP or greater. If you cannot lose enough Luck, lose VP instead. If you cannot lose VP, you must regenerate (see below).</p>
            <table class="text-sm">
                <thead>
                    <tr>
                        <td class="w-5"><strong>Result</strong></td>
                        <td><strong>Title</strong></td>
                        <td><strong>Effect</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0 or less</td>
                        <td>'I don't want to go'</td>
                        <td>You must regenerate (see below)</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Devastated</td>
                        <td>Choose: Lose 8 VP or a random Companion is killed</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Thrown Back</td>
                        <td>Lose 5 VP</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Broken</td>
                        <td>Discard a random Gadget. You cannot buy Gadgets before the next Adventure</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Unimaginative</td>
                        <td>Discard a random Idea Card. You may not gain any more Idea cards before your next Adventure</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Out of Luck</td>
                        <td>Lose 5 Luck</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Reckless</td>
                        <td>Enemy Action rolls have a +1 modifier in your next Adventure</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Impatient</td>
                        <td>Lose 3 Luck</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Distressed</td>
                        <td>Add +3 Danger when you start your next Adventure</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Careless</td>
                        <td>Add +2 to the Enemy Scheme number in your next Adventure</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Distracted</td>
                        <td>Doctor has -1 Brains for the next Adventure</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Melancholic</td>
                        <td>You cannot Relax in the next Adventure</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>'It could have been worse'</td>
                        <td>No effect</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Death:</strong> If a Companion is killed, lose 3 VP unless another value is given. You may choose to have a random Ally killed instead of a Companion, or a random Companion or Ally killed instead of the Doctor (lose 3 VP if a Companion is killed). Spend 3 Luck to prevent any TARDIS Character from being killed. If the Doctor is killed, roll 2D6 — on 7+ you regenerate instead, otherwise the game is over.</p>
            <p><strong>Regeneration:</strong> Return as a new incarnation at the start of the next Turn. Choose Qualities and Skills as if starting the game again (R001) and begin with 4 Luck points. Roll 1D6 for the number of Turns where you are -2 to all Quality and Skill rolls due to regeneration disorientation. If playing a known Doctor, continue as the next incarnation — the 10th regenerating into the 11th and so on.</p>
        `,
    },
    {
        tag: 'R016',
        title: 'Companion Personalities',
        description: `
            <p>The brave souls who travel with the Doctor are much more than just a set of Qualities and Skills. These rules make Companions more varied and interesting. When you gain a new Companion with no listed Personalities, roll on the table below. At the end of an Adventure you may spend 3 Luck to buy any new Personality trait for a Companion. A Companion may never have more than 2 Personality traits.</p>
            <table class="text-sm">
                <thead>
                    <tr>
                        <td class="w-4"><strong>D6</strong></td>
                        <td><strong>1–2</strong></td>
                        <td><strong>3–4</strong></td>
                        <td><strong>5–6</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1–2</td>
                        <td>Curious</td>
                        <td>Protective</td>
                        <td>Independent</td>
                    </tr>
                    <tr>
                        <td>3–4</td>
                        <td>Dedicated</td>
                        <td>Adventurous</td>
                        <td>Appealing</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Compassionate</td>
                        <td>Resourceful</td>
                        <td>Natural Leader</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Moral Code</td>
                        <td>Quick Thinking</td>
                        <td>Determined</td>
                    </tr>
                </tbody>
            </table>
            <ul class="mt-2">
                <li><strong>Adventurous:</strong> Each time you land at an Adventure where this Companion is not native and has not previously visited, gain 1 Luck point.</li>
                <li><strong>Appealing:</strong> This Companion gains an extra Charm Skill in any Character events with Characters of the opposite sex.</li>
                <li><strong>Best of Friends (6 Adventures required):</strong> When this Companion is with you, spend 1 Luck to gain +1 to all your Qualities until the end of the Turn.</li>
                <li><strong>Compassionate:</strong> This Companion will not leave others in danger. Lose 1 Luck point for each Ally who is killed.</li>
                <li><strong>Curious:</strong> This Companion adds +2 to Investigate Actions if not with the Doctor.</li>
                <li><strong>Dedicated:</strong> Requires Computers, Science, Engineer, History or Medicine — choose one. When doing Research with the chosen Skill without the Doctor, gain an extra +1 to the roll.</li>
                <li><strong>Determined:</strong> Add +2 to this Companion's Bravery whenever involved in a Mind Control or Dominate Conflict.</li>
                <li><strong>Experienced (6 Adventures required):</strong> Once per Adventure, may choose to re-roll any Quality or Skill roll that involves them.</li>
                <li><strong>Fashion Icon (2 Adventures required):</strong> Gain +1 to Charm rolls but -1 to Stealth rolls.</li>
                <li><strong>Independent:</strong> Gains +2 to an Explore Action if without the Doctor.</li>
                <li><strong>Loyal (4 Adventures required):</strong> This Companion is excluded from being randomly selected on a Companion Leaving roll.</li>
                <li><strong>Moral Code:</strong> Gains +1 to Bravery in the Defeat Phase and +1 to any Prevent Action that involves them.</li>
                <li><strong>Natural Leader:</strong> When not with the Doctor, gains +1 to Find Help Actions. All other Allies with this Companion are each +1 Bravery.</li>
                <li><strong>Protective:</strong> Choose another TARDIS Character to protect. If that Character is targeted by any Conflict, event, Capture or death, this Companion can be the target instead.</li>
                <li><strong>Quick Thinking:</strong> Once per Turn, if not with the Doctor, you can re-roll a Skill roll that involves them.</li>
                <li><strong>Resourceful:</strong> Add +1 to the roll when making a Skill roll on a Goal or Plot event.</li>
            </ul>
        `,
    },
    {
        tag: 'R017',
        title: 'Doctor Abilities',
        description: `
            <p>Abilities make your incarnation of the Doctor more quirky with interesting personalities and behaviours. They are always advantageous and can give bonuses to various rolls or situations.</p>
            <p>If playing a newly created Doctor, choose Abilities for a total of 2 Cost. At the end of an Adventure you may spend 3 Luck to buy a new Cost 1 Ability or 5 Luck to buy a Cost 2 Ability.</p>
            <ul>
                <li><strong>Appealing (Cost 1):</strong> The Doctor gains an extra Charm Skill in Character events with any Character of the opposite sex.</li>
                <li><strong>Bench Thumping (Cost 1):</strong> Once per Adventure, if you fail an Engineer roll you may immediately roll again.</li>
                <li><strong>Distinctive Clothes (Cost 1):</strong> Take -1 to any Diplomacy and Stealth rolls but once per Adventure add +1 to any Action or Conflict.</li>
                <li><strong>Escape Artist (Cost 2):</strong> Gain +1 to Escape Actions, even without a sonic screwdriver.</li>
                <li><strong>Foolish Exterior (Cost 1):</strong> Gain +1 to the roll in Outwit Conflicts in Enemy encounters in the Dilemma Phase.</li>
                <li><strong>Hypnosis (Cost 1):</strong> Instead of an Outwit Conflict, you may start a Mind Control Conflict against a non-Machine Minion. If successful, that Minion becomes an Ally.</li>
                <li><strong>Inspirational (Cost 1):</strong> Once per Adventure, a Companion or Ally can add +1 to their Bravery for 1 Turn.</li>
                <li><strong>Literary Quotations (Cost 1):</strong> Once per Adventure, add +1 to any Quality of any TARDIS Character for 1 Turn.</li>
                <li><strong>Keen Intellect (Cost 1):</strong> When the Doctor uses Brains in a Conflict, roll twice and take the higher result.</li>
                <li><strong>Master of Disguise (Cost 2):</strong> Requires Stealth. Gain +1 to Stealth rolls in Evade encounter options.</li>
                <li><strong>Mastermind (Cost 2):</strong> When the Goal is revealed, gain a Skill or +2 to a Quality listed on the Goal event until end of Adventure.</li>
                <li><strong>Powers of Observation (Cost 1):</strong> Requires Aware. Once per Adventure, if you fail an Aware roll you may roll again.</li>
                <li><strong>Protective (Cost 1):</strong> If a Companion is the target of a random selection, you may substitute the Doctor if they are together.</li>
                <li><strong>Resourceful Pockets (Cost 1):</strong> Once per Adventure, add +1 to any Skill roll.</li>
                <li><strong>Sense Evil (Cost 1):</strong> If you make an Aware 8 roll before any Plot or Enemy events in an Adventure, you may Investigate as an Action for that Adventure.</li>
                <li><strong>Swordsman (Cost 1):</strong> In the Antiquity, Medieval or Renaissance Eras, gain +2 in Attack Conflicts.</li>
                <li><strong>TARDIS Crew (Cost 1):</strong> Add +1 to the Companion Leaving roll at the end of an Adventure.</li>
                <li><strong>Underestimated (Cost 1):</strong> Add +1 to Surrender rolls.</li>
                <li><strong>Vengeful (Cost 1):</strong> In any Dalek encounter, the Doctor is +1 to Qualities and gains +1 to all Conflicts.</li>
                <li><strong>Venusian Aikido (Cost 2):</strong> Add +2 to any Attack or Trap Conflict against non-Machine Characters.</li>
            </ul>
        `,
    },
    {
        tag: 'R018',
        title: 'Enemy Tables',
        description: `
            <p>When an Enemy is revealed, find the Enemy keyword on the Adventure sheet and roll 1D6 on the entries below to find the actual Enemy. Less dangerous Enemies appear on low rolls and more deadly foes on higher rolls. The D6 roll is modified by your current VP total, which also affects Danger and Scheme values.</p>
            <table class="text-sm">
                <thead>
                    <tr>
                        <td><strong>Current VP</strong></td>
                        <td><strong>D6 Modifier</strong></td>
                        <td><strong>Danger</strong></td>
                        <td><strong>Scheme</strong></td>
                        <td><strong>Misc</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0–5</td>
                        <td>+0</td>
                        <td>+0</td>
                        <td>+0</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>6–12</td>
                        <td>+1</td>
                        <td>+0</td>
                        <td>+0</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>13–18</td>
                        <td>+2</td>
                        <td>+1</td>
                        <td>+0</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>19–24</td>
                        <td>+3</td>
                        <td>+2</td>
                        <td>+1</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>25+</td>
                        <td>+4</td>
                        <td>+3</td>
                        <td>+2</td>
                        <td>+1 Minions or Troops encountered</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Chameleon:</strong> Enemies that are shape-changers either through natural ability or technology.</p>
            <ul>
                <li><strong>1–2:</strong> E018</li>
                <li><strong>3:</strong> E034</li>
                <li><strong>4–5:</strong> E029</li>
                <li><strong>6:</strong> E004</li>
                <li><strong>7:</strong> E017</li>
                <li><strong>8+:</strong> E020</li>
            </ul>
            <p><strong>Criminal:</strong> Enemies often escaping from justice with goals often motivated by profit or power.</p>
            <ul>
                <li><strong>1–2:</strong> E021</li>
                <li><strong>3:</strong> E027</li>
                <li><strong>4–5:</strong> E014</li>
                <li><strong>6:</strong> E009</li>
                <li><strong>7:</strong> E029</li>
                <li><strong>8+:</strong> E030</li>
            </ul>
            <p><strong>Earth:</strong> Enemies that are only found on, or have a special affinity for, our planet Earth.</p>
            <ul>
                <li><strong>1–2:</strong> E013</li>
                <li><strong>3:</strong> E033</li>
                <li><strong>4–5:</strong> E022</li>
                <li><strong>6:</strong> E006</li>
                <li><strong>7:</strong> E023</li>
                <li><strong>8+:</strong> E028</li>
            </ul>
            <p><strong>Entity:</strong> Enemies that are shapeless forms somehow manifesting into physical existence.</p>
            <ul>
                <li><strong>1–2:</strong> E019</li>
                <li><strong>3:</strong> E025</li>
                <li><strong>4:</strong> E003</li>
                <li><strong>5:</strong> E035</li>
                <li><strong>6:</strong> E031</li>
                <li><strong>7+:</strong> E036</li>
            </ul>
            <p><strong>Gothic:</strong> Enemies could be easily mistaken for supernatural creatures from the realms of horror.</p>
            <ul>
                <li><strong>1:</strong> E022</li>
                <li><strong>2:</strong> E006</li>
                <li><strong>3:</strong> E019</li>
                <li><strong>4:</strong> E026</li>
                <li><strong>5:</strong> E034</li>
                <li><strong>6:</strong> E001</li>
                <li><strong>7:</strong> E007</li>
                <li><strong>8+:</strong> E020</li>
            </ul>                
            <p><strong>Military:</strong> Enemies with goals of invasion and conquest most prevalent and include perhaps the most dangerous foes.</p>
            <ul>
                <li><strong>1–2:</strong> E018</li>
                <li><strong>3:</strong> E023</li>
                <li><strong>4–5:</strong> E010</li>
                <li><strong>6:</strong> E005</li>
                <li><strong>7:</strong> E008</li>
                <li><strong>8:</strong> E012</li>
                <li><strong>9:</strong> E002</li>
                <li><strong>10+:</strong> E028</li>
            </ul>
            <p><strong>Temporal:</strong> Enemies that have some affinity or connection with time and time travel.</p>
            <ul>
                <li><strong>1:</strong> E026</li>
                <li><strong>2:</strong> E033</li>
                <li><strong>3:</strong> E007</li>
                <li><strong>4–5:</strong> E025</li>
                <li><strong>6:</strong> E001</li>
                <li><strong>7+:</strong> E031</li>
            </ul>
            <p><strong>Time Lord:</strong> Enemies from the Doctor's home planet of Gallifrey.</p>
            <ul>
                <li><strong>1–2:</strong> E011</li>
                <li><strong>3–4:</strong> E024</li>
                <li><strong>5+:</strong> E032</li>
            </ul>                
            <p><strong>Villain:</strong> A singular Enemy but with a range of different motives and goals.</p>
            <ul>
                <li><strong>1–2:</strong> E021</li>
                <li><strong>3–4:</strong> E027</li>
                <li><strong>5–6:</strong> E016</li>
                <li><strong>7+:</strong> E015</li>
            </ul>
        `,
    },
]
