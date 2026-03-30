import RulePage from '../components/RulePage'

const sections = [
    {
        label: 'Available Actions by Phase',
        content: (
            <ul className="mb-3">
                <li>
                    <strong>Discover Phase:</strong> Relax, Study, Explore,
                    Investigate
                </li>
                <li>
                    <strong>Dilemma Phase:</strong> Seek Information, Research,
                    Find Help, Challenge
                </li>
                <li>
                    <strong>Defeat Phase:</strong> Research, Plan, Find Help,
                    Challenge, Prevent
                </li>
                <li>
                    <strong>All Phases:</strong> Move, Escape, Rescue
                </li>
            </ul>
        ),
    },
    {
        label: 'Challenge (Dilemma/Defeat)',
        content: (
            <p>
                Confront the Enemy directly to learn more about their plans or
                stop them. May only be chosen if the Enemy has an Outwit
                Conflict option and only using Characters with Bravery 3+. Add
                modifiers as shown on the Challenge Action Table. This is a
                risky Action that adds to Danger in the Dilemma Phase.
            </p>
        ),
    },
    {
        label: 'Escape (Captured Characters)',
        content: (
            <p>
                Roll 2D6 and add modifiers — a Sonic Screwdriver may give a
                bonus, an Enemy Lair a penalty. Each successive Escape Action
                gains a cumulative +1 modifier. If you roll a natural 2, the
                attempt fails and you must roll for a Capture Incident (R011).
                If you equal or exceed the Capture number, all Characters
                captured together escape. They may then stay at the current
                Location or Move to the Location with the lowest Move number.
                Captured Characters cannot choose other Actions and do not roll
                for Encounters.
            </p>
        ),
    },
    {
        label: 'Explore (Discover)',
        content: (
            <p>
                Step out of the TARDIS and explore the area. Add +1 if you have
                a native Character with you. If you roll doubles, resolve the
                result on the Explore table, then Characters are randomly split
                into two groups — the smaller group moves to a random Location.
            </p>
        ),
    },
    {
        label: 'Find Help (Dilemma/Defeat)',
        content: (
            <p>
                Get help finding information to reveal the Enemy Goal or gain
                local support for the final confrontation. Especially important
                when combat or high Quality totals are needed for a Prevent
                Action. Cannot be chosen at a Wilderness Location or inside an
                Enemy Lair. Add modifiers from the Find Help table based on
                Skills and your Adventure.
            </p>
        ),
    },
    {
        label: 'Investigate (Discover)',
        content: (
            <p>
                Find out more about what is happening to reveal the Enemy. May
                only be chosen if you have at least 2 Knowledge or have had a
                Plot event. Add bonuses for various Skills as shown on the
                Investigate table. If you roll doubles, add +2 to the Enemy
                Action roll this Turn.
            </p>
        ),
    },
    {
        label: 'Move (Any)',
        content: (
            <p>
                Move to a Location or regroup separated Characters. Each
                Location has a Move number — roll 2D6 adding Running. Modifiers:
                +1 with a native Character, +1 per previous attempt, +2 if
                previously visited, -1 if moving from a Dark Location.
                Characters Move as a group and do not roll individually.
            </p>
        ),
    },
    {
        label: 'Plan (Defeat)',
        content: (
            <p>
                Increase your chances of Defeating the Enemy by gaining Quality
                boosts or new Skills to fulfill Goal conditions. Choose the
                Quality or Skill needed, then roll on the Plan Action table
                adding modifiers. Skills and Quality boosts are assigned to a
                Character in the group but last only until the end of the
                Adventure.
            </p>
        ),
    },
    {
        label: 'Prevent (Defeat)',
        content: (
            <p>
                Actively attempt to stop the Enemy completing their objective.
                Tied to the Goal on the Enemy sheet — may not be chosen unless
                stated on the Goal, and may only take place at an Enemy Lair or
                a Location indicated on the Goal. Add modifiers as shown on the
                Goal plus +1 per previous Prevent Action taken in the Adventure.
            </p>
        ),
    },
    {
        label: 'Relax (Discover)',
        content: (
            <p>
                Take in sights, go shopping or kick back and enjoy yourselves.
                May only be chosen at an Adventure with the Holiday keyword and
                before having a Plot event. Add +1 with a native Companion (not
                cumulative with multiple native Companions). If you roll
                doubles, gain an Idea card (R003).
            </p>
        ),
    },
    {
        label: 'Research (Dilemma/Defeat)',
        content: (
            <p>
                Gain information about the Enemy Goal using a specific Skill.
                Choose from Computers, Engineer, History, Medicine or Science —
                limited by the Adventure Era. Add +1 per chosen Skill (max +3).
                You may not Research Computers or History in a Wilderness
                Adventure or Location.
            </p>
        ),
    },
    {
        label: 'Rescue (Captured Characters)',
        content: (
            <p>
                If at least one Character is free, attempt to Rescue captured
                Characters. Rescuers must be at the same Location as the
                captives. Roll 2D6 adding Stealth Skills plus modifiers from
                Gadgets or Locations. If the result equals or exceeds the
                Capture number, all captives are rescued. If you roll 4 or less,
                have an immediate Enemy encounter — in the Discover Phase, the
                rescuers are instead captured too. Always resolve Rescue before
                Escape if both are attempted in the same Turn.
            </p>
        ),
    },
    {
        label: 'Seek Information (Dilemma)',
        content: (
            <p>
                Similar to Investigate but using a specific Skill. Only one
                Skill per group per Turn. Skills available depend on the
                Adventure Era — only Stealth may be used in a Wilderness
                Adventure or Location. Add +1 per chosen Skill (max +3). If you
                roll doubles, the Enemy Action roll this Turn will result in an
                Enemy Encounter.
            </p>
        ),
    },
    {
        label: 'Study (Discover)',
        content: (
            <p>
                Indulge in a period of study at a Museum or place of knowledge.
                Only available before you have Plot events. Add modifiers for
                various Skills depending on Era and Location. If you roll
                doubles, gain 1VP.
            </p>
        ),
    },
]

function ActionsInAdventures() {
    return (
        <>
            <RulePage
                tag="R008"
                title="Actions in Adventures"
                sections={sections}
            >
                <p>
                    Actions are the heart of DWSSG3e. Through Actions you
                    Explore the environment, Investigate the Enemy's plans, Find
                    Help and ultimately Prevent the Enemy reaching their Goal.
                    Different Actions are available at different Phases, and
                    some such as Relax or Research have restrictions in certain
                    Eras or Locations. Captured Characters may only choose
                    Escape. For Actions available in the TARDIS, see T005.
                </p>
                <p>
                    Each Turn, select an Action for each group and roll 2D6 on
                    the corresponding Action table (R014), adding bonuses or
                    modifiers. Escape, Move and Rescue have no table but still
                    require a 2D6 roll. All Actions must be chosen before any
                    are resolved.
                </p>
            </RulePage>
        </>
    )
}

export default ActionsInAdventures
