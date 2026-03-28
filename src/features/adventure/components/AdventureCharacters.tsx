import React from 'react'
import type { CharactersTable, RollTable } from '../types/Adventure'
import RollItem from './RollItem'

type Props = {
    characters: CharactersTable
}

const AdventureCharacters: React.FC<Props> = ({ characters }) => {
    if (!characters) {
        return null
    }

    return (
        <>
            <p className="mb-2">
                <strong>Characters</strong> (Roll {characters.dice}):
            </p>
            {characters.table.map((item: RollTable, index: number) => (
                <div key={index} className="mb-2">
                    <RollItem
                        key={index}
                        roll={item.roll}
                        name={item.name}
                        description={item.description}
                    />
                </div>
            ))}
        </>
    )
}

export default AdventureCharacters
