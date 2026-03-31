import RulePage from '../components/RulePage'

const sections = [
    {
        label: 'Skills',
        content: (
            <ul className="mb-3">
                <li>
                    <strong>Aware:</strong> The ability to notice things or be
                    aware of travelling through Space and Time. Used when
                    choosing to Investigate or noticing something hidden. An
                    important Skill for the Doctor and Companions.
                </li>
                <li>
                    <strong>Charm:</strong> Represents appeal, charm and good
                    looks. Possessed by almost all incarnations of the Doctor
                    and most Companions. Very important for talking to
                    Characters and convincing Companions to join you.
                </li>
                <li>
                    <strong>Computers:</strong> The ability to operate, gain
                    information from and sabotage a computer. Can be added when
                    Seeking Information as an Action.
                </li>
                <li>
                    <strong>Diplomacy:</strong> Knowledge of how government
                    works and how to handle sensitive conflicts between
                    different sides. An important leader like Harriet Jones
                    might be Diplomacy 2.
                </li>
                <li>
                    <strong>Engineer:</strong> Covers everything from starting
                    starship engines to taking apart machines to building a
                    device to capture a dinosaur. A very useful Skill usually
                    possessed by the Doctor.
                </li>
                <li>
                    <strong>History:</strong> Covers Earth History, Galactic
                    History and all things ancient. You may be required to make
                    a History roll to determine the meaning of mysterious runes.
                </li>
                <li>
                    <strong>Medicine:</strong> The ability to heal wounds, treat
                    infections and know about all things medical. Characters
                    like Martha Jones or Rory Williams will have Medicine.
                </li>
                <li>
                    <strong>Pilot:</strong> The ability to drive a vehicle well
                    — from land rovers to space shuttles. Does not affect flying
                    the TARDIS. Used to escape a chase or operate a rocket.
                </li>
                <li>
                    <strong>Running:</strong> A hugely useful Skill as
                    Adventures always involve a huge amount of Running. Used to
                    evade Enemies and almost mandatory for the Doctor and
                    Companions.
                </li>
                <li>
                    <strong>Science:</strong> Covers all areas of chemistry,
                    temporal physics and alien biology. Used to help Research
                    Actions and can be added to Prevent Actions to stop various
                    Goals. The Doctor nearly always has Science.
                </li>
                <li>
                    <strong>Stealth:</strong> Used to hide from Enemies in an
                    encounter or sneak into their Lair. Gains a +1 bonus at Dark
                    Locations.
                </li>
                <li>
                    <strong>TARDIS:</strong> The ability to fly the TARDIS
                    through the Time Vortex. Possessed by River Song and most
                    incarnations of the Doctor. Only Time Lords can choose this
                    Skill.
                </li>
            </ul>
        ),
    },
    {
        label: 'Keywords — Characters',
        content: (
            <ul className="mb-3">
                <li>
                    <strong>Creature:</strong> Usually unintelligent denizens of
                    dark caves and impenetrable jungles throughout the universe
                    — from giant rats to Mandrels.
                </li>
                <li>
                    <strong>Icon:</strong> Important historical figures such as
                    Charles Dickens, William Shakespeare or Queen Victoria.
                    Usually grants 1 VP when met. If an Icon Ally is killed,
                    lose Luck equal to the number of Skills they possess. An
                    Icon can never become a Companion.
                </li>
                <li>
                    <strong>Leader:</strong> Signifies rank and command of
                    Characters and Enemies such as the Supreme Dalek or an Ice
                    Lord. Leaders usually have higher Qualities and may have
                    special rules as indicated on Enemy sheets. A Leader is
                    sometimes, but not always, Unique.
                </li>
                <li>
                    <strong>Machine:</strong> A keyword for certain Characters
                    such as K9 or Enemies such as Cybermen. A Machine Character
                    is sometimes not affected by certain Conflicts such as Mind
                    Control.
                </li>
                <li>
                    <strong>Minion:</strong> A servant of the Enemy, which might
                    not be the same species — such as Robomen or the Ogrons used
                    by the Daleks. A Minion is usually subservient but can
                    rebel.
                </li>
                <li>
                    <strong>Troop:</strong> Standard Enemy soldiers, guards or
                    aliens such as the average Dalek or Cyberman.
                </li>
                <li>
                    <strong>UNIT:</strong> The top secret organisation that
                    fights alien invasions, currently led by Kate Stewart. Both
                    Kate and Osgood are Friend cards with the UNIT keyword.
                </li>
            </ul>
        ),
    },
    {
        label: 'Keywords — Adventures',
        content: (
            <ul className="mb-3">
                <li>
                    <strong>Cold:</strong> Freezing arctic conditions — such as
                    the ice caves of Svartos. Ice Warriors gain a bonus at Cold
                    Locations or Adventures.
                </li>
                <li>
                    <strong>Dark:</strong> Locations such as caves or spooky
                    cellars. Add +1 to Stealth rolls but -1 to Move rolls. Some
                    Enemies such as Weeping Angels gain a bonus in Dark places.
                </li>
                <li>
                    <strong>Exterior:</strong> Any Location that is not
                    enclosed, such as the surface of a planet. Open to the
                    elements and becomes Dark when it is Night. A non-Exterior
                    Location is by default an Interior Location.
                </li>
                <li>
                    <strong>Holiday:</strong> A place where you can Relax as an
                    Action — such as Argolis, the Midnight Resort or the
                    romantic city of Venice.
                </li>
                <li>
                    <strong>Museum:</strong> A place to Study as an Action, such
                    as the Library Planet or the Delirium Archive. May also have
                    special rules for Plot events.
                </li>
                <li>
                    <strong>Night:</strong> When Night falls, all Exterior
                    Locations gain the Dark keyword. Human Characters must rest
                    for 1 Turn or suffer penalties to Qualities (R006). Other
                    modifiers apply as detailed on Adventures and Enemies.
                </li>
                <li>
                    <strong>Water:</strong> Adventures or Locations at coastal
                    locations or near large bodies of water. Some Enemies such
                    as Sea Devils gain a bonus at Water Locations.
                </li>
                <li>
                    <strong>Wilderness:</strong> Planets and Locations with very
                    little sign of civilisation — such as the jungle planet of
                    Eden or the frozen Ood Sphere. You may not Find Help, and
                    Research and Seek Information Actions have restricted
                    Skills.
                </li>
            </ul>
        ),
    },
    {
        label: 'Keywords — Enemy',
        content: (
            <ul className="mb-3">
                <li>
                    <strong>Chameleon:</strong> Shape-changers with a natural
                    ability (such as Zygons) or technology (such as Autons) to
                    disguise their true appearance and infiltrate humans.
                </li>
                <li>
                    <strong>Criminal:</strong> Enemies escaping from justice
                    whose Goals are often motivated by profit or power — such as
                    Cessair of Diplos or the Slitheen. May have Troops or
                    Minions.
                </li>
                <li>
                    <strong>Earth:</strong> Enemies such as Silurians or Sea
                    Devils with an affinity for planet Earth, sometimes only
                    encountered there.
                </li>
                <li>
                    <strong>Entity:</strong> Shapeless forms that manifest
                    physical existence through servants — such as the Great
                    Intelligence or Celestial Toymaker.
                </li>
                <li>
                    <strong>Gothic:</strong> Enemies easily mistaken for
                    supernatural creatures from horror — such as Weeping Angels
                    and Carrionites.
                </li>
                <li>
                    <strong>Military:</strong> Enemies like the Sontarans or
                    Daleks with invasion and conquest most prevalent in their
                    Goals. Military foes often have Troops.
                </li>
                <li>
                    <strong>Temporal:</strong> Enemies with an affinity or
                    connection with time and time travel — such as the Fendahl,
                    Chronovores and Reapers.
                </li>
                <li>
                    <strong>Time Lord:</strong> A rogue from Gallifrey such as
                    the Master or the Rani. A Time Lord Enemy can be very
                    dangerous with the most difficult Goals to overcome.
                </li>
                <li>
                    <strong>Villain:</strong> A singular Enemy such as Sharaz
                    Jek, Cassandra or the Graske, as opposed to a specific race.
                    Villains often gain aid from Minions.
                </li>
            </ul>
        ),
    },
]

function SkillAndKeywordDescriptions() {
    return (
        <>
            <RulePage
                tag="R013"
                title="Skill and Keyword Descriptions"
                sections={sections}
            >
                <p>
                    A TARDIS Character is either the Doctor or any brave
                    Companion who travels through Time and Space in the TARDIS.
                    Friends are semi-regular Characters that the Doctor
                    encounters but who are not quite Companions, such as River
                    Song.
                </p>
            </RulePage>
        </>
    )
}

export default SkillAndKeywordDescriptions
