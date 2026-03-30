import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'
import { Headline } from '@/components/Headline'

const sections = [
    {
        label: 'Qualities',
        content: (
            <p>
                Each Character in the game has a Brains, Brawn and Bravery
                value. These are rated numerically, with higher numbers being
                better and a (human) average of 1, a Quality of 2 is above
                average and Quality of 3 is gifted. The Doctor (of course)
                typically has Brains 5. The dreaded Daleks might have a Brawn of
                8.
            </p>
        ),
    },
    {
        label: 'Skills',
        content: (
            <>
                <p>
                    Characters also have Skills (in italics) which are useful
                    throughout the game. If Characters are especially skilled in
                    areas, they may have 2 or 3 (max allowed) in a Skill, such
                    as Diplomacy 2 or Charm 3. There are 12 different Skills:
                </p>
                <p>
                    <em>
                        Aware; Charm; Computers; Diplomacy; Engineer; History;
                        Medicine; Pilot; Running; Science; Stealth; TARDIS.
                    </em>
                </p>
            </>
        ),
    },
    {
        label: 'Quality and Skill Rolls',
        content: (
            <>
                <p>
                    Making these rolls is a vital part of DWSSG3e and often you
                    have to make a roll based on a Quality or Skill - such as a
                    Brains roll, a Charm roll or a History roll.
                </p>
                <p>
                    Any Quality or Skill roll uses 2D6 to equal or exceed a
                    target number for a success, such as History 9 or Brains 12.
                    Roll 2D6 and either count all the matching Skills that your
                    group has, or total the Quality of the Characters involved.
                    If the total of the roll and Skills/Qualities equals or
                    exceeds the target number given then you have succeeded.
                    Note that sometimes an event will only allow you to add your
                    personal Skills or Qualities as the Doctor.
                </p>
                <p>
                    <em>
                        Example: The Eleventh Doctor and Amy Pond are trying to
                        Evade the Weeping Angels. The target number given on the
                        Enemy Sheet is Running 10. Both the Eleventh Doctor and
                        Amy have Running as Skills, so they add +2 to the 2D6
                        roll, needing an 8 to succeed and escape from the
                        Angels.
                    </em>
                </p>
            </>
        ),
    },
    {
        label: 'Keywords',
        content: (
            <p>
                Some Characters have keyword, such as Leader or UNIT, referenced
                by Adventures, Enemies or on cards. A complete description of
                Skills and Keywords can be found in r013.
            </p>
        ),
    },
    {
        label: 'Abilities',
        content: (
            <p>
                Some Characters, especially TARDIS Characters (r002) or Allies,
                also have certain abilities that might help in your Adventures,
                such as adding +1 to certain Actions or bonuses in certain
                situations. To use the Ability of a TARDIS Character often
                requires spending Luck points.
            </p>
        ),
    },
    {
        label: 'Allies',
        content: (
            <p>
                If a Character joins you as an Ally in an Adventure, note their
                Qualities, Skills and Keywords as needed. Other Characters
                encountered during events need not always be permanently
                recorded. Unless they join you, these other Characters may
                simply go on their way, and "disappear" from the game. All
                Characters are Human unless otherwise noted. If you encounter a
                Character and it is not clear whether they are male or female,
                simply roll 1D6: 1-3: Male; 4-6: Female. Most of the time, the
                gender of a Character has no influence on the game.
            </p>
        ),
    },
    {
        label: 'Luck',
        content: (
            <p>
                Using Luck is very important in Adventures - the Doctor would
                certainly have used up regenerations much quicker without it.
                You start the game with 5 Luck points and these are used when
                you want to re-roll dice after a failed Quality or Skill roll or
                if you want to reroll an Action result. Simply lose 1 Luck point
                and roll the dice again. You may not spend another Luck point if
                you still do not like the result, and cannot revert to the
                original result. Beware using Luck points recklessly as the
                universe can be a dangerous place! Note that you can use Luck
                points even if you (as the Doctor) are not involved in the
                event. Luck points are gained through events, gaining Companions
                and Defeating Enemies.
            </p>
        ),
    },
    {
        label: 'Victory Points',
        content: (
            <p>
                You gain Victory Points (VP) for successfully completing
                Adventures (r006) where you Defeat the Enemy (r007). Each Goal
                on an Enemy Sheet has VP shown next to it. You can also gain
                bonus VP in other ways, such as meeting Historical Icons such as
                William Shakespeare. Gaining VP also can make Adventures more
                difficult and also affect what Enemies you encounter (see r018).
                If you gain 30 VP then you have won the game.
            </p>
        ),
    },
    {
        label: 'Tokens',
        content: (
            <p>
                Both Luck and VP need tokens to help a player keep score of
                current totals on their TARDIS Mat. Other tokens are needed to
                track TARDIS Qualities, plus Turns, Danger and Knowledge totals
                during Adventures (r006). Tokens might also be useful to track
                Locations where Characters are in an Adventure and where the
                TARDIS landed.
            </p>
        ),
    },
    {
        label: 'Cards',
        content: (
            <p>
                The Doctor, Companions and Friends (r002) all have Character
                cards to show their Qualities, Skills and Abilities. Each Gadget
                (r005), including TARDIS Gadgets (t004), also has a card. There
                is also a deck of Idea cards (r003). More cards of all types
                will be released in future expansions.
            </p>
        ),
    },
    {
        label: 'Dice',
        content: (
            <p>
                Rolling dice is normally abbreviated to ‘roll 1D6’ or ‘roll
                2D6’. 1D3 is simply a 1D6 roll and halved (round up).
            </p>
        ),
    },
]

function CharactersAndConcepts() {
    const items = sections.map((section, index) => ({
        id: String(index),
        label: section.label,
        children: section.content,
    }))

    return (
        <>
            <Headline>R001. Characters and Concepts</Headline>

            <Card>
                <p>
                    All Characters in DWSSG3e including the Doctor, Companions,
                    Allies and Enemies are described using 3 Qualities and up to
                    12 different Skills. Special Keywords are used for some
                    Characters or Enemies, and TARDIS Characters (the Doctor and
                    his Companions) also have various Abilities that can help
                    you succeed in Adventures.
                </p>

                <Accordion items={items} />
            </Card>
        </>
    )
}

export default CharactersAndConcepts
