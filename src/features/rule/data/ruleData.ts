import type { Rule } from '../types/RuleType'

export const ruleData: Rule[] = [
    {
        tag: 'R001',
        title: 'Characters and Concepts',
    },
    {
        tag: 'R002',
        title: 'TARDIS Characters and Friends',
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
    },
    {
        tag: 'R009',
        title: 'Enemy Action Rolls',
        description: `
            <p>Your Enemies also get to take Actions every Turn. The Enemy Action roll represents the Enemy furthering their plans, patrolling Locations and attempting to capture or exterminate you. It also includes random events — helpful and problematic — such as being separated from Companions or receiving unexpected help.</p>
            <p>An Enemy Action roll takes place every Turn after all Actions and Encounters are resolved. Roll 2D6 and consult the table below depending on the current Phase:</p>
            <table>
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
            <table>
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
    },
    {
        tag: 'R014',
        title: 'Action Tables',
    },
    {
        tag: 'R015',
        title: 'Setback Table',
        description: `
            <p>Even the Doctor cannot always win and must suffer some consequence — minor or devastating. If you lose an Adventure, roll 2D6 on the table below before checking if a Companion Leaves (R002). You may NOT use Luck to re-roll on the Setback Table.</p>
            <p><strong>Modifiers:</strong> -1 if the Enemy had +1 Danger, -2 if +2 Danger or greater. -1 if the Goal had 6 VP, -2 if 7 VP or greater. If you cannot lose enough Luck, lose VP instead. If you cannot lose VP, you must regenerate (see below).</p>
            <table>
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
            <table>
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
    },
]
