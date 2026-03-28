import React from 'react'
import type { Characters, RollTable } from '../types/AdventureType'
import RollItem from './RollItem'

type Props = {
    characters: Characters[]
}

const AdventureCharacters: React.FC<Props> = ({ characters }) => {
    if (!characters) {
        return null
    }

    return (
        <>
            <p className="mb-2">
                <strong>Characters</strong> (Roll 2D6):
            </p>
            {characters.map((item: Characters, index: number) => (
                <div key={index} className="mb-2">
                    <RollItem key={index} roll={item.roll} name={item.name}>
                        <p>{item.description}</p>
                        <ul>
                            {item.charmRoll &&
                                item.charmRoll.map(
                                    (roll: RollTable, index: number) => {
                                        return (
                                            <li key={index}>
                                                <strong className="mr-1">
                                                    {roll.roll}:
                                                </strong>
                                                <span>{roll.description}</span>
                                            </li>
                                        )
                                    }
                                )}
                        </ul>
                    </RollItem>
                </div>
            ))}
        </>
    )
}

export default AdventureCharacters
