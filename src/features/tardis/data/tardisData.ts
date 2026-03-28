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
                <li><strong>Resources:</strong> You may spend Resources any time the Doctor is inside the TARDIS to gain TARDIS Gadgets (t004).</li>
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
            <p>Before you get to any destination however, roll 2D6 and if the result is 10+, then you first have a Vortex event (t003).</p>
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
        title: ' Actions in the TARDIS',
        description: `
            <p>If the TARDIS has taken Damage, or had any Malfunction (V02) you may try to repair it - either between Adventures (if you do not have a Vortex Event) or during the <strong>Discover</strong> Phase of an Adventure. To repair TARDIS Damage and increase your <strong>Defence</strong> by +1, you must make an Engineer 9 roll. You may not repair the TARDIS to increase <strong>Defence</strong> if it has not taken any Damage however. To repair other malfunctions requires a different Engineer roll as given in the Vortex event.</p>
            <p>During an Adventure, the only other Actions that can take place in the TARDIS is Research (with +1 to the roll and no Era restrictions on Skills) or to use the TARDIS to make a Move Action by making a TARDIS 8 roll. If the roll is failed, roll for a random Location in the Adventure. If the roll was failed by 4 or more however, the TARDIS takes Damage.</p>
        `,
    },
    {
        tag: 'T006',
        title: ' Actions in the TARDIS',
        description: `
            <p>The TARDIS counts as a separate Location in an Adventure. Characters inside the TARDIS cannot be affected by Incidents or Enemy events (although effects on the Adventure still occur) or have an Enemy encounter.</p>
            <p>In an Adventure, you may normally return to the TARDIS if you wish (and automatically return here when Adventure is over). To return to the TARDIS during an Adventure, the Doctor (or a Companion with a TARDIS Key Gadget) must simply return to the TARDIS current Location (usually the Landing Location).</p>
        `,
    },
]
