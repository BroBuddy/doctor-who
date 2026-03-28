import type { Specials } from '@/features/adventure/types/AdventureType'
import React from 'react'

type Props = {
    character: Specials
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    return (
        <div className="text-center w-18 bg-purple p-2 rounded">
            <img
                src={`/images/characters/${character.tag}.jpg`}
                alt={character.name}
                className="rounded w-18"
            />

            <div className="text-center text-white text-bold">
                {character.name}
            </div>

            {character.stats && (
                <div className="flex bg-light-grey p-2 rounded justify-center my-2">
                    <div className="text-sm">
                        <strong>{character.stats.brains} Brains</strong>
                    </div>
                    <div className="text-sm mx-2">
                        <strong>{character.stats.brawn} Brawn</strong>
                    </div>
                    <div className="text-sm">
                        <strong>{character.stats.bravery} Bravery</strong>
                    </div>
                </div>
            )}

            {character.skills && (
                <div className="flex bg-light-grey p-2 rounded justify-center">
                    <span className="text-sm">
                        {character.skills.map((item: string, index: number) => {
                            return (
                                <React.Fragment key={item}>
                                    {index >= 1 ? ', ' : ''}
                                    {item}
                                </React.Fragment>
                            )
                        })}
                    </span>
                </div>
            )}
        </div>
    )
}

export default CharacterCard
