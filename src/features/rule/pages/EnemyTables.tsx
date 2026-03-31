import { Link } from 'react-router-dom'
import RulePage from '../components/RulePage'

const sections = [
    {
        label: 'Chameleon',
        content: (
            <>
                <p>
                    Enemies that are shape-changers either through natural
                    ability or technology.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1–2:</strong> E018
                    </li>
                    <li>
                        <strong>3:</strong> E034
                    </li>
                    <li>
                        <strong>4–5:</strong> E029
                    </li>
                    <li>
                        <strong>6:</strong> E004
                    </li>
                    <li>
                        <strong>7:</strong> E017
                    </li>
                    <li>
                        <strong>8+:</strong> E020
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Criminal',
        content: (
            <>
                <p>
                    Enemies often escaping from justice with goals often
                    motivated by profit or power.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1–2:</strong> E021
                    </li>
                    <li>
                        <strong>3:</strong> E027
                    </li>
                    <li>
                        <strong>4–5:</strong> E014
                    </li>
                    <li>
                        <strong>6:</strong> E009
                    </li>
                    <li>
                        <strong>7:</strong> E029
                    </li>
                    <li>
                        <strong>8+:</strong> E030
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Earth',
        content: (
            <>
                <p>
                    Enemies that are only found on, or have a special affinity
                    for, our planet Earth.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1–2:</strong> E013
                    </li>
                    <li>
                        <strong>3:</strong> E033
                    </li>
                    <li>
                        <strong>4–5:</strong> E022
                    </li>
                    <li>
                        <strong>6:</strong> E006
                    </li>
                    <li>
                        <strong>7:</strong> E023
                    </li>
                    <li>
                        <strong>8+:</strong> E028
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Entity',
        content: (
            <>
                <p>
                    Enemies that are shapeless forms somehow manifesting into
                    physical existence.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1–2:</strong> E019
                    </li>
                    <li>
                        <strong>3:</strong> E025
                    </li>
                    <li>
                        <strong>4:</strong> E003
                    </li>
                    <li>
                        <strong>5:</strong> E035
                    </li>
                    <li>
                        <strong>6:</strong> E031
                    </li>
                    <li>
                        <strong>7+:</strong> E036
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Gothic',
        content: (
            <>
                <p>
                    Enemies could be easily mistaken for supernatural creatures
                    from the realms of horror.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1:</strong> E022
                    </li>
                    <li>
                        <strong>2:</strong> E006
                    </li>
                    <li>
                        <strong>3:</strong> E019
                    </li>
                    <li>
                        <strong>4:</strong> E026
                    </li>
                    <li>
                        <strong>5:</strong> E034
                    </li>
                    <li>
                        <strong>6:</strong> E001
                    </li>
                    <li>
                        <strong>7:</strong> E007
                    </li>
                    <li>
                        <strong>8+:</strong> E020
                    </li>
                </ul>{' '}
            </>
        ),
    },
    {
        label: 'Military',
        content: (
            <>
                <p>
                    Enemies with goals of invasion and conquest most prevalent
                    and include perhaps the most dangerous foes.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1–2:</strong> E018
                    </li>
                    <li>
                        <strong>3:</strong> E023
                    </li>
                    <li>
                        <strong>4–5:</strong> E010
                    </li>
                    <li>
                        <strong>6:</strong> E005
                    </li>
                    <li>
                        <strong>7:</strong> E008
                    </li>
                    <li>
                        <strong>8:</strong> E012
                    </li>
                    <li>
                        <strong>9:</strong> E002
                    </li>
                    <li>
                        <strong>10+:</strong> E028
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Temporal',
        content: (
            <>
                <p>
                    Enemies that have some affinity or connection with time and
                    time travel.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1:</strong> E026
                    </li>
                    <li>
                        <strong>2:</strong> E033
                    </li>
                    <li>
                        <strong>3:</strong> E007
                    </li>
                    <li>
                        <strong>4–5:</strong> E025
                    </li>
                    <li>
                        <strong>6:</strong> E001
                    </li>
                    <li>
                        <strong>7+:</strong> E031
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Time Lord',
        content: (
            <>
                <p>Enemies from the Doctor's home planet of Gallifrey.</p>
                <ul className="mb-3">
                    <li>
                        <strong>1–2:</strong> E011
                    </li>
                    <li>
                        <strong>3–4:</strong> E024
                    </li>
                    <li>
                        <strong>5+:</strong> E032
                    </li>
                </ul>
            </>
        ),
    },
    {
        label: 'Villain',
        content: (
            <>
                <p>
                    A singular Enemy but with a range of different motives and
                    goals.
                </p>
                <ul className="mb-3">
                    <li>
                        <strong>1–2:</strong> E021
                    </li>
                    <li>
                        <strong>3–4:</strong> E027
                    </li>
                    <li>
                        <strong>5–6:</strong> E016
                    </li>
                    <li>
                        <strong>7+:</strong> E015
                    </li>
                </ul>
            </>
        ),
    },
]

function EnemyTables() {
    return (
        <>
            <RulePage tag="R018" title="Enemy Tables" sections={sections}>
                <p>
                    When an Enemy is revealed, find the Enemy keyword on the
                    Adventure sheet and roll 1D6 on the entries below to find
                    the actual Enemy. Less dangerous Enemies appear on low rolls
                    and more deadly foes on higher rolls. The D6 roll is
                    modified by your current VP total, which also affects Danger
                    and Scheme values.
                </p>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <strong>Current VP</strong>
                            </td>
                            <td>
                                <strong>D6 Modifier</strong>
                            </td>
                            <td>
                                <strong>Danger</strong>
                            </td>
                            <td>
                                <strong>Scheme</strong>
                            </td>
                            <td>
                                <strong>Misc</strong>
                            </td>
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
            </RulePage>
        </>
    )
}

export default EnemyTables
