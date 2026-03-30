import RulePage from '../components/RulePage'

const sections = [
    {
        label: 'Capture Incident',
        content: (
            <>
                <p>
                    If no Characters are captured there is no Incident.
                    Otherwise roll 1D6:
                </p>
                <ol className="mb-3">
                    <li>
                        <strong>Guarded:</strong> Add +1 to the Capture number
                        of any Captured Characters.
                    </li>
                    <li>
                        <strong>Interrogation:</strong> Add +X Danger where X =
                        3 minus the captured Character's Bravery (random if more
                        than one captive, minimum 0).
                    </li>
                    <li>
                        <strong>Fellow Prisoner:</strong> Roll for a Character
                        event who becomes an Ally if possible. Add +1 to Escape
                        Actions due to their help.
                    </li>
                    <li>
                        <strong>Enslaved:</strong> At the start of each Turn
                        whilst captured, roll 2D6 adding the number of captured
                        Characters. On 10+, add +1 Danger.
                    </li>
                    <li>
                        <strong>Marked for Execution:</strong> At the start of
                        each Turn whilst Captured, roll 1D6 for each captured
                        Character. On a 1, that Character is killed.
                    </li>
                    <li>
                        <strong>Lair:</strong> If captured by an Enemy, the
                        Character is moved to the Enemy Lair if possible.
                    </li>
                </ol>
            </>
        ),
    },
    {
        label: 'Companion Captured',
        content: (
            <>
                <p>A random Companion is captured. Roll 1D6:</p>
                <ul>
                    <li>
                        <strong>1–3:</strong> captured at Enemy Lair
                    </li>
                    <li>
                        <strong>4–6:</strong> captured at a random Location
                    </li>
                </ul>
                <p>
                    If no Capture number is given, use Captured (8) or (9) at a
                    Lair.
                </p>
            </>
        ),
    },
    {
        label: 'Companion Investigates',
        content: (
            <p>
                Place a random Companion alone at a random new Location and gain
                +1 Knowledge. Apply any Enemy Action result this Turn to that
                Companion.
            </p>
        ),
    },
    {
        label: 'Companion Trapped',
        content: (
            <p>
                A random Companion is trapped and can take no Action (and has no
                Encounters) until other Characters at the same Location make a
                Brawn 9 roll as an Action.
            </p>
        ),
    },
    {
        label: 'Complications',
        content: (
            <p>
                In the Discover or Dilemma Phase, you need +2 Knowledge to
                reveal the Enemy or Goal. In the Defeat Phase, all Prevent
                Action rolls have a -1 penalty.
            </p>
        ),
    },
    {
        label: 'Enemy Plans Disrupted',
        content: <p>The Enemy's plans have gone awry — reduce Danger by 2.</p>,
    },
    {
        label: 'Lost',
        content: (
            <p>
                A random group at an Exterior, Cave or Corridor Location with no
                native Character becomes Lost and cannot complete Actions until
                making a Brains (add Aware) 10 roll as an Action (+1 per
                subsequent roll) or other Characters regroup with them.
            </p>
        ),
    },
    {
        label: 'Rumours',
        content: (
            <p>
                You have heard vague clues about something strange. You may
                Investigate as an Action next Turn. If you could already
                Investigate, roll for a Plot event instead.
            </p>
        ),
    },
    {
        label: 'Separated',
        content: (
            <p>
                Select a group with 2 or more TARDIS Characters and split them
                (and any Allies) into two random groups. Place one group at a
                new Location. If none qualify, no further event.
            </p>
        ),
    },
    {
        label: 'Someone In Danger',
        content: (
            <p>
                Roll for a Character event (but do not resolve), then reveal the
                Enemy and have an Encounter. At the end of the encounter, the
                Character joins you as an Ally if possible.
            </p>
        ),
    },
    {
        label: 'TARDIS Blocked',
        content: (
            <p>
                Something has blocked the TARDIS doors — you cannot enter unless
                you make a Brawn 10 roll as an Action at the TARDIS Location.
            </p>
        ),
    },
    {
        label: 'Traitor',
        content: (
            <p>
                A random Ally is revealed to be working against you and joins
                the Enemy as a Minion. Discard the Ally and choose: Group
                becomes Captured (8) OR lose 3 Luck OR add +2 Danger.
            </p>
        ),
    },
    {
        label: 'Unexpected Help',
        content: (
            <p>
                Spend 1 Luck for a random Character event, 3 Luck to choose a
                Character event, or 2 Luck to encounter a Friend native to this
                Adventure at the Doctor's Location.
            </p>
        ),
    },
    {
        label: 'What Have You Done?',
        content: (
            <p>
                Sometimes allies do stupid things — add +2 Danger if you have a
                Companion or Ally with Brains 1 or less.
            </p>
        ),
    },
]

function Incidents() {
    return (
        <>
            <RulePage tag="R011" title="Incidents" sections={sections}>
                <p>
                    Random Incidents can affect the course of your Adventures —
                    the Doctor and Companions being separated or captured, the
                    actions of Allies, or pure chance. An Incident may be
                    triggered by a Location Encounter, an Action table or an
                    Enemy Action roll. When this happens, roll 2D6 on the table
                    below for the current Phase and apply the result.
                </p>
                <table className="text-sm">
                    <thead>
                        <tr>
                            <td className="w-4">
                                <strong>2D6</strong>
                            </td>
                            <td>
                                <strong>Discover</strong>
                            </td>
                            <td>
                                <strong>Dilemma</strong>
                            </td>
                            <td>
                                <strong>Defeat</strong>
                            </td>
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
                <p>
                    <em>
                        * If you have no Companion, there is no Incident this
                        Turn.
                    </em>
                </p>
            </RulePage>
        </>
    )
}

export default Incidents
